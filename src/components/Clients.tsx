
import React, { useState, useEffect } from 'react';
import Section from './Section';
import Container from './Container';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { useInterval } from '@/hooks/useInterval';

const Clients: React.FC = () => {
  const clientLogos = [
    {
      name: "Ibom Metropolitan Polytechnic",
      logo: "/lovable-uploads/76a18191-6317-4fac-8f75-0ede7d1ff5ad.png"
    },
    {
      name: "CGC Gas Limited",
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

  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Auto-scroll function using custom interval
  useInterval(() => {
    if (api) {
      api.scrollNext();
    }
  }, 3000);

  // Update current slide index when the carousel moves
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <Section className="py-10 bg-black" id="clients">
      <Container>
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-skyblue text-sm font-medium mb-3">
            OUR CLIENTS
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Trusted by Industry Leaders</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm">
            We're proud to work with these innovative companies who trust our expertise
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="group relative p-2">
                    <div className="w-full aspect-square bg-black/30 rounded-xl glass-panel flex items-center justify-center p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-24 max-w-24 object-contain transition-transform duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                      <p className="text-white text-center text-sm font-medium">{client.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="flex justify-center gap-1 mt-4">
            {clientLogos.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === index ? "bg-white w-4" : "bg-white/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
