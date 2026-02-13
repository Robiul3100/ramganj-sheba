import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Search, Phone as PhoneIcon, MapPin } from "lucide-react";
import { services, serviceItems } from "@/data/services";
import { useState, useMemo } from "react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const service = services.find((s) => s.slug === slug);
  const items = serviceItems[slug || ""] || [];

  const filtered = useMemo(() => {
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.phone && item.phone.includes(q))
    );
  }, [search, items]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">সেবা পাওয়া যায়নি</p>
          <button onClick={() => navigate("/")} className="mt-4 text-primary underline">
            হোমে ফিরে যান
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const isBlood = slug === "blood";

  return (
    <div className="min-h-screen bg-background max-w-2xl mx-auto">
      {/* Curved Header */}
      <div
        className="relative pt-10 pb-20 px-4"
        style={{ backgroundColor: service.headerColor, borderRadius: "0 0 50% 50% / 0 0 40px 40px" }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">{service.title}</h1>
          <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Search Bar - overlapping header */}
      <div className="px-6 -mt-8 relative z-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={`${service.title} খুঁজুন...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 shadow-lg transition-shadow"
          />
        </div>
      </div>

      {/* Items List */}
      <div className="px-4 mt-6 pb-8 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">কোনো তথ্য পাওয়া যায়নি</p>
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-border/50"
            >
              {/* Left Icon / Badge */}
              {isBlood && item.category ? (
                <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: service.headerColor }}
                >
                  <span className="text-white font-bold text-lg">{item.category}</span>
                  <span className="text-white/80 text-[10px]">গ্রুপ</span>
                </div>
              ) : (
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.pastelBg}`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-base leading-snug">{item.name}</h3>
                {item.address && (
                  <div className="flex items-start gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: service.headerColor }} />
                    <span className="text-sm text-muted-foreground">{item.address}</span>
                  </div>
                )}
                <p className="text-sm text-muted-foreground mt-0.5 flex items-start gap-1">
                  {!item.address && <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: service.headerColor }} />}
                  {item.address ? "" : item.description}
                </p>
                {item.address && item.category && (
                  <span
                    className="inline-block mt-1.5 text-xs px-2.5 py-0.5 rounded-full border font-medium"
                    style={{ color: service.headerColor, borderColor: service.headerColor }}
                  >
                    {item.category}
                  </span>
                )}
              </div>

              {/* Phone Button */}
              {item.phone && (
                <a
                  href={`tel:${item.phone}`}
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${service.headerColor}20` }}
                >
                  <PhoneIcon className="w-5 h-5" style={{ color: service.headerColor }} />
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServicePage;
