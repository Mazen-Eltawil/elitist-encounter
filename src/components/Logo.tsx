import React from 'react';
import { Link } from 'react-router-dom';
type LogoProps = {
  variant?: 'shield' | 'text' | 'full';
  className?: string;
};
const Logo: React.FC<LogoProps> = ({
  variant = 'shield',
  className = ''
}) => {
  return <Link to="/" className={`block ${className}`}>
      {variant === 'shield' && <img src="/lovable-uploads/a5910acb-b129-4e71-b664-ceee8fe61dc1.png" alt="Elitist Links" className="h-16 w-auto transition-all duration-700 hover:opacity-90" />}
      
      {variant === 'text' && <img alt="Elitist Links" className="remove" src="/lovable-uploads/b185373e-8a4f-4059-b742-ba19cdde072b.jpg" />}

      {variant === 'full' && <div className="flex flex-col items-center">
          <img src="/lovable-uploads/a5910acb-b129-4e71-b664-ceee8fe61dc1.png" alt="Elitist Links Shield" className="h-16 w-auto mb-4 transition-all duration-700 hover:opacity-90" />
          <img src="/lovable-uploads/c530e800-51b1-4871-8440-1fe4d4c8b6a7.png" alt="Elitist Links" className="h-20 w-auto transition-all duration-500" />
        </div>}
    </Link>;
};
export default Logo;