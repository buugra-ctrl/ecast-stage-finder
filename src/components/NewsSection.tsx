import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "İlk Casting Çağrınıza Nasıl Hazırlanırsınız",
    excerpt: "İlk profesyonel casting deneyimlerine hazırlanan oyuncular için önemli ipuçları ve tavsiyeler.",
    date: "15 Mart 2024",
    category: "Tavsiye",
    readTime: "5 dk okuma",
  },
  {
    title: "Tiyatroda Dijital Casting'in Geleceği",
    excerpt: "Teknolojinin canlı performansta yetenek keşfetme ve seçme şeklimizde nasıl devrim yarattığını keşfedin.",
    date: "10 Mart 2024",
    category: "Sektör Haberleri",
    readTime: "7 dk okuma",
  },
  {
    title: "Profesyonel Oyunculuk Portfolyonuzu Oluşturma",
    excerpt: "Casting yönetmenlerinin dikkatini çeken öne çıkan bir portfolyo oluşturmak için kapsamlı bir rehber.",
    date: "5 Mart 2024",
    category: "Tavsiye",
    readTime: "6 dk okuma",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Haberler & Tavsiyeler
            </h2>
            <p className="text-lg text-muted-foreground">
              Sektör içgörüleri ve uzman rehberliği ile güncel kalın
            </p>
          </div>
          <Link to="/haberler">
            <Button variant="outline" className="group hover:text-[#00579e] hover:underline active:text-[#004884] active:underline">
              Tüm Makaleleri Görüntüle
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-[#002b54] hover:text-[#00579e] hover:underline rounded-none">
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4  transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
