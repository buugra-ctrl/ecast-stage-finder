import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import checkIcon from "@/assets/check-icon.png";
import heroOyuncuImage from "@/assets/Foto_oyuncu.jpg";
import { usePricingPlans } from "@/hooks/usePricingPlans";

const Oyuncular = () => {
  const { data: plans = [] } = usePricingPlans("actors");
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
              src={heroOyuncuImage} 
              alt="Oyuncular" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                Kariyerini Keşfedilmeye Aç
              </h1>
            </div>
          </div>
        </section>

        {/* Bilgilendirme Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
                Yeteneğini Görünür Kıl
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
                Profilini oluştur, portfolyonu yükle ve Türkiye'nin önde gelen cast direktörleri ve menajerler tarafından keşfedil. ecast, seni projelere bir adım daha yaklaştırır.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Sadece sektör Profesyonelleri
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    ecast, yalnızca sektör profesyonellerine açık, doğrulanmış bir platformdur. Burada oyuncular yeteneklerini güvenle sergiler, cast direktörleri ise doğru isimleri kolayca keşfeder.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light text-foreground">
                    Kariyer Yönetimi ve Geliştirici İçerikler
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Audition videolarını, referanslarını ve tüm bilgilerini profesyonel bir profil altında topla. ecast, sektöre dair eğitici içerikler ve ipuçlarıyla oyunculuk kariyerini geliştirmeni de sağlar.
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
                        <td className="border border-border p-4">Profil linki oluşturma</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4">Görsel Ekleme</td>
                        <td className="border border-border p-4 text-center">2</td>
                        <td className="border border-border p-4 text-center">8</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4">Video Ekleme</td>
                        <td className="border border-border p-4 text-center">1</td>
                        <td className="border border-border p-4 text-center">4</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4">Cast Direkt. Aramalarında listelenme</td>
                        <td className="border border-border p-4 text-center">✕</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4">Menajerler tarafından görüntülenme</td>
                        <td className="border border-border p-4 text-center">✕</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4">Rol ilanlarını görüntüleme</td>
                        <td className="border border-border p-4 text-center">✕</td>
                        <td className="border border-border p-4 text-center"><img src={checkIcon} alt="check" className="h-5 w-5 mx-auto" /></td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-4">Rol ilanlarına başvurma</td>
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

export default Oyuncular;
