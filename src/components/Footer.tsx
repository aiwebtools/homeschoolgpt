
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-darker pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-6" />
            <p className="text-white/70 mb-6">
              Empowering families to provide quality education with love and the transformative power of AI.
            </p>
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <Phone className="w-4 h-4 text-neon-blue" />
              <a href="tel:+14758008096" className="hover:text-neon-blue transition-colors">(475) 800-8096</a>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-4 h-4 text-neon-blue" />
              <a href="mailto:Contact@ai-webtools.com" className="hover:text-neon-blue transition-colors">Contact@ai-webtools.com</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>Try Home School GPT</span>
                </a>
              </li>
              <li>
                <a href="https://college-degree-gpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>College Degree GPT</span>
                </a>
              </li>
              <li>
                <a href="https://learnanyskillgpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>Learn Any Skill GPT</span>
                </a>
              </li>
              <li>
                <a href="https://learnanycourse.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>Learn Any Course GPT</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>Disclaimer</span>
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue transition-colors flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">More From AiWebTools</h3>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-neon-blue/30 transition-colors"
            >
              <div className="font-medium text-white group-hover:text-neon-blue transition-colors">More AI Tools</div>
              <p className="text-sm text-white/60">Discover our full range of educational and productivity AI tools.</p>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm text-center md:text-left">
            <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
              © 2025 AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-neon-blue transition-colors">Try Home School GPT</a>
            <a href="https://college-degree-gpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-neon-blue transition-colors">College Degree GPT</a>
            <a href="https://learnanyskillgpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-neon-blue transition-colors">Learn Any Skill GPT</a>
            <a href="#faq" className="text-sm text-white/70 hover:text-neon-blue transition-colors">FAQ</a>
            <a href="#disclaimer" className="text-sm text-white/70 hover:text-neon-blue transition-colors">Disclaimer</a>
          </div>
          
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
