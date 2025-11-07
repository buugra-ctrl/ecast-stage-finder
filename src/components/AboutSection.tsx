import lifeCheckImage from "@/assets/life_ceckk.png";

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
          <h2 className="text-3xl md:text-5xl font-light">
            ecast nedir?
          </h2>
          <p className="text-lg text-muted-foreground">
            Cast direktörleri, oyuncular ve menajerlerin birbirine bağlayarak, oyuncu seçme süreçlerini dijitalleştiren ve demokratikleştiren, sektör profesyonellerine özel Türkiye'nin ilk dijital casting platformu!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 ml-16">
              {features.split('\n').slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <img src={lifeCheckImage} alt="check" className="w-5 h-5" />
                  <span className="text-lg text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 ml-16">
              {features.split('\n').slice(3).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <img src={lifeCheckImage} alt="check" className="w-5 h-5" />
                  <span className="text-lg text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
