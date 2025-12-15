import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ed's Bangers® | Award-Winning Artisan Sausages & Sauces",
  description: "Great Taste Producer. UK Sausage Week finalists. Handcrafted sausages and award-winning sauces from Hampshire. Street food catering for weddings and events.",
  keywords: "sausages, bangers, artisan, Hampshire, Great Taste, street food, wedding catering, BBQ sauce, chilli paste",
  openGraph: {
    title: "Ed's Bangers® | Award-Winning Artisan Sausages & Sauces",
    description: "Great Taste Producer. Handcrafted sausages and award-winning sauces from Hampshire.",
    type: "website",
    locale: "en_GB",
    siteName: "Ed's Bangers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
