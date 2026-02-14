import type { Service } from "@/data/services";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/service/${service.slug}`)}
      className="flex flex-col items-center justify-center gap-2.5 p-3 rounded-2xl bg-card shadow-neu hover:shadow-neu-sm active:shadow-neu-inset transition-all duration-200 aspect-square"
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.pastelBg}`}>
        <Icon className={`w-6 h-6 ${service.iconColor}`} />
      </div>
      <span className="text-[11px] font-semibold text-foreground text-center leading-tight line-clamp-2">
        {service.title}
      </span>
    </button>
  );
};

export default ServiceCard;
