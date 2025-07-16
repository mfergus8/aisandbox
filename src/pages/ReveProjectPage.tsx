import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Camera, Sparkles } from 'lucide-react';

export default function ReveProjectPage() {
  const beginnerProject = {
    title: "Your First Artistic Creation",
    goal: "To create your first artistic image using Reve's creative AI capabilities and visual storytelling features.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Artistic Vision",
        description: "Start with a creative concept that emphasizes artistic expression.",
        prompt: "Create a dreamlike landscape with floating islands and ethereal lighting, fantasy art style"
      },
      {
        title: "Style Exploration",
        description: "Experiment with different artistic styles and visual approaches.",
        prompt: "Transform the scene into watercolor painting style with soft, flowing colors"
      },
      {
        title: "Emotional Storytelling",
        description: "Add emotional depth and narrative elements to your creation.",
        prompt: "Add a lone figure contemplating the scene, conveying sense of wonder and discovery"
      },
      {
        title: "Creative Refinement",
        description: "Refine your artistic vision with additional creative elements and details."
      }
    ]
  };

  const intermediateProject = {
    title: "The Visual Storyteller",
    goal: "To create a series of connected images that tell a visual story using Reve's storytelling capabilities.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Story Concept",
        description: "Develop a narrative concept that can be told through visual imagery.",
        prompt: "Create opening scene: ancient library with mysterious glowing books, magical atmosphere"
      },
      {
        title: "Character Development",
        description: "Introduce characters and develop their visual representation throughout the story.",
        prompt: "Add a young scholar discovering a magical tome, expression of curiosity and excitement"
      },
      {
        title: "Plot Progression",
        description: "Create subsequent scenes that advance the narrative visually.",
        prompt: "Next scene: the book opens revealing a portal to another world, swirling magical energy"
      },
      {
        title: "Visual Continuity",
        description: "Maintain consistent style and mood across all story elements.",
        prompt: "Final scene: character stepping through portal, same artistic style, sense of adventure"
      },
      {
        title: "Story Completion",
        description: "Bring the visual narrative to a satisfying conclusion."
      }
    ]
  };

  const advancedProject = {
    title: "The Creative Director",
    goal: "To create a complete artistic project with multiple styles and advanced creative techniques using Reve.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Artistic Concept",
        description: "Develop a sophisticated artistic concept with multiple visual themes.",
        prompt: "Create concept for 'Seasons of Life': spring representing youth, vibrant and energetic"
      },
      {
        title: "Style Mastery",
        description: "Demonstrate mastery of different artistic styles within the same project.",
        prompt: "Summer scene: mature strength, bold colors and strong compositions, impressionist style"
      },
      {
        title: "Advanced Techniques",
        description: "Apply advanced creative techniques like symbolism and visual metaphors.",
        prompt: "Autumn scene: wisdom and reflection, warm colors, realistic style with symbolic elements"
      },
      {
        title: "Emotional Depth",
        description: "Create images with deep emotional resonance and artistic meaning.",
        prompt: "Winter scene: peaceful acceptance, minimalist style, subtle beauty in simplicity"
      },
      {
        title: "Artistic Portfolio",
        description: "Compile all creations into a cohesive artistic portfolio with thematic unity."
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
            <div className="inline-flex items-center bg-gradient-to-r from-teal-600/10 to-pink-500/10 rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-teal-600 mr-2" />
              <span className="text-teal-600 font-medium text-sm">Reve Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-pink-500 bg-clip-text text-transparent">
                Hands-On Projects with Reve
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Reve excels at artistic expression and creative visual storytelling with diverse style capabilities. 
                It's perfect for artists, storytellers, and creative professionals seeking unique visual narratives.
              </p>
            </div>
            
            <a 
              href="https://reve.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-pink-500 hover:from-teal-700 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Reve
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
              Select a difficulty level and explore artistic expression with AI-powered creativity.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-teal-400 mr-2" />
            <span className="text-2xl font-bold">Reve Projects</span>
          </div>
          <p className="text-gray-400">
            Explore artistic expression and creative visual storytelling with AI.
          </p>
        </div>
      </footer>
    </div>
  );
}