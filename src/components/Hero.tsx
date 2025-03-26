import React from 'react';
import Button from './Button';
import Container from './Container';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <Section className="pt-32 md:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-white to-blue-50" id="hero">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-6 animate-fade-in">CLOUD COMPUTING & SOFTWARE SOLUTIONS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-txtblack animate-fade-up" style={{ animationDelay: '300ms' }}>
              Elevate Your Business <br />
              <span className="text-skyblue">to the Cloud</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: '500ms' }}>
              Transform your business with our cutting-edge cloud computing and software solutions designed for the modern enterprise.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '700ms' }}>
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Watch Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 animate-fade-up" style={{ animationDelay: '900ms' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 5,000+ companies</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-12 -right-16 w-64 h-64 bg-skyblue opacity-20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-8 -left-16 w-64 h-64 bg-blue-400 opacity-10 rounded-full filter blur-3xl animate-pulse-subtle" style={{ animationDelay: '1000ms' }}></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <div className="p-2 rounded-xl bg-gradient-to-br from-skyblue to-blue-400 mb-4 w-14 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-gray-600 mb-6">Scale your applications effortlessly with our advanced cloud infrastructure</p>
              
              <div className="space-y-4 mb-6">
                {[
                  { label: "CPU Usage", value: 45 },
                  { label: "Memory", value: 72 },
                  { label: "Storage", value: 23 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      <span className="text-sm font-medium text-gray-500">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-skyblue h-2 rounded-full" 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">All systems operational</span>
                </div>
                <a href="#" className="text-skyblue hover:text-skydark transition-colors text-sm font-medium">View Details →</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
