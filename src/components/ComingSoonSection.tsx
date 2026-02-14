import { useState } from "react";
import { Clock } from "lucide-react";
import type { Service } from "@/data/services";

interface ComingSoonSectionProps {
  services: Service[];
}

const ComingSoonSection = ({ services }: ComingSoonSectionProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const comingSoon = services.filter((s) => s.status === "coming_soon");

  if (comingSoon.length === 0) return null;

  return (
    <>
      <section className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">আসছে শীঘ্রই</h2>
          <span className="text-sm font-semibold text-destructive">{comingSoon.length} টি</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {comingSoon.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl bg-card shadow-neu-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.pastelBg}`}>
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <span className="text-[10px] font-semibold text-foreground text-center leading-tight line-clamp-2">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Coming Soon Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/40 modal-backdrop"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-card rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">শীঘ্রই আসছে!</h3>
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--pastel-yellow))] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[hsl(45,80%,45%)]" />
            </div>
            <h4 className="text-lg font-bold text-foreground">{selectedService.title}</h4>
            <p className="text-sm text-muted-foreground mt-2">
              সেবাটি নিয়ে আমাদের কাজ চলছে। খুব শীঘ্রই এটি অ্যাপে যুক্ত করা হবে।
            </p>
            <button
              onClick={() => setSelectedService(null)}
              className="mt-6 px-8 py-3 rounded-full bg-[hsl(25,90%,55%)] text-white font-bold hover:opacity-90 transition-opacity"
            >
              অপেক্ষা করুন
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ComingSoonSection;
