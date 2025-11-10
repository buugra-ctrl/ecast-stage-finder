import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, X } from "lucide-react";

const PricingManagement = () => {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    plan_type: "cast_directors" as "cast_directors" | "actors" | "managers",
    plan_name: "freemium" as "freemium" | "premium",
    features: [] as string[],
    price: null as number | null,
    display_order: 0,
  });
  const [newFeature, setNewFeature] = useState("");

  const { data: plans = [] } = useQuery({
    queryKey: ["admin-pricing"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .order("plan_type", { ascending: true })
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (data: typeof formData & { id: string }) => {
      const { error } = await supabase
        .from("pricing_plans")
        .update(data)
        .eq("id", data.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pricing"] });
      queryClient.invalidateQueries({ queryKey: ["pricing-plans"] });
      toast.success("Plan güncellendi");
      resetForm();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from("pricing_plans").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pricing"] });
      queryClient.invalidateQueries({ queryKey: ["pricing-plans"] });
      toast.success("Plan eklendi");
      resetForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("pricing_plans").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pricing"] });
      queryClient.invalidateQueries({ queryKey: ["pricing-plans"] });
      toast.success("Plan silindi");
    },
  });

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      plan_type: "cast_directors",
      plan_name: "freemium",
      features: [],
      price: null,
      display_order: 0,
    });
    setNewFeature("");
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setFormData({
      plan_type: item.plan_type,
      plan_name: item.plan_name,
      features: item.features || [],
      price: item.price,
      display_order: item.display_order,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate({ ...formData, id: editingId });
    } else {
      createMutation.mutate(formData);
    }
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData({ ...formData, features: [...formData.features, newFeature.trim()] });
      setNewFeature("");
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const getPlanTypeLabel = (type: string) => {
    const labels = {
      cast_directors: "Cast Direktörleri",
      actors: "Oyuncular",
      managers: "Menajerler",
    };
    return labels[type as keyof typeof labels];
  };

  const getPlanNameLabel = (name: string) => {
    return name === "freemium" ? "Freemium" : "Premium";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Plan Düzenle" : "Yeni Plan Ekle"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="plan_type">Üyelik Tipi</Label>
                <Select
                  value={formData.plan_type}
                  onValueChange={(value: any) => setFormData({ ...formData, plan_type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cast_directors">Cast Direktörleri</SelectItem>
                    <SelectItem value="actors">Oyuncular</SelectItem>
                    <SelectItem value="managers">Menajerler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="plan_name">Plan Adı</Label>
                <Select
                  value={formData.plan_name}
                  onValueChange={(value: any) => setFormData({ ...formData, plan_name: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freemium">Freemium</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Özellikler</Label>
              <div className="space-y-2">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input value={feature} disabled className="flex-1" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFeature(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Yeni özellik ekle"
                  />
                  <Button type="button" onClick={addFeature}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Fiyat (opsiyonel)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price || ""}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value ? parseFloat(e.target.value) : null })}
                />
              </div>
              <div>
                <Label htmlFor="display_order">Sıra</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit">
                {editingId ? "Güncelle" : <><Plus className="w-4 h-4 mr-2" /> Ekle</>}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  İptal
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {plans.map((item) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {getPlanTypeLabel(item.plan_type)} - {getPlanNameLabel(item.plan_name)}
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {item.features.map((feature: string, idx: number) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  {item.price && <p className="mt-2 text-sm font-semibold">Fiyat: {item.price} TL</p>}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(item)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteMutation.mutate(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingManagement;
