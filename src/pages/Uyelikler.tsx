import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberTypes from "@/components/MemberTypes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Uyelikler = () => {
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
                Üyelikler
              </h1>
              <p className="text-lg text-muted-foreground">
                Size en uygun üyelik paketini seçin ve ecast'in tüm özelliklerinden yararlanmaya başlayın.
              </p>
            </div>
          </div>
        </section>
        <MemberTypes />
      </main>
      <Footer />
    </div>
  );
};

export default Uyelikler;
