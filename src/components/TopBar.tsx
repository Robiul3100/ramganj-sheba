import { Menu, User } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <header className="gradient-header px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
        aria-label="মেনু খুলুন"
      >
        <Menu className="w-5 h-5 text-primary-foreground" />
      </button>
      <h1 className="text-lg font-bold text-primary-foreground tracking-wide">
        রামগঞ্জ ডিজিটাল সার্ভিস
      </h1>
      <button className="p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors" aria-label="প্রোফাইল">
        <User className="w-5 h-5 text-primary-foreground" />
      </button>
    </header>
  );
};

export default TopBar;
