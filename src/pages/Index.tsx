
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import { motion, AnimatePresence } from 'framer-motion';

const Index: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        const isInteractive = 
          e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.tagName === 'INPUT' ||
          e.target.tagName === 'TEXTAREA' ||
          e.target.closest('button') || 
          e.target.closest('a');
        
        setIsHovering(Boolean(isInteractive));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseover', handleMouseOver as EventListener);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseover', handleMouseOver as EventListener);
    };
  }, [cursorVisible]);

  return (
    <div className="min-h-screen bg-luxury-black relative">
      {/* Custom cursor */}
      <AnimatePresence>
        {cursorVisible && (
          <motion.div
            className={`fixed pointer-events-none z-50 mix-blend-difference ${
              isHovering ? 'w-12 h-12 border-2' : 'w-8 h-8 border'
            } rounded-full border-luxury-gold/50`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: isHovering ? 1.2 : 1,
              x: cursorPosition.x - (isHovering ? 24 : 16),
              y: cursorPosition.y - (isHovering ? 24 : 16),
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ 
              type: "spring", 
              mass: 0.3, 
              stiffness: 180, 
              damping: 15 
            }}
          />
        )}
      </AnimatePresence>

      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.8)_0%,rgba(13,13,13,1)_70%)] pointer-events-none"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-40 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/20 to-luxury-gold/0"></div>
      <div className="absolute top-1/2 right-10 w-px h-60 bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/20 to-luxury-gold/0"></div>
      
      {/* Background particles - reduced number and opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-luxury-gold/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ 
              duration: 4 + Math.random() * 3, 
              repeat: Infinity, 
              repeatType: "loop",
              delay: Math.random() * 5,
              ease: "easeInOut" 
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="luxury-container">
          {/* Headline */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-16 h-[1px] bg-luxury-gold/50 my-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            
            <motion.h1 
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-luxury-white mt-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-luxury-gold">Let's </span>Connect
            </motion.h1>
            
            <motion.div 
              className="max-w-lg mx-auto mt-6 overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-luxury-white/70 leading-relaxed">
                Experience unparalleled luxury and personalized service. Our team of experts is dedicated to fulfilling your most discerning requests with the utmost discretion and attention to detail.
              </p>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
          
          {/* Contact Information */}
          <ContactInfo />
          
          {/* Divider */}
          <motion.div 
            className="max-w-xs mx-auto mt-24 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"></div>
          </motion.div>
          
          {/* Contact Form Section */}
          <div className="mt-20 text-center">
            <motion.h2 
              className="font-playfair text-2xl md:text-3xl text-luxury-white relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Send Us a <span className="text-luxury-gold">Message</span>
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
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
              <a href="#" className="text-luxury-white/50 hover:text-luxury-gold text-sm transition-all duration-300 relative">
                Privacy Policy
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a href="#" className="text-luxury-white/50 hover:text-luxury-gold text-sm transition-all duration-300 relative">
                Terms of Service
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
