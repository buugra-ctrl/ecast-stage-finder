import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import MemberTypes from "@/components/MemberTypes";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <MemberTypes />
        <CTASection />
        <Testimonials />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
