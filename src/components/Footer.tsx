import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: "Oyuncular İçin", href: "#" },
      { name: "Casting Yönetmenleri İçin", href: "#" },
      { name: "Ajanlar İçin", href: "#" },
      { name: "Fiyatlandırma", href: "#" },
    ],
    Kaynaklar: [
      { name: "Haberler & Tavsiyeler", href: "#news" },
      { name: "Yardım Merkezi", href: "#" },
      { name: "Başarı Hikayeleri", href: "#testimonials" },
      { name: "Sektör İçgörüleri", href: "#" },
    ],
    Şirket: [
      { name: "Hakkımızda", href: "#about" },
      { name: "Kariyer", href: "#" },
      { name: "İletişim", href: "#" },
      { name: "Basın", href: "#" },
    ],
    Yasal: [
      { name: "Hizmet Koşulları", href: "#" },
      { name: "Gizlilik Politikası", href: "#" },
      { name: "Çerez Politikası", href: "#" },
      { name: "Erişilebilirlik", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ecast
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Sinema, TV ve tiyatroda yeteneği fırsatla buluşturuyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ecast. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@ecast.com" className="hover:text-foreground transition-colors">
                hello@ecast.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
