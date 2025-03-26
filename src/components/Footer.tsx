
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-gray-300 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and description section */}
          <div className="md:col-span-4">
            <Logo className="mb-5" dark />
            <p className="text-gray-400 mb-8 pr-4">
              Transforming businesses with innovative cloud computing and software solutions,
              enabling growth and operational excellence.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Instagram size={18} />, label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-skyblue hover:text-white transition-colors duration-300 flex items-center justify-center text-gray-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services section */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-medium mb-5">Services</h3>
            <ul className="space-y-4">
              {[
                { name: "Cloud Infrastructure", href: "#" },
                { name: "Custom Software Development", href: "#" },
                { name: "Managed IT Services", href: "#" },
                { name: "Security Solutions", href: "#" }
              ].map((link, index) => (
                <li key={index} className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2 text-skyblue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-skyblue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company section */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-medium mb-5">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "#about" },
                { name: "Clients", href: "#clients" },
                { name: "Contact Us", href: "#contact" }
              ].map((link, index) => (
                <li key={index} className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2 text-skyblue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-skyblue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-10 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} SkyGridTech. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-skyblue text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-skyblue text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-skyblue text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
