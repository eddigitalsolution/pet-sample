import React from 'react';
import { Heart } from 'lucide-react';

interface PetTransformation {
  name: string;
  breed: string;
  style: string;
  image: string;
}

const happyPets: PetTransformation[] = [
  {
    name: 'Milo',
    breed: 'Golden Doodle',
    style: 'Teddy Bear Head & Tapered Legs',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=800&fit=crop&auto=format'
  },
  {
    name: 'Lady Florence',
    breed: 'Afghan Hound Mix',
    style: 'Silk Coat Conditioning & Ear Sculpt',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=800&fit=crop&auto=format'
  },
  {
    name: 'Waffles',
    breed: 'Labradoodle',
    style: 'Rustic Field Sculpt & Paw Trim',
    image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=800&fit=crop&auto=format'
  }
];

export const HappyPetsSection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#FDFBF7] text-[#1A1918]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8D8C8] pb-8">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C7A6B]">
              Lookbook &amp; Gallery
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              HALL OF <span className="italic font-serif text-[#D97736] font-normal">FLUFF</span>
            </h2>
          </div>
          <p className="text-sm text-[#6C5C50] max-w-md font-light">
            Real transformations from our pet atelier. Each portrait captures the unique charm and elevated style of our beloved clients.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {happyPets.map((pet, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-[#E8D8C8] bg-[#E8D8C8]/30 aspect-3/4"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1A1918]/90 via-[#1A1918]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-2xl font-bold">
                    {pet.name}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#D97736] flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </span>
                </div>
                <div className="text-xs text-[#E8D8C8] font-medium flex items-center gap-2">
                  <span>{pet.breed}</span>
                  <span>•</span>
                  <span className="italic font-serif">{pet.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
