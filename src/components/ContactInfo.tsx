
import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Email</h3>
          <a 
            href="mailto:elitistlinks@gmail.com" 
            className="text-luxury-white hover:text-luxury-gold transition-colors duration-300"
          >
            elitistlinks@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">WhatsApp & Phone</h3>
          <a 
            href="tel:+971509977198" 
            className="text-luxury-white hover:text-luxury-gold transition-colors duration-300"
          >
            +971 50 997 7198
          </a>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Instagram className="w-5 h-5" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Instagram</h3>
          <a 
            href="https://instagram.com/elitist.links" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-luxury-white hover:text-luxury-gold transition-colors duration-300"
          >
            @elitist.links
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
