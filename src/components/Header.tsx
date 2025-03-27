
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

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
    <header className={`fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo className="relative z-20" dark={true} />
        
        <button 
          className="relative z-20 md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-skyblue ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
          <div className={`w-6 h-0.5 bg-skyblue mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-skyblue mt-1.5 ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>
        
        <div className={`fixed inset-0 bg-black z-10 ${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <NavLinks onClick={() => setIsMenuOpen(false)} direction="vertical" />
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
  const linkClasses = "text-skyblue hover:text-skydark relative group";
  
  return (
    <div className={`flex ${direction === 'vertical' ? 'flex-col space-y-6' : 'space-x-8'}`}>
      <a href="/" className={linkClasses} onClick={onClick}>
        Home
      </a>
      <a href="#about" className={linkClasses} onClick={onClick}>
        About Us
      </a>
      <a href="#clients" className={linkClasses} onClick={onClick}>
        Clients
      </a>
      <a href="#offerings" className={linkClasses} onClick={onClick}>
        Offerings
      </a>
      <a href="#contact" className={linkClasses} onClick={onClick}>
        Contact Us
      </a>
    </div>
  );
};

export default Header;
