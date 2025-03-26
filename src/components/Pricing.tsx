
import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "2 virtual CPU cores",
        "4GB RAM",
        "80GB SSD storage",
        "1TB monthly bandwidth",
        "5 team members",
        "Basic support",
        "99.9% uptime SLA"
      ],
      cta: "Start with Starter",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with scalability needs",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "4 virtual CPU cores",
        "8GB RAM",
        "160GB SSD storage",
        "3TB monthly bandwidth",
        "Unlimited team members",
        "Priority support",
        "99.95% uptime SLA",
        "Automated backups",
        "API access"
      ],
      cta: "Start with Professional",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "8+ virtual CPU cores",
        "16GB+ RAM",
        "500GB+ SSD storage",
        "Unlimited bandwidth",
        "Unlimited team members",
        "24/7 dedicated support",
        "99.99% uptime SLA",
        "Automated backups",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <Section className="py-20 bg-white" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-txtblack">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Choose the plan that fits your needs. All plans include access to our core cloud platform.</p>
          
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                !isAnnual ? 'bg-white shadow-sm text-txtblack' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                isAnnual ? 'bg-white shadow-sm text-txtblack' : 'text-gray-600'
              }`}
            >
              Annual <span className="text-green-500 text-xs font-semibold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-skyblue shadow-lg' 
                  : 'border border-gray-200 shadow'
              }`}
            >
              {plan.popular && (
                <div className="bg-skyblue text-white text-xs font-semibold px-6 py-1 absolute top-0 right-0 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-green-500 mr-3 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-black'}`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6">Contact our sales team for personalized enterprise pricing and tailored solutions.</p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
