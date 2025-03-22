
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import { motion, AnimatePresence } from 'framer-motion';

const Index: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorVisible]);

  return (
    <div className="min-h-screen bg-luxury-black relative">
      {/* Custom cursor */}
      <AnimatePresence>
        {cursorVisible && (
          <motion.div
            className="fixed w-8 h-8 rounded-full border border-luxury-gold/30 pointer-events-none z-50 mix-blend-difference"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: cursorPosition.x - 16,
              y: cursorPosition.y - 16,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", damping: 15, stiffness: 150 }}
          />
        )}
      </AnimatePresence>

      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.8)_0%,rgba(13,13,13,1)_70%)] pointer-events-none"></div>
      
      {/* Gold decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/30 to-luxury-gold/0 opacity-0 animate-fade-in-slow"></div>
      <div className="absolute top-1/2 right-10 w-px h-60 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/20 to-luxury-gold/0 opacity-0 animate-fade-in-slow"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-luxury-gold/5 blur-xl opacity-0 animate-subtle-pulse"></div>
      <div className="absolute top-40 right-1/3 w-20 h-20 rounded-full bg-luxury-gold/5 blur-xl opacity-0 animate-subtle-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-luxury-gold/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `subtle-pulse ${5 + Math.random() * 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="luxury-container">
          {/* Headline */}
          <div className="flex flex-col items-center justify-center text-center mb-20">
            <div className="relative">
              <div className="absolute -inset-1 bg-luxury-gold/20 blur-md rounded-full opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-16 h-[1px] bg-luxury-gold/50 my-6 opacity-0 animate-fade-in relative" style={{ animationDelay: '0.2s' }}></div>
            </div>
            
            <motion.h1 
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-luxury-white mt-4 opacity-0 animate-fade-in tracking-wide"
              style={{ animationDelay: '0.3s' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-luxury-gold">Let's </span>Connect
            </motion.h1>
            
            <motion.div 
              className="max-w-lg mx-auto mt-6 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-luxury-white/70 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Experience unparalleled luxury and personalized service. Our team of experts is dedicated to fulfilling your most discerning requests with the utmost discretion and attention to detail.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
            </motion.div>
          </div>
          
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Divider */}
          <div className="max-w-xs mx-auto mt-24 flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>
          </div>
          
          {/* Contact Form Section */}
          <div className="mt-20 text-center">
            <motion.h2 
              className="font-playfair text-2xl md:text-3xl text-luxury-white opacity-0 animate-fade-in relative inline-block"
              style={{ animationDelay: '0.7s' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Send Us a <span className="text-luxury-gold">Message</span>
              <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
            </motion.h2>
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
              <a href="#" className="text-luxury-white/50 hover:text-luxury-gold text-sm transition-all duration-500 relative overflow-hidden group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </a>
              <a href="#" className="text-luxury-white/50 hover:text-luxury-gold text-sm transition-all duration-500 relative overflow-hidden group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
