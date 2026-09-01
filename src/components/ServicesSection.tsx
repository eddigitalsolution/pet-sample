import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Check, Clock } from 'lucide-react';

interface Service {
  id: string;
  number: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  recommendedFor: string;
  highlight: boolean;
}

const servicesList: Service[] = [
  {
    id: 'full-sculpt',
    number: '01',
    name: 'The Full Sculpt & Fluff',
    tagline: 'Signature Couture Haircut',
    price: 'RM 180 - 280',
    duration: '2.5 Hours',
    description: 'Our crown-jewel transformation. Hand-scissored styling customized to your pet’s anatomical proportions and fur density.',
    features: [
      'Bespoke hand-scissoring coat sculpt',
      'Hydrating berry facial & ear flush',
      'De-shedding coat blowout',
      'Nail filing & pad balm restoration',
      'Finished with natural silk coat mist'
    ],
    recommendedFor: 'Poodles, Doodles, Bichons, Shih Tzus & High-Maintenance Coats',
    highlight: true
  },
  {
    id: 'executive-bath',
    number: '02',
    name: 'Executive Spa Bath & Refresh',
    tagline: 'Deep Hydration & De-Shedding',
    price: 'RM 120 - 180',
    duration: '1.5 Hours',
    description: 'A deep restorative bath ritual using organic botanical shampoos and warm hydro-massage water therapy.',
    features: [
      'Double organic herbal bath massage',
      'Deep undercoat de-shedding treatment',
      'Sanitary area & pad trim',
      'Ear canal gentle cleansing & drying',
      'Luxury scent spritz'
    ],
    recommendedFor: 'Golden Retrievers, Huskies, Corgis, Frenchies & Short-Medium Hair',
    highlight: false
  },
  {
    id: 'puppy-intro',
    number: '03',
    name: 'Puppy’s First Glow-Up',
    tagline: 'Gentle Sensory Socialization',
    price: 'RM 95',
    duration: '1.0 Hour',
    description: 'A stress-free gentle introduction for puppies under 6 months. Slow-paced with positive rewards and cozy breaks.',
    features: [
      'Gentle warm sponge bath',
      'Slow velocity low-noise blow dry',
      'Light scissor trim around eyes & paws',
      'Positive reinforcement treat session',
      'Puppy milestone souvenir photo'
    ],
    recommendedFor: 'Puppies & Kittens under 6 months old',
    highlight: false
  },
  {
    id: 'creative-styling',
    number: '04',
    name: 'Creative Accent & Dye Tint',
    tagline: 'Fashion Color & Accessories',
    price: 'RM 80 - 150',
    duration: '45 Mins',
    description: 'Safe organic vegetable dye highlights, ear/tail color accents, and luxury nail cap styling for fashion-forward pets.',
    features: [
      '100% pet-safe vegan fur dye',
      'Ear fringe or tail accent tinting',
      'Soft nail caps or glitter buff',
      'Custom luxury bow or bandanna'
    ],
    recommendedFor: 'Pet parents wanting a personalized pop of color',
    highlight: false
  }
];

interface ServicesProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<Service>(servicesList[0]);

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] text-[#1A1918] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#E8D8C8] pb-6 sm:pb-8">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A6B]">
              Bespoke Grooming Menu
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              CRAFTED FOR <span className="italic font-serif text-[#D97736] font-normal">FLAWLESS</span> COATS
            </h2>
          </div>
          <p className="text-sm text-[#6C5C50] max-w-md font-light">
            Every session includes a full wellness checkup, organic hypo-allergenic bath products, and zero-cage relaxing drying suites.
          </p>
        </div>

        {/* Asymmetric Layout: Service List Left, Interactive Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-7 space-y-4">
            {servicesList.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer p-4 sm:p-6 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#1A1918] text-[#FDFBF7] border-[#1A1918] shadow-xl sm:translate-x-2'
                      : 'bg-[#F5EFE6]/50 hover:bg-[#F5EFE6] border-[#E8D8C8] text-[#1A1918]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className={`font-serif text-lg sm:text-xl font-bold shrink-0 ${
                        isSelected ? 'text-[#D97736]' : 'text-[#8C7A6B]'
                      }`}>
                        {service.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-serif-display text-base sm:text-xl font-bold tracking-tight leading-tight">
                          {service.name}
                        </h3>
                        <span className={`text-xs block mt-0.5 ${
                          isSelected ? 'text-[#E8D8C8]' : 'text-[#7A6C60]'
                        }`}>
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`font-serif-display font-bold text-sm sm:text-base block ${
                        isSelected ? 'text-[#D97736]' : 'text-[#1A1918]'
                      }`}>
                        {service.price}
                      </span>
                      <span className={`text-[10px] flex items-center justify-end gap-1 mt-1 ${
                        isSelected ? 'text-[#A8988B]' : 'text-[#8C7A6B]'
                      }`}>
                        <Clock className="w-3 h-3" /> {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Drawer Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#E8D8C8]/40 border border-[#D9C8B4] p-8 rounded-3xl space-y-6 shadow-sm"
              >
                {/* Header */}
                <div className="space-y-2 border-b border-[#D9C8B4] pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#D97736]">
                      Included Features
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 bg-[#1A1918] text-[#FDFBF7] rounded-full">
                      {selectedService.price}
                    </span>
                  </div>
                  <h4 className="font-serif-display text-2xl font-bold text-[#1A1918]">
                    {selectedService.name}
                  </h4>
                  <p className="text-xs text-[#5C5046] font-light leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-[#3C352E] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#1A1918] text-[#FDFBF7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#D97736]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Recommended For */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A6C60] block">
                    Ideal For:
                  </span>
                  <span className="text-xs text-[#1A1918] font-semibold block mt-0.5">
                    {selectedService.recommendedFor}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenBooking}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#1A1918] text-[#FDFBF7] py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#D97736] transition-colors shadow-md"
                >
                  <Scissors className="w-4 h-4 text-[#E8D8C8]" />
                  Reserve This Service
                </button>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
