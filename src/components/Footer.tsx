
import React from 'react';
import Container from './Container';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Cloud Infrastructure", href: "#" },
        { name: "Platform Services", href: "#" },
        { name: "Software Solutions", href: "#" },
        { name: "Enterprise Security", href: "#" },
        { name: "Analytics", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API References", href: "#" },
        { name: "Status", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Help Center", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Security", href: "#" },
        { name: "Compliance", href: "#" },
        { name: "Cookie Settings", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-600 mb-6 max-w-sm">
              Empowering businesses with scalable cloud computing and innovative software solutions since 2015.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'facebook'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                  aria-label={`${social} link`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-txtblack mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-skyblue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Skygridtech. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <a href="#" className="text-gray-500 hover:text-skyblue text-sm">Privacy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-500 hover:text-skyblue text-sm">Terms</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-500 hover:text-skyblue text-sm">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
