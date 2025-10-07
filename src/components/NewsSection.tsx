import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How to Prepare for Your First Casting Call",
    excerpt: "Essential tips and advice for actors preparing for their first professional casting experience.",
    date: "March 15, 2024",
    category: "Advice",
    readTime: "5 min read",
  },
  {
    title: "The Future of Digital Casting in Theatre",
    excerpt: "Exploring how technology is revolutionizing the way we discover and cast talent in live performance.",
    date: "March 10, 2024",
    category: "Industry News",
    readTime: "7 min read",
  },
  {
    title: "Building Your Professional Acting Portfolio",
    excerpt: "A comprehensive guide to creating a standout portfolio that catches casting directors' attention.",
    date: "March 5, 2024",
    category: "Advice",
    readTime: "6 min read",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              News & Advice
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with industry insights and expert guidance
            </p>
          </div>
          <Button variant="outline" className="group">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
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
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                  Read More
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
