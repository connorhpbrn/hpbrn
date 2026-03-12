import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connor Hepburn",
  description:
    "Connor Hepburn builds AI products, experimental tools, and clean software for the internet.",
  openGraph: {
    title: "Connor Hepburn",
    description:
      "Builder, founder, and designer-engineer working on AI-native software.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Connor Hepburn",
    description:
      "AI products, experimental tools, and clean software for the internet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
