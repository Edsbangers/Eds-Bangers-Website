import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy | Ed's Bangers®",
  description: "Ed's Bangers privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1
          className="text-4xl font-bold text-eds-charcoal mb-2"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-10">Last updated: March 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">1. Who We Are</h2>
            <p>
              Ed&apos;s Bangers® is operated by Jason Misters, based in Hampshire, UK.
              We are a registered food business with Portsmouth City Council.
              Contact us at: <a href="mailto:edsbangers@gmail.com" className="text-eds-red hover:underline">edsbangers@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect personal information when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit a contact form (name, email address, message)</li>
              <li>Submit a wedding or event enquiry (name, email, phone, event details)</li>
              <li>Place an order via the website (name, email, phone, delivery address)</li>
              <li>Sign up to our newsletter (email address)</li>
            </ul>
            <p className="mt-3">
              We also collect anonymised usage data via Vercel Analytics to understand how visitors use our website. This data cannot be used to identify individuals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your enquiries and messages</li>
              <li>Process and fulfil your orders</li>
              <li>Send you information about products and events (only if you have opted in)</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">4. Legal Basis for Processing</h2>
            <p>
              We process your data on the basis of <strong>legitimate interests</strong> (responding to enquiries), <strong>contract performance</strong> (fulfilling orders), and <strong>consent</strong> (newsletter sign-ups). You may withdraw consent at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">5. Data Retention</h2>
            <p>
              We retain enquiry and order data for up to 7 years for accounting and legal purposes. Newsletter subscriber data is retained until you unsubscribe. You can request deletion of your data at any time by emailing us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">6. Your Rights</h2>
            <p className="mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email <a href="mailto:edsbangers@gmail.com" className="text-eds-red hover:underline">edsbangers@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">7. Cookies</h2>
            <p>
              Our website uses only essential functional cookies (e.g. to remember your shopping cart). We do not use advertising or tracking cookies. Vercel Analytics uses privacy-preserving, cookieless analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-eds-charcoal mb-3">8. Contact & Complaints</h2>
            <p>
              If you have any concerns about how we handle your data, please contact us at <a href="mailto:edsbangers@gmail.com" className="text-eds-red hover:underline">edsbangers@gmail.com</a>. You also have the right to lodge a complaint with the ICO (Information Commissioner&apos;s Office) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-eds-red hover:underline">ico.org.uk</a>.
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
