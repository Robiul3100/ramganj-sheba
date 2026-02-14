import type { Service } from "@/data/services";

interface StatsBarProps {
  services: Service[];
}

const StatsBar = ({ services }: StatsBarProps) => {
  const activeCount = services.filter((s) => s.status === "active").length;
  const comingCount = services.filter((s) => s.status === "coming_soon").length;

  return (
    <div className="mx-4 mt-6 rounded-2xl overflow-hidden flex" style={{ background: "linear-gradient(135deg, hsl(199, 60%, 35%), hsl(180, 55%, 32%))" }}>
      <div className="flex-1 py-5 text-center border-r border-white/20">
        <p className="text-2xl font-bold text-white">{activeCount}</p>
        <p className="text-xs text-white/80">চালু সেবা</p>
      </div>
      <div className="flex-1 py-5 text-center">
        <p className="text-2xl font-bold text-[hsl(45,80%,55%)]">{comingCount}</p>
        <p className="text-xs text-white/80">আসছে</p>
      </div>
    </div>
  );
};

export default StatsBar;
