"use client";
import Footer from "@/components/Footer";
import AwesomeLoadingPage from "@/components/Loading/Loading";
import ScrollToTop from "@/components/ScrollToTop";
import { useSession } from "next-auth/react";
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  if (status === "loading") {
    return <AwesomeLoadingPage />;
  }
  return (
    <section>
      {children}
      <Footer />
      <ScrollToTop />
    </section>
  );
}
