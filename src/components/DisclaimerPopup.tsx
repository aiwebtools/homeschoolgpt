
import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  onAccept: () => void;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { toast } = useToast();
  
  const handleAccept = () => {
    toast({
      title: "Welcome to Home School GPT!",
      description: "You've accepted the terms. Let's start your homeschooling journey!",
      duration: 5000,
    });
    onAccept();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="max-w-md w-full glass-panel rounded-xl border border-neon-blue/30 p-6 shadow-[0_0_25px_rgba(14,165,233,0.3)] animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-display font-bold text-gradient">
            <Shield className="inline-block mr-2 h-5 w-5 text-neon-blue" /> Legal Disclaimer
          </h2>
        </div>
        
        <div className="py-3 mb-4 text-white/80 font-body text-sm space-y-3 max-h-[300px] overflow-y-auto scrollbar-none">
          <p>
            Home School GPT is provided for informational purposes only. The information provided regarding homeschooling laws, requirements, and regulations is gathered from publicly available sources and may change.
          </p>
          <p>
            Users are strongly encouraged to verify all information with appropriate educational authorities before making decisions related to homeschooling. AiWebTools.Ai makes no guarantees regarding the accuracy of the information provided.
          </p>
          <p>
            By using Home School GPT, you acknowledge that AiWebTools.Ai shall not be liable for any damages resulting from use of this service or from any decisions made based on the information provided.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleAccept}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="cyber-button group relative overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center font-display tracking-wider">
              <CheckCircle className={`mr-2 h-5 w-5 transition-all duration-300 ${isHovering ? 'text-white' : 'text-neon-blue'}`} />
              I AGREE
            </span>
            <div className={`absolute inset-0 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-size-200 animate-shimmer"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
