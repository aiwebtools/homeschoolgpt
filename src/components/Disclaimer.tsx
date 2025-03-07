
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative bg-cyber-darker">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-darker z-0"></div>
      
      <div className="container mx-auto px-4 relative z-1">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">Legal Disclaimer</h2>
          <p className="text-white/70 text-lg">
            Important information regarding the use of Home School GPT.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Alert className="border-white/10 bg-white/5 backdrop-blur-sm">
            <AlertCircle className="h-5 w-5 text-neon-blue" />
            <AlertTitle className="text-white font-semibold text-lg">Educational Tool Disclaimer</AlertTitle>
            <AlertDescription className="text-white/80">
              Home School GPT is provided as an informational and educational tool only. While we strive to provide accurate and up-to-date information, it is not a substitute for professional legal or educational advice.
            </AlertDescription>
          </Alert>

          <div className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Legal Information</h3>
            <p className="text-white/80 mb-4">
              The information provided by Home School GPT regarding homeschooling laws, requirements, and regulations is gathered from publicly available sources and is subject to change. Laws and requirements vary significantly between jurisdictions and may be updated or modified by relevant authorities.
            </p>
            <p className="text-white/80 mb-4">
              Users are strongly encouraged to verify all legal information with the appropriate state, local, or regional educational authorities before making decisions or taking actions related to homeschooling. AiWebTools.Ai and its affiliates make no guarantees regarding the accuracy, completeness, or current nature of the legal information provided.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Educational Resources</h3>
            <p className="text-white/80 mb-4">
              The educational resources, curriculum recommendations, and teaching strategies suggested by Home School GPT are provided for informational purposes only. The suitability of any resource or approach depends on individual circumstances, learning styles, and educational goals.
            </p>
            <p className="text-white/80 mb-4">
              Users are responsible for evaluating and selecting appropriate educational materials and methods for their specific needs. AiWebTools.Ai does not endorse specific educational products or approaches unless explicitly stated.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Limitation of Liability</h3>
            <p className="text-white/80 mb-4">
              By using Home School GPT, users acknowledge that AiWebTools.Ai and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or inability to use the service or from any decisions made or actions taken based on the information provided.
            </p>
            <p className="text-white/80 mb-4">
              This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if AiWebTools.Ai has been advised of the possibility of such damages.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Third-Party Links</h3>
            <p className="text-white/80 mb-4">
              Home School GPT may provide links to third-party websites, resources, or tools. These links are provided for convenience and informational purposes only. AiWebTools.Ai has no control over the content of these external sites and assumes no responsibility for their content, accuracy, or practices.
            </p>
            
            <div className="mt-8 p-4 border border-neon-blue/30 rounded-lg bg-cyber-blue/5">
              <p className="text-white/90 text-center">
                By using Home School GPT, you acknowledge that you have read, understood, and agree to these disclaimers and limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
