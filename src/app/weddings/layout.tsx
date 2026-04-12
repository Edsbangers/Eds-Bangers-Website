import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Wedding & Event Catering Hampshire",
  description: "Award-winning street food catering for weddings & events across Hampshire. Gourmet artisan bangers cooked fresh on-site. 5-star rated. Get a free quote today.",
  alternates: { canonical: '/weddings' },
  openGraph: {
    title: "Wedding Catering Hampshire | Ed's Bangers® Street Food",
    description: "Award-winning street food catering for weddings & events across Hampshire. Fresh-grilled gourmet bangers. 5-star rated on Hitched. Get a free quote.",
    url: 'https://www.edsbangers.com/weddings',
    images: [{ url: '/images/wedding-catering.jpg', alt: "Ed's Bangers wedding catering — bride and groom at our stall" }],
  },
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return <><BreadcrumbJsonLd crumbs={[{ name: 'Weddings & Events', path: '/weddings' }]} />{children}</>;
}
