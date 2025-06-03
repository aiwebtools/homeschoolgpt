
import React, { useEffect, useRef } from 'react';
import { Sparkles, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current || !heroRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.floating-element');
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '5');
        const moveX = x * depth;
        const moveY = y * depth;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
      });
    };
    
    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <div ref={heroRef} className="relative min-h-screen pt-28 pb-20 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/50 via-cyber-dark/90 to-cyber-darker/80 z-0"></div>
      
      {/* Animated background elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div data-depth="2" className="floating-element absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue opacity-5 blur-3xl"></div>
        <div data-depth="3" className="floating-element absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-purple opacity-5 blur-3xl"></div>
        <div data-depth="4" className="floating-element absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-neon-teal opacity-5 blur-3xl"></div>
        
        <div data-depth="5" className="floating-element absolute top-20 right-[20%] opacity-20">
          <BookOpen className="w-12 h-12 text-neon-blue" />
        </div>
        <div data-depth="6" className="floating-element absolute bottom-32 left-[15%] opacity-20">
          <GraduationCap className="w-16 h-16 text-neon-purple" />
        </div>
        <div data-depth="4" className="floating-element absolute top-1/2 right-[10%] opacity-20">
          <CheckCircle2 className="w-10 h-10 text-neon-teal" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-2 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span>Free AI Tools from AIWEBTOOLS.AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            <span className="text-white">AI WEB TOOLS:</span>
            <br />
            <span className="text-gradient">Home School GPT</span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-xl">
            Revolutionary free AI tools from AIWEBTOOLS.AI. Home School GPT provides personalized legal guidance, educational resources, and AI-powered tools to make homeschooling simple, effective, and compliant with local regulations.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="neon-glow px-8 py-3 text-center bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              aria-label="Try Home School GPT - Free AI Tool from AIWEBTOOLS.AI"
            >
              Try Free AI Tool Now
            </a>
            <a 
              href="#features" 
              className="px-8 py-3 border border-white/20 hover:border-neon-blue/50 rounded-lg font-semibold text-white hover:text-neon-blue transition-colors"
              aria-label="Learn more about AI WEB TOOLS features"
            >
              Explore AI Tools
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/70">Free AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100K+</div>
              <div className="text-sm text-white/70">Users Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">AI Assistance</div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 perspective-container">
          <div className="transform-3d hover:rotate-y relative rounded-xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-300">
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-parent-teaching-their-ki-0096e43.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
              alt="Free AI tools for homeschooling from AIWEBTOOLS.AI - AI WEB TOOLS" 
              className="w-full h-auto rounded-xl transform transition-transform hover:scale-105 duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-cyber-dark/80 backdrop-blur-md border border-white/10 rounded-lg p-4">
                <div className="flex gap-2 items-center mb-2">
                  <Sparkles className="w-5 h-5 text-neon-blue animate-pulse" />
                  <span className="text-neon-blue font-semibold">AI WEB TOOLS - Free AI Education</span>
                </div>
                <p className="text-white/90 text-sm">
                  "AIWEBTOOLS.AI transformed how I teach my children. These free AI tools are like having an expert educator and legal advisor!"
                </p>
                <div className="mt-2 text-xs text-white/70">– Sarah, AI WEB TOOLS User</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyber-darker to-transparent z-1"></div>
    </div>
  );
};

export default Hero;
