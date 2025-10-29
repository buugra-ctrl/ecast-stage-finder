import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Guzel_1_banner1 from "@/assets/Guzel_1_banner1.png";
import Guzel_2_banner2 from "@/assets/Guzel_2_banner2.png";
import Guzel_3_banner3 from "@/assets/Guzel_3_banner3.png";

const slides = [
	{
		image: Guzel_1_banner1,
		title: "Süreçler dijitalleşiyor, hız, şeffaflık ve erişilebilirlik kazanıyor.",
	},
	{
		image: Guzel_2_banner2,
		title: "Oyuncular, cast direktörleri ve menajerler için tek dijital buluşma noktası.",
	},
	{
		image: Guzel_3_banner3,
		title: "Yetenekli oyuncu, doğru proje, şeffaf yönetim.",
	},
];

const HeroSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === currentSlide ? "opacity-100" : "opacity-0"
					}`}
				>
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: `url(${slide.image})` }}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
					</div>

					<div className="relative container h-full flex items-center">
						<div className="max-w-2xl text-white space-y-6 animate-fade-in">
							<h1 className="text-4xl md:text-6xl font-bold leading-tight">
								{slide.title}
							</h1>
							<div className="flex flex-wrap gap-4">
								<Button
									size="lg"
									className="bg-[#002b54] text-white hover:bg-[#00579e] active:bg-[#004884]"
								>
									Hemen Üye Ol
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-white text-white hover:bg-white/10"
								>
									Daha Fazla Bilgi
								</Button>
							</div>
						</div>
					</div>
				</div>
			))}

			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
				aria-label="Previous slide"
			>
				<ChevronLeft className="h-6 w-6" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
				aria-label="Next slide"
			>
				<ChevronRight className="h-6 w-6" />
			</button>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`h-2 rounded-full transition-all ${
							index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default HeroSlider;
