import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Iletisim = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-12 bg-muted/30">
          <div className="container">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl md:text-6xl font-light mb-4">
                İletişim
              </h1>
              <p className="text-lg text-muted-foreground">
                Sorularınız veya önerileriniz için bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light mb-6">İletişim Bilgileri</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-[#002b54]/10 flex items-center justify-center">
                            <Mail className="h-6 w-6 text-[#002b54]" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">E-posta</h3>
                            <p className="text-muted-foreground">info@ecast.com.tr</p>
                            <p className="text-muted-foreground">destek@ecast.com.tr</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-[#002b54]/10 flex items-center justify-center">
                            <Phone className="h-6 w-6 text-[#002b54]" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Telefon</h3>
                            <p className="text-muted-foreground">+90 (212) 123 45 67</p>
                            <p className="text-sm text-muted-foreground">Hafta içi 09:00 - 18:00</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-[#002b54]/10 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-[#002b54]" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Adres</h3>
                            <p className="text-muted-foreground">
                              Maslak Mah. Büyükdere Cad.<br />
                              No: 255 Nurol Plaza B02<br />
                              34398 Sarıyer / İstanbul
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-4">Çalışma Saatleri</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p>Cumartesi: 10:00 - 15:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>

              <div className="h-[600px]">
                <Card className="h-full">
                  <CardContent className="p-0 h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7939900745917!2d29.01145631574677!3d41.08456797929248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e6f2e1f3e1%3A0x2e9e5e3e5e3e5e3e!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%20No%3A255%2C%2034398%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: '0.5rem' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ecast Ofis Konumu"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Iletisim;
