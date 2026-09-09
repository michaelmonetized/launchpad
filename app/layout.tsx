import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://launchpad.hustlelaunch.com"),
  title: "LaunchPad — Hustle Launch starter",
  description:
    "The Hustle Launch starter kit. Next.js, shadcn, Clerk, Convex, PostHog, Stripe, Resend. Providers are mounted. It is not a live product.",
  openGraph: {
    title: "LaunchPad — Hustle Launch starter",
    description:
      "The Hustle Launch starter kit. Providers are mounted. It is not a live product.",
    url: "https://launchpad.hustlelaunch.com",
    siteName: "LaunchPad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
