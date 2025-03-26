
import React from 'react';

interface CloudCogProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const CloudCog: React.FC<CloudCogProps> = ({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m17.73 15.73 1.06 1.06" />
      <path d="m18.79 13.61-1.06 1.06" />
      <path d="m16.67 13.61-1.06-1.06" />
      <path d="m15.61 15.73 1.06-1.06" />
      <circle cx="17.2" cy="14.67" r="2" />
    </svg>
  );
};

export default CloudCog;
