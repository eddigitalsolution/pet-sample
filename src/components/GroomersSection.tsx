import React from 'react';

interface Groomer {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  quote: string;
  image: string;
}

const groomersList: Groomer[] = [
  {
    name: 'Elena Rostova',
    role: 'Lead Master Sculptor',
    experience: '12+ Years Experience',
    specialty: 'Poodle Asian Fusion & Show Scissors',
    quote: "Every dog has a natural outline. My job is simply to sculpt the coat to highlight their personality.",
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=450&fit=crop&crop=faces&auto=format'
  },
  {
    name: 'Marcus Vance',
    role: 'Senior Spa & De-Shed Specialist',
    experience: '8 Years Experience',
    specialty: 'Double Coats, Huskies & Gentle Handling',
    quote: "Patience and soothing techniques transform bath time from stress to pure relaxation.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=450&fit=crop&crop=faces&auto=format'
  },
  {
    name: 'Sophie Lin',
    role: 'Cat & Delicate Coat Artisan',
    experience: '6 Years Experience',
    specialty: 'Feline Lion Trims & Sensitive Skin',
    quote: "Handling delicate coats requires calm energy, gentle precision, and organic botanicals.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=450&fit=crop&crop=faces&auto=format'
  }
];

export const GroomersSection: React.FC = () => {
  return (
    <section id="groomers" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#1A1918] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D97736]">
            Meet the Artisans
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            MASTER STYLISTS &amp; <span className="italic font-serif text-[#E8D8C8] font-normal">PET ARTISANS</span>
          </h2>
          <p className="text-sm text-[#A8988B] font-light">
            Certified by international pet grooming academies, our groomers combine high-fashion artistry with compassionate animal handling.
          </p>
        </div>

        {/* Groomers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {groomersList.map((groomer, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#D97736]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Top Image Banner */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-white/5">
                <img
                  src={groomer.image}
                  alt={groomer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-[#1A1918]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold text-[#D97736] border border-white/10">
                  {groomer.experience}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#FDFBF7] group-hover:text-[#E8D8C8] transition-colors">
                    {groomer.name}
                  </h3>
                  <span className="text-xs text-[#D97736] font-semibold uppercase tracking-wider block mt-1">
                    {groomer.role}
                  </span>
                  
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#A8988B] block font-semibold">
                      Specialization
                    </span>
                    <span className="text-xs text-[#FDFBF7] font-medium block">
                      {groomer.specialty}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs italic text-[#A8988B] font-serif border-l-2 border-[#D97736] pl-3 py-1">
                  "{groomer.quote}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
