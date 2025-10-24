import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/ecast-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${scrolled ? "bg-white/90 shadow-sm" : "bg-black/10 hover:bg-black/20"}`}>
      <nav ref={navRef} className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center">
            <img src={logo} alt="ecast" className="h-12" />
          </a>
          
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Haberler & Tavsiyeler
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="contrastDark" className="hidden md:inline-flex">
            Giriş Yap
          </Button>
          <Button variant="contrastLight">
            Hemen Üye Ol
          </Button>
          
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-xl p-2 ${scrolled ? "text-[#002b54]" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors">
              Haberler & Tavsiyeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
