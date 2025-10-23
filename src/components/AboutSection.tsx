import { Check } from "lucide-react";

const AboutSection = () => {
  const features = `Profesyonel profil yönetimi ve portfolyo vitrini
Yeni fırsatlar için anlık bildirimler
Gelişmiş arama filtreleri
Güncel ve doğru bilgiye erişim
Yeni yetenek keşifleri
Sadece sektör profesyonelleri`;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            ecast nedir?
          </h2>
          <p className="text-lg text-muted-foreground">
            Cast direktörleri, oyuncular ve menajerlerin birbirine bağlayarak, oyuncu seçme süreçlerini dijitalleştiren ve demokratikleştiren, sektör profesyonellerine özel Türkiye'nin ilk dijital casting platformu!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="text-lg text-muted-foreground space-y-2">
            {features.split('\n').map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
