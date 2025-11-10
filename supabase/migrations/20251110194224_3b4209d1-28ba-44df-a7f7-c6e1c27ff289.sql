-- Create news table for managing articles
CREATE TABLE public.news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  image_url TEXT,
  slug TEXT UNIQUE,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create pricing plans table for managing membership plans
CREATE TABLE public.pricing_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  plan_type TEXT NOT NULL CHECK (plan_type IN ('cast_directors', 'actors', 'managers')),
  plan_name TEXT NOT NULL CHECK (plan_name IN ('freemium', 'premium')),
  features TEXT[] NOT NULL,
  price DECIMAL(10, 2),
  is_highlighted BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(plan_type, plan_name)
);

-- Create about features table for managing about section features
CREATE TABLE public.about_features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  feature_text TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_features ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view published news" ON public.news
  FOR SELECT USING (published = true);

CREATE POLICY "Anyone can view pricing plans" ON public.pricing_plans
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view active about features" ON public.about_features
  FOR SELECT USING (active = true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for updated_at
CREATE TRIGGER set_updated_at_news
  BEFORE UPDATE ON public.news
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_pricing_plans
  BEFORE UPDATE ON public.pricing_plans
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_about_features
  BEFORE UPDATE ON public.about_features
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Insert initial data for news
INSERT INTO public.news (title, excerpt, date, category, read_time, slug) VALUES
('İlk Casting Çağrınıza Nasıl Hazırlanırsınız', 'İlk profesyonel casting deneyimlerine hazırlanan oyuncular için önemli ipuçları ve tavsiyeler.', '2024-03-15', 'Tavsiye', '5 dk okuma', 'ilk-casting-cagriniza-nasil-hazirlanirsiniz'),
('Tiyatroda Dijital Casting''in Geleceği', 'Teknolojinin canlı performansta yetenek keşfetme ve seçme şeklimizde nasıl devrim yarattığını keşfedin.', '2024-03-10', 'Sektör Haberleri', '7 dk okuma', 'tiyatroda-dijital-castingin-gelecegi'),
('Profesyonel Oyunculuk Portfolyonuzu Oluşturma', 'Casting yönetmenlerinin dikkatini çeken öne çıkan bir portfolyo oluşturmak için kapsamlı bir rehber.', '2024-03-05', 'Tavsiye', '6 dk okuma', 'profesyonel-oyunculuk-portfolyonuzu-olusturma');

-- Insert initial data for pricing plans (Cast Directors)
INSERT INTO public.pricing_plans (plan_type, plan_name, features, display_order) VALUES
('cast_directors', 'freemium', ARRAY['Profil oluşturma', 'Aylık 5 arama hakkı', 'Kısıtlı filtre', 'Veritabanına kaydolma'], 1),
('cast_directors', 'premium', ARRAY['Sınırsız oyuncu arama', 'Sınırsız filtre kullanımı', 'Yeni rol ilanı açma', 'Başvuru alma ve yönetme', 'Proje oluşturma'], 2);

-- Insert initial data for pricing plans (Actors)
INSERT INTO public.pricing_plans (plan_type, plan_name, features, display_order) VALUES
('actors', 'freemium', ARRAY['Profil oluşturma', '2 adet resim koyma hakkı'], 1),
('actors', 'premium', ARRAY['6 resim', '3 video', 'İlanları görüntüleme', 'Başvuru yapma ve takip etme'], 2);

-- Insert initial data for pricing plans (Managers)
INSERT INTO public.pricing_plans (plan_type, plan_name, features, display_order) VALUES
('managers', 'freemium', ARRAY['5 oyuncuya kadar portföy yönetimi', 'Temel arama ve filtreleme'], 1),
('managers', 'premium', ARRAY['Sınırsız oyuncu portföyü yönetimi', 'Gelen proje ilanlarını görüntüleme', 'Oyuncular adına doğrudan başvuru yapma', 'Raporlama araçları'], 2);

-- Insert initial data for about features
INSERT INTO public.about_features (feature_text, display_order) VALUES
('Yeni rol fırsatları için ilanlar', 1),
('Profesyonel portfolyo vitrini', 2),
('Gelişmiş arama filtreleri', 3),
('Güncel ve doğru bilgiye erişim', 4),
('Yeni yetenek keşifleri', 5),
('Sadece sektör profesyonelleri', 6);