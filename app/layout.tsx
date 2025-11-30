import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunwin Power Solutions - Solar Energy Solutions in Chennai",
<<<<<<< HEAD
  description: "Leading service provider of solar renewable energy solutions. Expertise in custom solar power systems for residential, commercial and industries sectors. Delivering high quality, reliability and sustainable power solutions.",
=======
  description: "Leading provider of solar renewable energy solutions in Chennai, Tamil Nadu. Offering solar panels, installation services, maintenance, and complete solar power systems.",
>>>>>>> origin/main
  keywords: "solar panels, solar energy, Chennai, Tamil Nadu, solar installation, renewable energy, solar power systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

