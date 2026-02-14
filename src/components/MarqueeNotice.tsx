import { Zap } from "lucide-react";

const MarqueeNotice = () => {
  return (
    <div className="mx-4 mt-4 bg-card rounded-2xl shadow-neu-sm overflow-hidden flex items-center h-12">
      <div className="flex items-center gap-2 px-4 py-2 bg-destructive rounded-full ml-2 shrink-0">
        <Zap className="w-4 h-4 text-destructive-foreground" />
        <span className="text-xs font-bold text-destructive-foreground whitespace-nowrap">আপডেট</span>
      </div>
      <div className="overflow-hidden flex-1 mx-3">
        <p className="animate-marquee whitespace-nowrap text-sm text-muted-foreground font-medium">
          আলাইকুম, আমাদের "রামগঞ্জ ডিজিটাল মার্কেট" পরিষেবা চালু হয়েছে। এখনই দেখুন এবং আপনার পণ্য যোগ করুন! 🎉
        </p>
      </div>
    </div>
  );
};

export default MarqueeNotice;
