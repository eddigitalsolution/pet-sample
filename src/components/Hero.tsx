import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, ArrowRight, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-28 pb-0 overflow-hidden flex flex-col justify-between bg-[#FDFBF7]">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E8D8C8] to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E8D8C8] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-10 lg:py-16 relative z-10">
        
        {/* Left Editorial Content Column */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#E8D8C8]/60 border border-[#D9C8B4] text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#5C4D40]"
          >
            <span>The Premier Pet Styling Atelier</span>
          </motion.div>

          {/* Huge Staggered Editorial Headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif-display text-[2.75rem] leading-[0.92] xs:text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#1A1918]">
              GOOD HAIR <br />
              <span className="italic font-normal text-[#D97736] font-serif">DAYS</span> START <br />
              <span className="underline decoration-[#E8D8C8] decoration-wavy underline-offset-4 sm:underline-offset-8">HERE.</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl text-[#5C554E] max-w-xl font-light leading-relaxed"
          >
            We turn scruffy coats into high-fashion statements. Bespoke scissoring, sensory-calming bath rituals, and personalized styling for discerning pets.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 pt-1"
          >
            <button
              onClick={onOpenBooking}
              className="cursor-pointer group flex items-center justify-center gap-3 bg-[#1A1918] text-[#FDFBF7] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#D97736] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Book a Glow-Up</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#reveal"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-[#E8D8C8]/40 hover:bg-[#E8D8C8] transition-colors text-sm font-semibold text-[#1A1918]"
            >
              <span>See Transformation</span>
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-4 sm:pt-6 flex flex-wrap items-center gap-x-5 sm:gap-x-8 gap-y-3 border-t border-[#E8D8C8]/80"
          >
            <div>
              <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1918]">2,400+</span>
              <span className="block text-[10px] sm:text-xs text-[#7A6C60]">Happy Glow-Ups</span>
            </div>
            <div className="w-px h-7 sm:h-8 bg-[#E8D8C8]" />
            <div>
              <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1918]">100%</span>
              <span className="block text-[10px] sm:text-xs text-[#7A6C60]">Stress-Free Care</span>
            </div>
            <div className="w-px h-7 sm:h-8 bg-[#E8D8C8]" />
            <div>
              <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1918]">4.9 ★</span>
              <span className="block text-[10px] sm:text-xs text-[#7A6C60]">Pet Parent Rating</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Hero Dog Card */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0 pb-6 sm:pb-10 lg:pb-0">
          
          {/* Main Dog Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md bg-[#E8D8C8] rounded-3xl p-4 sm:p-5 shadow-2xl border-4 border-[#FDFBF7] space-y-3 sm:space-y-4"
          >
            <div className="w-full aspect-4/4.5 sm:aspect-4/4.8 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center bg-[#FDFBF7]">
              <img 
                src="/hero_portrait_dog_1788267183899.jpg"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=525&fit=crop&auto=format'; }}
                alt="Luxury Groomed Pet Portrait" 
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Embedded Card Info */}
            <div className="bg-[#1A1918] text-[#FDFBF7] p-3 sm:p-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E8D8C8] block font-semibold">Featured Glow-Up</span>
                <span className="font-serif text-sm sm:text-base italic font-medium">Lady Florence — Afghan Hound</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#D97736] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </motion.div>

          {/* Floating Grooming Tool 1: Precision Shear */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="hidden sm:flex absolute -top-8 lg:-top-10 -left-4 sm:-left-6 lg:-left-8 bg-[#FDFBF7] p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E8D8C8] items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#D97736]/15 flex items-center justify-center text-[#D97736]">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#1A1918] block">Precision Shear</span>
              <span className="text-[9px] sm:text-[10px] text-[#7A6C60]">Japanese Steel</span>
            </div>
          </motion.div>

          {/* Floating Grooming Tool 2: Paw Badge */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="hidden sm:flex absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -right-4 sm:-right-6 bg-[#1A1918] text-[#FDFBF7] p-3 sm:p-4 rounded-2xl shadow-2xl items-center gap-2 sm:gap-3 border border-white/10 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D97736] flex items-center justify-center text-lg sm:text-xl">
              🐾
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold block text-[#E8D8C8]">Organic Paw Balm</span>
              <span className="text-[9px] sm:text-[10px] text-[#A8988B]">Deep Hydration</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden border-y border-[#E8D8C8] py-3 bg-[#E8D8C8]/30">
        <div className="flex whitespace-nowrap gap-10 sm:gap-16 text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#6C5C50] animate-marquee min-w-max">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-10 sm:gap-16 pr-10 sm:pr-16">
              <span className="shrink-0">✨ Fluff &amp; Style</span>
              <span className="shrink-0">🐾 Organic Herbal Bath</span>
              <span className="shrink-0">✂️ Hand Scissoring Artistry</span>
              <span className="shrink-0">🌸 Aromatherapy Relaxation</span>
              <span className="shrink-0">💎 Show-Coat Conditioning</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};
