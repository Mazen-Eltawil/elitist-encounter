
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'py-3 bg-luxury-black/90 backdrop-blur-lg border-b border-luxury-gold/10 shadow-[0_5px_30px_rgba(0,0,0,0.3)]' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="luxury-container flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Logo variant="shield" />
        </motion.div>
        
        <nav className="flex items-center space-x-12">
          <Link 
            to="/" 
            className={`luxury-link text-sm uppercase tracking-widest ${
              isActive('/') ? 'text-luxury-gold after:w-full' : ''
            }`}
          >
            <span className="relative overflow-hidden inline-block px-1">
              <span className="relative z-10">Home</span>
              {isActive('/') && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold" 
                  layoutId="navunderline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </span>
          </Link>
          <Link 
            to="/contact" 
            className={`luxury-link text-sm uppercase tracking-widest ${
              isActive('/contact') ? 'text-luxury-gold after:w-full' : ''
            }`}
          >
            <span className="relative overflow-hidden inline-block px-1">
              <span className="relative z-10">Contact</span>
              {isActive('/contact') && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold" 
                  layoutId="navunderline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
