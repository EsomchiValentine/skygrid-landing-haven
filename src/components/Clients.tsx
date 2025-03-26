
import React from 'react';
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
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <div className="h-40 flex items-center justify-center p-6 glass-panel rounded-xl transition-all duration-300 group">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-full object-contain animate-float transition-all duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <h3 className="text-center text-gray-700 mt-3 font-medium animate-fade-in">{client.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-gray-800 text-white hover:bg-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="right-0 bg-gray-800 text-white hover:bg-gray-700">
              <ArrowRight className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
