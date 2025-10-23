import { useState } from "react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [showMore, setShowMore] = useState(false);

  const faqs = [
    {
      question: "ecast nedir?",
      answer: "ecast, casting yönetmenleri, oyuncular ve ajanlar için kapsamlı bir dijital platformdur.",
    },
    {
      question: "Ücretsiz üye olabilir miyim?",
      answer: "Evet, ücretsiz üyelik ile temel özelliklere erişebilirsiniz.",
    },
    {
      question: " NASIL casting çağrısı yayınlayabilirim?",
      answer: "Özel panelinizden kolayca yeni casting çağrısı oluşturabilirsiniz.",
    },
    {
      question: "Portfolyo nasıl güncellenir?",
      answer: "Profil bölümünüzden portfolyo resimlerinizi ve videolarınızı yükleyebilirsiniz.",
    },
    {
      question: "Ajan olarak nasıl üye olabilirim?",
      answer: "Kayıt sayfasında ajans tipini seçerek üye olabilirsiniz.",
    },
    {
      question: "Fiyatlandırma nasıl çalışır?",
      answer: "Farklı paketlerimiz bulunmakta, detaylar için lütfen bizimle iletişime geçin.",
    },
  ];

  const displayedFaqs = showMore ? faqs : faqs.slice(0, 4);

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

        <div className="max-w-4xl mx-auto space-y-6">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>

        {faqs.length > 4 && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowMore(!showMore)} variant="default">
              {showMore ? "Daha Az Göster" : "Daha Fazla Soru"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
