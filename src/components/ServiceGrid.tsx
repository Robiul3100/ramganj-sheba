import type { Service } from "@/data/services";
import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
  const active = services.filter((s) => s.status === "active");
  const count = active.length;

  return (
    <section className="px-4 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">চালু সেবাসমূহ</h2>
        <span className="text-sm font-semibold text-destructive">{count} টি</span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {active.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
