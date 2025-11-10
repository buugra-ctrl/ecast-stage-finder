import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Pencil, Trash2, Plus } from "lucide-react";

const AboutFeaturesManagement = () => {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    feature_text: "",
    display_order: 0,
    active: true,
  });

  const { data: features = [] } = useQuery({
    queryKey: ["admin-features"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("about_features")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (data: typeof formData & { id: string }) => {
      const { error } = await supabase
        .from("about_features")
        .update(data)
        .eq("id", data.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-features"] });
      queryClient.invalidateQueries({ queryKey: ["about-features"] });
      toast.success("Özellik güncellendi");
      resetForm();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from("about_features").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-features"] });
      queryClient.invalidateQueries({ queryKey: ["about-features"] });
      toast.success("Özellik eklendi");
      resetForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("about_features").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-features"] });
      queryClient.invalidateQueries({ queryKey: ["about-features"] });
      toast.success("Özellik silindi");
    },
  });

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      feature_text: "",
      display_order: 0,
      active: true,
    });
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setFormData({
      feature_text: item.feature_text,
      display_order: item.display_order,
      active: item.active,
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Özellik Düzenle" : "Yeni Özellik Ekle"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="feature_text">Özellik Metni</Label>
              <Input
                id="feature_text"
                value={formData.feature_text}
                onChange={(e) => setFormData({ ...formData, feature_text: e.target.value })}
                required
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
            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
              />
              <Label htmlFor="active">Aktif</Label>
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
        {features.map((item) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-base">{item.feature_text}</p>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Sıra: {item.display_order}</span>
                    <span className={item.active ? "text-green-600" : "text-red-600"}>
                      {item.active ? "Aktif" : "Pasif"}
                    </span>
                  </div>
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

export default AboutFeaturesManagement;
