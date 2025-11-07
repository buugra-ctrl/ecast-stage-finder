import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqs = [
    {
      question: "ecast nedir ve kimler kullanabilir?",
      answer: "ecast; oyuncular, cast direktörleri ve menajerlerin bir arada bulunduğu, sinema, dizi ve tiyatro projelerinin cast süreçlerini dijitalleştiren profesyonel bir platformdur. Sadece belirli kriterleri karşılayan profesyonel oyuncular kabul edilir.",
    },
    {
      question: "Üyelik ücretli mi?",
      answer: "ecast, farklı kullanıcı tipleri için ayrı üyelik planları sunar. Oyuncular için temel profil oluşturma ücretsizdir; ancak gelişmiş görünürlük, video yükleme ve ilan başvuru hakları ücretli üyelik paketindedir. Cast direktörleri ve menajerler için profesyonel erişim planları hakkında bilgileri ilgili sayfalardan erişebilirsiniz. Üyelik ücretimiz aylık ya da yıllık bazda, kredi kartı ile ödenmektedir.",
    },
    {
      question: "Üyelik kritlerleri nelerdir?",
      answer: "ecast, yalnızca sektör profesyonellerine hizmet etmeyi ve casting süreçlerinde güvenilir bir ortam oluşturmayı hedefleyen bir platformdur. Bu nedenle, hem oyunculardan hem menajerlerden hem de cast direktörlerinden profesyonelliklerini kanıtlayan belirli kriterleri karşılamalarını bekleriz. Oyuncular için bu kriterler eğitim, deneyim veya referans, cast direktörleri ve menajerler için ise bir tüzel kişiliğe bağlı olarak çalışma şartını içerir.",
    },
    {
      question: "Yetkinlik doğrulama süreci nasıl ilerliyor?",
      answer: "Yetkinlik doğrulama başvurusu sırasında ilettiğin belgeler ve bilgiler, ekibimiz tarafından titizlikle incelenir. Ortalama 5 iş günü içinde doğrulama süreci tamamlanır ve sonucu sana e-posta veya bildirim yoluyla iletiriz.",
    },
    {
      question: "Verilerin güvenliği ve gizliliği nasıl sağlanıyor?",
      answer: "Tüm kullanıcı verileri KVKK standartlarına uygun şekilde saklanır. Profil bilgilerin, yalnızca cast direktörleri ve menajerler tarafından görüntülenir; üçüncü taraflarla kullanıcı rızası olmadan paylaşılmaz. Ancak dilersen, oluşturduğun profil için sana özel bağlantı adresi yaratabilir, bunu üçüncü taraflarla paylaşabilirsin.",
    },
    {
      question: "ecast, cast ajansı mıdır?",
      answer: "Hayır. ecast bir ajans değildir; menajerlerin, cast direktörlerinin ve oyuncuların eşit koşullarda yer alabildiği bağımsız bir dijital platformdur.\nSektör profesyonelleri için geliştirilmiş olan ecast, casting süreçlerini optimize etmek, dijitalleştirmek ve demokratikleştirmek amacıyla kurulmuştur. Hiçbir zaman oyuncu temsil etmez, herhangi bir kullanıcıya ayrıcalık tanımaz ve üyelerine iş bulma taahhütü veremez.",
    },
    {
      question: "Profesyonel olmayan oyuncular başvuramaz mı?",
      answer: "Şimdilik hayır. ecast yalnızca belirli kriterleri karşılayan profesyonelleri kabul eder. Ancak gelecekte genç yetenekler için ayrı bir \"gelişim modu\" planlanmaktadır.",
    },
  ];

  const displayedFaqs = showMore ? faqs : faqs.slice(0, 5);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-light">
            Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-muted-foreground">
            En çok merak edilen sorulara hızlı cevaplar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <div key={index} className="bg-muted/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-light">{faq.question}</h3>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {faqs.length > 4 && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowMore(!showMore)} variant="contrastLight">
              {showMore ? "Daha Az Göster" : "Daha Fazla"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
