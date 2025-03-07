
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeschool Parent of 3",
      content: "Home School GPT was a lifesaver when we decided to homeschool our children. It provided clear guidance on our state's requirements and connected us with amazing resources. The curriculum suggestions were perfectly tailored to each child's needs!",
      rating: 5
    },
    {
      name: "Michael Torres",
      role: "New to Homeschooling",
      content: "As someone with no prior experience in education, I was nervous about homeschooling my daughter. Home School GPT walked me through every step, from filing requirements to creating engaging lessons. Now I feel confident and my daughter is thriving!",
      rating: 5
    },
    {
      name: "Lisa Patel",
      role: "Homeschool Co-op Organizer",
      content: "Our homeschool co-op uses Home School GPT to ensure we're following all regulations and to discover new teaching resources. It's become an essential tool for our planning sessions and has greatly improved our educational offerings.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "Parent of Special Needs Child",
      content: "Finding resources for homeschooling my son with learning differences was challenging until I discovered Home School GPT. It helped me navigate the legal aspects and provided specialized curriculum recommendations that have made a world of difference.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-cyber-dark">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyber-darker to-transparent z-1"></div>
      
      <div className="container mx-auto px-4 relative z-2">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Success Stories</h2>
          <p className="text-white/70 text-lg">
            Hear from parents who have transformed their homeschooling experience with Home School GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-panel rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-blue to-neon-purple opacity-10 rounded-bl-[100px] group-hover:opacity-20 transition-opacity"></div>
              
              <Quote className="w-10 h-10 text-neon-blue/30 mb-4" />
              
              <p className="text-white/90 mb-6 relative z-1">{testimonial.content}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
                
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-neon-blue fill-neon-blue' : 'text-white/30'}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
