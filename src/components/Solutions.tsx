
import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: "iaas",
      name: "Infrastructure as a Service",
      description: "Scalable virtual machines, storage, and networking resources on demand.",
      features: [
        "Auto-scaling compute resources",
        "High-performance SSD storage",
        "Global content delivery network",
        "Dedicated virtual private clouds",
        "Pay-as-you-go pricing model"
      ],
      image: "cloud-infrastructure.png"
    },
    {
      id: "paas",
      name: "Platform as a Service",
      description: "Fully managed development platforms to build, deploy, and scale applications.",
      features: [
        "Containerized application hosting",
        "Managed database services",
        "Serverless compute functions",
        "Continuous integration pipelines",
        "Application performance monitoring"
      ],
      image: "cloud-platform.png"
    },
    {
      id: "saas",
      name: "Software as a Service",
      description: "Enterprise-ready applications delivered through the cloud.",
      features: [
        "Business intelligence dashboards",
        "Customer relationship management",
        "Collaborative productivity tools",
        "AI-powered analytics",
        "Enterprise resource planning"
      ],
      image: "cloud-software.png"
    }
  ];

  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <Section className="py-20 bg-black relative overflow-hidden" id="solutions">
      {/* Cloud Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-12 bg-gray-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 right-20 w-24 h-16 bg-gray-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-24 left-1/4 w-16 h-10 bg-gray-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-28 h-16 bg-gray-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-12 bg-gray-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <Container>
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-800 text-skyblue text-sm font-medium mb-4 animate-fade-in">Cloud Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-up" style={{ animationDelay: '300ms' }}>Tailored Services for Your Business</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '500ms' }}>Choose the cloud delivery model that best fits your organization's needs.</p>
        </div>
        
        <div className="flex flex-col gap-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '700ms' }}>
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSolution.id === solution.id 
                    ? 'bg-skyblue text-white shadow-md' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {solution.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg animate-scale-in">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">{activeSolution.name}</h3>
              <p className="text-gray-400 mb-6">{activeSolution.description}</p>
              
              <ul className="space-y-3 mb-8">
                {activeSolution.features.map((feature, index) => (
                  <li key={index} className="flex items-start animate-slide-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <span className="text-skyblue mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative hover-scale">
                <div className="absolute inset-0 bg-skyblue/20 rounded-full blur-3xl transform scale-110 animate-pulse-subtle"></div>
                <div className="relative bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700">
                  <div className="w-full bg-black rounded-lg p-8 flex items-center justify-center">
                    {activeSolution.id === "iaas" && (
                      <svg className="w-48 h-48 text-skyblue animate-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    )}
                    {activeSolution.id === "paas" && (
                      <svg className="w-48 h-48 text-skyblue animate-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    )}
                    {activeSolution.id === "saas" && (
                      <svg className="w-48 h-48 text-skyblue animate-float" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Solutions;
