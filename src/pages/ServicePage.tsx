import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Search, Phone as PhoneIcon, MapPin, Eye, Briefcase, Clock, Users, Heart, Copy, Shield, Lock, Send } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { serviceItems } from "@/data/services";
import { useState, useMemo } from "react";
import { toast } from "@/hooks/use-toast";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { serviceList } = useAdmin();

  const service = serviceList.find((s) => s.slug === slug);
  const items = serviceItems[slug || ""] || [];

  const filtered = useMemo(() => {
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.phone && item.phone.includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q))
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

  // Handle coming soon services
  if (service.status === "coming_soon") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="bg-card rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-[hsl(var(--pastel-yellow))] flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-[hsl(45,80%,45%)]" />
          </div>
          <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
          <p className="text-sm text-muted-foreground mt-2">শীঘ্রই আসছে! আমরা কাজ করছি।</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold"
          >
            হোমে যান
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const isBlood = slug === "blood";
  const isJobs = slug === "jobs";
  const isEntrepreneur = slug === "entrepreneurs";
  const isMarketplace = slug === "marketplace";
  const isDonation = slug === "donation";

  // Donation page
  if (isDonation) {
    return <DonationPage service={service} navigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-background max-w-2xl mx-auto">
      {/* Curved Header */}
      <div
        className="relative pt-10 pb-20 px-4 curved-header"
        style={{ backgroundColor: service.headerColor }}
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

      {/* Search Bar */}
      <div className="px-6 -mt-8 relative z-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={`${service.title} খুঁজুন...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 shadow-lg transition-shadow"
            maxLength={100}
          />
        </div>
      </div>

      {/* Items List */}
      <div className="px-4 mt-6 pb-8 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">কোনো তথ্য পাওয়া যায়নি</p>
          </div>
        ) : isJobs ? (
          filtered.map((item) => <JobCard key={item.id} item={item} color={service.headerColor} />)
        ) : isEntrepreneur ? (
          filtered.map((item) => <EntrepreneurCard key={item.id} item={item} color={service.headerColor} Icon={Icon} />)
        ) : isMarketplace ? (
          filtered.map((item) => <MarketplaceCard key={item.id} item={item} />)
        ) : (
          filtered.map((item) => (
            <DefaultCard key={item.id} item={item} service={service} isBlood={isBlood} Icon={Icon} />
          ))
        )}
      </div>
    </div>
  );
};

// Default card for most services
const DefaultCard = ({ item, service, isBlood, Icon }: any) => (
  <div className="bg-card rounded-2xl p-4 shadow-sm flex items-center gap-4 border border-border/50">
    {isBlood && item.category ? (
      <div
        className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0"
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
    <div className="flex-1 min-w-0">
      <h3 className="font-bold text-foreground text-base leading-snug">{item.name}</h3>
      {item.owner && (
        <p className="text-sm font-medium" style={{ color: service.headerColor }}>{item.owner}</p>
      )}
      {item.address && (
        <div className="flex items-start gap-1 mt-1">
          <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: service.headerColor }} />
          <span className="text-sm text-muted-foreground">{item.address}</span>
        </div>
      )}
      {!item.address && item.description && (
        <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
      )}
      {item.category && !isBlood && (
        <span
          className="inline-block mt-1.5 text-xs px-2.5 py-0.5 rounded-full border font-medium"
          style={{ color: service.headerColor, borderColor: service.headerColor }}
        >
          {item.category}
        </span>
      )}
    </div>
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
);

