import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import Container from './Container';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The custom software developed by SkyGridTech perfectly aligned with our business processes. Their team's attention to detail and technical expertise exceeded our expectations.",
      author: "Chukwudumebi Amadi",
      title: "Co-founder, Purple Life Technology",
      avatar: "avatar-1.jpg"
    }
  ];

  // Since we only have one testimonial now, we don't need the slider functionality
  // but we'll keep the structure in place for future additions
  const [currentIndex] = useState(0);

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
            <div className="mb-6">
              <svg className="w-10 h-10 text-skyblue opacity-20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
              
            <blockquote className="text-xl md:text-2xl font-medium text-txtblack mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
              
            <div className="flex items-center">
              <Avatar className="w-12 h-12 mr-4">
                <AvatarFallback className="bg-gray-200 text-gray-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-txtblack">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-gray-600">{testimonials[currentIndex].title}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
