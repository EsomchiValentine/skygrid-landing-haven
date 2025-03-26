
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Container from '@/components/Container';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <Container className="text-center px-6">
          <h1 className="text-9xl font-bold text-skyblue mb-6">404</h1>
          <h2 className="text-3xl font-bold text-txtblack mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/'}>
            Return to Homepage
          </Button>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
