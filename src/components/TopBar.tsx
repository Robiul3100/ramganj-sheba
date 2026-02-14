import { Menu, Users } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <header className="bg-card px-4 py-3 flex items-center justify-between sticky top-0 z-40 border-b border-border/50">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          aria-label="মেনু খুলুন"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-foreground leading-tight">
            রামগঞ্জ <span className="text-primary">শপ</span>
          </h1>
          <p className="text-xs text-muted-foreground">ডিজিটাল সহযোগী</p>
        </div>
      </div>
      <button className="relative w-11 h-11 rounded-full bg-[hsl(var(--pastel-blue))] flex items-center justify-center" aria-label="প্রোফাইল">
        <Users className="w-5 h-5 text-primary" />
        <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-accent rounded-full border-2 border-card" />
      </button>
    </header>
  );
};

export default TopBar;
