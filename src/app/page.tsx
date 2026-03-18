import Link from 'next/link';
import Image from 'next/image';
import { awards, bangers, sauces, greatTasteYears, testimonials, pressFeatures } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden bg-eds-cream">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, rgba(196, 30, 58, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, rgba(139, 90, 43, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse at 20% 60%, rgba(196, 30, 58, 0.05) 0%, transparent 40%)
            `,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 animate-fade-in-up">
            <Image
              src="/images/logo.png"
              alt="Ed's Bangers"
              width={250}
              height={250}
              className="mx-auto"
              priority
            />
          </div>

          <p
            className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Award-winning artisan sausages & sauces, handcrafted in Hampshire
          </p>

          {/* Award Badges */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full font-bold text-sm shadow-lg">
              <span>🏆</span>
              <span>UK Sausage Week Finalist</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-eds-red text-white rounded-full font-bold text-sm shadow-lg">
              <span>®</span>
              <span>Registered Trademark</span>
            </div>
          </div>

          {/* Award Logos Row */}
          <div
            className="flex flex-wrap justify-center items-center gap-4 mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
          >
            <Image
              src="/images/gbfa-finalist-2022.jpg"
              alt="Great British Food Awards 2022 Finalist"
              width={100}
              height={118}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/uksw-runner-up.jpg"
              alt="UK Sausage Week Runner Up 2019"
              width={110}
              height={98}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/uksw-highly-commended.jpg"
              alt="UK Sausage Week Highly Commended 2019"
              width={100}
              height={84}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <Link
              href="/shop"
              className="px-8 py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all hover:-translate-y-1 shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/weddings"
              className="px-8 py-4 bg-white text-eds-charcoal font-bold rounded-full border-2 border-eds-charcoal hover:bg-eds-charcoal hover:text-white transition-all"
            >
              Book for Events
            </Link>
          </div>
        </div>

      </section>

      {/* Great Taste Producer Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-charcoal-dark relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="mx-auto mb-8 w-fit">
            <Image
              src="/images/great-taste-producer.png"
              alt="Great Taste Producer"
              width={144}
              height={144}
              className="rounded-full shadow-2xl"
            />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-eds-gold mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            Official Great Taste Producer
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Awarded to producers who achieve at least 3 Great Taste stars within 5 years.
            A mark of <strong className="text-eds-gold">consistent excellence</strong> and dedication to quality.
          </p>

          {/* Year Timeline */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {greatTasteYears.map((item, index) => (
              <div key={item.year} className="flex items-center">
                <div className="flex flex-col items-center p-4 bg-eds-gold/10 border border-eds-gold/30 rounded-xl">
                  <span className="text-2xl mb-1">⭐</span>
                  <span className="text-white font-bold">{item.year}</span>
                  <span className="text-eds-gold text-sm">1 Star</span>
                </div>
                {index < greatTasteYears.length - 1 && (
                  <div className="w-4 md:w-8 h-0.5 bg-gradient-to-r from-eds-gold to-eds-gold/30 mx-1 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-red relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.03) 20px, rgba(0,0,0,0.03) 40px)`,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive', textShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}
          >
            🏆 Award Cabinet
          </h2>
          <p className="text-center text-white/90 text-lg mb-12">
            Proudly collected since 2019
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.slice(0, 6).map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-xl hover:-translate-y-1 hover:rotate-1 transition-all cursor-default"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold text-eds-red bg-eds-red/10 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                  <span className="text-2xl">{award.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-eds-charcoal mb-2">
                  {award.product}
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold text-eds-red">{award.award}</span>
                  <br />
                  {award.event}
                </p>
              </div>
            ))}
          </div>

          {/* Award Logos in cabinet */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center gap-2">
              <Image src="/images/great-taste-producer.png" alt="Great Taste Producer" width={90} height={90} className="rounded-full" />
              <p className="text-xs font-bold text-eds-charcoal text-center">Great Taste Producer</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center gap-2">
              <Image src="/images/gbfa-finalist-2022.jpg" alt="Great British Food Awards 2022 Finalist" width={90} height={106} className="rounded-lg" />
              <p className="text-xs font-bold text-eds-charcoal text-center">JD Sauce</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center gap-2">
              <Image src="/images/uksw-runner-up.jpg" alt="UK Sausage Week Runner Up 2019" width={110} height={98} className="rounded-lg" />
              <p className="text-xs font-bold text-eds-charcoal text-center">JD Banger</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center gap-2">
              <Image src="/images/uksw-highly-commended.jpg" alt="UK Sausage Week Highly Commended 2019" width={100} height={84} className="rounded-lg" />
              <p className="text-xs font-bold text-eds-charcoal text-center">Shroom Banger</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center gap-2">
              <Image src="/images/fmt-award-2021.jpg" alt="Food Management Today Industry Awards 2021 Highly Commended" width={80} height={107} className="rounded-lg" />
              <p className="text-xs font-bold text-eds-charcoal text-center">Tashio Banger</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-white/15 rounded-xl text-center text-white">
            <p className="text-lg">
              Plus heaps of <strong>Gold, Silver & Bronze</strong> medals at the Hampshire Sausage & Pie Awards 2019–2023! 🥇🥈🥉
            </p>
          </div>
        </div>
      </section>

      {/* Bangers Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-cream">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-eds-charcoal text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            🌭 The Bangers
          </h2>
          <p className="text-center text-gray-600 text-lg mb-8">
            Award-winning sausages, made with love
          </p>

          {/* Food hero image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/raw-sausages.jpg"
              alt="Ed's Bangers — award-winning artisan sausages freshly made"
              width={900}
              height={600}
              className="w-full object-cover max-h-72"
            />
          </div>

          <div className="space-y-6">
            {bangers.map((banger) => (
              <div
                key={banger.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-eds-brown flex flex-col md:flex-row items-start md:items-center gap-6 hover:translate-x-2 transition-all"
              >
                <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden">
                  <Image
                    src="/images/raw-sausages.jpg"
                    alt={banger.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-eds-charcoal mb-2">
                    {banger.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{banger.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-eds-red bg-eds-red/10 px-4 py-2 rounded-full">
                    🏆 {banger.award}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sauces Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            🔥 Great Taste Sauces
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Each one a 1-Star Great Taste Award winner
          </p>

          {/* Sauce photo */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/jd-sauce-bottles.jpg"
              alt="Ed's Bangers JD Sauce — Great Taste Award winner"
              width={900}
              height={500}
              className="w-full object-cover max-h-64"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sauces.map((sauce) => (
              <div
                key={sauce.id}
                className="p-6 rounded-2xl text-center border border-white/10 bg-gradient-to-br from-eds-red/10 to-eds-brown/5 hover:scale-105 transition-all"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-eds-gold text-black font-bold text-sm rounded-full mb-4">
                  ⭐ Great Taste 1-Star
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{sauce.name}</h3>
                <p className="text-gray-400 mb-4">{sauce.description}</p>
                <p className="text-gray-400 text-sm">{sauce.size}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all hover:-translate-y-1 shadow-lg"
            >
              Shop All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Find Us / Events Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-eds-charcoal mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            📍 Find Us
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Catch us serving up bangers at local festivals and food events across Hampshire and beyond!
          </p>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/festival-stall.jpg"
              alt="Ed's Bangers festival stall — Giant Yorkies and Artisan Foot-Longs"
              width={900}
              height={500}
              className="w-full object-cover max-h-72"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['Hampshire Food Festivals', 'Local Street Food Markets', 'Private Events & Catering'].map((item) => (
              <span key={item} className="px-5 py-3 bg-white rounded-full shadow-lg font-bold">
                {item}
              </span>
            ))}
          </div>

          <Link href="/events" className="inline-block mb-12 text-eds-red font-bold hover:underline">
            View all upcoming events →
          </Link>

          <div className="bg-gradient-to-br from-eds-red to-eds-red-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-5xl mb-4">💒</div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: '"Fredoka One", cursive' }}
            >
              Weddings & Events
            </h3>
            <p className="text-lg opacity-95 mb-6 max-w-xl mx-auto">
              Looking for something special for your big day? Our street food catering brings award-winning flavour to your celebration.
            </p>
            <Link
              href="/weddings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-eds-red font-bold rounded-full hover:bg-eds-cream transition-all"
            >
              Enquire Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-charcoal-dark">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            💬 What People Say
          </h2>
          {/* Facebook Rating Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-6 py-4">
              <span className="text-3xl">👍</span>
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-eds-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-white font-bold">100% Recommend</p>
                <p className="text-gray-400 text-sm">49 Facebook Reviews</p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/edsbangers1/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1877F2] text-white font-bold rounded-full hover:opacity-90 transition-all text-sm"
            >
              See All Reviews on Facebook →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-eds-cream rounded-2xl p-6 shadow-xl flex flex-col"
              >
                <div className="text-eds-red text-5xl leading-none mb-4 font-serif">&ldquo;</div>
                <p className="text-eds-charcoal text-base leading-relaxed flex-1 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-eds-charcoal">{testimonial.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-eds-gold text-sm">★</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white bg-eds-red px-3 py-1 rounded-full">
                    {testimonial.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.facebook.com/edsbangers1/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm underline"
            >
              Read all 49 reviews on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Press / As Seen In Section */}
      <section className="py-16 md:py-24 px-4 bg-eds-cream">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-eds-charcoal text-center mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            📰 As Seen In
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Recognised by the people who know great food
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pressFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-eds-charcoal mb-2 text-sm leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-snug mb-3">
                  {feature.description}
                </p>
                <span className="text-xs font-bold text-eds-red bg-eds-red/10 px-3 py-1 rounded-full">
                  {feature.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-eds-charcoal text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            Let&apos;s Talk Bangers! 🌭
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Want to stock our award-winning products? Planning a festival or event? Or just fancy a chat about sausages?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all hover:-translate-y-1 shadow-lg"
          >
            📧 Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
