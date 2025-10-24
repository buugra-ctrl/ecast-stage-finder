import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "İlk Casting Çağrınıza Nasıl Hazırlanırsınız",
    excerpt: "İlk profesyonel casting deneyimlerine hazırlanan oyuncular için önemli ipuçları ve tavsiyeler.",
    date: "15 Mart 2024",
    category: "Tavsiye",
    readTime: "5 dk okuma",
    content: "Detaylı makale içeriği buraya gelecek...",
  },
  {
    title: "Tiyatroda Dijital Casting'in Geleceği",
    excerpt: "Teknolojinin canlı performansta yetenek keşfetme ve seçme şeklimizde nasıl devrim yarattığını keşfedin.",
    date: "10 Mart 2024",
    category: "Sektör Haberleri",
    readTime: "7 dk okuma",
    content: "Detaylı makale içeriği buraya gelecek...",
  },
  {
    title: "Profesyonel Oyunculuk Portfolyonuzu Oluşturma",
    excerpt: "Casting yönetmenlerinin dikkatini çeken öne çıkan bir portfolyo oluşturmak için kapsamlı bir rehber.",
    date: "5 Mart 2024",
    category: "Tavsiye",
    readTime: "6 dk okuma",
    content: "Detaylı makale içeriği buraya gelecek...",
  },
  {
    title: "Sektördeki En İyi Pratikler",
    excerpt: "Profesyonel casting süreçlerinde başarılı olmak için bilmeniz gereken tüm detaylar.",
    date: "1 Mart 2024",
    category: "Tavsiye",
    readTime: "8 dk okuma",
    content: "Detaylı makale içeriği buraya gelecek...",
  },
  {
    title: "Yapay Zeka ve Casting",
    excerpt: "Casting süreçlerinde yapay zekanın rolü ve geleceğe dair öngörüler.",
    date: "25 Şubat 2024",
    category: "Sektör Haberleri",
    readTime: "6 dk okuma",
    content: "Detaylı makale içeriği buraya gelecek...",
  },
  {
    title: "Yeni Başlayanlar için Rehber",
    excerpt: "Oyunculuk kariyerinize başlarken bilmeniz gereken her şey.",
    date: "20 Şubat 2024",
    category: "Tavsiye",
    readTime: "10 dk okuma",
    content: "Detaylı makale içeriği buraya gelecek...",
  },
];

const Haberler = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-light">Haberler & Tavsiyeler</h1>
              <p className="text-xl text-muted-foreground">
                Sektör içgörüleri ve uzman rehberliği ile güncel kalın
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 w-fit">
                      {article.category}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent">
                      Devamını Oku
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Haberler;
