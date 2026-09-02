import React, { useState, useRef } from 'react';
import { SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterReveal: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="reveal" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#1A1918] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97736]/10 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D97736] block">
            Signature Interactive Reveal
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            THE GLOW-UP <span className="italic font-serif text-[#E8D8C8] font-normal">MAGIC</span>
          </h2>
          <p className="text-sm text-[#A8988B] font-light max-w-md mx-auto">
            Drag the interactive slider across the portrait to witness the transformation.
          </p>
        </div>

        {/* Before / After Slider Container (Tuned to 3:4 to match the 3:4 JPG portrait dimensions perfectly) */}
        <div className="relative max-w-xl mx-auto">
          
          {/* Main Drag Canvas */}
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-3/4 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize bg-[#1A1918]"
          >
            {/* AFTER Image (Full Canvas Base) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/dog_groomed_after_1788267154120.jpg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&h=800&fit=crop&auto=format'; }}
                alt="Groomed Pet After Transformation"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#1A1918]/85 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold text-[#E8D8C8] z-30 whitespace-nowrap">
                AFTER: Salon Scissored Glow-Up
              </div>
            </div>

            {/* BEFORE Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/dog_scruffy_before_1788267130285.jpg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=800&fit=crop&auto=format'; }}
                alt="Scruffy Pet Before Grooming"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#1A1918]/85 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold text-[#A8988B] z-30 whitespace-nowrap">
                BEFORE: Scruffy &amp; Natural
              </div>
            </div>

            {/* Vertical Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FDFBF7] shadow-[0_0_15px_rgba(0,0,0,0.5)] z-40"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1918] border-2 border-[#FDFBF7] shadow-xl flex items-center justify-center text-[#E8D8C8] cursor-ew-resize">
                <ArrowLeftRight className="w-5 h-5 text-[#D97736]" />
              </div>
            </div>

          </div>

          {/* Interactive Hint */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#A8988B]">
            <SlidersHorizontal className="w-4 h-4 text-[#D97736]" />
            <span>Drag slider horizontally to reveal full transformation</span>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-[#D97736] font-serif text-2xl block font-bold">01</span>
            <h3 className="text-base font-bold text-[#FDFBF7]">Custom Breed Styling</h3>
            <p className="text-xs text-[#A8988B] leading-relaxed">
              Every haircut is tailored to your pet's face structure, fur texture, and lifestyle needs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-[#D97736] font-serif text-2xl block font-bold">02</span>
            <h3 className="text-base font-bold text-[#FDFBF7]">Sensory Spa Bath</h3>
            <p className="text-xs text-[#A8988B] leading-relaxed">
              Hypoallergenic herbal shampoo, de-shedding treatment, and warm towel facial wrap.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-[#D97736] font-serif text-2xl block font-bold">03</span>
            <h3 className="text-base font-bold text-[#FDFBF7]">Gentle Paw & Ear Care</h3>
            <p className="text-xs text-[#A8988B] leading-relaxed">
              Nail buffing, organic pad moisturizing balm, and delicate ear cleansing.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
