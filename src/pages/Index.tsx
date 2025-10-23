import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import AboutSection from "@/components/AboutSection";
import MemberTypes from "@/components/MemberTypes";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroVideo />
        <AboutSection />
        <MemberTypes />
        <CTASection />
        <Testimonials />
        <FAQSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
