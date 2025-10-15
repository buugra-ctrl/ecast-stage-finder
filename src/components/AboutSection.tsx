import { Check } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "5,000", label: "Aktif Üye" },
    { value: "500+", label: "Aylık Casting" },
    { value: "200+", label: "Prodüksiyon" },
    { value: "95%", label: "Başarı Oranı" },
  ];

  const features = [
    "Dijital casting çağrıları ve başvurular",
    "Yetenek ve casting yönetmenleri arasında doğrudan bağlantı",
    "Güvenli profil yönetimi ve portfolyo vitrini",
    "Yeni fırsatlar için anlık bildirimler",
    "Sektör standardı araçlar ve kaynaklar",
    "Şeffaf ve adil casting süreci",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-left max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            ecast nedir?
          </h2>
          <p className="text-lg text-muted-foreground">
            ecast, oyuncuları, casting yönetmenlerini ve ajanları birbirine bağlayan kusursuz bir dijital 
            platform oluşturarak eğlence sektöründe devrim yapıyor. Fırsatlara erişimi demokratikleştiriyor 
            ve casting sürecini herkes için daha verimli, şeffaf ve kapsayıcı hale getiriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-background transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
