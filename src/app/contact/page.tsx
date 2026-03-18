'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...formData }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try emailing us directly at edsbangers@gmail.com');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          📧 Get in Touch
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          Got a question? Want to stock our products? Planning an event? We&apos;d love to hear from you!
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-lg text-eds-charcoal mb-2">Email Us</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-eds-red hover:underline"
              >
                {siteConfig.email}
              </a>
              <p className="text-gray-500 text-sm mt-2">
                We aim to reply within 24 hours
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-lg text-eds-charcoal mb-2">Call Us</h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="text-eds-red hover:underline font-semibold"
              >
                {siteConfig.phone}
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Mon–Sat, 9am–6pm
              </p>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg text-eds-charcoal mb-3">Follow Us</h3>
              <div className="space-y-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-eds-red transition-colors"
                >
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-eds-red transition-colors"
                >
                  <span>👍</span>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-lg text-eds-charcoal mb-2">Location</h3>
              <p className="text-gray-600">{siteConfig.location}</p>
              <p className="text-gray-500 text-sm mt-2">
                Available for events across Hampshire and beyond
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-eds-charcoal rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/weddings" className="flex items-center gap-2 hover:text-eds-gold transition-colors">
                  <span>💒</span>
                  <span>Wedding Enquiries</span>
                </Link>
                <Link href="/shop" className="flex items-center gap-2 hover:text-eds-gold transition-colors">
                  <span>🛒</span>
                  <span>Shop Products</span>
                </Link>
                <Link href="/events" className="flex items-center gap-2 hover:text-eds-gold transition-colors">
                  <span>📅</span>
                  <span>Find Us at Events</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-eds-charcoal mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thanks for getting in touch. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'general', message: '' });
                    }}
                    className="text-eds-red font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-eds-charcoal mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-eds-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-2">
                      What&apos;s this about? *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="wholesale">Wholesale / Stockist Enquiry</option>
                      <option value="events">Event / Festival Booking</option>
                      <option value="wedding">Wedding Catering</option>
                      <option value="press">Press / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-eds-charcoal mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  {error && (
                    <p className="text-center text-sm text-eds-red font-semibold">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : 'Send Message →'}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    We respect your privacy and won&apos;t share your details with anyone.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 mt-16">
        <h2
          className="text-2xl font-bold text-eds-charcoal text-center mb-8"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: 'When will the sauces be available to buy?',
              a: 'We\'re working on it! After an 18-month gap while we relocated and rebuilt our production setup, we\'re targeting late summer 2026 to have our award-winning sauces back on sale. We\'ll be starting small — short runs, high quality — exactly as before. Follow us on Instagram and Facebook to be first to know when we\'re ready to take orders.'
            },
            {
              q: 'Where have the bangers gone?',
              a: 'We hear you — and we miss them too! The bangers are coming back, but sauces will come first as we get the shed production up and running again. Once sauces are flowing, we\'ll be bringing the bangers back in small batches for our original loyal fans. Bear with us — it\'ll be worth the wait.'
            },
            {
              q: 'Can I still book Ed\'s Bangers for an event or wedding?',
              a: 'Absolutely — event and wedding catering is very much open! Get in touch via the form above or head to our Weddings & Events page to send an enquiry. We cater across Hampshire and beyond.'
            },
            {
              q: 'How far in advance should I book for an event?',
              a: 'We recommend booking at least 4–6 weeks in advance for weddings, and 2–3 weeks for smaller events. Popular dates book up quickly!'
            },
            {
              q: 'Are your products suitable for vegetarians?',
              a: 'While our sausages contain meat, some of our sauces are vegetarian-friendly. Check individual product descriptions or drop us a message for details.'
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-eds-charcoal mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
