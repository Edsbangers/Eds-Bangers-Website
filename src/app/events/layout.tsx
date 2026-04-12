import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Events — Find Ed's Bangers Near You",
  description: "See where Ed's Bangers is serving up award-winning sausages next. Food festivals, street food markets and events across Hampshire and the South of England.",
  alternates: { canonical: '/events' },
  openGraph: {
    title: "Events | Ed's Bangers® — Find Us Near You",
    description: "See where Ed's Bangers is appearing next. Award-winning sausages at food festivals and markets across Hampshire and beyond.",
    url: 'https://www.edsbangers.com/events',
    images: [{ url: '/images/festival-stall.jpg', alt: "Ed's Bangers festival stall — Giant Yorkies and Artisan Foot-Longs" }],
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <><BreadcrumbJsonLd crumbs={[{ name: 'Events', path: '/events' }]} />{children}</>;
}
