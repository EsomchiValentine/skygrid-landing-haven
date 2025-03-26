import React from 'react';
import Section from './Section';
import Container from './Container';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const AboutUs: React.FC = () => {
  const teams = [
    {
      name: "Leadership Team",
      description: "Visionaries guiding our company towards excellence and innovation.",
      icon: <Award className="h-8 w-8 text-skyblue" />
    },
    {
      name: "Development Team",
      description: "Expert engineers building robust solutions with cutting-edge technology.",
      icon: <Users className="h-8 w-8 text-skyblue" />
    },
    {
      name: "Support Team",
      description: "Dedicated professionals ensuring your success around the clock.",
      icon: <Clock className="h-8 w-8 text-skyblue" />
    },
    {
      name: "Security Team",
      description: "Specialists safeguarding your data with industry-leading protocols.",
      icon: <ShieldCheck className="h-8 w-8 text-skyblue" />
    }
  ];

  return (
    <Section className="py-20 bg-black" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-gray-800 text-skyblue text-sm font-medium mb-4">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Innovation-Driven Solutions for Modern Businesses
            </h2>
            <p className="text-gray-400 mb-8">
              Founded in 2013, SkyGridTech has been at the forefront of digital transformation, 
              helping businesses across industries leverage technology to achieve their goals. 
              Our team of experts brings decades of combined experience to every project, 
              ensuring exceptional results that drive real business value.
            </p>
            <Button className="bg-skyblue hover:bg-skydark">
              Meet Our Team
            </Button>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-xl border-0 border-gray-800 bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Our Team Collaboration" 
                className="w-full h-auto object-cover aspect-[16/9] opacity-80"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium">Our global team collaborating on innovative solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">Our Core Teams</h3>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Our diverse experts collaborate to deliver comprehensive solutions that drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:shadow-md transition-shadow border border-gray-800">
                <div className="mb-4">{team.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-white">{team.name}</h4>
                <p className="text-gray-400">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                We're dedicated to empowering businesses with innovative technology solutions that 
                optimize operations, improve efficiency, and drive growth. Our client-centric approach 
                ensures we deliver tailored solutions that address your unique challenges.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-skyblue/10 p-2 rounded">
                  <Users className="h-5 w-5 text-skyblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Client-Focused Approach</h4>
                  <p className="text-gray-400 text-sm">Your success is our priority, with solutions tailored to your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-skyblue/10 p-2 rounded">
                  <Award className="h-5 w-5 text-skyblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Industry Excellence</h4>
                  <p className="text-gray-400 text-sm">Award-winning solutions recognized for their innovation and impact.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-skyblue/10 p-2 rounded">
                  <ShieldCheck className="h-5 w-5 text-skyblue" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Trust & Security</h4>
                  <p className="text-gray-400 text-sm">Enterprise-grade security protocols protecting your valuable data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
