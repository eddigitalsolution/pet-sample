import React from 'react';
import { Shield, Feather, Volume2, Wind } from 'lucide-react';

export const StudioSection: React.FC = () => {
  return (
    <section id="studio" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#E8D8C8]/30 border-y border-[#E8D8C8] text-[#1A1918]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8C7A6B]">
            Sensory Calming Environment
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-tight">
            THE STUDIO <span className="italic font-serif text-[#D97736] font-normal">EXPERIENCE</span>
          </h2>
          <p className="text-sm text-[#6C5C50] font-light">
            Designed specifically to eliminate grooming anxiety. We prioritize physical safety, emotional comfort, and serene acoustics.
          </p>
        </div>

        {/* Studio Ambiance Image */}
        <div className="relative w-full rounded-3xl overflow-hidden aspect-video shadow-xl border border-[#D9C8B4]">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&h=788&fit=crop&auto=format"
            alt="Premium Pet Grooming Studio Interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1A1918]/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-[#FDFBF7] space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E8D8C8] block">Kuala Lumpur, MY</span>
            <span className="font-serif-display text-2xl font-bold">The Glow-Up Atelier</span>
          </div>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#D9C8B4] space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#D97736]/15 flex items-center justify-center text-[#D97736]">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-xl font-bold">Ultra-Quiet Blow Dryers</h3>
            <p className="text-xs text-[#6C5C50] font-light leading-relaxed">
              Whisper-quiet drying suites prevent acoustic stress and ear discomfort for sensitive pets.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#D9C8B4] space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#D97736]/15 flex items-center justify-center text-[#D97736]">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-xl font-bold">Lavender Aromatherapy</h3>
            <p className="text-xs text-[#6C5C50] font-light leading-relaxed">
              Organic essential oil diffusers continuously emit calming botanical scents throughout the salon.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#D9C8B4] space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#D97736]/15 flex items-center justify-center text-[#D97736]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-xl font-bold">Hydraulic Lift Tables</h3>
            <p className="text-xs text-[#6C5C50] font-light leading-relaxed">
              Smooth, low-vibration electric lift tables prevent joint strain for senior pets during mounting.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#D9C8B4] space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#D97736]/15 flex items-center justify-center text-[#D97736]">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display text-xl font-bold">Zero-Cage Holding</h3>
            <p className="text-xs text-[#6C5C50] font-light leading-relaxed">
              Private open lounges with orthopedic memory foam beds while awaiting pick-up.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
