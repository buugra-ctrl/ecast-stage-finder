import { useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img
          src="/hero-fallback.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Casting'in Geleceğine Hoş Geldiniz
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Sinema, TV ve tiyatroda yeteneği fırsatla buluşturuyoruz
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#002b54] text-white px-6 py-3 rounded-full uppercase tracking-wide font-medium hover:bg-[#001f3d] transition-colors duration-200">
              Hemen Üye Ol
            </button>
            <button className="bg-white text-[#002b54] px-6 py-3 rounded-full uppercase tracking-wide font-medium hover:bg-gray-100 transition-colors duration-200">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
