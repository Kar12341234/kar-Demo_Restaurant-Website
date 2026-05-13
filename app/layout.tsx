import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma & Ember | Modern Restaurant Website Demo",
  description:
    "A premium restaurant website demo built with Next.js, TypeScript, and Tailwind CSS for local restaurants, cafes, and bars.",
  openGraph: {
    title: "Luma & Ember | Modern Restaurant Website Demo",
    description:
      "A warm, premium restaurant website demo for Fiverr and Upwork portfolio showcases.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-linen text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
