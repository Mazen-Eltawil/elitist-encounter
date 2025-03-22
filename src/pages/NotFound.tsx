
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-luxury-black relative">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.8)_0%,rgba(13,13,13,1)_70%)] pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="luxury-container text-center">
          <Logo variant="shield" className="mx-auto mb-8 opacity-0 animate-fade-in" />
          
          <h1 className="font-playfair text-6xl md:text-7xl text-luxury-gold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>404</h1>
          
          <p className="text-xl text-luxury-white mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            This page could not be found
          </p>
          
          <Link 
            to="/" 
            className="luxury-btn inline-block opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Return Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
