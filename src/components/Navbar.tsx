import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import membershipImage from "@/assets/hero-casting.jpg";
import fotoMenajer2 from "@/assets/Foto_menajer2.jpg";
import fotoOyuncu from "@/assets/Foto_oyuncu.jpg";
import fotoCastDire from "@/assets/Foto_castdire.jpg";

const memberImages = {
  'cast-direktorleri': fotoMenajer2,
  'oyuncular': fotoOyuncu,
  'menajerler': fotoCastDire,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(memberImages['cast-direktorleri']);
  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 h-16 md:h-16 overflow-visible transition-all duration-300">
      <nav ref={navRef} className="container flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/">
            <Logo />
          </a>

          <div className="hidden md:flex gap-6 items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Üyelikler
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-[240px_1fr]">
                      <div className="row-span-3">
                        <img
                          src={currentImage}
                          alt="Üyelikler"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <Link to="/uyelikler/cast-direktorleri" onMouseEnter={() => setCurrentImage(memberImages['cast-direktorleri'])}>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cast Direktörleri</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Projeleriniz için kriterlerinizi girin ve en iyi yetenekleri keşfedin
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/uyelikler/oyuncular" onMouseEnter={() => setCurrentImage(memberImages['oyuncular'])}>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Oyuncular</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Profesyonel profilinizi oluşturun ve sektörde yerinizi edinin
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link to="/uyelikler/menajerler" onMouseEnter={() => setCurrentImage(memberImages['menajerler'])}>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Menajerler</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Oyuncu kataloğunuzu yönetin ve fırsatlara erişin
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {isHomePage ? (
              <>
                <a href="#about" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  Hakkımızda
                </a>
                <Link to="/haberler" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  Haberler & Tavsiyeler
                </Link>
                <a href="#faq" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  SSS
                </a>
                <Link to="/iletisim" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  İletişim
                </Link>
              </>
            ) : (
              <>
                <Link to="/hakkimizda" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  Hakkımızda
                </Link>
                <Link to="/haberler" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  Haberler & Tavsiyeler
                </Link>
                <Link to="/iletisim" className="text-sm font-normal text-[#002b54] hover:bg-[#E2E6E8] transition-colors duration-200">
                  İletişim
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="contrastDark" className="hidden md:inline-flex">
            GİRİŞ YAP
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
            <Link to="/uyelikler/cast-direktorleri" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Cast Direktörleri
            </Link>
            <Link to="/uyelikler/oyuncular" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Oyuncular
            </Link>
            <Link to="/uyelikler/menajerler" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Menajerler
            </Link>
            {isHomePage ? (
              <>
                <a href="#about" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
                  Hakkımızda
                </a>
                <a href="#faq" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
                  SSS
                </a>
              </>
            ) : (
              <Link to="/hakkimizda" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
                Hakkımızda
              </Link>
            )}
            <Link to="/haberler" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              Haberler & Tavsiyeler
            </Link>
            <Link to="/iletisim" className="text-sm font-medium text-white hover:text-gray-200 transition-colors duration-200">
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
