import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Chainable",
  description: "Smarter returns between customers. (C2C)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-stone-50">
        <Navbar />
          <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
