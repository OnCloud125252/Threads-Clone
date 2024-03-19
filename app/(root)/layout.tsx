import { Metadata } from "next";

import TopBar from "@/components/shared/TopBar";
import BottomBar from "@/components/shared/BottomBar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

import "../globals.css";


export const metadata: Metadata = {
  title: "Threads Clone - Home",
  description: "Homepage of Threads Clone"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <TopBar />
        <main>
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSidebar />
        </main>
        <BottomBar />
      </body>
    </html>
  );
}
