import { X, Home, Info, Phone, Settings, Star, HelpCircle, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "হোম", href: "/" },
  { icon: Star, label: "জনপ্রিয় সেবা", href: "#popular" },
  { icon: Info, label: "আমাদের সম্পর্কে", href: "#about" },
  { icon: Phone, label: "যোগাযোগ", href: "#contact" },
  { icon: HelpCircle, label: "সাহায্য", href: "#help" },
  { icon: Settings, label: "সেটিংস", href: "#settings" },
  { icon: ShieldCheck, label: "এডমিন প্যানেল", href: "/admin" },
];

const DrawerMenu = ({ isOpen, onClose }: DrawerMenuProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/40 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-card z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="gradient-header p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-primary-foreground">রামগঞ্জ</h2>
            <p className="text-sm text-primary-foreground/80">ডিজিটাল সার্ভিস পোর্টাল</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
            <X className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { onClose(); if (item.href.startsWith("/")) navigate(item.href); }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors w-full text-left"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute bottom-6 left-0 right-0 px-6 text-center">
          <p className="text-xs text-muted-foreground">© ২০২৬ রামগঞ্জ ডিজিটাল সার্ভিস</p>
        </div>
      </aside>
    </>
  );
};

export default DrawerMenu;
