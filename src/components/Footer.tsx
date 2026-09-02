import { Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#1A1918] text-[#FDFBF7] pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
      
      {/* Glow Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-[#D97736]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="bg-[#E8D8C8]/10 border border-white/10 p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D97736] font-bold">
              Ready For The Transformation?
            </span>
            <h3 className="font-serif-display text-2xl sm:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
              GIVE YOUR PET THE <span className="italic font-serif text-[#E8D8C8]">GLOW-UP</span> THEY DESERVE.
            </h3>
          </div>
          <button
            id="btn-footer-cta-book"
            name="footerCtaBook"
            onClick={onOpenBooking}
            className="cursor-pointer shrink-0 w-full md:w-auto bg-[#FDFBF7] text-[#1A1918] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#D97736] hover:text-[#FDFBF7] transition-all shadow-xl"
          >
            Book Appointment
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 border-b border-white/10 pb-12 sm:pb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/brand_logo.svg" 
                alt="The Glow-Up Logo" 
                width="40"
                height="40"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-serif-display text-2xl font-bold tracking-tight">
                THE GLOW-UP
              </span>
            </div>
            <p className="text-xs text-[#A8988B] font-light max-w-sm leading-relaxed">
              Malaysia’s premier editorial pet grooming atelier. Dedicated to compassionate care, coat artistry, and stress-free spa experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E8D8C8] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A8988B]">
              <li><a id="footer-link-reveal" href="#reveal" className="hover:text-[#FDFBF7] transition-colors">The Signature Reveal</a></li>
              <li><a id="footer-link-services" href="#services" className="hover:text-[#FDFBF7] transition-colors">Grooming Menu</a></li>
              <li><a id="footer-link-groomers" href="#groomers" className="hover:text-[#FDFBF7] transition-colors">Master Artisans</a></li>
              <li><a id="footer-link-gallery" href="#gallery" className="hover:text-[#FDFBF7] transition-colors">Hall of Fluff</a></li>
              <li><a id="footer-link-studio" href="#studio" className="hover:text-[#FDFBF7] transition-colors">Studio Experience</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E8D8C8] font-bold">
              Salon Contact &amp; Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#A8988B]">
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <Phone className="w-4 h-4 text-[#D97736] shrink-0" />
                <span className="text-xs text-[#A8988B]">
                  WhatsApp / Call: <a id="footer-whatsapp-link" href="https://wa.me/601130719502" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FDFBF7] hover:text-[#D97736]">+60 11-3071 9502</a>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97736] shrink-0 mt-0.5" />
                <span>18 Jalan Bangsar Artisans, 59000 Kuala Lumpur, Malaysia</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D97736] shrink-0 mt-0.5" />
                <span>Tuesday – Sunday: 9:30 AM – 6:30 PM (Closed Mondays)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-center text-[11px] text-[#7A6C60] text-center">
          <p>© 2026 THE GLOW-UP Pet Grooming Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
