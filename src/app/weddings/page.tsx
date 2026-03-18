'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WeddingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'wedding',
    guestCount: '',
    venue: '',
    package: '',
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
        body: JSON.stringify({ type: 'wedding', ...formData }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us directly at edsbangers@gmail.com');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-eds-red to-eds-red-dark rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`,
            }}
          />
          <div className="relative z-10">
            <div className="text-6xl mb-6">💒</div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Fredoka One", cursive' }}
            >
              Weddings & Events
            </h1>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              Bring award-winning street food to your special day. Our gourmet bangers and sauces will have your guests talking for years!
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Photo */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/wedding-catering.jpg"
            alt="Ed's Bangers catering at a wedding — happy couple with our stall"
            width={1200}
            height={700}
            className="w-full object-cover max-h-96"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2
          className="text-3xl font-bold text-eds-charcoal text-center mb-8"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          Why Choose Ed&apos;s Bangers?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '🏆', title: 'Award-Winning', desc: 'UK Sausage Week finalists & Great Taste Producer' },
            { icon: '🔥', title: 'Cooked Fresh', desc: 'Everything prepared and grilled on-site' },
            { icon: '👨‍🍳', title: 'Professional Team', desc: 'Experienced street food caterers' },
            { icon: '❤️', title: 'Personal Touch', desc: 'We work with you to create your perfect menu' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg text-eds-charcoal mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <div className="text-5xl mb-4">💒</div>
          <h2
            className="text-3xl font-bold text-eds-charcoal mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            Enquire for a Quote for Your Special Day
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-4">
            Every event is different — tell us about your day and we&apos;ll put together something perfect just for you.
          </p>
          <p className="text-gray-500 mb-8">
            Weddings, corporate events, birthday parties, festivals — we cater for all occasions across Hampshire and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
            {[
              '🌭 Fresh-grilled award-winning bangers',
              '🔥 Great Taste award-winning sauces',
              '👨‍🍳 Professional on-site catering',
              '❤️ Bespoke menus available',
              '🌿 Vegetarian options',
              '🤝 Flexible for any size event',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h2
            className="text-3xl font-bold text-eds-charcoal text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            📝 Get a Quote
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Tell us about your event and we&apos;ll get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-eds-charcoal mb-2">Thanks for your enquiry!</h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your booking request and will be in touch within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-eds-red font-bold hover:underline"
              >
                Submit another enquiry
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-eds-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                    placeholder="07123 456789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-eds-charcoal mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-eds-charcoal mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="festival">Festival / Market</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-eds-charcoal mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    required
                    min="30"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-eds-charcoal mb-2">
                  Venue / Location
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                  placeholder="The Grand Hotel, Winchester"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-eds-charcoal mb-2">
                  Interested Package
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all"
                >
                  <option value="">Not sure yet</option>
                  <option value="evening-bangers">Evening Bangers</option>
                  <option value="full-catering">Full Event Catering</option>
                  <option value="bespoke">Bespoke Package</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-eds-charcoal mb-2">
                  Tell us more about your event
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eds-red outline-none transition-all resize-none"
                  placeholder="Any dietary requirements, special requests, or questions..."
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
                {submitting ? 'Sending...' : 'Send Enquiry →'}
              </button>

              <p className="text-center text-sm text-gray-500">
                We&apos;ll get back to you within 24 hours. No spam, promise! 🌭
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
