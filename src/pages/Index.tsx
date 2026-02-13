import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import DrawerMenu from "@/components/DrawerMenu";
import HeroSlider from "@/components/HeroSlider";
import SearchBar from "@/components/SearchBar";
import ServiceGrid from "@/components/ServiceGrid";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const Index = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return services;
    const q = search.toLowerCase();
    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.slug.includes(q)
    );
  }, [search]);

  const activeServices = filtered.filter((s) => s.status === "active");
  const comingServices = filtered.filter((s) => s.status === "coming_soon");

  return (
    <div className="min-h-screen bg-background max-w-2xl mx-auto">
      <TopBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerMenu isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <HeroSlider />
      <SearchBar value={search} onChange={setSearch} />
      <ServiceGrid services={activeServices} title="📋 সকল সেবাসমূহ" />
      {comingServices.length > 0 && (
        <ServiceGrid services={comingServices} title="🕐 শীঘ্রই আসছে" />
      )}
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
