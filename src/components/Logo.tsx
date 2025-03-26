
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#33C3F0" />
        <path d="M10 20C10 14.4772 14.4772 10 20 10H30V20C30 25.5228 25.5228 30 20 30H10V20Z" fill="white" fillOpacity="0.9" />
        <path d="M18 15L25 22M25 15L18 22" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">Skygridtech</span>
    </div>
  );
};

export default Logo;
