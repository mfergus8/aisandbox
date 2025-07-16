import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Palette, Sparkles } from 'lucide-react';

export default function MidjourneyProjectPage() {
  const beginnerProject = {
    title: "Your First AI Artwork",
    goal: "To create your first stunning artwork using Midjourney's text-to-image capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Basic Prompt",
        description: "Start with a simple, descriptive prompt to generate your first image.",
        prompt: "/imagine a majestic mountain landscape at sunset with golden light"
      },
      {
        title: "Style Addition",
        description: "Add artistic style keywords to enhance your image.",
        prompt: "/imagine a majestic mountain landscape at sunset with golden light, oil painting style, detailed"
      },
      {
        title: "Refinement",
        description: "Use variations and upscaling to perfect your chosen image.",
        prompt: "Select your favorite result and click 'U1', 'U2', 'U3', or 'U4' to upscale"
      },
      {
        title: "Final Touches",
        description: "Experiment with different aspect ratios and quality settings.",
        prompt: "/imagine a majestic mountain landscape at sunset --ar 16:9 --q 2"
      }
    ]
  };

  const intermediateProject = {
    title: "The Style Explorer",
    goal: "To master different artistic styles and create a diverse portfolio of AI-generated artwork.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Photorealistic Portrait",
        description: "Create a highly detailed, photorealistic portrait.",
        prompt: "/imagine portrait of a wise elderly woman, photorealistic, studio lighting, 85mm lens --ar 2:3"
      },
      {
        title: "Fantasy Illustration",
        description: "Generate a fantasy-themed illustration with magical elements.",
        prompt: "/imagine dragon flying over medieval castle, fantasy art, detailed, magical atmosphere --ar 16:9"
      },
      {
        title: "Abstract Art",
        description: "Explore abstract and surreal artistic expressions.",
        prompt: "/imagine abstract representation of music, flowing colors, surreal, artistic --ar 1:1"
      },
      {
        title: "Architectural Visualization",
        description: "Create detailed architectural concepts and building designs.",
        prompt: "/imagine modern sustainable house, glass and wood, forest setting, architectural photography --ar 16:9"
      },
      {
        title: "Style Comparison",
        description: "Compare your different artworks and analyze Midjourney's style adaptations."
      }
    ]
  };

  const advancedProject = {
    title: "The Concept Artist",
    goal: "To create a complete visual concept for a fictional world, character, or story using advanced Midjourney techniques.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "World Building",
        description: "Create the foundational environment and setting for your concept.",
        prompt: "/imagine cyberpunk city street, neon lights, rain, futuristic architecture, moody atmosphere --ar 21:9"
      },
      {
        title: "Character Design",
        description: "Design main characters that fit within your created world.",
        prompt: "/imagine cyberpunk hacker character, leather jacket, neon accessories, character sheet, multiple angles --ar 16:9"
      },
      {
        title: "Vehicle/Object Design",
        description: "Create vehicles, weapons, or important objects for your world.",
        prompt: "/imagine futuristic motorcycle, cyberpunk style, detailed design, concept art --ar 16:9"
      },
      {
        title: "Mood Scenes",
        description: "Generate atmospheric scenes that capture the emotion of your concept.",
        prompt: "/imagine dramatic scene in cyberpunk alley, character silhouette, atmospheric lighting, cinematic --ar 21:9"
      },
      {
        title: "Concept Portfolio",
        description: "Compile all your images into a cohesive concept art portfolio."
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
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full px-4 py-2 mb-6">
              <Palette className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Midjourney Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with Midjourney
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Midjourney excels at creating stunning, artistic images with exceptional quality and creative interpretation. 
                It's perfect for artists, designers, and creative professionals seeking high-quality visual content.
              </p>
            </div>
            
            <a 
              href="https://midjourney.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Midjourney
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
              Select a difficulty level and start creating stunning artwork with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-2xl font-bold">Midjourney Projects</span>
          </div>
          <p className="text-gray-400">
            Create stunning, artistic images with exceptional AI-powered creativity.
          </p>
        </div>
      </footer>
    </div>
  );
}