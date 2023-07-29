"use client";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import "rodal/lib/rodal.css";
import "swiper/css";
import { Providers } from "./providers";
import AuthProvider from "@/context/AuthContext";

// import LoadingProvider from "@/context/LoadingContext";
// import ProgressBar from "@badrap/bar-of-progress";
// import Router from "next/router";
// const progress = new ProgressBar({
//   size: 2,
//   color: "red",
//   className: "bar-of-progress",
//   delay: 100,
// });

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

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
            <ScrollToTop />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
