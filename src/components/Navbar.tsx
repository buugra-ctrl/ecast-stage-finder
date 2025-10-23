import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 h-16 md:h-16 overflow-visible">
      <nav ref={navRef} className="container flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/">
            <Logo />
          </a>

          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
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
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-[#002b54]/90">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Haberler & Tavsiyeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
