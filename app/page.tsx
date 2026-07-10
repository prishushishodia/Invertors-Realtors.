import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketSnapshot from "@/components/MarketSnapshot";
import CorridorMap from "@/components/CorridorMap";
import WhyYeida from "@/components/WhyYeida";
import FeaturedCorridors from "@/components/FeaturedCorridors";
import Ecosystem from "@/components/Ecosystem";
import MarketWatch from "@/components/MarketWatch";
import WhyInvestorsHome from "@/components/WhyInvestorsHome";
import YouTube from "@/components/YouTube";
import AboutAdvisor from "@/components/AboutAdvisor";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarketSnapshot />
        <CorridorMap />
        <WhyYeida />
        <FeaturedCorridors />
        <Ecosystem />
        <MarketWatch />
        <WhyInvestorsHome />
        <YouTube />
        <AboutAdvisor />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