// Job card matching screenshot
const JobCard = ({ item, color }: any) => (
  <div className="bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden">
    <div className="p-4 flex items-start gap-3">
      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--pastel-blue))] flex items-center justify-center flex-shrink-0">
        <Briefcase className="w-6 h-6 text-[hsl(225,70%,55%)]" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground text-base leading-snug">{item.name}</h3>
        {item.owner && <p className="text-sm text-muted-foreground">{item.owner}</p>}
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {item.category && (
            <span className="text-xs px-2.5 py-0.5 rounded-full border border-border text-foreground font-medium">
              {item.category}
            </span>
          )}
          {item.date && (
            <span className="text-xs px-2.5 py-0.5 rounded-full border border-[hsl(225,70%,55%)] text-[hsl(225,70%,55%)] font-medium flex items-center gap-1">
              <Clock className="w-3 h-3" /> {item.date}
            </span>
          )}
        </div>
      </div>
    </div>
    {item.description && (
      <div className="mx-4 mb-3 p-3 bg-secondary rounded-xl">
        <p className="text-sm text-muted-foreground">
          ◆ {item.description}
        </p>
        {item.details && (
          <button className="text-xs text-primary font-medium mt-1">আরও পড়ুন...</button>
        )}
      </div>
    )}
    <div className="px-4 pb-4 flex gap-3">
      <button className="flex-1 py-2.5 rounded-xl border border-border flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
        <Eye className="w-4 h-4" /> বিস্তারিত
      </button>
      {item.phone && (
        <a
          href={`tel:${item.phone}`}
          className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-white"
          style={{ backgroundColor: "hsl(225, 70%, 55%)" }}
        >
          <PhoneIcon className="w-4 h-4" /> কল করুন
        </a>
      )}
    </div>
  </div>
);

// Entrepreneur card matching screenshot
const EntrepreneurCard = ({ item, color, Icon }: any) => (
  <div className="bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden">
    <div className="p-4 flex items-start gap-4">
      <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--pastel-red))] flex items-center justify-center flex-shrink-0">
        <Users className="w-8 h-8 text-[hsl(0,70%,50%)]" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground text-lg leading-snug">{item.name}</h3>
        {item.owner && (
          <p className="text-sm font-medium text-destructive">{item.owner}</p>
        )}
        {item.category && (
          <span
            className="inline-block mt-1.5 text-xs px-3 py-1 rounded-full border font-medium text-destructive border-destructive"
          >
            {item.category}
          </span>
        )}
        {item.address && (
          <div className="flex items-start gap-1 mt-1.5">
            <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{item.address}</span>
          </div>
        )}
      </div>
      {item.phone && (
        <a
          href={`tel:${item.phone}`}
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[hsl(var(--pastel-blue))]"
        >
          <PhoneIcon className="w-5 h-5 text-primary" />
        </a>
      )}
    </div>
    {item.details && (
      <div className="mx-4 mb-4 p-4 bg-secondary rounded-xl">
        <p className="text-sm font-bold text-foreground mb-2">বিস্তারিত:</p>
        <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
        <p className="text-sm text-muted-foreground whitespace-pre-line mt-2">{item.details}</p>
      </div>
    )}
  </div>
);

