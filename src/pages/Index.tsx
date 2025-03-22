
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

const Index: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-black relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.8)_0%,rgba(13,13,13,1)_70%)] pointer-events-none"></div>
      
      {/* Gold decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/30 to-luxury-gold/0 opacity-0 animate-fade-in-slow"></div>
      <div className="absolute top-1/2 right-10 w-px h-60 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/20 to-luxury-gold/0 opacity-0 animate-fade-in-slow"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-luxury-gold/5 blur-xl opacity-0 animate-subtle-pulse"></div>
      <div className="absolute top-40 right-1/3 w-20 h-20 rounded-full bg-luxury-gold/5 blur-xl opacity-0 animate-subtle-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Main content */}
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="luxury-container">
          {/* Logo and Headline */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            {/* Removed the Logo component from here */}
            
            <div className="w-16 h-[1px] bg-luxury-gold/30 my-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-luxury-white mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="text-luxury-gold">Let's </span>Connect
            </h1>
            
            <p className="max-w-lg mx-auto mt-6 text-luxury-white/70 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Experience unparalleled luxury and personalized service. We're here to assist you with finding the exclusive items that fulfill your desires.
            </p>
          </div>
          
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Divider */}
          <div className="max-w-xs mx-auto mt-20 flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>
          </div>
          
          {/* Contact Form Section */}
          <div className="mt-16 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl text-luxury-white opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Send Us a <span className="text-luxury-gold">Message</span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-luxury-gold/10">
        <div className="luxury-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-luxury-white/50 text-sm">
              © {new Date().getFullYear()} Elitist Links. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-luxury-white/50 hover:text-luxury-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-luxury-white/50 hover:text-luxury-gold text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
