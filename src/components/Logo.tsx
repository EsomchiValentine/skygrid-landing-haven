
import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, dark }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/0527f868-67f6-462b-9867-8b1909ade11a.png" 
        alt="Skygridtech Logo" 
        className="h-10" 
      />
    </div>
  );
};

export default Logo;
