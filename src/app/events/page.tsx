'use client';

import { useState } from 'react';
import Link from 'next/link';
import { events, Event } from '@/lib/data';

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'festival' | 'market' | 'private'>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.type === filter);

  const upcomingEvents = filteredEvents.filter(e => new Date(e.date) >= new Date());
  const pastEvents = filteredEvents.filter(e => new Date(e.date) < new Date());

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case 'festival':
        return 'bg-eds-red text-white';
      case 'market':
        return 'bg-eds-gold text-black';
      case 'private':
        return 'bg-eds-charcoal text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: 'var(--font-display), cursive' }}
        >
          📅 Events Calendar
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          Find out where we&apos;re serving up our award-winning bangers next. Come say hello and taste what all the fuss is about!
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { value: 'all', label: 'All Events' },
            { value: 'festival', label: '🎪 Festivals' },
            { value: 'market', label: '🛒 Markets' },
            { value: 'private', label: '🎉 Private Events' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as typeof filter)}
              className={`px-5 py-2 rounded-full font-bold transition-all ${
                filter === option.value
                  ? 'bg-eds-red text-white shadow-lg'
                  : 'bg-white text-eds-charcoal hover:bg-eds-red/10'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2
          className="text-2xl font-bold text-eds-charcoal mb-6"
          style={{ fontFamily: 'var(--font-display), cursive' }}
        >
          🔜 Upcoming Events
        </h2>

        {upcomingEvents.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">🗓️</div>
            <h3 className="text-xl font-bold text-eds-charcoal mb-2">
              No upcoming events scheduled
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re planning our next appearances. Check back soon or follow us on social media for updates!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/edsbangers"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-eds-charcoal text-white font-bold rounded-full hover:bg-eds-charcoal-dark transition-all"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} formatDate={formatDate} getEventTypeStyle={getEventTypeStyle} />
            ))}
          </div>
        )}
      </section>

      {/* Book Us Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-eds-red to-eds-red-dark rounded-3xl p-8 md:p-12 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display), cursive' }}
          >
            📍 Want Us at Your Event?
          </h2>
          <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
            We&apos;re available for festivals, markets, corporate events, and private parties. 
            Bring award-winning flavour to your gathering!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/weddings"
              className="px-8 py-4 bg-white text-eds-red font-bold rounded-full hover:bg-eds-cream transition-all"
            >
              Wedding Catering →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-eds-red transition-all"
            >
              General Enquiries →
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-eds-charcoal mb-6"
            style={{ fontFamily: 'var(--font-display), cursive' }}
          >
            📸 Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl p-4 shadow-lg opacity-75"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${getEventTypeStyle(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
                </div>
                <h3 className="font-bold text-eds-charcoal">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.location}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

function EventCard({ 
  event, 
  formatDate, 
  getEventTypeStyle 
}: { 
  event: Event; 
  formatDate: (date: string) => string;
  getEventTypeStyle: (type: string) => string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
      {/* Event Header */}
      <div className="bg-eds-charcoal p-6 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getEventTypeStyle(event.type)}`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
            {event.featured && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-eds-gold text-black">
                ⭐ Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
          <p className="text-white/80">{event.location}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">📅</span>
            <div>
              <p className="font-bold text-eds-charcoal">{formatDate(event.date)}</p>
              {event.endDate && event.endDate !== event.date && (
                <p className="text-sm text-gray-600">to {formatDate(event.endDate)}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">⏰</span>
            <p className="text-gray-600">{event.time}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <p className="text-gray-600 text-sm">{event.address}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{event.description}</p>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-eds-red font-bold hover:underline"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}
