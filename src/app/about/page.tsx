import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { aboutEd, awards } from '@/lib/data';

export const metadata: Metadata = {
  title: "About Ed's Bangers® | The Story Behind the Sausages",
  description: "From the British Army to the Sausage Shed — the story of Jason Misters and Ed's Bangers. Great Taste Producer, UK Sausage Week finalist, and multiple award winner.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-eds-red text-white font-bold text-sm rounded-full mb-6">
          ⭐ Great Taste Producer
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold text-eds-charcoal mb-6"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          {aboutEd.headline}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The story of Jason Misters — soldier, sausage maker, award winner.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-6">
            {aboutEd.story.map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jason-chef.jpg"
                alt="Jason Misters — Head Chef, Ed's Bangers"
                width={400}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jason-marathon.jpg"
                alt="Jason running Portsmouth Half Marathon in a sausage costume"
                width={400}
                height={400}
                className="w-full object-cover"
              />
              <p className="text-center text-xs text-gray-500 py-2 bg-white">Jason at the Portsmouth Half Marathon — all in for sausages 🌭</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-eds-charcoal py-16 md:py-20 px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            Our Credentials
          </h2>
          <p className="text-center text-gray-400 mb-12">
            What makes Ed&apos;s Bangers different
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutEd.credentials.map((credential, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-eds-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold leading-snug">{credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          🏆 Awards Timeline
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A track record of recognised excellence since 2019
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-eds-red/20 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-eds-red md:border-l-0 md:border-r-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{award.icon}</span>
                      <span className="text-sm font-bold text-eds-red bg-eds-red/10 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-eds-charcoal">{award.product}</h3>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold text-eds-red">{award.award}</span> — {award.event}
                    </p>
                  </div>
                </div>

                {/* Centre dot (desktop only) */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-eds-red border-4 border-eds-cream z-10 flex-shrink-0" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Awards Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          📰 Press & Recognition
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Ed&apos;s Bangers in the news and in the trophy cabinet
        </p>

        {/* Certificate photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/hampshire-sp-2022-certs.jpg"
              alt="Hampshire Sausage & Pie Competition 2022 — Gold, Silver and Bronze certificates for Ed's Bangers"
              width={600}
              height={450}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="font-bold text-eds-charcoal">Hampshire Sausage & Pie Competition 2022</p>
              <p className="text-sm text-gray-600">Gold (BaNaga Banger) · Silver (Plain Banger) · Bronze (Chickabrie Banger)</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/fmt-2021-certificate.jpg"
              alt="Food Management Today Industry Awards 2021 — Highly Commended, Tashio Banger, Best Red Meat Product"
              width={600}
              height={450}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="font-bold text-eds-charcoal">Food Management Today Industry Awards 2021</p>
              <p className="text-sm text-gray-600">Highly Commended — Best Red Meat Product (Tashio Banger)</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/portsmouth-news.jpg"
              alt="The Portsmouth News — Meet the sausage-making soldier with his new Portsmouth stall"
              width={600}
              height={450}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="font-bold text-eds-charcoal">The Portsmouth News</p>
              <p className="text-sm text-gray-600">&ldquo;Meet the sausage-making soldier with his new Portsmouth stall&rdquo;</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/jd-sauce-bottles.jpg"
              alt="JD Sauce — Great Taste Award winner"
              width={600}
              height={450}
              className="w-full object-cover"
            />
            <div className="p-4">
              <p className="font-bold text-eds-charcoal">Great Taste Awards — JD Sauce</p>
              <p className="text-sm text-gray-600">1-Star Great Taste Award winner · Great British Food Awards National Finalist 2022</p>
            </div>
          </div>
        </div>

        {/* Press mentions strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'The Portsmouth News', detail: 'Feature: "The sausage-making soldier"', icon: '📰' },
            { title: 'Strong Island Magazine', detail: 'Victorious Festival VIP review', icon: '🎪' },
            { title: 'Food Management Today', detail: 'Industry Awards 2021 Highly Commended', icon: '🏅' },
            { title: 'Guild of Fine Food', detail: 'Official Great Taste Producer Directory', icon: '⭐' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 shadow-lg text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-bold text-eds-charcoal text-sm mb-1">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-eds-red rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            Taste the Story
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Order our award-winning sauces, book us for your event, or just come and say hello.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="px-8 py-4 bg-white text-eds-red font-bold rounded-full hover:bg-eds-cream transition-all hover:-translate-y-1 shadow-lg"
            >
              Shop Now →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-eds-red transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
