
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Solutions from '@/components/Solutions';
import Offerings from '@/components/Offerings';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Initialize scroll animations
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.reveal-animation, .reveal-bottom, .reveal-left, .reveal-right');
    
    const elementInView = (el: Element, scrollOffset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (elementTop <= window.innerHeight - scrollOffset);
    };
    
    const displayScrollElement = (element: Element) => {
      element.classList.add('active');
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          displayScrollElement(el);
        }
      });
    };
    
    // Initial check
    setTimeout(handleScrollAnimation, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Solutions />
        <Clients />
        <Offerings />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
