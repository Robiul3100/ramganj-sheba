import { useState, useEffect, useCallback } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, caption: "রামগঞ্জের সকল সেবা এক জায়গায়" },
  { image: hero2, caption: "ডিজিটাল বাংলাদেশ, ডিজিটাল রামগঞ্জ" },
  { image: hero3, caption: "আপনার প্রয়োজনীয় সেবা খুঁজুন সহজেই" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative mx-4 mt-4 rounded-lg overflow-hidden aspect-[16/9]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-primary-foreground text-sm font-semibold drop-shadow-lg">
            {slide.caption}
          </p>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary-foreground w-5" : "bg-primary-foreground/50"}`}
            aria-label={`স্লাইড ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
