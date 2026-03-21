import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'edsbangers@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@edsbangers.com';

// Rate limiter: 5 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
    return false;
  }
  entry.count++;
  return entry.count > 5;
}

// Sanitise HTML to prevent XSS
function sanitise(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const { type, ...data } = body;

    if (!type) {
      return NextResponse.json({ error: 'Missing email type' }, { status: 400 });
    }

    // Email validation
    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
      }
    }

    let subject = '';
    let html = '';

    if (type === 'contact') {
      const { name, email, subject: msgSubject, message } = data;
      if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      subject = `Contact Form: ${sanitise(msgSubject || 'General Enquiry')} — from ${sanitise(name)}`;
      html = `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${sanitise(name)} &lt;${sanitise(email)}&gt;</p>
        <p><strong>Subject:</strong> ${sanitise(msgSubject)}</p>
        <hr />
        <p>${sanitise(message).replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="color:#888;font-size:12px;">Sent from edsbangers.com contact form</p>
      `;
    } else if (type === 'wedding') {
      const { name, email, phone, eventDate, eventType, guestCount, venue, package: pkg, message } = data;
      if (!name || !email || !eventDate || !guestCount) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      subject = `Wedding/Event Enquiry — ${name} — ${eventDate}`;
      html = `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Guest Count:</strong> ${guestCount}</p>
        <p><strong>Venue:</strong> ${venue || 'Not provided'}</p>
        <p><strong>Package Interest:</strong> ${pkg || 'Not sure yet'}</p>
        <hr />
        <p><strong>Message:</strong><br>${(message || 'None').replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="color:#888;font-size:12px;">Sent from edsbangers.com wedding enquiry form</p>
      `;
    } else if (type === 'order') {
      const { name, email, phone, address, city, postcode, cart, total, notes } = data;
      if (!name || !email || !address || !postcode || !cart?.length) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      const cartLines = cart.map((item: { name: string; size?: string; quantity: number; price: number }) =>
        `<tr>
          <td style="padding:4px 8px">${item.name}${item.size ? ` (${item.size})` : ''}</td>
          <td style="padding:4px 8px;text-align:center">${item.quantity}</td>
          <td style="padding:4px 8px;text-align:right">£${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`
      ).join('');
      subject = `New Order — ${name} — £${total}`;
      html = `
        <h2>New Order Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Delivery Address:</strong><br>${address}<br>${city || ''} ${postcode}</p>
        <hr />
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:#f5f5f5">
              <th style="padding:4px 8px;text-align:left">Item</th>
              <th style="padding:4px 8px;text-align:center">Qty</th>
              <th style="padding:4px 8px;text-align:right">Price</th>
            </tr>
          </thead>
          <tbody>${cartLines}</tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding:8px;text-align:right"><strong>Total:</strong></td>
              <td style="padding:8px;text-align:right"><strong>£${total}</strong></td>
            </tr>
          </tfoot>
        </table>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        <hr />
        <p style="color:#888;font-size:12px;">Order placed via edsbangers.com</p>
      `;
    } else {
      return NextResponse.json({ error: 'Unknown email type' }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: data.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
