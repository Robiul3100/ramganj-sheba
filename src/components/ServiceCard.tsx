import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <button
      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card card-shadow hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group relative"
      onClick={() => {/* future navigation */}}
    >
      {service.status === "coming_soon" && (
        <span className="absolute top-1.5 right-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
          শীঘ্রই
        </span>
      )}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.pastelClass} transition-transform group-hover:scale-110`}>
        <Icon className="w-7 h-7 text-foreground/70" />
      </div>
      <span className="text-sm font-medium text-card-foreground text-center leading-tight">
        {service.title}
      </span>
    </button>
  );
};

export default ServiceCard;
