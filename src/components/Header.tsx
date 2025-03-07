
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-cyber-dark/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">Try Home School GPT</a>
          <a href="https://college-degree-gpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">College Degree GPT</a>
          <a href="https://learnanyskillgpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">Learn Any Skill GPT</a>
          <a href="https://learnanycourse.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">Learn Any Course GPT</a>
          <a href="#faq" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">FAQ</a>
          <a href="#disclaimer" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">Disclaimer</a>
          <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-neon-blue transition-colors">More AI Tools</a>
          <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="cyber-button">
            <span>Get Started</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-dark/95 backdrop-blur-md shadow-lg pt-4 pb-6 px-4 space-y-4 border-t border-white/10">
          <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="block py-2 text-white hover:text-neon-blue transition-colors">Try Home School GPT</a>
          <a href="https://college-degree-gpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="block py-2 text-white hover:text-neon-blue transition-colors">College Degree GPT</a>
          <a href="https://learnanyskillgpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="block py-2 text-white hover:text-neon-blue transition-colors">Learn Any Skill GPT</a>
          <a href="https://learnanycourse.lovable.app/" target="_blank" rel="noopener noreferrer" className="block py-2 text-white hover:text-neon-blue transition-colors">Learn Any Course GPT</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-neon-blue transition-colors">FAQ</a>
          <a href="#disclaimer" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white hover:text-neon-blue transition-colors">Disclaimer</a>
          <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="block py-2 text-white hover:text-neon-blue transition-colors">More AI Tools</a>
          <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="block py-2 text-center bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg px-4 py-2 font-semibold text-white">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
