import Link from 'next/link';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eds-charcoal-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily: '"Fredoka One", cursive',
                color: '#C41E3A',
              }}
            >
              {siteConfig.name}®
            </h3>
            <p className="text-gray-400 mb-4">
              Award-winning artisan sausages & sauces, handcrafted in Hampshire.
            </p>
            <div className="flex items-center gap-2 text-eds-gold">
              <span>⭐</span>
              <span className="text-sm font-semibold">Great Taste Producer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                Events
              </Link>
              <Link href="/weddings" className="text-gray-400 hover:text-white transition-colors">
                Weddings & Events
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/shop#bangers" className="text-gray-400 hover:text-white transition-colors">
                Award-Winning Bangers
              </Link>
              <Link href="/shop#sauces" className="text-gray-400 hover:text-white transition-colors">
                Great Taste Sauces
              </Link>
              <Link href="/weddings" className="text-gray-400 hover:text-white transition-colors">
                Event Catering
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>📧</span>
                {siteConfig.email}
              </a>
              <p className="text-gray-400 flex items-center gap-2">
                <span>📍</span>
                {siteConfig.location}
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} {siteConfig.name}® — Handcrafted in Hampshire with 🔥
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
