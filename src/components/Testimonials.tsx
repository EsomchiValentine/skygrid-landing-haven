
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import Container from './Container';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Skygridtech's cloud platform transformed our infrastructure capabilities. We've reduced costs by 35% while significantly improving performance and reliability.",
      author: "Sarah Johnson",
      title: "CTO, TechNova Solutions",
      avatar: "avatar-1.jpg"
    },
    {
      quote: "The seamless integration between Skygridtech's software solutions and our existing systems made our digital transformation journey remarkably smooth.",
      author: "Michael Chen",
      title: "VP of Engineering, Global Finance Group",
      avatar: "avatar-2.jpg"
    },
    {
      quote: "Their enterprise security features give us peace of mind. The 24/7 support team has been exceptional in quickly resolving any questions we have.",
      author: "Emma Rodriguez",
      title: "Director of IT Security, HealthFirst",
      avatar: "avatar-3.jpg"
    },
    {
      quote: "We migrated our entire data infrastructure to Skygridtech and have seen a 200% improvement in processing speeds for our analytics workloads.",
      author: "David Park",
      title: "Data Science Lead, Retail Innovations",
      avatar: "avatar-4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);
  };
  
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  useEffect(() => {
    startAutoSlide();
    
    return () => {
      stopAutoSlide();
    };
  }, []);
  
  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    // Reset interval
    stopAutoSlide();
    startAutoSlide();
  };
  
  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  return (
    <Section className="py-20 bg-gray-50" id="testimonials">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-skyblue text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-txtblack">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from businesses that have transformed their operations with Skygridtech.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 -left-4 w-24 h-24 bg-skyblue opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-4 w-24 h-24 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 overflow-hidden">
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-skyblue opacity-20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-txtblack mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-4">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-txtblack">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-gray-600">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-txtblack hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index ? 'bg-skyblue w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-txtblack hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
