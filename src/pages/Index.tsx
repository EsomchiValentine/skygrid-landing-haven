
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
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
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
