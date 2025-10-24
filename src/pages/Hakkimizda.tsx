import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Hakkimizda = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-12 bg-muted/30">
          <div className="container">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl md:text-6xl font-light mb-4">
                Hakkımızda
              </h1>
              <p className="text-lg text-muted-foreground">
                ecast, casting süreçlerini dijitalleştiren ve demokratikleştiren Türkiye'nin ilk dijital casting platformudur.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-light mb-4">Vizyonumuz</h2>
                <p className="text-lg text-muted-foreground">
                  Türkiye'de ve dünyada casting süreçlerini tamamen dijitalleştirerek, yetenekli oyuncuları doğru fırsatlarla buluşturmak ve sektörde şeffaflık, erişilebilirlik ve verimlilik sağlamak.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-light mb-4">Misyonumuz</h2>
                <p className="text-lg text-muted-foreground">
                  Cast direktörleri, oyuncular ve menajerleri tek bir platformda bir araya getirerek, casting süreçlerini hızlandırmak, kolaylaştırmak ve herkes için daha adil hale getirmek.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-light mb-4">Değerlerimiz</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#002b54] text-xl mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong>Şeffaflık:</strong> Tüm süreçlerde açık ve net iletişim
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002b54] text-xl mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong>Erişilebilirlik:</strong> Herkes için eşit fırsatlar
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002b54] text-xl mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong>Kalite:</strong> Yüksek standartlarda hizmet
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#002b54] text-xl mt-1">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong>İnovasyon:</strong> Sürekli gelişim ve yenilik
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hakkimizda;
