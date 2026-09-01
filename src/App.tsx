import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterReveal } from './components/BeforeAfterReveal';
import { ServicesSection } from './components/ServicesSection';
import { GroomersSection } from './components/GroomersSection';
import { HappyPetsSection } from './components/HappyPetsSection';
import { StudioSection } from './components/StudioSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1918] selection:bg-[#E8D8C8]">
      {/* Sticky Editorial Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Signature Interactive Reveal */}
        <BeforeAfterReveal />

        {/* Grooming Services Menu */}
        <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Meet the Groomers */}
        <GroomersSection />

        {/* Lookbook Gallery */}
        <HappyPetsSection />

        {/* Studio Sensory Experience */}
        <StudioSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
