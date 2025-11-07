import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Logo scaleOnLoad={false} size="xlarge" />
            <p className="text-sm opacity-90">
              Türkiye'nin en kapsamlı casting platformu
            </p>
          </div>

          {/* Üyelikler */}
          <div>
            <h3 className="font-taviraj text-lg mb-4">Üyelikler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/uyelikler/cast-direktorleri" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Cast Direktörleri
                </Link>
              </li>
              <li>
                <Link to="/uyelikler/oyuncular" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Oyuncular
                </Link>
              </li>
              <li>
                <Link to="/uyelikler/menajerler" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Menajerler
                </Link>
              </li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="font-taviraj text-lg mb-4">Kurumsal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hakkimizda" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/haberler" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Haberler & Tavsiyeler
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="font-taviraj text-lg mb-4">Destek</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  SSS
                </a>
              </li>
              <li>
                <Link to="/iletisim" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Yardım Merkezi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>&copy; 2024 ecast. Tüm hakları saklıdır.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline hover:opacity-100 transition-opacity">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:underline hover:opacity-100 transition-opacity">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
