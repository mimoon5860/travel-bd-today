import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Places from "@/components/Places";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <Features />
      <Places />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
