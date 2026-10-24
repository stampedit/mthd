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
  title: "MTHD | Better Systems for Growing Businesses",
  description:
    "MTHD builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
  metadataBase: new URL("https://mthd.io"),
  openGraph: {
    title: "MTHD | Better Systems for Growing Businesses",
    description:
      "MTHD builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
    type: "website",
    siteName: "MTHD",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTHD | Better Systems for Growing Businesses",
    description:
      "MTHD builds software, automation, and custom systems that help businesses simplify operations and grow without the chaos.",
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
      <body className="min-h-screen bg-mthd-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
