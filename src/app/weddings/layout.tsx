import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wedding & Event Catering | Ed's Bangers® — Hampshire Street Food",
  description: "Award-winning street food catering for weddings and events across Hampshire. 5.0 stars on Hitched. Get a quote today.",
};

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
