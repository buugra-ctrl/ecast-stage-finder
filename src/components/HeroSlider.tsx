import { Button } from "@/components/ui/button";
import Guzel1_banner1 from "@/assets/Guzel1_banner1.png";
import Guzel2_banner2 from "@/assets/Guzel2_banner2.png";
import Guzel3_banner3 from "@/assets/Guzel3_banner3.png";

const HeroSlider = () => {
	return (
		<>
			<section className="relative w-full h-[600px] md:h-[700px]">
				<div
					className="absolute inset-0 bg-cover bg-center bg-blue-800"
					style={{ backgroundImage: `url(${Guzel1_banner1})` }}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
				</div>
				<div className="relative container h-full flex items-center">
					<div className="max-w-2xl text-white space-y-6">
						<h1 className="text-4xl md:text-6xl font-bold leading-tight">
							Süreçler dijitalleşiyor, hız, şeffaflık ve erişilebilirlik kazanıyor.
						</h1>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" variant="contrastLight">
								Hemen Üye Ol
							</Button>
							<Button size="lg" variant="outline" className="border-[#002b54] text-[#002b54] bg-transparent hover:border-[#eef1f4] hover:text-[#002b54] active:border-[#eef1f4] active:text-[#002b54] text-white border-white hover:bg-white/20 hover:border-white">
								Daha Fazla Bilgi
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="relative w-full h-[600px] md:h-[700px]">
				<div
					className="absolute inset-0 bg-cover bg-center bg-green-800"
					style={{ backgroundImage: `url(${Guzel2_banner2})` }}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
				</div>
				<div className="relative container h-full flex items-center">
					<div className="max-w-2xl text-white space-y-6">
						<h1 className="text-4xl md:text-6xl font-bold leading-tight">
							Oyuncular, cast direktörleri ve menajerler için tek dijital buluşma noktası.
						</h1>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" variant="contrastLight">
								Hemen Üye Ol
							</Button>
							<Button size="lg" variant="outline" className="border-[#002b54] text-[#002b54] bg-transparent hover:border-[#eef1f4] hover:text-[#002b54] active:border-[#eef1f4] active:text-[#002b54] text-white border-white hover:bg-white/20 hover:border-white">
								Daha Fazla Bilgi
							</Button>
						</div>
					</div>
				</div>
			</section>

			<section className="relative w-full h-[600px] md:h-[700px]">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${Guzel3_banner3})` }}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
				</div>
				<div className="relative container h-full flex items-center">
					<div className="max-w-2xl text-white space-y-6">
						<h1 className="text-4xl md:text-6xl font-bold leading-tight">
							Yetenekli oyuncu, doğru proje, şeffaf yönetim.
						</h1>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" variant="contrastLight">
								Hemen Üye Ol
							</Button>
							<Button size="lg" variant="outline" className="border-[#002b54] text-[#002b54] bg-transparent hover:border-[#eef1f4] hover:text-[#002b54] active:border-[#eef1f4] active:text-[#002b54] text-white border-white hover:bg-white/20 hover:border-white">
								Daha Fazla Bilgi
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSlider;
