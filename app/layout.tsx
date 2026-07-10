import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Investors Home Realtors — Invest in the YEIDA growth corridor",
  description:
    "Helping investors make informed property decisions in the YEIDA region with verified insights, resale opportunities and market guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
