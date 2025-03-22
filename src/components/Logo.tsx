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
      {variant === 'shield' && <img src="/lovable-uploads/a5910acb-b129-4e71-b664-ceee8fe61dc1.png" alt="Elitist Links" className="h-16 w-auto transition-all duration-500 animate-logo-shine" />}
      
      {variant === 'text' && <img alt="Elitist Links" className="h-24 w-auto transition-all duration-500 animate-logo-shine object-scale-down" src="/lovable-uploads/90ef7f02-71b7-454e-9b4b-32a6dbeb517a.jpg" />}

      {variant === 'full' && <div className="flex flex-col items-center">
          <img src="/lovable-uploads/a5910acb-b129-4e71-b664-ceee8fe61dc1.png" alt="Elitist Links Shield" className="h-16 w-auto mb-4 transition-all duration-500 animate-logo-shine" />
          <img src="/lovable-uploads/12e2c8cb-ba3d-4be1-bf53-6d79dab63337.png" alt="Elitist Links" className="h-20 w-auto transition-all duration-500 animate-logo-shine" />
        </div>}
    </Link>;
};
export default Logo;