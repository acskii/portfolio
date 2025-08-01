import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./components/fonts";

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
        {children}
      </body>
    </html>
  );
}
