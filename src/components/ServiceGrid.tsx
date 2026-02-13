import type { Service } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { SearchX } from "lucide-react";

interface ServiceGridProps {
  services: Service[];
  title: string;
}

const ServiceGrid = ({ services, title }: ServiceGridProps) => {
  if (services.length === 0) {
    return (
      <div className="mx-4 mt-6 text-center py-12">
        <SearchX className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
        <p className="text-muted-foreground">কোনো সেবা পাওয়া যায়নি</p>
      </div>
    );
  }

  return (
    <section className="mx-4 mt-6">
      <h2 className="text-base font-bold text-foreground mb-3">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
