
import React from 'react';
import Section from './Section';
import Container from './Container';
import { Card, CardContent } from './ui/card';
import { 
  Database, 
  Cloud, 
  Cog, 
  Shield, 
  Key,
  ServerCog
} from 'lucide-react';
import CloudCog from './icons/CloudCog';

const Offerings: React.FC = () => {
  const awsServices = [
    {
      icon: <Database className="w-10 h-10 text-skyblue" />,
      title: "Amazon Redshift Solutions",
      description: "High-performance data warehousing solutions with Amazon Redshift for efficient analysis and insights."
    },
    {
      icon: <Cloud className="w-10 h-10 text-skyblue" />,
      title: "Amazon Database Migration",
      description: "Seamless migration of databases to AWS with minimal downtime and complete data integrity."
    },
    {
      icon: <ServerCog className="w-10 h-10 text-skyblue" />,
      title: "Amazon Glue",
      description: "Fully managed ETL service that makes it simple to prepare and load your data for analytics."
    },
    {
      icon: <CloudCog className="w-10 h-10 text-skyblue" />,
      title: "Amazon CloudFormation",
      description: "Infrastructure as code to model and provision AWS and third-party resources in your cloud environment."
    },
    {
      icon: <Cog className="w-10 h-10 text-skyblue" />,
      title: "Amazon Control Tower and Delivery",
      description: "Set up and govern a secure, compliant multi-account AWS environment with streamlined delivery."
    },
    {
      icon: <ServerCog className="w-10 h-10 text-skyblue" />,
      title: "Amazon Lambda Services",
      description: "Serverless computing solutions allowing you to run code without provisioning or managing servers."
    },
    {
      icon: <Shield className="w-10 h-10 text-skyblue" />,
      title: "Amazon WAF and Security",
      description: "Advanced web application firewall services to protect your applications from common exploits and threats."
    },
    {
      icon: <Key className="w-10 h-10 text-skyblue" />,
      title: "Amazon API Gateway",
      description: "Create, publish, maintain, monitor, and secure APIs at any scale for your applications."
    }
  ];

  return (
    <Section className="py-20 bg-gray-50" id="offerings">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-4">OUR OFFERINGS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-txtblack">Amazon AWS Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of Amazon AWS services to help your business leverage the
            power of cloud computing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awsServices.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="mb-4 bg-blue-50 inline-block p-3 rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-txtblack">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Offerings;
