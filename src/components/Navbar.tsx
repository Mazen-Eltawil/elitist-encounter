
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-luxury-black/90 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="luxury-container flex items-center justify-between">
        <Logo variant="shield" />
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`luxury-link text-sm uppercase tracking-wider ${
              isActive('/') ? 'text-luxury-gold after:w-full' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/contact" 
            className={`luxury-link text-sm uppercase tracking-wider ${
              isActive('/contact') ? 'text-luxury-gold after:w-full' : ''
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
