'use client';

import { useState } from 'react';
import { weddingPackages } from '@/lib/data';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your email/CRM
    console.log('Booking enquiry:', formData);
    setSubmitted(true);
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

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2
          className="text-3xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          📦 Our Packages
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Choose from our popular packages or let us create something bespoke for your event.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weddingPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                index === 1 ? 'md:-translate-y-4 border-2 border-eds-red' : ''
              }`}
            >
              {index === 1 && (
                <div className="bg-eds-red text-white text-center py-2 font-bold text-sm">
                  ⭐ Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-eds-charcoal mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                <div className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-eds-red mt-0.5">✓</span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-1">Min. {pkg.minGuests} guests</p>
                  <p className="text-xl font-bold text-eds-red">{pkg.priceFrom}</p>
                </div>
              </div>
            </div>
          ))}
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
                  {weddingPackages.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                  ))}
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

              <button
                type="submit"
                className="w-full py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all text-lg"
              >
                Send Enquiry →
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
