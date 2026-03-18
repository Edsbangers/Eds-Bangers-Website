import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact — Catering, Wholesale & General Enquiries",
  description: "Get in touch with Ed's Bangers. Wedding catering, event bookings, wholesale sauce enquiries, or just say hello. Based in Hampshire, serving the UK.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact Ed's Bangers® | Hampshire Sausage Catering",
    description: "Wedding catering, event bookings, wholesale sauce enquiries. Get in touch with Ed's Bangers — based in Hampshire, serving across the UK.",
    url: 'https://www.edsbangers.com/contact',
    images: [{ url: '/images/jason-chef.jpg', alt: "Jason Misters — Head Chef, Ed's Bangers" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
