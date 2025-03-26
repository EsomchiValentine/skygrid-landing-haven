
import React from 'react';
import Section from './Section';
import Container from './Container';
import { Check, Info, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

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

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <Section className="py-20 bg-gray-50" id="about">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-4">ABOUT US</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-txtblack">
            Transforming Businesses With Innovative Technology
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            SkyGridTech is a leading provider of cloud computing and software solutions, dedicated to
            helping businesses optimize their operations, improve efficiency, and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/5c7eb984-f2a6-40c7-a081-c4a6f72408ed.png" 
                alt="Technology Solutions" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 w-24 h-24 md:w-32 md:h-32 bg-skyblue rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-center">
                <Star className="h-8 w-8 mx-auto mb-1" />
                <p className="font-bold text-sm md:text-base">Industry Leader</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-txtblack">Our Commitment To Excellence</h3>
            <p className="text-gray-600 mb-8">
              With our industry expertise and cutting-edge technology, we deliver tailored solutions that
              address your unique business challenges. Our team of experts is committed to providing
              exceptional service and innovative solutions that help your business thrive in today's
              competitive landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  {feature.icon}
                  <span className="text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
            
            <Button variant="default" size="lg" className="bg-skyblue hover:bg-skydark">
              Explore Our Services
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-skyblue mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
