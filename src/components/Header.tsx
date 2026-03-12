
import React, { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt", label: "Try Home School GPT", external: true },
    { href: "https://college-degree-gpt.lovable.app/", label: "College Degree GPT", external: true },
    { href: "https://learnanyskillgpt.lovable.app/", label: "Learn Any Skill GPT", external: true },
    { href: "https://learnanycourse.lovable.app/", label: "Learn Any Course GPT", external: true },
    { href: "#faq", label: "FAQ", external: false },
    { href: "#disclaimer", label: "Disclaimer", external: false },
    { href: "https://aiwebtools.lovable.app/?via=aiwebtools", label: "More AI Tools", external: true },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-cyber-dark/90 backdrop-blur-md shadow-md' : 'py-3 sm:py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-white hover:text-neon-blue transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="cyber-button">
            <span>Get Started</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[min(85vw,320px)] bg-cyber-dark/98 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-white font-display font-semibold text-lg">Menu</span>
          <button 
            onClick={closeMenu}
            className="text-white p-2 -mr-2 touch-manipulation"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={!link.external ? closeMenu : undefined}
              className="block py-3 px-4 text-white hover:text-neon-blue hover:bg-white/5 rounded-lg transition-all duration-150 text-base font-medium touch-manipulation"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg px-4 py-3 font-semibold text-white active:scale-95 transition-transform touch-manipulation"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
