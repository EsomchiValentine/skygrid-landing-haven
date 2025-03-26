
import React from 'react';
import Section from './Section';
import Container from './Container';
import Button from './Button';

const Cta: React.FC = () => {
  return (
    <Section className="py-20 bg-gradient-to-br from-skyblue to-blue-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-white/90 text-lg mb-10">
            Join thousands of forward-thinking companies that use Skygridtech to accelerate innovation and scale their operations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-skyblue hover:bg-gray-100 hover:text-skydark shadow-md" size="lg">
              Start Free Trial
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10" size="lg">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-white/70 mb-5">Trusted by leading companies worldwide</p>
            <div className="flex justify-center flex-wrap gap-8 opacity-80">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-24 bg-white/30 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Cta;
