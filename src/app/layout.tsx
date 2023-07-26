"use client";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import "swiper/css";
import { Providers } from "./providers";
import AuthProvider from "@/context/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-black">
        <Providers>
          <AuthProvider>
            {children}
            <Footer />
            <ScrollToTop />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
