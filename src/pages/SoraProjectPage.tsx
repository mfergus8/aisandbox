import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Image, Sparkles } from 'lucide-react';

export default function SoraProjectPage() {
  const beginnerProject = {
    title: "Your First Sora Creation",
    goal: "To create your first high-quality image or video using Sora's advanced generation capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Simple Prompt",
        description: "Start with a clear, descriptive prompt for your first creation.",
        prompt: "A serene mountain lake at sunrise with mist rising from the water"
      },
      {
        title: "Add Details",
        description: "Enhance your prompt with specific visual details and atmosphere.",
        prompt: "A serene mountain lake at sunrise, golden light reflecting on calm water, pine trees silhouetted against colorful sky"
      },
      {
        title: "Choose Format",
        description: "Decide between image or video generation based on your needs.",
        prompt: "Generate as a short video with gentle water movement and shifting light"
      },
      {
        title: "Refine Results",
        description: "Review and refine your creation using Sora's editing capabilities."
      }
    ]
  };

  const intermediateProject = {
    title: "The Content Creator",
    goal: "To create professional content for marketing, social media, or storytelling using Sora's advanced features.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Content Planning",
        description: "Plan a piece of content that combines visual storytelling with brand messaging.",
        prompt: "A modern workspace with natural lighting, laptop open, coffee cup, plants, productive atmosphere"
      },
      {
        title: "Brand Integration",
        description: "Incorporate brand elements and messaging into your visual content.",
        prompt: "Add subtle brand colors, clean aesthetic, professional but approachable mood"
      },
      {
        title: "Multi-format Creation",
        description: "Create versions optimized for different platforms and use cases.",
        prompt: "Generate both static image for print and animated version for social media"
      },
      {
        title: "Quality Enhancement",
        description: "Use Sora's advanced controls to perfect lighting, composition, and details.",
        prompt: "Enhance lighting quality, adjust composition for better visual balance"
      },
      {
        title: "Final Production",
        description: "Prepare final assets for professional use across different media."
      }
    ]
  };

  const advancedProject = {
    title: "The Visual Director",
    goal: "To create a complete visual campaign or story using Sora's most advanced capabilities.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Campaign Concept",
        description: "Develop a comprehensive visual concept for a complete campaign or story.",
        prompt: "Create opening scene for tech startup story: futuristic office, diverse team collaborating, innovation theme"
      },
      {
        title: "Visual Consistency",
        description: "Maintain consistent style, lighting, and mood across multiple creations.",
        prompt: "Maintain consistent color palette, lighting style, and modern aesthetic throughout"
      },
      {
        title: "Advanced Techniques",
        description: "Use Sora's most sophisticated features for complex scenes and effects.",
        prompt: "Add complex camera movements, realistic physics, detailed character interactions"
      },
      {
        title: "Narrative Flow",
        description: "Create multiple pieces that work together to tell a complete story.",
        prompt: "Generate sequence: team meeting, brainstorming, breakthrough moment, celebration"
      },
      {
        title: "Professional Polish",
        description: "Apply professional-grade finishing touches for broadcast or commercial quality."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/art-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600/10 to-red-500/10 rounded-full px-4 py-2 mb-6">
              <Image className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-medium text-sm">Sora Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
                Hands-On Projects with Sora
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Sora excels at creating high-quality images and videos with exceptional realism and prompt understanding. 
                It's perfect for professional content creation, marketing, and advanced visual storytelling.
              </p>
            </div>
            
            <a 
              href="https://openai.com/sora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Sora
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
              Select a difficulty level and start creating professional visual content with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-pink-400 mr-2" />
            <span className="text-2xl font-bold">Sora Projects</span>
          </div>
          <p className="text-gray-400">
            Create high-quality images and videos with advanced AI generation.
          </p>
        </div>
      </footer>
    </div>
  );
}