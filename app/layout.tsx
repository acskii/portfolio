import "./globals.css";

import NavBar from "@/app/components/Navbar"
import ToTopButton from "@/app/components/ToTopButton";
import Footer from "@/app/components/Footer";

import ThemeProvider from "@/app/components/theme/ThemeProvider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div className="selection:bg-[#e7cc47] selection:text-[#704b06] dark:selection:bg-blue-900 dark:selection:text-blue-100">
            <NavBar />
            <div className="p-8 dark:bg-violet-200">
              {children}
            </div>
            <ToTopButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
