import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsManagement from "@/components/admin/NewsManagement";
import PricingManagement from "@/components/admin/PricingManagement";
import AboutFeaturesManagement from "@/components/admin/AboutFeaturesManagement";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-8">İçerik Yönetimi</h1>
        
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="news">Haberler</TabsTrigger>
            <TabsTrigger value="pricing">Fiyatlandırma</TabsTrigger>
            <TabsTrigger value="features">Özellikler</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="mt-6">
            <NewsManagement />
          </TabsContent>
          
          <TabsContent value="pricing" className="mt-6">
            <PricingManagement />
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <AboutFeaturesManagement />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
