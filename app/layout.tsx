import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "QORVN | Better Systems for Growing Businesses",
  description:
    "QORVN builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "QORVN | Better Systems for Growing Businesses",
    description:
      "QORVN builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
    type: "website",
    siteName: "QORVN",
  },
  twitter: {
    card: "summary_large_image",
    title: "QORVN | Better Systems for Growing Businesses",
    description:
      "QORVN builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-qorvn-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
