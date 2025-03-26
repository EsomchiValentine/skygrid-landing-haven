
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/66a3a9b8-7083-4160-b6c9-fec6f7dc3b0f.png" 
        alt="Skygridtech Logo" 
        className="h-10" 
      />
    </div>
  );
};

export default Logo;
