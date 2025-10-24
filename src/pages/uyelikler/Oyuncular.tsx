import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle2 } from "lucide-react";

const Oyuncular = () => {
  const features = [
    "Profesyonel CV oluşturma",
    "Anlık casting bildirimleri",
    "Fırsatları görüntüleme ve başvuru",
    "Kariyer gelişim kaynakları",
    "Portfolio yönetimi",
    "Video showreel yükleme",
  ];

  const pricing = [
    { plan: "Aylık", price: "₺99", period: "/ay" },
    { plan: "Yıllık", price: "₺990", period: "/yıl", badge: "%17 İndirim" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-light">Oyuncular</h1>
              <p className="text-xl text-muted-foreground">
                Profesyonel profilinizi oluşturun, çalışmalarınızı sergileyin ve heyecan verici fırsatlara başvurun.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Özellikler</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Üyelik Seçenekleri</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pricing.map((option, index) => (
                  <Card key={index} className="relative">
                    {option.badge && (
                      <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        {option.badge}
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{option.plan}</CardTitle>
                      <CardDescription>
                        <span className="text-4xl font-bold text-foreground">{option.price}</span>
                        <span className="text-muted-foreground">{option.period}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="lg">
                        Hemen Başla
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Oyuncular;
