import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./components/fonts";

import NavBar from "@/app/components/portfolio/Navbar"
import ToTopButton from "@/app/components/ToTopButton";
import Footer from "@/app/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "acskii | Portfolio",
  description: "[UNDER DEVELOPMENT] | Personal Portfolio with Management Features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <NavBar />
        <div className="p-8 dark:bg-violet-200">
          {children}
        </div>
        <ToTopButton />
        <Footer />
      </body>
    </html>
  );
}
