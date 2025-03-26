
import React from 'react';
import Button from './Button';
import Container from './Container';
import Section from './Section';
import { FileIcon, MonitorIcon, MessagesSquareIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <Section className="pt-32 md:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-white to-blue-50" id="hero">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-block mb-6 text-skyblue text-lg font-medium animate-fade-in">
              CLOUD COMPUTING & SOFTWARE SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
              Elevate Your<br />
              Business<br />
              <span className="text-skyblue">to the Cloud</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '500ms' }}>
              Transform your business with our cutting-edge cloud computing and software solutions designed for the modern enterprise.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-12 -right-16 w-64 h-64 bg-skyblue opacity-20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-8 -left-16 w-64 h-64 bg-blue-400 opacity-10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1000ms' }}></div>
            
            {/* Service Cards */}
            <div className="relative z-10">
              {/* Cloud Storage Card */}
              <div className="absolute left-0 top-0 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 w-60 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <div className="w-16 h-16 rounded-full bg-skyblue flex items-center justify-center mb-4">
                  <FileIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-skyblue">Cloud Storage</h3>
              </div>
              
              {/* Enterprise Solutions Card */}
              <div className="absolute right-0 top-32 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 w-72 animate-fade-in" style={{ animationDelay: '700ms' }}>
                <div className="w-16 h-16 rounded-full bg-skyblue flex items-center justify-center mb-4">
                  <MonitorIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-skyblue">Enterprise Solutions</h3>
              </div>
              
              {/* Custom Software Card */}
              <div className="absolute bottom-0 right-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 w-64 animate-fade-in" style={{ animationDelay: '900ms' }}>
                <div className="w-16 h-16 rounded-full bg-skyblue flex items-center justify-center mb-4">
                  <MessagesSquareIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-skyblue">Custom Software</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
