import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Casting Director",
    company: "Thames Productions",
    content: "ecast has completely transformed how we conduct casting. The platform is intuitive, efficient, and has helped us discover incredible talent we wouldn't have found otherwise.",
    rating: 5,
  },
  {
    name: "James Cooper",
    role: "Actor",
    company: "Stage & Screen",
    content: "As an actor, ecast has opened up so many opportunities for me. The direct connection with casting directors and the quality of roles posted here is outstanding.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Talent Agent",
    company: "Stellar Talent Agency",
    content: "Managing multiple clients has never been easier. ecast's tools help me track submissions, manage schedules, and connect my talent with the right opportunities.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Theatre Director",
    company: "Royal Arts Theatre",
    content: "The quality of talent on ecast is exceptional. We've cast our last three productions entirely through the platform with outstanding results.",
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
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from casting directors, actors, and agents who are thriving on ecast
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
