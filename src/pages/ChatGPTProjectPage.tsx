import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

export default function ChatGPTProjectPage() {
  const beginnerProject = {
    title: "The Creative Campaign",
    goal: "To develop a complete marketing campaign for a fictional product, learning how to use ChatGPT for brainstorming and content creation.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Brainstorming",
        description: "Open ChatGPT and use a prompt to generate creative slogans for your fictional product.",
        prompt: "Act as a marketing expert. Brainstorm 10 slogans for a new brand of eco-friendly coffee called 'Earth-Brew'."
      },
      {
        title: "Ad Copy",
        description: "Pick your favorite slogan and create social media advertisements using ChatGPT.",
        prompt: "Using the slogan '[Your Chosen Slogan]', write three short social media ads for Instagram to promote Earth-Brew coffee."
      },
      {
        title: "Scriptwriting",
        description: "Generate a complete video commercial script with the right tone and messaging.",
        prompt: "Write a script for a 30-second video commercial for Earth-Brew coffee. The tone should be warm and inspiring."
      },
      {
        title: "Review",
        description: "Read through all the generated content. You now have a full campaign starter kit! Consider how each piece works together to create a cohesive brand message."
      }
    ]
  };

  const intermediateProject = {
    title: "The Story Architect",
    goal: "To collaborate with ChatGPT in creating a compelling short story, learning about narrative structure and creative writing.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "World Building",
        description: "Start by having ChatGPT help you create the setting and world for your story.",
        prompt: "Help me create a unique setting for a short story. I want it to be [genre]. Generate vivid details about the world, time period, and atmosphere."
      },
      {
        title: "Character Development",
        description: "Develop main characters with backstories, motivations, and unique traits."
      },
      {
        title: "Plot Structure",
        description: "Work with ChatGPT to outline a compelling plot with proper story structure."
      },
      {
        title: "Collaborative Writing",
        description: "Write the story together, alternating paragraphs or sections between you and ChatGPT."
      },
      {
        title: "Editing and Refinement",
        description: "Use ChatGPT to help edit and improve the story's flow, dialogue, and descriptions."
      }
    ]
  };

  const advancedProject = {
    title: "The AI Business Consultant",
    goal: "To use ChatGPT as a comprehensive business consultant for developing a complete business strategy and implementation plan.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Market Analysis",
        description: "Have ChatGPT conduct a comprehensive market analysis for your business idea.",
        prompt: "Act as a senior business consultant. Analyze the market for [business idea]. Include target demographics, competition analysis, and market opportunities."
      },
      {
        title: "Business Model Development",
        description: "Work with ChatGPT to develop a detailed business model including revenue streams and cost structure."
      },
      {
        title: "Financial Projections",
        description: "Create detailed financial projections and funding requirements with ChatGPT's assistance."
      },
      {
        title: "Marketing Strategy",
        description: "Develop a comprehensive marketing and customer acquisition strategy."
      },
      {
        title: "Implementation Roadmap",
        description: "Create a detailed 12-month implementation roadmap with milestones and key performance indicators."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/llm-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/10 to-green-500/10 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-green-600 font-medium text-sm">ChatGPT Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Hands-On Projects with ChatGPT
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                ChatGPT excels at versatile conversation, creative problem-solving, and code generation. 
                It's perfect for brainstorming, writing assistance, and learning new concepts through interactive dialogue.
              </p>
            </div>
            
            <a 
              href="https://chat.openai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch ChatGPT
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
              Select a difficulty level that matches your experience and dive into hands-on learning.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-2xl font-bold">ChatGPT Projects</span>
          </div>
          <p className="text-gray-400">
            Master creative AI conversations and practical problem-solving.
          </p>
        </div>
      </footer>
    </div>
  );
}