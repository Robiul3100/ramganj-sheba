import { services } from "@/data/services";
import { CheckCircle, Clock, LayoutGrid } from "lucide-react";

const StatsSection = () => {
  const total = services.length;
  const active = services.filter((s) => s.status === "active").length;
  const coming = total - active;

  const stats = [
    { icon: LayoutGrid, label: "মোট সেবা", value: total },
    { icon: CheckCircle, label: "সক্রিয়", value: active },
    { icon: Clock, label: "শীঘ্রই আসছে", value: coming },
  ];

  return (
    <section className="mx-4 mt-8">
      <div className="gradient-stats rounded-lg p-5 flex items-center justify-around">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="w-6 h-6 mx-auto mb-1 text-primary-foreground/90" />
            <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
            <p className="text-xs text-primary-foreground/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