// Marketplace card
const MarketplaceCard = ({ item }: any) => (
  <div className="bg-card rounded-2xl shadow-sm border border-border/50 p-4">
    <div className="flex items-start gap-1 mb-2">
      <Briefcase className="w-4 h-4 text-muted-foreground mt-0.5" />
      <span className="text-sm text-muted-foreground">{item.owner}</span>
    </div>
    <h3 className="font-bold text-foreground text-base">{item.name}</h3>
    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
    <button className="text-xs text-primary font-medium mt-1">বিস্তারিত দেখুন...</button>
    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
      <span className="text-lg font-bold text-primary">{item.price}</span>
      <div className="flex items-center gap-2">
        {item.phone && (
          <a
            href={`https://wa.me/${item.phone?.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-bold flex items-center gap-1"
          >
            কিনুন 💬
          </a>
        )}
      </div>
    </div>
  </div>
);

// Donation page
const DonationPage = ({ service, navigate }: any) => {
  const [formData, setFormData] = useState({ name: "", phone: "", amount: "", method: "বিকাশ", trxId: "", message: "" });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "কপি হয়েছে!", description: text });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.amount.trim() || !formData.trxId.trim()) {
      toast({ title: "ত্রুটি", description: "সকল প্রয়োজনীয় তথ্য পূরণ করুন", variant: "destructive" });
      return;
    }
    toast({ title: "ধন্যবাদ!", description: "আপনার তথ্য সফলভাবে জমা হয়েছে।" });
    setFormData({ name: "", phone: "", amount: "", method: "বিকাশ", trxId: "", message: "" });
  };

  const paymentMethods = [
    { name: "বিকাশ (পার্সোনাল)", number: "01340765208", gradient: "linear-gradient(135deg, hsl(340,70%,55%), hsl(310,60%,50%))" },
    { name: "নগদ (পার্সোনাল)", number: "01340765208", gradient: "linear-gradient(135deg, hsl(25,90%,55%), hsl(40,80%,50%))" },
    { name: "রকেট (পার্সোনাল)", number: "01340765208", gradient: "linear-gradient(135deg, hsl(270,50%,55%), hsl(290,60%,50%))" },
  ];

  return (
    <div className="min-h-screen bg-background max-w-2xl mx-auto">
      <header className="px-4 py-4 flex items-center gap-3 sticky top-0 z-40 bg-card border-b border-border/50">
        <button onClick={() => navigate("/")} className="p-1">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-foreground">অনুদান</h1>
          <p className="text-xs text-muted-foreground">আমাদের পাশে দাঁড়ান</p>
        </div>
      </header>

      {/* Hero */}
      <div className="mx-4 mt-4 bg-card rounded-2xl p-6 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--pastel-blue))] flex items-center justify-center mx-auto mb-3">
          <Heart className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">রামগঞ্জ সেবার পাশে দাঁড়ান</h2>
        <p className="text-sm text-muted-foreground mt-2">
          আপনার ক্ষুদ্র অনুদান আমাদের এই ডিজিটাল সেবা কার্যক্রম চালিয়ে রাখতে এবং নতুন ফিচার যুক্ত করতে সাহায্য করবে। এটি একটি স্বেচ্ছাসেবী উদ্যোগ।
        </p>
      </div>

      {/* Payment Methods */}
      <div className="px-4 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="text-base font-bold text-foreground">পেমেন্ট মেথড</h3>
        </div>
        <div className="space-y-3">
          {paymentMethods.map((pm) => (
            <div
              key={pm.name}
              className="rounded-2xl p-4 flex items-center justify-between text-white"
              style={{ background: pm.gradient }}
            >
              <div>
                <p className="text-sm font-medium opacity-90">{pm.name}</p>
                <p className="text-xl font-bold">{pm.number}</p>
              </div>
              <button
                onClick={() => handleCopy(pm.number)}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Copy className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="mx-4 mt-6 mb-8 bg-card rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-foreground text-center mb-4">তথ্য জমা দিন</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground">আপনার নাম</label>
            <input
              type="text"
              placeholder="আপনার নাম লিখুন"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              maxLength={100}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-foreground">মোবাইল নম্বর</label>
              <input
                type="tel"
                placeholder="017xxxxxxxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                maxLength={15}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground">টাকার পরিমাণ</label>
              <input
                type="number"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">পেমেন্ট মেথড</label>
            <div className="flex gap-2 mt-1">
              {["বিকাশ", "নগদ", "রকেট"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setFormData({ ...formData, method: m })}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${formData.method === m ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">ট্রানজেকশন আইডি (TrxID)</label>
            <input
              type="text"
              placeholder="TRXID দিন (যেমন: 9HSJ...)"
              value={formData.trxId}
              onChange={(e) => setFormData({ ...formData, trxId: e.target.value })}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              maxLength={50}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground">বার্তা (অপশনাল)</label>
            <textarea
              placeholder="কিছু বলতে চাইলে লিখুন..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20"
              maxLength={500}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, hsl(199, 89%, 48%), hsl(180, 55%, 42%))" }}
          >
            <Send className="w-5 h-5" /> তথ্য জমা দিন
          </button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-2">
          <Shield className="w-4 h-4" />
          <Lock className="w-4 h-4" />
          নিরাপদ পেমেন্ট নিশ্চিত করুন
        </p>
      </div>
    </div>
  );
};

export default ServicePage;
