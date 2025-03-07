
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animate elements on scroll
    const fadeElements = document.querySelectorAll('.fade-up-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Type assertion to HTMLElement to access style property
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-cyber-darker relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
