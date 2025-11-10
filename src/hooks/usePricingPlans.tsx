import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePricingPlans = (planType: 'cast_directors' | 'actors' | 'managers') => {
  return useQuery({
    queryKey: ["pricing-plans", planType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .eq("plan_type", planType)
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};
