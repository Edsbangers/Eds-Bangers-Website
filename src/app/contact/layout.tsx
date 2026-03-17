import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Ed's Bangers® — Get in Touch",
  description: "Contact Ed's Bangers for wholesale, event bookings, wedding catering, or general enquiries. Based in Hampshire.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
