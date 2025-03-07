
import React from 'react';
import { 
  Scale, BookOpen, Lightbulb, CheckSquare, 
  Compass, GraduationCap, FileText, BarChart4 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Scale className="w-10 h-10 text-neon-blue" />,
      title: "Legal Compliance Guidance",
      description: "Get detailed information about homeschooling laws specific to your state or region, including filing requirements."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-neon-purple" />,
      title: "Curriculum Resources",
      description: "Access recommendations for age-appropriate curriculum materials and educational resources tailored to your needs."
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-neon-teal" />,
      title: "Educational Tools",
      description: "Connect with powerful AI teaching assistants for lesson planning, quiz creation, and grading support."
    },
    {
      icon: <FileText className="w-10 h-10 text-neon-green" />,
      title: "Documentation Support",
      description: "Find templates and guidance for maintaining proper educational records required by your local authorities."
    },
    {
      icon: <Compass className="w-10 h-10 text-neon-pink" />,
      title: "Personalized Guidance",
      description: "Receive tailored advice based on your location, student needs, and specific homeschooling goals."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-neon-blue" />,
      title: "Teaching Strategies",
      description: "Learn effective teaching methods and approaches for different subjects and learning styles."
    },
    {
      icon: <CheckSquare className="w-10 h-10 text-neon-purple" />,
      title: "Requirement Tracking",
      description: "Keep track of requirements and deadlines for your homeschooling program to ensure continuous compliance."
    },
    {
      icon: <BarChart4 className="w-10 h-10 text-neon-teal" />,
      title: "Progress Assessment",
      description: "Get tools to evaluate student progress and ensure educational goals are being met effectively."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-cyber-darker">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Comprehensive Homeschooling Support</h2>
          <p className="text-white/70 text-lg">
            Home School GPT provides everything you need to create a successful, legally-compliant homeschooling experience.
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
          >
            Start Your Homeschooling Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
