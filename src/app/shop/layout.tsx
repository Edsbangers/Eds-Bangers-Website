import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shop | Ed's Bangers® — Great Taste Award-Winning Sauces",
  description: "Buy our award-winning artisan sauces online. Chilli Paste, Proper Gravy, and Smoked BBQ Sauce — all Great Taste Award winners. Delivered across the UK.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
