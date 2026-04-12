import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Contact — Catering & Wholesale Enquiries",
  description: "Get in touch with Ed's Bangers. Wedding catering, event bookings, wholesale sauce enquiries, or just say hello. Based in Hampshire, serving the UK.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact Ed's Bangers® | Hampshire Sausage Catering",
    description: "Wedding catering, event bookings, wholesale sauce enquiries. Get in touch with Ed's Bangers — based in Hampshire, serving across the UK.",
    url: 'https://www.edsbangers.com/contact',
    images: [{ url: '/images/jason-chef.jpg', alt: "Jason Misters — Head Chef, Ed's Bangers" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When will the sauces be available to buy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're targeting late summer 2026 to have our award-winning sauces back on sale. We'll be starting small — short runs, high quality. Follow us on Instagram and Facebook to be first to know.",
      },
    },
    {
      "@type": "Question",
      "name": "Where have the bangers gone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The bangers are coming back! Sauces will come first as we get our new production facility up and running. Once sauces are flowing, we'll bring the bangers back in small batches for our loyal fans.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I still book Ed's Bangers for an event or wedding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — event and wedding catering is very much open! Get in touch via our contact form or head to the Weddings & Events page. We cater across Hampshire and beyond.",
      },
    },
    {
      "@type": "Question",
      "name": "Are your products suitable for vegetarians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While our sausages contain meat, some of our sauces are vegetarian-friendly. Check individual product descriptions or contact us for details.",
      },
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbJsonLd crumbs={[{ name: 'Contact', path: '/contact' }]} />
      {children}
    </>
  );
}
