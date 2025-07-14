import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: {
    default: "Premium Skincare Protocol | Clinical Anti-Aging Solutions",
    template: "%s | Premium Skincare"
  },
  description: "Experience revolutionary skincare with our clinically-proven 3-step protocol. Transform your skin in 30 days with professional-grade results at home.",
  keywords: "premium skincare, anti-aging, clinical skincare, skincare protocol, professional results, luxury beauty, wrinkle reduction",
  authors: [{ name: "Premium Skincare" }],
  creator: "Premium Skincare",
  publisher: "Premium Skincare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://premiumskincare.com"),
  openGraph: {
    title: "Premium Skincare Protocol | Clinical Anti-Aging Solutions",
    description: "Experience revolutionary skincare with our clinically-proven 3-step protocol.",
    url: "https://premiumskincare.com",
    siteName: "Premium Skincare Protocol",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Skincare Protocol"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Skincare Protocol",
    description: "Revolutionary 3-step skincare with clinical results",
    images: ["/twitter-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
