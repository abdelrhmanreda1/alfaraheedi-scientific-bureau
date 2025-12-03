import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al-Faraheedi Scientific Bureau – Pharmaceutical Marketing in Iraq",
  description:
    "Al-Faraheedi Scientific Bureau, based in Basra–Iraq, specializes in scientific promotion and pharmaceutical marketing. We connect high-quality international medicines with the needs of healthcare professionals through strong scientific communication and ethical market presence.",

  keywords:
    "Al-Faraheedi Scientific Bureau, pharmaceutical marketing Iraq, Basra pharma, scientific office Iraq, medical promotion, pharmaceutical products Iraq, healthcare Iraq, drug suppliers Iraq, medical representatives Iraq",

  authors: [
    {
      name: "Al-Faraheedi Scientific Bureau",
      url: "https://alfaraheedi-scientific-bureau.vercel.app/",
    },
  ],

  openGraph: {
    title:
      "Al-Faraheedi Scientific Bureau – Trusted Pharmaceutical Marketing in Iraq",
    description:
      "Learn about Al-Faraheedi Scientific Bureau — a leading pharmaceutical scientific office in Basra, Iraq, specializing in high-quality medical promotion, market access, and international partnerships.",
    url: "https://alfaraheedi-scientific-bureau.vercel.app/",
    siteName: "Al-Faraheedi Scientific Bureau",
    images: [
      {
        url: "https://alfaraheedi-scientific-bureau.vercel.app/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Al-Faraheedi Scientific Bureau Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Al-Faraheedi Scientific Bureau – Pharmaceutical Marketing in Iraq",
    description:
      "Introducing high-quality pharmaceutical products to Iraq with scientific accuracy, ethical promotion, and global partnerships.",
    images: ["https://alfaraheedi-scientific-bureau.vercel.app/logo-black.png"],
    creator: "@AlFaraheedi",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
