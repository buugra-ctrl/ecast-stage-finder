import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm h-16 md:h-16 overflow-visible">
      <nav ref={navRef} className="container flex h-full items-center justify-center px-4">
        <div className="flex flex-col items-center gap-2">
          <a href="/">
            <Logo scaleMultiplier={3} />
          </a>
          <div className="text-center">
            <h1 className="text-lg font-light text-[#002b54]">ecast nedir?</h1>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors duration-200">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors duration-200">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors duration-200">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-[#002b54] hover:text-[#001f3d] transition-colors duration-200">
              Haberler & Tavsiyeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
