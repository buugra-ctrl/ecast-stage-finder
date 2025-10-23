import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCasting from "@/assets/hero-casting.jpg";

const slides = [
  {
    image: heroCasting,
    title: "Casting'in Geleceğine Hoş Geldiniz",
    subtitle: "Sinema, TV ve tiyatroda yeteneği fırsatla buluşturuyoruz",
  },
  {
    image: heroCasting,
    title: "Casting Sürecinizi Dijitalleştirin",
    subtitle: "Seçmeleri kolaylaştırın ve istisnai yetenekleri verimli bir şekilde keşfedin",
  },
  {
    image: heroCasting,
    title: "Binlerce Sektör Profesyoneline Katılın",
    subtitle: "Oyuncular, casting yönetmenleri ve ajanlar tek bir platformda bir arada",
  },
];

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => {
        setShowSlider(true);
      };

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (showSlider) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [showSlider]);
