-- Fix function search path security issue
-- Drop triggers first
DROP TRIGGER IF EXISTS set_updated_at_news ON public.news;
DROP TRIGGER IF EXISTS set_updated_at_pricing_plans ON public.pricing_plans;
DROP TRIGGER IF EXISTS set_updated_at_about_features ON public.about_features;

-- Drop and recreate function with proper search_path
DROP FUNCTION IF EXISTS public.handle_updated_at();

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$;

-- Recreate triggers
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