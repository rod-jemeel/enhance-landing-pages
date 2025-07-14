import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: {
    default: "EnhanceMD - Transform Your Body with Modern Science",
    template: "%s | EnhanceMD"
  },
  description: "Personalized treatments grounded in clinical research. Designed for your body, guided by data, led by doctors. Transform your body with science-backed protocols.",
  keywords: "body transformation, personalized medicine, clinical treatments, data-driven health, doctor-led protocols, modern science, body optimization, health transformation",
  authors: [{ name: "EnhanceMD" }],
  creator: "EnhanceMD",
  publisher: "EnhanceMD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://enhancemd.com"),
  openGraph: {
    title: "EnhanceMD - Transform Your Body with Modern Science",
    description: "Personalized treatments grounded in clinical research. Designed for your body, guided by data, led by doctors.",
    url: "https://enhancemd.com",
    siteName: "EnhanceMD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EnhanceMD - Body Transformation"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnhanceMD - Transform Your Body",
    description: "Personalized treatments grounded in clinical research. Led by doctors.",
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
