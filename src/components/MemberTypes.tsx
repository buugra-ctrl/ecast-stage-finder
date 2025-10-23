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
    <section id="members" className="py-20 bg-[#002b54]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Üyelikler
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memberTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card key={index} className="bg-[#002b54] border-white text-white hover:shadow-xl transition-shadow min-h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{type.title}</CardTitle>
                  <CardDescription className="text-base text-white/80">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full bg-white text-[#002b54] hover:bg-white/90">
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
