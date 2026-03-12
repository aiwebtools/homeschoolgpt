
import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-70"></div>
        <div className="relative bg-cyber-dark p-1.5 rounded-full border border-neon-blue/30">
          <Sparkles className="w-5 h-5 text-neon-blue" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg tracking-tight text-white">Home School GPT</span>
        <span className="text-xs text-white/70 font-medium -mt-1">
          <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
            Presented by AiWebTools.Ai
          </a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
