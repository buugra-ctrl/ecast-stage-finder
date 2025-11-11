import checkIcon from "@/assets/check-icon.png";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
const AboutSection = () => {
  const {
    data: features = []
  } = useQuery({
    queryKey: ["about-features"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("about_features").select("*").eq("active", true).order("display_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const midPoint = Math.ceil(features.length / 2);
  const firstColumn = features.slice(0, midPoint);
  const secondColumn = features.slice(midPoint);
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-light">
            ecast nedir?
          </h2>
          <p className="text-lg text-muted-foreground">
            Cast direktörleri, oyuncular ve menajerlerin birbirine bağlayarak, oyuncu seçme süreçlerini dijitalleştiren ve demokratikleştiren, sektör profesyonellerine özel Türkiye'nin ilk dijital casting platformu!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 ml-16">
              {firstColumn.map(feature => <div key={feature.id} className="flex items-start gap-2 mx-[20px]">
                  <img src={checkIcon} alt="check" className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground px-0 mx-0">{feature.feature_text}</span>
                </div>)}
            </div>
            <div className="space-y-4 ml-16">
              {secondColumn.map(feature => <div key={feature.id} className="flex items-start gap-2">
                  <img src={checkIcon} alt="check" className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{feature.feature_text}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;