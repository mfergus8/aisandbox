import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Brush, Sparkles } from 'lucide-react';

export default function GeminiImageProjectPage() {
  const beginnerProject = {
    title: "Your First Multimodal Creation",
    goal: "To create images using Gemini's multimodal AI capabilities and visual understanding.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Text-to-Image Generation",
        description: "Start by generating an image from a text description using Gemini.",
        prompt: "Create a peaceful garden scene with blooming flowers and a stone pathway"
      },
      {
        title: "Image Analysis",
        description: "Upload an existing image and ask Gemini to analyze and describe it.",
        prompt: "Analyze this image and describe the mood, composition, and visual elements"
      },
      {
        title: "Image-to-Image Variation",
        description: "Use an existing image as inspiration to create variations.",
        prompt: "Create a variation of this image with different lighting and seasonal changes"
      },
      {
        title: "Multimodal Integration",
        description: "Combine text instructions with image references for precise results."
      }
    ]
  };

  const intermediateProject = {
    title: "The Visual Analyst",
    goal: "To use Gemini's advanced visual understanding for complex image analysis and creation tasks.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Complex Scene Analysis",
        description: "Analyze complex images with multiple elements and provide detailed insights.",
        prompt: "Analyze this business meeting photo: identify body language, room setup, and professional dynamics"
      },
      {
        title: "Style Transfer",
        description: "Apply different artistic styles to existing images using Gemini's understanding.",
        prompt: "Transform this photograph into the style of impressionist painting while maintaining the subject"
      },
      {
        title: "Visual Problem Solving",
        description: "Use Gemini to solve visual design problems and suggest improvements.",
        prompt: "Analyze this website layout and suggest visual improvements for better user experience"
      },
      {
        title: "Data Visualization",
        description: "Create visual representations of data and information using Gemini's capabilities.",
        prompt: "Create an infographic showing climate change data in an engaging, easy-to-understand format"
      },
      {
        title: "Brand Integration",
        description: "Apply brand guidelines and visual identity to generated content."
      }
    ]
  };

  const advancedProject = {
    title: "The Multimodal Designer",
    goal: "To create a complete visual design system using Gemini's advanced multimodal capabilities.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Design System Planning",
        description: "Plan a comprehensive visual design system with consistent elements.",
        prompt: "Create a modern design system for a tech startup: define color palette, typography, and visual style"
      },
      {
        title: "Logo and Branding",
        description: "Design logos and brand elements that work across different contexts.",
        prompt: "Design a versatile logo that works in color, black and white, and at different sizes"
      },
      {
        title: "Marketing Materials",
        description: "Create a complete set of marketing materials with consistent branding.",
        prompt: "Generate business cards, letterhead, and social media templates with consistent design"
      },
      {
        title: "Web and Digital Assets",
        description: "Design digital assets optimized for web and mobile platforms.",
        prompt: "Create website headers, icons, and mobile app interface elements"
      },
      {
        title: "Brand Guidelines",
        description: "Document the complete design system with usage guidelines and examples."
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full px-4 py-2 mb-6">
              <Brush className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">Gemini Image Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Hands-On Projects with Gemini Image Generation
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Gemini excels at multimodal AI with advanced visual understanding and reasoning capabilities. 
                It's perfect for complex image analysis, intelligent design decisions, and integrated visual workflows.
              </p>
            </div>
            
            <a 
              href="https://gemini.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Gemini
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
              Select a difficulty level and explore Gemini's multimodal visual capabilities.
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
            <span className="text-2xl font-bold">Gemini Image Projects</span>
          </div>
          <p className="text-gray-400">
            Harness multimodal AI for intelligent image creation and analysis.
          </p>
        </div>
      </footer>
    </div>
  );
}