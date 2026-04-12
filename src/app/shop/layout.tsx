import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Shop — Award-Winning Sauces & Bangers",
  description: "Great Taste award-winning sauces from Ed's Bangers — Ed's Hot Paste, Proper Gravy & Smoked BBQ Sauce. Handcrafted in Hampshire. Online ordering coming late summer 2026.",
  alternates: { canonical: '/shop' },
  openGraph: {
    title: "Shop | Ed's Bangers® — Award-Winning Sauces",
    description: "Great Taste award-winning sauces handcrafted in Hampshire. Ed's Hot Paste, Proper Gravy & Smoked BBQ Sauce. Online ordering coming late summer 2026.",
    url: 'https://www.edsbangers.com/shop',
    images: [{ url: '/images/jd-sauce-bottles.jpg', alt: "Ed's Bangers JD Sauce — Great Taste Award winner" }],
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <><BreadcrumbJsonLd crumbs={[{ name: 'Shop', path: '/shop' }]} />{children}</>;
}
