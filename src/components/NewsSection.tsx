import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const NewsSection = () => {
  const { data: articles = [] } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("published", true)
        .order("date", { ascending: false })
        .limit(3);
      
      if (error) throw error;
      
      return data.map(article => ({
        title: article.title,
        excerpt: article.excerpt,
        date: new Date(article.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
        category: article.category,
        readTime: article.read_time,
      }));
    },
  });
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
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-[#002b54] hover:bg-transparent hover:text-[#00579e] hover:border-b hover:border-[#002b54] active:text-[#004884] active:border-b active:border-[#002b54] rounded-none">
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
