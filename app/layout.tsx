import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads Clone",
  description: "A Next.js 14 Meta Threads Clone"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} bg-black`}>{children}</body>
    </html>
  );
}
