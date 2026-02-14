const Footer = () => (
  <footer className="mt-8 pb-6 text-center">
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-bold text-lg">G</span>
      </div>
      <p className="text-xs text-muted-foreground">কারিগরি সহযোগিতায়</p>
      <p className="text-sm font-bold text-foreground">RSF ROBIUL</p>
      <span className="text-[10px] text-muted-foreground bg-secondary px-3 py-1 rounded-full">v1.0.0</span>
    </div>
    <p className="text-xs text-muted-foreground mt-2">
      © ২০২৬ রামগঞ্জ ডিজিটাল সার্ভিস | সর্বস্বত্ব সংরক্ষিত
    </p>
  </footer>
);

export default Footer;
