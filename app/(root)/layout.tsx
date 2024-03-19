import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black">{children}</body>
      </html>
    </ClerkProvider>
  );
}
