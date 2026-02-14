import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LogOut, Plus, Pencil, Trash2, ToggleLeft, ToggleRight, ArrowLeft, Search,
  X, Save, Eye, Settings, BarChart3, List, Grid3X3, ChevronDown
} from "lucide-react";
import { services as defaultServiceList } from "@/data/services";
import { toast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { isAuthenticated, logout, serviceList, addService, updateService, deleteService, toggleStatus } = useAdmin();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"services" | "items">("services");
  const [editingService, setEditingService] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", slug: "" });
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState({ title: "", description: "", slug: "", status: "active" as "active" | "coming_soon" });

  if (!isAuthenticated) {
    navigate("/admin", { replace: true });
    return null;
  }

  const filtered = serviceList.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.slug.includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (deleteConfirm === id) {
      deleteService(id);
      setDeleteConfirm(null);
      toast({ title: "মুছে ফেলা হয়েছে", description: "সার্ভিস সফলভাবে মুছে ফেলা হয়েছে।" });
    } else {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin", { replace: true });
  };

  const startEdit = (service: any) => {
    setEditingService(service.id);
    setEditForm({ title: service.title, description: service.description, slug: service.slug });
  };

  const saveEdit = () => {
    if (!editForm.title.trim()) return;
    updateService(editingService!, {
      title: editForm.title.trim(),
      description: editForm.description.trim(),
      slug: editForm.slug.trim(),
    });
    setEditingService(null);
    toast({ title: "আপডেট হয়েছে", description: "সার্ভিস সফলভাবে আপডেট করা হয়েছে।" });
  };

  const handleAdd = () => {
    if (!addForm.title.trim() || !addForm.slug.trim()) {
      toast({ title: "ত্রুটি", description: "টাইটেল ও স্লাগ আবশ্যক", variant: "destructive" });
      return;
    }
    // Use a default icon from the default services list or first available
    const defaultIcon = defaultServiceList[0].icon;
    addService({
      title: addForm.title.trim(),
      description: addForm.description.trim(),
      slug: addForm.slug.trim(),
      icon: defaultIcon,
      status: addForm.status,
      headerColor: "hsl(199, 89%, 48%)",
      pastelBg: "bg-[hsl(var(--pastel-blue))]",
      iconColor: "text-[hsl(199,89%,48%)]",
    });
    setShowAddForm(false);
    setAddForm({ title: "", description: "", slug: "", status: "active" });
    toast({ title: "যোগ করা হয়েছে", description: "নতুন সার্ভিস সফলভাবে যোগ করা হয়েছে।" });
  };

  const activeCount = serviceList.filter((s) => s.status === "active").length;
  const comingSoonCount = serviceList.filter((s) => s.status === "coming_soon").length;

  return (
    <div className="min-h-screen bg-background max-w-3xl mx-auto">
      {/* Header */}
      <header className="gradient-header px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <button onClick={() => navigate("/")} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-lg font-bold text-white flex items-center gap-2">
          <Settings className="w-5 h-5" /> এডমিন প্যানেল
        </h1>
        <button onClick={handleLogout} className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
          <LogOut className="w-5 h-5 text-white" />
        </button>
      </header>

      {/* Stats */}
      <div className="p-4 grid grid-cols-3 gap-3">
        <div className="bg-card rounded-2xl shadow-neu p-4 text-center">
          <p className="text-2xl font-bold text-foreground">{serviceList.length}</p>
          <p className="text-xs text-muted-foreground">মোট সেবা</p>
        </div>
        <div className="bg-card rounded-2xl shadow-neu p-4 text-center">
          <p className="text-2xl font-bold text-primary">{activeCount}</p>
          <p className="text-xs text-muted-foreground">সক্রিয়</p>
        </div>
        <div className="bg-card rounded-2xl shadow-neu p-4 text-center">
          <p className="text-2xl font-bold text-destructive">{comingSoonCount}</p>
          <p className="text-xs text-muted-foreground">শীঘ্রই আসছে</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-4 pb-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="সার্ভিস খুঁজুন..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-xl"
            maxLength={100}
          />
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="rounded-xl gap-1 shrink-0"
        >
          <Plus className="w-4 h-4" /> যোগ করুন
        </Button>
      </div>

      {/* Add Service Form */}
      {showAddForm && (
        <div className="mx-4 mb-4 bg-card rounded-2xl shadow-neu p-5 border-2 border-primary/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" /> নতুন সার্ভিস যোগ করুন
            </h3>
            <button onClick={() => setShowAddForm(false)}>
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-semibold text-foreground">সেবার নাম *</label>
              <Input
                placeholder="যেমন: ক্লিনিক তালিকা"
                value={addForm.title}
                onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                className="mt-1 rounded-xl"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">স্লাগ (URL) *</label>
              <Input
                placeholder="যেমন: clinic-list"
                value={addForm.slug}
                onChange={(e) => setAddForm({ ...addForm, slug: e.target.value.replace(/\s+/g, "-").toLowerCase() })}
                className="mt-1 rounded-xl"
                maxLength={50}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">বিবরণ</label>
              <Input
                placeholder="সংক্ষিপ্ত বিবরণ"
                value={addForm.description}
                onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                className="mt-1 rounded-xl"
                maxLength={200}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">স্ট্যাটাস</label>
              <div className="flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setAddForm({ ...addForm, status: "active" })}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${addForm.status === "active" ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"}`}
                >
                  সক্রিয়
                </button>
                <button
                  type="button"
                  onClick={() => setAddForm({ ...addForm, status: "coming_soon" })}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${addForm.status === "coming_soon" ? "border-destructive bg-destructive/10 text-destructive" : "border-border text-foreground"}`}
                >
                  শীঘ্রই আসছে
                </button>
              </div>
            </div>
            <Button onClick={handleAdd} className="w-full rounded-xl gap-2">
              <Save className="w-4 h-4" /> সার্ভিস যোগ করুন
            </Button>
          </div>
        </div>
      )}

      {/* Service List */}
      <div className="px-4 pb-6 space-y-3">
        {filtered.map((service) => (
          <div
            key={service.id}
            className="bg-card rounded-2xl shadow-neu p-4"
          >
            {editingService === service.id ? (
              /* Edit Mode */
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-primary flex items-center gap-1">
                    <Pencil className="w-4 h-4" /> সম্পাদনা
                  </h4>
                  <button onClick={() => setEditingService(null)}>
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <Input
                  placeholder="সেবার নাম"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="rounded-xl text-sm"
                  maxLength={100}
                />
                <Input
                  placeholder="স্লাগ"
                  value={editForm.slug}
                  onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                  className="rounded-xl text-sm"
                  maxLength={50}
                />
                <Input
                  placeholder="বিবরণ"
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="rounded-xl text-sm"
                  maxLength={200}
                />
                <Button onClick={saveEdit} size="sm" className="rounded-xl gap-1 w-full">
                  <Save className="w-4 h-4" /> সেভ করুন
                </Button>
              </div>
            ) : (
              /* View Mode */
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${service.pastelBg} flex items-center justify-center shrink-0`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{service.title}</p>
                  <p className="text-xs text-muted-foreground truncate">/{service.slug} • {service.status === "active" ? "✅ সক্রিয়" : "⏳ শীঘ্রই"}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {/* View */}
                  <button
                    onClick={() => navigate(`/service/${service.slug}`)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    title="দেখুন"
                  >
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {/* Edit */}
                  <button
                    onClick={() => startEdit(service)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    title="সম্পাদনা"
                  >
                    <Pencil className="w-4 h-4 text-primary" />
                  </button>
                  {/* Toggle */}
                  <button
                    onClick={() => toggleStatus(service.id)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    title={service.status === "active" ? "নিষ্ক্রিয় করুন" : "সক্রিয় করুন"}
                  >
                    {service.status === "active" ? (
                      <ToggleRight className="w-5 h-5 text-accent" />
                    ) : (
                      <ToggleLeft className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(service.id)}
                    className={`p-2 rounded-lg transition-colors ${deleteConfirm === service.id ? "bg-destructive text-destructive-foreground" : "hover:bg-destructive/10 text-destructive"}`}
                    title={deleteConfirm === service.id ? "আবার চাপুন নিশ্চিত করতে" : "মুছুন"}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">কোনো সার্ভিস পাওয়া যায়নি</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
