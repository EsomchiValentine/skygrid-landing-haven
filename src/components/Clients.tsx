
import React, { useState, useEffect } from 'react';
import Section from './Section';
import Container from './Container';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Clients: React.FC = () => {
  const clientLogos = [
    {
      name: "Ibom Metropolitan Polytechnic",
      logo: "/lovable-uploads/76a18191-6317-4fac-8f75-0ede7d1ff5ad.png"
    },
    {
      name: "White Logo",
      logo: "/lovable-uploads/24abf395-fe41-42ca-afea-434240aa1d17.png"
    },
    {
      name: "Bokolo HSIC Group Limited",
      logo: "/lovable-uploads/8d6e5d68-0106-4a3d-aa66-fe0f39c3c214.png"
    },
    {
      name: "Transport Company",
      logo: "/lovable-uploads/6f720819-5c56-400f-98b7-b05a3232c204.png"
    },
    {
      name: "MSK My Student KIT",
      logo: "/lovable-uploads/fc7d63f2-77d5-4d9e-a1f1-1ec95c6969b6.png"
    },
    {
      name: "FinTrak Software",
      logo: "/lovable-uploads/94f4fc3e-368d-4b52-8f8f-881f19c6cde6.png"
    }
  ];

  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-rotate the globe
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 0.5) % 360);
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <Section className="py-16 bg-gray-100" id="clients">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-800 text-skyblue text-sm font-medium mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're proud to work with these innovative companies who trust our expertise
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-10">
          <div 
            className="aspect-square max-w-lg mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {clientLogos.map((client, index) => {
              // Calculate position on the circle
              const angle = (rotation + index * (360 / clientLogos.length)) % 360;
              const radian = (angle * Math.PI) / 180;
              const x = 50 + 40 * Math.cos(radian);
              const y = 50 + 40 * Math.sin(radian);
              
              // Calculate z-index based on y-position to create depth effect
              const zIndex = Math.round(50 - 40 * Math.sin(radian));
              
              // Calculate scale based on y-position for perspective effect
              const scale = 0.7 + 0.3 * (y / 100);
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    zIndex,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 glass-panel rounded-full flex items-center justify-center group-hover:bg-white/10 cursor-pointer">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-16 md:max-h-20 max-w-16 md:max-w-20 object-contain transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-center">
                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">{client.name}</span>
                  </div>
                </div>
              );
            })}
            <div className="absolute inset-0 rounded-full border-2 border-gray-200 border-dashed opacity-30 pointer-events-none"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
