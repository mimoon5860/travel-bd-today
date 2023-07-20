"use client";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import "swiper/css";
import { Providers } from "./providers";
import AuthProviders from "@/components/Providers/AuthProviders";

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
          <AuthProviders>
            <>
              {children}
              <Footer />
              <ScrollToTop />
            </>
          </AuthProviders>
        </Providers>
      </body>
    </html>
  );
}
