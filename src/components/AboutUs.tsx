
import React from 'react';
import Section from './Section';
import Container from './Container';
import { Check } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      title: "Industry-leading cloud infrastructure with 99.9% uptime",
      icon: <Check className="h-5 w-5 text-skyblue flex-shrink-0" />
    },
    {
      title: "Certified security protocols and data protection",
      icon: <Check className="h-5 w-5 text-skyblue flex-shrink-0" />
    },
    {
      title: "24/7 technical support and monitoring",
      icon: <Check className="h-5 w-5 text-skyblue flex-shrink-0" />
    },
    {
      title: "Customizable software solutions for your business needs",
      icon: <Check className="h-5 w-5 text-skyblue flex-shrink-0" />
    },
    {
      title: "Seamless systems integration capabilities",
      icon: <Check className="h-5 w-5 text-skyblue flex-shrink-0" />
    },
    {
      title: "Scalable resources that grow with your business",
      icon: <Check className="h-5 w-5 text-skyblue flex-shrink-0" />
    }
  ];

  return (
    <Section className="py-20 bg-white" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/f69ee069-ddbe-459e-8a55-059761a4b9de.png" 
                alt="Code on screen" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 bg-white rounded-lg p-6 shadow-xl border border-gray-100 max-w-[250px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-skyblue rounded-full p-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800">Innovative Solutions</h3>
              </div>
              <p className="text-sm text-gray-600">Cutting-edge technologies for modern businesses</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-4">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-txtblack">
              Transforming Businesses With Innovative Technology
            </h2>
            <p className="text-gray-600 mb-8">
              SkyGridTech is a leading provider of cloud computing and software solutions, dedicated to
              helping businesses optimize their operations, improve efficiency, and drive innovation.
              With our industry expertise and cutting-edge technology, we deliver tailored solutions that
              address your unique business challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  {feature.icon}
                  <span className="text-gray-700 text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-skyblue hover:bg-skydark px-8 py-3 text-white font-medium rounded-md">
              Explore Our Services
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
