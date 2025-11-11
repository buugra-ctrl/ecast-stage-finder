import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import checkIcon from "@/assets/check-icon.png";
import heroMenajerImage from "@/assets/Foto_menajer2.jpg";
import { usePricingPlans } from "@/hooks/usePricingPlans";

const Menajerler = () => {
  const { data: plans = [] } = usePricingPlans("managers");
  const freemiumPlan = plans.find(p => p.plan_name === "freemium");
  const premiumPlan = plans.find(p => p.plan_name === "premium");

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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                İşini dijitale taşı, hem zaman hem verim kazan!
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                ecast ile oyuncu arama, değerlendirme ve seçme süreçlerini tek platformdan yönet. Kapsamlı arama filtreleri, portfolyo görüntüleme ve favori listeleriyle süreçlerini hızlandır.
              </p>
            </div>
          </div>
        </section>

        {/* Bilgilendirme Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
                Tüm Oyuncularını Tek Platformdan Yönet
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
                ecast, menajerlerin portföylerindeki oyuncuları kolayca yönetmesini, uygun projelere yönlendirmesini ve yeni yetenekleri keşfetmesini sağlar. Tüm süreçler artık tek ekranda, kontrol sende.
              </p>

              <div className="grid md:grid-cols-1 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Portföy Yönetimi ve Takip
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Temsil ettiğin oyuncuların profillerini oluştur, bilgilerini güncel tut ve başvurularını tek panelden takip et. Tüm portföyünü profesyonelce organize et.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Yeni Yetenek Keşfi
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Ecast, yalnızca doğrulanmış profesyonellerin yer aldığı oyuncu havuzuyla, portföyünü genişletmen için sana güçlü bir keşif alanı sunar. Geleceğin yüzlerini ilk sen fark et.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Akıllı ve Hızlı Yönetim Araçları
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Favori listeleri, not alma ve oyuncu karşılaştırma gibi özelliklerle süreçlerini hızlandır. Ecast, menajerlik deneyimini dijital çağın kolaylığıyla buluşturur.
                  </p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mt-16">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-4 text-left font-light">Özellik</th>
                        <th className="border border-border p-4 text-center font-light">Freemium</th>
                        <th className="border border-border p-4 text-center font-light">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4">Profil oluşturma</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4">Aylık Oyuncu Arama</td>
                        <td className="border border-border p-4 text-center">10</td>
                        <td className="border border-border p-4 text-center">Sınırsız</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4">Filtreleme</td>
                        <td className="border border-border p-4 text-center">2</td>
                        <td className="border border-border p-4 text-center">Sınırsız</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4">Oyuncu favorileme</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4">Proje oluşturma</td>
                        <td className="border border-border p-4 text-center">✕</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4">Yeni rol ilanı açma</td>
                        <td className="border border-border p-4 text-center">✕</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4">Başvuru alma</td>
                        <td className="border border-border p-4 text-center">✕</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
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
                {freemiumPlan && (
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl md:text-3xl font-light">Freemium</CardTitle>
                      <CardDescription className="text-lg">
                        <span className="text-4xl md:text-5xl font-light text-foreground">Ücretsiz</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {freemiumPlan.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3">
                            <img src={checkIcon} alt="check" className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full">
                        Hemen Üye Ol
                      </Button>
                    </CardContent>
                  </Card>
                )}

                {/* Premium */}
                {premiumPlan && (
                  <Card className="border-2 border-primary hover:border-primary/80 transition-colors shadow-lg">
                    <CardHeader className="pb-8">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-3 w-fit">
                        ÖNERİLEN
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-light">Premium</CardTitle>
                      <CardDescription className="text-lg">
                        {premiumPlan.price ? (
                          <span className="text-4xl md:text-5xl font-light text-foreground">{premiumPlan.price} TL/ay</span>
                        ) : (
                          <span className="text-4xl md:text-5xl font-light text-foreground">İletişime Geç</span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {premiumPlan.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3">
                            <img src={checkIcon} alt="check" className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full">
                        Hemen Üye Ol
                      </Button>
                    </CardContent>
                  </Card>
                )}
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
