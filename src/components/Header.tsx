import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ecast-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center">
            <img src={logo} alt="ecast" className="h-12" />
          </a>
          
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Haberler & Tavsiyeler
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Giriş Yap
          </Button>
          <Button size="sm">
            Hemen Üye Ol
          </Button>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Hakkımızda
            </a>
            <a href="#members" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Üyelikler
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Referanslar
            </a>
            <a href="#news" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Haberler & Tavsiyeler
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
