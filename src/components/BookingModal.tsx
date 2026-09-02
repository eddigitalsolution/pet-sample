import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [service, setService] = useState('The Full Sculpt & Fluff');
  const [preferredDate, setPreferredDate] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello THE GLOW-UP Studio! 🐾\nI would like to book a groom appointment:\n\n• Pet Name: ${petName}\n• Breed: ${breed}\n• Service: ${service}\n• Preferred Date: ${preferredDate}\n• Owner Name: ${parentName}\n• Contact Phone: ${phone}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/601130719502?text=${encodedMessage}`;
    
    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank');
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1918]/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#FDFBF7] text-[#1A1918] rounded-3xl p-6 sm:p-8 border border-[#E8D8C8] shadow-2xl space-y-5 sm:space-y-6 max-h-[90vh] overflow-y-auto my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#E8D8C8]/60 text-[#1A1918] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <>
            <div className="space-y-2 border-b border-[#E8D8C8] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97736]/15 text-[#D97736] text-[10px] font-bold uppercase tracking-wider">
                <span>Instant Appointment Request</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">
                BOOK A GLOW-UP
              </h3>
              <p className="text-xs text-[#6C5C50] font-light">
                Fill in your pet's details below to connect directly with our salon manager on WhatsApp (+60 11-3071 9502).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
              
              {/* Pet Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#7A6C60] mb-1">Pet Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Milo"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6] border border-[#D9C8B4] focus:outline-hidden focus:border-[#1A1918] text-[#1A1918]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#7A6C60] mb-1">Breed & Fur Type *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Golden Doodle"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6] border border-[#D9C8B4] focus:outline-hidden focus:border-[#1A1918] text-[#1A1918]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[#7A6C60] mb-1">Select Service *</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6] border border-[#D9C8B4] focus:outline-hidden focus:border-[#1A1918] text-[#1A1918]"
                >
                  <option value="The Full Sculpt & Fluff">The Full Sculpt & Fluff (RM 180-280)</option>
                  <option value="Executive Spa Bath & Refresh">Executive Spa Bath & Refresh (RM 120-180)</option>
                  <option value="Puppy’s First Glow-Up">Puppy’s First Glow-Up (RM 95)</option>
                  <option value="Creative Accent & Dye Tint">Creative Accent & Dye Tint (RM 80-150)</option>
                </select>
              </div>

              {/* Date & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#7A6C60] mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6] border border-[#D9C8B4] focus:outline-hidden focus:border-[#1A1918] text-[#1A1918]"
                  />
                </div>

                <div>
                  <label className="block text-[#7A6C60] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Tan"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6] border border-[#D9C8B4] focus:outline-hidden focus:border-[#1A1918] text-[#1A1918]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#7A6C60] mb-1">WhatsApp Contact Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+60 11-3071 9502"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFE6] border border-[#D9C8B4] focus:outline-hidden focus:border-[#1A1918] text-[#1A1918]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#1A1918] text-[#FDFBF7] py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#D97736] transition-colors shadow-lg mt-4"
              >
                <Phone className="w-4 h-4 text-[#E8D8C8] shrink-0" />
                <span>Send via WhatsApp (+60 11-3071 9502)</span>
              </button>

            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D97736]/15 text-[#D97736] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-display text-3xl font-bold">
                REQUEST SENT!
              </h3>
              <p className="text-xs text-[#6C5C50] max-w-sm mx-auto">
                We have prepared your booking message in WhatsApp. Our salon manager will respond to confirm your preferred time slot shortly.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#1A1918] text-[#FDFBF7] rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
