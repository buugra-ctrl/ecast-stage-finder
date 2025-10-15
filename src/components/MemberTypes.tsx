import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clapperboard, Users, Briefcase } from "lucide-react";

const memberTypes = [
  {
    icon: Clapperboard,
    title: "Casting Yönetmenleri",
    description: "Casting çağrıları yayınlayın, başvuruları inceleyin ve prodüksiyonlarınız için mükemmel yetenekleri keşfedin.",
    features: [
      "Sınırsız casting çağrısı",
      "Gelişmiş arama filtreleri",
      "Yeteneklerle doğrudan iletişim",
      "Proje yönetim araçları",
    ],
  },
  {
    icon: Users,
    title: "Oyuncular",
    description: "Profesyonel profilinizi oluşturun, çalışmalarınızı sergileyin ve heyecan verici fırsatlara başvurun.",
    features: [
      "Profesyonel portfolyo",
      "Anlık casting bildirimleri",
      "Self-tape gönderim araçları",
      "Kariyer kaynakları ve rehberlik",
    ],
  },
  {
    icon: Briefcase,
    title: "Ajanlar",
    description: "Yetenek kadronuzu yönetin, başvuruları takip edin ve casting fırsatlarıyla bağlantı kurun.",
    features: [
      "Çoklu müşteri yönetimi",
      "Başvuru takibi",
      "Sözleşme yönetimi",
      "Sektör ağı oluşturma",
    ],
  },
];

const MemberTypes = () => {
  return (
    <section id="members" className="py-20">
      <div className="container">
        <div className="text-left max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hemen Üye Ol
          </h2>
          <p className="text-lg text-muted-foreground">
            İster casting yönetmeni, ister oyuncu, ister ajan olun, ecast sizin için mükemmel üyeliğe sahiptir
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memberTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Daha Fazla Bilgi
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemberTypes;
