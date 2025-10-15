import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Casting Yönetmeni",
    company: "Thames Productions",
    content: "ecast, casting sürecimizi tamamen dönüştürdü. Platform sezgisel, verimli ve başka türlü bulamayacağımız inanılmaz yetenekleri keşfetmemize yardımcı oldu.",
    rating: 5,
  },
  {
    name: "James Cooper",
    role: "Oyuncu",
    company: "Stage & Screen",
    content: "Bir oyuncu olarak ecast benim için pek çok fırsat açtı. Casting yönetmenleriyle doğrudan bağlantı ve burada yayınlanan rollerin kalitesi olağanüstü.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Yetenek Ajanı",
    company: "Stellar Talent Agency",
    content: "Birden fazla müşteriyi yönetmek hiç bu kadar kolay olmamıştı. ecast'in araçları başvuruları takip etmeme, programları yönetmeme ve yeteneklerimi doğru fırsatlarla bağlantı kurmama yardımcı oluyor.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Tiyatro Yönetmeni",
    company: "Royal Arts Theatre",
    content: "ecast'teki yetenek kalitesi istisnai. Son üç prodüksiyonumuzu tamamen platform üzerinden harika sonuçlarla oluşturduk.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Üyelerimiz Ne Diyor
          </h2>
          <p className="text-lg text-muted-foreground">
            ecast'te başarılı olan casting yönetmenlerinden, oyunculardan ve ajanslardan dinleyin
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      
                      <p className="text-lg mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} · {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
