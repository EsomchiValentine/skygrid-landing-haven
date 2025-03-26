
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
import { ChevronLeft, ChevronRight } from "lucide-react";

const Clients: React.FC = () => {
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
      logo: "/lovable-uploads/13fbd8ee-009f-4dc6-b1a6-ee1e9b4cad42.png"
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
                    <div className="h-40 flex items-center justify-center p-6 bg-gray-900 rounded-xl border border-gray-800 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-full object-contain" 
                      />
                    </div>
                    <h3 className="text-center text-gray-700 mt-3 font-medium">{client.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-gray-800 text-white hover:bg-gray-700">
              <ChevronLeft className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="right-0 bg-gray-800 text-white hover:bg-gray-700">
              <ChevronRight className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};

export default Clients;
