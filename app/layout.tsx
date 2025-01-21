import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBlog - Latest in Technology",
  description:
    "Discover the latest insights in technology, web development, and design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Τεχνικό Μελετητικό Γραφείο | Πολίτης Εδουάρδος-Οδυσσέας</title>
        <meta name="description" content="Τεχνικό Μελετητικό Γραφείο"></meta>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
