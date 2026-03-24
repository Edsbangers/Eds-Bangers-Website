import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.edsbangers.com'),
  title: {
    default: "Ed's Bangers® | Award-Winning Artisan Sausages & Sauces",
    template: "%s | Ed's Bangers®",
  },
  description: "Great Taste Producer. Award-winning artisan sausages & sauces handcrafted in Hampshire. Street food catering for weddings and events across the UK.",
  keywords: [
    "artisan sausages Hampshire",
    "award-winning bangers",
    "Great Taste Producer",
    "street food catering Hampshire",
    "wedding catering Hampshire",
    "BBQ sauce award winner",
    "UK Sausage Week finalist",
    "Portsmouth street food",
    "Hampshire wedding caterer",
    "gourmet sausages UK",
  ],
  authors: [{ name: "Jason Misters" }],
  creator: "Ed's Bangers",
  publisher: "Ed's Bangers",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ed's Bangers® | Award-Winning Artisan Sausages & Sauces",
    description: "Great Taste Producer. Award-winning artisan sausages & sauces from Hampshire. Street food catering for weddings and events.",
    type: "website",
    locale: "en_GB",
    siteName: "Ed's Bangers",
    url: 'https://www.edsbangers.com',
    images: [
      {
        url: '/images/raw-sausages.jpg',
        width: 1200,
        height: 630,
        alt: "Ed's Bangers — award-winning artisan sausages handcrafted in Hampshire",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ed's Bangers® | Award-Winning Artisan Sausages & Sauces",
    description: "Great Taste Producer. Award-winning artisan sausages & sauces from Hampshire.",
    images: ['/images/raw-sausages.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ed's Bangers",
  "legalName": "Ed's Bangers",
  "url": "https://www.edsbangers.com",
  "logo": "https://www.edsbangers.com/images/logo.png",
  "foundingDate": "2019",
  "founder": {
    "@type": "Person",
    "name": "Jason Misters",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "edsbangers@gmail.com",
    "telephone": "+447956139772",
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": "English",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hampshire",
    "addressCountry": "GB",
  },
  "sameAs": [
    "https://www.facebook.com/edsbangers1",
    "https://www.instagram.com/edsbangers",
    "https://www.tiktok.com/@edsbangers",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["FoodEstablishment", "LocalBusiness"],
  "name": "Ed's Bangers",
  "description": "Award-winning artisan sausage maker and street food caterer based in Hampshire, UK. Great Taste Producer. Wedding and event catering across Hampshire and beyond.",
  "url": "https://www.edsbangers.com",
  "logo": "https://www.edsbangers.com/images/logo.png",
  "image": "https://www.edsbangers.com/images/festival-stall.jpg",
  "telephone": "+447956139772",
  "email": "edsbangers@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Portsmouth",
    "addressRegion": "Hampshire",
    "postalCode": "PO4",
    "addressCountry": "GB",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.7989,
    "longitude": -1.0745,
  },
  "areaServed": [
    { "@type": "City", "name": "Portsmouth" },
    { "@type": "City", "name": "Southampton" },
    { "@type": "City", "name": "Fareham" },
    { "@type": "City", "name": "Gosport" },
    { "@type": "AdministrativeArea", "name": "Hampshire" },
    { "@type": "Country", "name": "United Kingdom" },
  ],
  "servesCuisine": ["British", "Street Food", "Artisan Sausages"],
  "priceRange": "££",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "49",
    "bestRating": "5",
    "worstRating": "1",
  },
  "award": [
    "Great Taste Producer — Guild of Fine Food",
    "UK Sausage Week Runner Up 2019",
    "Hampshire Sausage & Pie Competition Gold 2022",
    "Great British Food Awards Finalist 2022",
    "Food Management Today Industry Awards Highly Commended 2021",
  ],
  "sameAs": [
    "https://www.facebook.com/edsbangers1",
    "https://www.instagram.com/edsbangers",
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ed's Bangers Great Taste Award-Winning Sauces",
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Ed's Hot Paste",
      "description": "Fiery chilli paste with depth. Great Taste 1-Star 2023. Vegan-friendly. 200g jar.",
      "brand": { "@type": "Brand", "name": "Ed's Bangers" },
      "image": "https://www.edsbangers.com/images/jd-sauce-bottles.jpg",
      "award": "Great Taste 1-Star 2023",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/PreOrder",
        "seller": { "@type": "Organization", "name": "Ed's Bangers" },
      },
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Ed's Proper Gravy",
      "description": "Rich, meaty gravy with real depth. Great Taste 1-Star 2023. Gluten-free option. 300g jar.",
      "brand": { "@type": "Brand", "name": "Ed's Bangers" },
      "image": "https://www.edsbangers.com/images/jd-sauce-bottles.jpg",
      "award": "Great Taste 1-Star 2023",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/PreOrder",
        "seller": { "@type": "Organization", "name": "Ed's Bangers" },
      },
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Ed's Smoked BBQ Sauce",
      "description": "Smoky, tangy BBQ sauce. Great Taste 1-Star 2023. Vegetarian. 250ml bottle.",
      "brand": { "@type": "Brand", "name": "Ed's Bangers" },
      "image": "https://www.edsbangers.com/images/jd-sauce-bottles.jpg",
      "award": "Great Taste 1-Star 2023",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/PreOrder",
        "seller": { "@type": "Organization", "name": "Ed's Bangers" },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
