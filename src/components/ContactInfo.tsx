
import React from 'react';
import { Mail, Phone, Instagram, MapPin, Clock, MessageSquare } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Mail className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Email</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="mailto:elitistlinks@gmail.com" 
                className="text-luxury-white hover:text-luxury-gold transition-all duration-500"
              >
                elitistlinks@gmail.com
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-luxury-gold">Email Response Time</h4>
                  <p className="text-sm text-luxury-white/80">
                    Our team typically responds within 6-12 hours to all inquiries.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Phone className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">WhatsApp & Phone</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="tel:+971509977198" 
                className="text-luxury-white hover:text-luxury-gold transition-all duration-500"
              >
                +971 50 997 7198
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-luxury-gold">Availability</h4>
                  <p className="text-sm text-luxury-white/80">
                    Available for calls and WhatsApp messages 24/7 for our premium clients.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Instagram className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Instagram</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="https://instagram.com/elitist.links" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-white hover:text-luxury-gold transition-all duration-500"
              >
                @elitist.links
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-luxury-gold">Social Updates</h4>
                  <p className="text-sm text-luxury-white/80">
                    Follow us for exclusive previews of our latest luxury acquisitions.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.9s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <MapPin className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Location</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="https://maps.app.goo.gl/your-location-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-white hover:text-luxury-gold transition-all duration-500"
              >
                Dubai, United Arab Emirates
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-luxury-gold">Private Viewings</h4>
                  <p className="text-sm text-luxury-white/80">
                    Exclusive showroom visits are available by appointment only.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.1s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <Clock className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Hours</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <p className="text-luxury-white hover:text-luxury-gold transition-all duration-500 cursor-pointer">
                By Appointment Only
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-luxury-gold">Concierge Service</h4>
                  <p className="text-sm text-luxury-white/80">
                    Our luxury concierge team is available 24/7 for our most distinguished clients.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <div className="contact-card group opacity-0 animate-slide-in-bottom" style={{ animationDelay: '1.3s' }}>
        <div className="flex flex-col items-center text-center">
          <div className="luxury-icon-btn mb-4 group-hover:animate-border-glow">
            <MessageSquare className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
          </div>
          <h3 className="text-luxury-gold font-playfair text-lg mb-2">Live Chat</h3>
          <HoverCard>
            <HoverCardTrigger asChild>
              <p className="text-luxury-white hover:text-luxury-gold transition-all duration-500 cursor-pointer">
                Chat with a Representative
              </p>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-luxury-gold">Personalized Service</h4>
                  <p className="text-sm text-luxury-white/80">
                    Connect with our specialists for immediate assistance with any inquiry.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
