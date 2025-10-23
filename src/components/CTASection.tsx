import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaJoin from "@/assets/cta-join.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={ctaJoin}
              alt="Join ecast community"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-light">
              Hikayeniz burada başlıyor!
            </h2>
            <p className="text-lg text-muted-foreground">
              En iyi yapımları takip etmek, kariyer fırsatları yaratmak ve 
              en iyi yetenekleri bulmak için ecast kullanan sektör profesyoneline katılın.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Hızlı Kurulum</h3>
                  <p className="text-sm text-muted-foreground">Profilinizi dakikalar içinde oluşturun</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Anında Erişim</h3>
                  <p className="text-sm text-muted-foreground">Fırsatlara hemen göz atmaya başlayın</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-light mb-1">Gelişmiş Filtreler</h3>
                  <p className="text-sm text-muted-foreground">Aradığınız yeteneğe hızlıca ulaşın</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Hemen Üye Ol
              </Button>
              <Button size="lg" variant="outline">
                Bize Ulaşın
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
