import { useState, useMemo } from "react";
import TopBar from "@/components/TopBar";
import DrawerMenu from "@/components/DrawerMenu";
import HeroSlider from "@/components/HeroSlider";
import SearchBar from "@/components/SearchBar";
import ServiceGrid from "@/components/ServiceGrid";
import MarqueeNotice from "@/components/MarqueeNotice";
import ComingSoonSection from "@/components/ComingSoonSection";
import StatsBar from "@/components/StatsBar";
import Footer from "@/components/Footer";
import { useAdmin } from "@/contexts/AdminContext";

const Index = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { serviceList } = useAdmin();

  const filtered = useMemo(() => {
    if (!search.trim()) return serviceList;
    const q = search.toLowerCase();
    return serviceList.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.slug.includes(q)
    );
  }, [search, serviceList]);

  return (
    <div className="min-h-screen bg-background max-w-2xl mx-auto">
      <TopBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerMenu isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <HeroSlider />
      <MarqueeNotice />
      <SearchBar value={search} onChange={setSearch} />
      <ServiceGrid services={filtered} />
      <ComingSoonSection services={serviceList} />
      <StatsBar services={serviceList} />
      <Footer />
    </div>
  );
};

export default Index;
