import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroCastImage from "@/assets/Foto_castdire.jpg";

const CastDirektorleri = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroCastImage} 
              alt="Cast Direktörleri" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              Sektörün En İyileriyle Çalışın
            </h1>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-light text-foreground">
                Aradığınız Yüzü Bulmaya Hazır mısınız?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hemen üye olun, Türkiye'nin en geniş profesyonel oyuncu veri tabanına erişin ve projeniz için en doğru yeteneği saniyeler içinde bulun.
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
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Sadece Profesyonellerle Çalışın
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Platformumuz, sektör profesyonellerini bir araya getirme misyonuyla çalışır. Tüm oyuncu ve menajer profilleri, gerçek ve aktif profesyonellerden oluşur. Zamanınızı doğrulanmamış profillerle harcamayın.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Aradığınız Her Şey Tek Yerde
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Gelişmiş filtreleme seçenekleriyle oyuncuları anında listeleyin, yeni rol ilanları açın, başvuruları yönetin ve tüm projelerinizi tek bir panelden kolayca takip edin.
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
                        <span className="text-base">Aylık 5 arama hakkı</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Kısıtlı filtre</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Veritabanına kaydolma</span>
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
                      <span className="text-4xl md:text-5xl font-light text-foreground">₺499</span>
                      <span className="text-muted-foreground">/ay</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Sınırsız oyuncu arama</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Sınırsız filtre kullanımı</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Yeni rol ilanı açma</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Başvuru alma ve yönetme</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Proje oluşturma</span>
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

export default CastDirektorleri;
