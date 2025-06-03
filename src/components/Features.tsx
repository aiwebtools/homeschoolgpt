
import React from 'react';
import { 
  Scale, BookOpen, Lightbulb, CheckSquare, 
  Compass, GraduationCap, FileText, BarChart4 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Scale className="w-10 h-10 text-neon-blue" />,
      title: "AI-Powered Legal Compliance",
      description: "Get detailed AI-generated information about homeschooling laws specific to your state. Free AI tools from AIWEBTOOLS.AI ensure legal compliance."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-neon-purple" />,
      title: "Smart Curriculum AI Tools",
      description: "Access AI-recommended curriculum materials and educational resources. Our free AI tools provide personalized learning paths."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-neon-teal" />,
      title: "Free Educational AI Suite",
      description: "Connect with powerful AI teaching assistants from AI WEB TOOLS for lesson planning, quiz creation, and automated grading."
    },
    {
      icon: <FileText className="w-10 h-10 text-neon-green" />,
      title: "AI Documentation Assistant",
      description: "Find AI-generated templates and guidance for maintaining proper educational records with AIWEBTOOLS.AI free tools."
    },
    {
      icon: <Compass className="w-10 h-10 text-neon-pink" />,
      title: "Personalized AI Guidance",
      description: "Receive AI-tailored advice based on your location and student needs using advanced artificial intelligence algorithms."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-neon-blue" />,
      title: "AI Teaching Strategies",
      description: "Learn AI-optimized teaching methods and approaches for different subjects and learning styles with free AI tools."
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-neon-purple" />,
      title: "Smart AI Tracking",
      description: "AI-powered requirement tracking and deadline management to ensure continuous compliance with local regulations."
    },
    {
      icon: <BarChart4 className="w-10 h-10 text-neon-teal" />,
      title: "AI Progress Analytics",
      description: "Get AI-driven tools to evaluate student progress and ensure educational goals are met with data-driven insights."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-cyber-darker">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
            Free AI Tools for Comprehensive Homeschooling
          </h2>
          <p className="text-white/70 text-lg">
            AI WEB TOOLS from AIWEBTOOLS.AI provides everything you need with our free AI tools to create a successful, legally-compliant homeschooling experience powered by artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-panel rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="mb-4 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-vYvygy1Zr-home-school-gpt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-glow px-8 py-3 text-center bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white hover:opacity-90 transition-opacity inline-block"
            aria-label="Start using free AI tools from AIWEBTOOLS.AI for homeschooling"
          >
            Start Using Free AI Tools Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
