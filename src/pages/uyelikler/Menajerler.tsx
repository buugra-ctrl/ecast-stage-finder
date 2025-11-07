import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroMenajerImage from "@/assets/Foto_menajer2.jpg";

const Menajerler = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroMenajerImage} 
              alt="Menajerler" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8">
                Portföyünüzü En İyilerle Buluşturun
              </h1>
              <Button size="lg" variant="contrastDark" className="shadow-lg">
                Hemen Üye Ol
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-light text-foreground">
                Yeni Projeler, Yeni Başarılar
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Platforma katılın, oyuncu portföyünüzü yönetin ve en prestijli projelerden ilk siz haberdar olun.
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
                İş Akışınızı Kolaylaştırın
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Merkezi Yönetim
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Tüm oyuncu portföyünüzü tek bir panelden yönetin.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Cast direktörlerinden gelen projelere kolayca başvuru yapın.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg">Oyuncularınızın profillerini güncel ve eksiksiz tutun.</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Sadece Sektör Profesyonelleri
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Platformumuz, sadece sektör profesyonellerinin bir araya geldiği bir ağdır. Bu sayede, oyuncularınız için sadece ciddi ve kaliteli projelerle zaman harcarsınız.
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
                        <span className="text-base">5 oyuncuya kadar portföy yönetimi</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Temel arama ve filtreleme</span>
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
                      <span className="text-4xl md:text-5xl font-light text-foreground">₺299</span>
                      <span className="text-muted-foreground">/ay</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Sınırsız oyuncu portföyü yönetimi</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Gelen proje ilanlarını görüntüleme</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Oyuncular adına doğrudan başvuru yapma</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">Raporlama araçları</span>
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

export default Menajerler;
