import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heart Scribed - Bible Verse Memorization Mobile App",
  description: "Memorize and meditate on God's Word with Heart Scribed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-900 dark:bg-black">{children}</body>
    </html>
  );
}
