import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events | Ed's Bangers® — Find Us Near You",
  description: "See where Ed's Bangers is appearing next. Food festivals, markets and events across Hampshire and the South of England.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
