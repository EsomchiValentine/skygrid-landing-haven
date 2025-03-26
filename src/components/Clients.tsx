
import React, { useEffect, useRef } from 'react';
import Section from './Section';
import Container from './Container';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Clients: React.FC = () => {
  // Create a reference to the carousel for auto-scrolling
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const clientLogos = [
    {
      name: "Mide Premium Oil & Gas",
      logo: "/lovable-uploads/704cc05e-ffa3-4112-bcac-a85b183fe88c.png"
    },
    {
      name: "Servease",
      logo: "/lovable-uploads/917f8cdf-ab57-49cb-af41-5d6a8ac7209b.png"
    },
    {
      name: "PCNGi Pi-CNG",
      logo: "/lovable-uploads/ef50a0f7-492f-4080-9c09-0596920080e1.png"
    },
    {
      name: "CGC - Your Clean Energy Partner",
      logo: "/lovable-uploads/a5220e61-90a5-4597-945d-2b3669944bd2.png"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const scrollSpeed = 1; // pixels per frame
    let scrollPosition = 0;
    let animationFrameId: number;
    
    const scroll = () => {
      if (!carouselRef.current) return;
      
      const container = carouselRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Increment scroll position
      scrollPosition += scrollSpeed;
      
      // Reset when reaching the end
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      // Apply scroll
      container.scrollLeft = scrollPosition;
      
      // Continue animation
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(scroll);
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Section className="py-16 bg-white" id="clients">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-skyblue text-sm font-medium mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-txtblack">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're proud to work with these innovative companies who trust our expertise
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlay on left */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Gradient overlay on right */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <Carousel
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent ref={carouselRef} className="gap-8">
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="basis-auto min-w-max">
                  <div className="mx-4 h-40 flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-full object-contain" 
                    />
                  </div>
                </CarouselItem>
              ))}
              {/* Duplicate logos for continuous scrolling effect */}
              {clientLogos.map((client, index) => (
                <CarouselItem key={`duplicate-${index}`} className="basis-auto min-w-max">
                  <div className="mx-4 h-40 flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-full object-contain" 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
