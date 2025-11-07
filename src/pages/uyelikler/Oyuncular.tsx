import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroOyuncuImage from "@/assets/Foto_oyuncu.jpg";

const Oyuncular = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroOyuncuImage} 
              alt="Oyuncular" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              Kariyerini Keşfedilmeye Aç
            </h1>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-light text-foreground">
                Kariyerini Parlatmaya Hazır mısın?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hemen üye ol, profesyonel profilini oluştur ve Türkiye'nin önde gelen cast direktörleri ile menajerlerinin seni keşfetmesini sağla.
              </p>
              <Button size="lg" variant="contrastLight" className="mt-8">
                Hemen Üye Ol
              </Button>
            </div>
          </div>
        </section>

        {/* Bilgilendirme Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
                Neden Bu Platform?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Sana Sunulan Avantajlar
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Profilini en iyi cast direktörlerine sun.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Sadece doğrulanmış profesyonel projelere başvur.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Başvurularını tek bir panelden kolayca takip et.</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Sadece Sektör Profesyonelleri
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Platformumuz, sektör profesyonellerini bir araya getirme misyonuyla çalışır. Bu sayede, başvurularının gerçek ve ciddi projeler için değerlendirildiğinden emin olabilirsin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
                Üyelik Seçenekleri
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Freemium */}
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl md:text-3xl font-light">Freemium</CardTitle>
                    <CardDescription className="text-lg">
                      <span className="text-4xl md:text-5xl font-light text-foreground">Ücretsiz</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Profil oluşturma</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">2 adet resim koyma hakkı</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" size="lg">
                      Hemen Üye Ol
                    </Button>
                  </CardContent>
                </Card>

                {/* Premium */}
                <Card className="border-2 border-primary relative shadow-lg">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                    En Popüler
                  </div>
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl md:text-3xl font-light">Premium</CardTitle>
                    <CardDescription className="text-lg">
                      <span className="text-4xl md:text-5xl font-light text-foreground">₺99</span>
                      <span className="text-muted-foreground">/ay</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">6 resim</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">3 video</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">İlanları görüntüleme</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Başvuru yapma ve takip etme</span>
                      </div>
                    </div>
                    <Button variant="contrastLight" className="w-full" size="lg">
                      Hemen Üye Ol
                    </Button>
                  </CardContent>
                </Card>
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
