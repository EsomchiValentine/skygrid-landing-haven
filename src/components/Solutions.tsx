
import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';

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
    <Section className="py-20 bg-gray-50" id="solutions">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-4">Cloud Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-txtblack">Tailored Services for Your Business</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the cloud delivery model that best fits your organization's needs.</p>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSolution.id === solution.id 
                    ? 'bg-skyblue text-white shadow-md' 
                    : 'bg-white text-txtblack hover:bg-gray-100'
                }`}
              >
                {solution.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-txtblack">{activeSolution.name}</h3>
              <p className="text-gray-600 mb-6">{activeSolution.description}</p>
              
              <ul className="space-y-3 mb-8">
                {activeSolution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button>Learn More</Button>
                <Button variant="outline">Get a Demo</Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-skyblue/20 rounded-full blur-3xl transform scale-110"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-full bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                    {activeSolution.id === "iaas" && (
                      <svg className="w-48 h-48 text-skyblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    )}
                    {activeSolution.id === "paas" && (
                      <svg className="w-48 h-48 text-skyblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    )}
                    {activeSolution.id === "saas" && (
                      <svg className="w-48 h-48 text-skyblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
