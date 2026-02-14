import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, Plus, Pencil, Trash2, ToggleLeft, ToggleRight, ArrowLeft, Search } from "lucide-react";
import type { Service } from "@/data/services";
import { Info } from "lucide-react";

const AdminDashboard = () => {
  const { isAuthenticated, logout, serviceList, deleteService, toggleStatus } = useAdmin();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

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
    } else {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin", { replace: true });
  };

  const activeCount = serviceList.filter((s) => s.status === "active").length;
  const comingSoonCount = serviceList.filter((s) => s.status === "coming_soon").length;

  return (
    <div className="min-h-screen bg-background max-w-3xl mx-auto">
      {/* Header */}
      <header className="gradient-header px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <button onClick={() => navigate("/")} className="p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
          <ArrowLeft className="w-5 h-5 text-primary-foreground" />
        </button>
        <h1 className="text-lg font-bold text-primary-foreground">এডমিন প্যানেল</h1>
        <button onClick={handleLogout} className="p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
          <LogOut className="w-5 h-5 text-primary-foreground" />
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

      {/* Search */}
      <div className="px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="সার্ভিস খুঁজুন..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-xl"
            maxLength={100}
          />
        </div>
      </div>

      {/* Service List */}
      <div className="px-4 pb-6 space-y-3">
        {filtered.map((service) => (
          <div
            key={service.id}
            className="bg-card rounded-2xl shadow-neu p-4 flex items-center gap-3"
          >
            <div className={`w-10 h-10 rounded-xl ${service.pastelBg} flex items-center justify-center shrink-0`}>
              <service.icon className={`w-5 h-5 ${service.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground text-sm truncate">{service.title}</p>
              <p className="text-xs text-muted-foreground truncate">{service.slug}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {/* Toggle */}
              <button
                onClick={() => toggleStatus(service.id)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                title={service.status === "active" ? "নিষ্ক্রিয় করুন" : "সক্রিয় করুন"}
              >
                {service.status === "active" ? (
                  <ToggleRight className="w-5 h-5 text-primary" />
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
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">কোনো সার্ভিস পাওয়া যায়নি</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
