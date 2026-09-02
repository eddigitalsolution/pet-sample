import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8D8C8]/60 py-3 shadow-xs' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a id="nav-logo-link" href="#home" className="group flex items-center gap-3 text-left">
          <img 
            src="/brand_logo.svg" 
            alt="The Glow-Up Logo" 
            width="40"
            height="40"
            className="w-10 h-10 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-xs"
          />
          <div>
            <span className="font-serif-display text-xl font-bold tracking-tight text-[#1A1918] block leading-none">
              THE GLOW-UP
            </span>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-[#8C7A6B] uppercase block mt-1">
              Pet Studio &amp; Spa
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4540]">
          <a id="nav-link-reveal" href="#reveal" className="hover:text-[#1A1918] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97736] hover:after:w-full after:transition-all">
            The Reveal
          </a>
          <a id="nav-link-services" href="#services" className="hover:text-[#1A1918] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97736] hover:after:w-full after:transition-all">
            Grooming Services
          </a>
          <a id="nav-link-groomers" href="#groomers" className="hover:text-[#1A1918] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97736] hover:after:w-full after:transition-all">
            Master Artisans
          </a>
          <a id="nav-link-gallery" href="#gallery" className="hover:text-[#1A1918] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97736] hover:after:w-full after:transition-all">
            Happy Pets
          </a>
          <a id="nav-link-studio" href="#studio" className="hover:text-[#1A1918] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97736] hover:after:w-full after:transition-all">
            Studio
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            id="nav-phone-link"
            href="tel:+601130719502"
            className="flex items-center gap-2 text-xs font-semibold text-[#1A1918] bg-[#E8D8C8]/50 px-3.5 py-2.5 rounded-full hover:bg-[#E8D8C8] transition-colors border border-[#D9C8B4]/60"
          >
            <Phone className="w-3.5 h-3.5 text-[#D97736]" />
            +60 11-3071 9502
          </a>

          <button
            id="btn-nav-book-desktop"
            name="openBookingDesktop"
            onClick={onOpenBooking}
            className="cursor-pointer group flex items-center gap-2 bg-[#1A1918] text-[#FDFBF7] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#D97736] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book a Groom
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="btn-nav-mobile-toggle"
          name="toggleMobileMenu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1A1918] rounded-lg focus:outline-hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8D8C8] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-medium text-[#1A1918]">
            <a 
              id="nav-mobile-link-reveal"
              href="#reveal" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#E8D8C8]/40"
            >
              The Reveal
            </a>
            <a 
              id="nav-mobile-link-services"
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#E8D8C8]/40"
            >
              Grooming Services
            </a>
            <a 
              id="nav-mobile-link-groomers"
              href="#groomers" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#E8D8C8]/40"
            >
              Master Artisans
            </a>
            <a 
              id="nav-mobile-link-gallery"
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#E8D8C8]/40"
            >
              Happy Pets
            </a>
            <a 
              id="nav-mobile-link-studio"
              href="#studio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-[#E8D8C8]/40"
            >
              Studio
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a 
              id="nav-mobile-whatsapp-link"
              href="https://wa.me/601130719502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E8D8C8] text-[#1A1918] py-3 rounded-full text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#D97736]" />
              WhatsApp: +60 11-3071 9502
            </a>
            <button
              id="btn-nav-book-mobile"
              name="openBookingMobile"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 bg-[#1A1918] text-[#FDFBF7] py-3 rounded-full text-sm font-semibold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-[#E8D8C8]" />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
