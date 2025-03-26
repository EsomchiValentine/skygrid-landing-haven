import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo className="relative z-20" />
        
        <button 
          className="relative z-20 md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-txtblack transition-all ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
          <div className={`w-6 h-0.5 bg-txtblack mt-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-txtblack mt-1.5 transition-all ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center">
            <Button 
              className="bg-skyblue hover:bg-skydark text-white font-medium rounded-md"
            >
              Get Started
            </Button>
          </div>
        </nav>
        
        <div className={`fixed inset-0 bg-white z-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <NavLinks onClick={() => setIsMenuOpen(false)} direction="vertical" />
            <div className="flex flex-col items-center gap-4 mt-8">
              <Button 
                className="bg-skyblue hover:bg-skydark text-white font-medium rounded-md w-40"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  onClick?: () => void;
  direction?: 'horizontal' | 'vertical';
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick, direction = 'horizontal' }) => {
  const linkClasses = "text-txtblack hover:text-skyblue transition-colors relative group";
  const underlineClasses = "absolute bottom-0 left-0 w-0 h-0.5 bg-skyblue transition-all duration-300 group-hover:w-full";
  
  return (
    <div className={`flex ${direction === 'vertical' ? 'flex-col space-y-6' : 'space-x-8'}`}>
      <a href="/" className={linkClasses} onClick={onClick}>
        Home
        <span className={underlineClasses}></span>
      </a>
      <a href="#services" className={linkClasses} onClick={onClick}>
        Services
        <span className={underlineClasses}></span>
      </a>
      <a href="#about" className={linkClasses} onClick={onClick}>
        About Us
        <span className={underlineClasses}></span>
      </a>
      <a href="#testimonials" className={linkClasses} onClick={onClick}>
        Offerings
        <span className={underlineClasses}></span>
      </a>
      <a href="#contact" className={linkClasses} onClick={onClick}>
        Contact Us
        <span className={underlineClasses}></span>
      </a>
    </div>
  );
};

export default Header;
