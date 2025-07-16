import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Video, Sparkles } from 'lucide-react';

export default function RunwayProjectPage() {
  const beginnerProject = {
    title: "Your First AI Video",
    goal: "To create your first AI-generated video using Runway's text-to-video capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Simple Text Prompt",
        description: "Start with a basic text description to generate your first video clip.",
        prompt: "A peaceful lake with gentle ripples reflecting the sunset sky"
      },
      {
        title: "Add Motion Details",
        description: "Enhance your prompt with specific motion descriptions.",
        prompt: "A peaceful lake with gentle ripples, camera slowly panning left, birds flying in the distance"
      },
      {
        title: "Style Enhancement",
        description: "Add cinematic and visual style elements to your video.",
        prompt: "A peaceful lake with gentle ripples, cinematic shot, golden hour lighting, 4K quality"
      },
      {
        title: "Duration and Export",
        description: "Adjust the video length and export your final creation."
      }
    ]
  };

  const intermediateProject = {
    title: "The Video Editor",
    goal: "To learn advanced video editing techniques using Runway's AI-powered tools.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Green Screen Removal",
        description: "Use Runway's AI to remove backgrounds from existing video footage.",
        prompt: "Upload a video with a person and use the background removal tool"
      },
      {
        title: "Object Removal",
        description: "Remove unwanted objects from your video using AI inpainting.",
        prompt: "Select and remove distracting elements from your video footage"
      },
      {
        title: "Style Transfer",
        description: "Apply artistic styles to transform the look of your video.",
        prompt: "Apply a watercolor painting style to your video footage"
      },
      {
        title: "Motion Tracking",
        description: "Add elements that follow objects in your video using motion tracking.",
        prompt: "Track a person's movement and add floating text that follows them"
      },
      {
        title: "Final Composition",
        description: "Combine all techniques to create a polished final video."
      }
    ]
  };

  const advancedProject = {
    title: "The Filmmaker",
    goal: "To create a complete short film using Runway's advanced AI video generation and editing tools.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Storyboard Creation",
        description: "Plan your short film and create initial video clips for each scene.",
        prompt: "Opening scene: A mysterious figure walking through a foggy forest, cinematic lighting"
      },
      {
        title: "Character Consistency",
        description: "Generate multiple shots of the same character or setting.",
        prompt: "Close-up of the mysterious figure's face, same character, dramatic lighting"
      },
      {
        title: "Scene Transitions",
        description: "Create smooth transitions between different scenes.",
        prompt: "Transition from forest to abandoned cabin, smooth camera movement"
      },
      {
        title: "Effects and Enhancement",
        description: "Add special effects, color grading, and atmospheric elements.",
        prompt: "Add supernatural glowing effects to the mysterious figure"
      },
      {
        title: "Final Edit",
        description: "Combine all scenes into a cohesive short film with proper pacing."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/video-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full px-4 py-2 mb-6">
              <Video className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Runway ML Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with Runway ML
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Runway ML excels at advanced video generation and editing with professional-grade AI tools. 
                It's perfect for filmmakers, content creators, and video professionals seeking cutting-edge capabilities.
              </p>
            </div>
            
            <a 
              href="https://runwayml.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Runway ML
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
              Select a difficulty level and start creating professional videos with AI.
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
            <span className="text-2xl font-bold">Runway ML Projects</span>
          </div>
          <p className="text-gray-400">
            Create professional videos with advanced AI generation and editing tools.
          </p>
        </div>
      </footer>
    </div>
  );
}