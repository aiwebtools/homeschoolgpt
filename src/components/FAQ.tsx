
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Home School GPT?",
      answer: "Home School GPT is an AI-powered guide designed to assist parents with homeschooling their children. It provides information on local homeschooling laws, educational resources, curriculum guidance, and connects you with tools for creating lessons and assessments."
    },
    {
      question: "How does Home School GPT know about my local homeschooling laws?",
      answer: "Home School GPT conducts comprehensive web searches to retrieve accurate, up-to-date information about homeschooling regulations specific to your state or region. It can provide guidance on requirements like filing notices of intent, record-keeping, subject requirements, and testing."
    },
    {
      question: "Is the legal information provided by Home School GPT accurate?",
      answer: "Home School GPT strives to provide accurate information based on current regulations. However, as laws can change, we recommend verifying the information with your local education department or homeschooling association before making decisions."
    },
    {
      question: "What educational resources does Home School GPT provide?",
      answer: "Home School GPT offers links to curriculum resources, teaching tools, assessment platforms, and specialized AI tools like Course Creator GPT, Educator Pro, and Quiz Maker AI to help you create a comprehensive homeschooling program."
    },
    {
      question: "Can Home School GPT help me create lessons and assessments?",
      answer: "Yes! Home School GPT connects you with specialized tools like Course Creator GPT for developing curriculum and Quiz Maker AI for creating assessments, making it easier to develop and evaluate educational content."
    },
    {
      question: "How do I get started with Home School GPT?",
      answer: "To get started, simply visit the Home School GPT page and type 'YES' to begin. The AI will prompt you for your location and specific needs, then provide tailored guidance and resources."
    },
    {
      question: "Is Home School GPT only for K-12 education?",
      answer: "While Home School GPT primarily focuses on K-12 homeschooling, it can also direct users to College Degree GPT for post-secondary education options and resources for self-learning at the college level."
    },
    {
      question: "Are there any costs associated with using Home School GPT?",
      answer: "Home School GPT itself is accessible through the ChatGPT platform. While some of the recommended resources may have associated costs, Home School GPT prioritizes suggesting free and accessible tools whenever possible."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-cyber-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker to-cyber-dark z-0"></div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Frequently Asked Questions</h2>
          <p className="text-white/70 text-lg">
            Find answers to common questions about Home School GPT and homeschooling.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-white font-medium hover:text-neon-blue transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
