import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunwin Power Solutions Puthagaram - Top Solar Energy Company in Chennai",
  description: "Sunwin Power Solutions in Puthagaram, Chennai. Leading solar energy company offering rooftop solar systems, ground-mounted installations, and solar maintenance services. Expert solar EPC contractors in Puthagaram, Kolathur, Chennai.",
  keywords: "Sunwin Power Solutions Puthagaram, solar panels Puthagaram, solar energy Chennai, solar installation Puthagaram, solar company Kolathur, rooftop solar Puthagaram, solar power systems Chennai, solar EPC Puthagaram, renewable energy Chennai, solar maintenance Chennai, Tamil Nadu solar company, best solar company Puthagaram",
  authors: [{ name: "Sunwin Power Solutions" }],
  creator: "Sunwin Power Solutions",
  publisher: "Sunwin Power Solutions",
  metadataBase: new URL("https://www.sunwinpowersolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sunwin Power Solutions Puthagaram - Top Solar Energy Company in Chennai",
    description: "Leading solar energy solutions provider in Puthagaram, Chennai. Expert solar installations for residential, commercial & industrial sectors.",
    url: "https://www.sunwinpowersolutions.com",
    siteName: "Sunwin Power Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/sw logo.png",
        width: 1200,
        height: 630,
        alt: "Sunwin Power Solutions - Solar Energy Company in Puthagaram, Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunwin Power Solutions Puthagaram - Top Solar Energy Company",
    description: "Leading solar energy solutions provider in Puthagaram, Chennai. Expert solar installations for residential, commercial & industrial sectors.",
    images: ["/images/logo/sw logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "HHDFToQCukmxCMPO92-L2JN0t-2oIp6KM36x6ksusPo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sunwinpowersolutions.com",
    "name": "Sunwin Power Solutions",
    "image": "https://www.sunwinpowersolutions.com/images/logo/sw logo.png",
    "description": "Leading solar energy solutions provider in Puthagaram, Chennai. Expert solar installations for residential, commercial & industrial sectors.",
    "url": "https://www.sunwinpowersolutions.com",
    "telephone": "+91-9500164901",
    "email": "support@sunwinpowersolutions.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No-19, Shop #4 Janakiram Nagar, Kadappa Road",
      "addressLocality": "Puthagaram, Kolathur Teachers Colony",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600099",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.1260",
      "longitude": "80.2120"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:30"
    },
    "sameAs": [
      "https://www.sunwinpowersolutions.com"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar Energy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rooftop Solar Systems for Residential",
            "description": "Residential rooftop solar panel installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rooftop Solar Systems for Commercial",
            "description": "Commercial rooftop solar panel installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ground Mounted Solar Installation",
            "description": "Ground-mounted solar power plant installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Power Plant Maintenance",
            "description": "Solar panel maintenance and servicing"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

