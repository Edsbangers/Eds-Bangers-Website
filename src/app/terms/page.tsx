import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Terms & Conditions | Ed's Bangers®",
  description: "Terms and conditions for purchasing from Ed's Bangers® and using our website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      <BreadcrumbJsonLd crumbs={[{ name: 'Terms & Conditions', path: '/terms' }]} />
      <div className="max-w-3xl mx-auto px-4">
        <h1
          className="text-4xl font-bold text-eds-charcoal mb-2"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-500 mb-10">Last updated: March 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">1. About Us</h2>
            <p>
              Ed&apos;s Bangers® is operated by Jason Misters, based in Hampshire, UK.
              Registered food business with Portsmouth City Council (5-Star Food Hygiene Rating, September 2024).
              Email: <a href="mailto:edsbangers@gmail.com" className="text-eds-red hover:underline">edsbangers@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">2. Orders</h2>
            <p className="mb-3">
              When you place an order via our website, you will receive a confirmation email. Your order is not confirmed until we have verified availability and contacted you to arrange payment.
            </p>
            <p>
              We reserve the right to decline an order if a product is unavailable or if there is an error in pricing. In such cases, we will notify you promptly and provide a full refund if payment has been taken.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">3. Prices</h2>
            <p>
              All prices are in pounds sterling (GBP) and are inclusive of VAT where applicable. Delivery charges are separate and will be confirmed at the time of order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">4. Delivery</h2>
            <p className="mb-3">
              We deliver within the UK only. Delivery times are estimated and not guaranteed. We use Royal Mail or a similar courier service. Risk of loss passes to you when the goods are delivered to the address you specified.
            </p>
            <p>
              Perishable goods (where applicable) are dispatched with appropriate packaging. Please ensure someone is available to receive delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">5. Returns & Refunds</h2>
            <p className="mb-3">
              Due to the perishable nature of our food products, we are unable to accept returns. If your order arrives damaged or incorrect, please contact us within 24 hours of receipt with photographic evidence and we will arrange a replacement or refund at our discretion.
            </p>
            <p>
              Your statutory rights under the Consumer Rights Act 2015 are not affected by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">6. Allergen Information</h2>
            <p>
              Allergen information for all products is displayed on the product listings. Our products are produced in a kitchen that handles a variety of allergens. If you have a severe food allergy, please contact us before ordering. Ed&apos;s Bangers cannot accept liability for allergic reactions where allergen information has been provided and disregarded.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">7. Event & Wedding Catering</h2>
            <p className="mb-3">
              Bookings for events and weddings are subject to a separate written agreement. Enquiries submitted via the website are not confirmed bookings until a signed agreement and deposit have been received.
            </p>
            <p>
              Cancellation terms are set out in the individual booking agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">8. Intellectual Property</h2>
            <p>
              Ed&apos;s Bangers® is a registered trademark. All content on this website, including text, images, and the logo, is the property of Ed&apos;s Bangers and may not be reproduced without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">9. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, Ed&apos;s Bangers shall not be liable for any indirect or consequential loss arising from the use of this website or the purchase of our products. Our liability in any event is limited to the value of the goods or services purchased.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">11. Contact</h2>
            <p>
              For any questions about these terms, please contact us at <a href="mailto:edsbangers@gmail.com" className="text-eds-red hover:underline">edsbangers@gmail.com</a>.
            </p>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-eds-red font-bold hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
