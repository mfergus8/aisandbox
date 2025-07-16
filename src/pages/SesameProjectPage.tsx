import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Headphones, Sparkles } from 'lucide-react';

export default function SesameProjectPage() {
  const beginnerProject = {
    title: "Your First Voice Assistant",
    goal: "To create your first AI voice assistant using Sesame's conversational AI capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Assistant Setup",
        description: "Set up your first voice assistant with basic conversational abilities.",
        prompt: "Create a friendly customer service assistant that can answer basic questions"
      },
      {
        title: "Voice Training",
        description: "Train your assistant to understand and respond to common queries.",
        prompt: "Teach the assistant to handle: greetings, product questions, and basic support"
      },
      {
        title: "Conversation Flow",
        description: "Design natural conversation flows for better user interactions.",
        prompt: "Create smooth transitions between topics and helpful follow-up questions"
      },
      {
        title: "Testing and Refinement",
        description: "Test your voice assistant and refine its responses for better performance."
      }
    ]
  };

  const intermediateProject = {
    title: "The Business Automation Assistant",
    goal: "To create a sophisticated voice assistant for business automation and customer service.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Business Logic Integration",
        description: "Integrate your voice assistant with business systems and databases.",
        prompt: "Connect assistant to inventory, scheduling, and customer management systems"
      },
      {
        title: "Multi-intent Handling",
        description: "Train the assistant to handle complex, multi-part requests.",
        prompt: "Handle requests like: 'Check my order status and schedule a callback if there are issues'"
      },
      {
        title: "Personalization",
        description: "Add personalization features based on user history and preferences.",
        prompt: "Remember user preferences and provide personalized recommendations"
      },
      {
        title: "Analytics Integration",
        description: "Set up analytics to track conversation quality and user satisfaction.",
        prompt: "Monitor conversation success rates and identify improvement opportunities"
      },
      {
        title: "Deployment",
        description: "Deploy your assistant across multiple channels: phone, web, mobile."
      }
    ]
  };

  const advancedProject = {
    title: "The Enterprise Voice Platform",
    goal: "To build a comprehensive enterprise voice platform with advanced AI capabilities.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Multi-language Support",
        description: "Create voice assistants that work seamlessly across multiple languages.",
        prompt: "Build assistants for English, Spanish, and French with cultural adaptations"
      },
      {
        title: "Advanced NLP Integration",
        description: "Integrate advanced natural language processing for complex understanding.",
        prompt: "Handle complex queries, sentiment analysis, and contextual understanding"
      },
      {
        title: "Voice Biometrics",
        description: "Implement voice authentication and personalization features.",
        prompt: "Add voice recognition for security and personalized experiences"
      },
      {
        title: "Enterprise Integration",
        description: "Connect with enterprise systems: CRM, ERP, and business intelligence.",
        prompt: "Enable voice queries for sales data, customer info, and business metrics"
      },
      {
        title: "Scalability and Performance",
        description: "Optimize for enterprise-scale deployment with high availability."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/voice-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full px-4 py-2 mb-6">
              <Headphones className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">Sesame Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Hands-On Projects with Sesame
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Sesame excels at natural voice conversations and AI assistant creation for business automation. 
                It's perfect for businesses wanting to create intelligent voice interfaces and customer service solutions.
              </p>
            </div>
            
            <a 
              href="https://sesame.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Sesame
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Project Level
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Select a difficulty level and build intelligent voice assistants with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">Sesame Projects</span>
          </div>
          <p className="text-gray-400">
            Build intelligent voice assistants and conversational AI solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}