import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Film, Sparkles } from 'lucide-react';

export default function LumaProjectPage() {
  const beginnerProject = {
    title: "Your First 3D Capture",
    goal: "To create your first 3D video capture using Luma AI's NeRF technology.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Scene Selection",
        description: "Choose an appropriate scene for 3D capture with good lighting and detail.",
        prompt: "Select a well-lit indoor space or outdoor area with interesting objects and textures"
      },
      {
        title: "Video Recording",
        description: "Record video footage following Luma's guidelines for optimal 3D reconstruction.",
        prompt: "Record smooth, steady footage moving around your subject in a circular pattern"
      },
      {
        title: "Upload and Processing",
        description: "Upload your footage to Luma AI for 3D reconstruction processing.",
        prompt: "Upload your video and wait for Luma to process it into a 3D scene"
      },
      {
        title: "3D Exploration",
        description: "Explore your generated 3D scene and experiment with different viewing angles."
      }
    ]
  };

  const intermediateProject = {
    title: "The Immersive Creator",
    goal: "To create immersive 3D experiences and virtual environments using Luma AI's advanced features.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Complex Scene Capture",
        description: "Capture more complex scenes with multiple objects and varying lighting.",
        prompt: "Record a detailed room or outdoor environment with multiple focal points"
      },
      {
        title: "Quality Optimization",
        description: "Optimize capture techniques for higher quality 3D reconstructions.",
        prompt: "Use proper lighting, camera movement, and capture angles for best results"
      },
      {
        title: "Interactive Elements",
        description: "Add interactive elements and navigation to your 3D scenes.",
        prompt: "Create waypoints and interactive hotspots within your 3D environment"
      },
      {
        title: "Multi-Scene Project",
        description: "Combine multiple 3D captures into a cohesive immersive experience.",
        prompt: "Link multiple 3D scenes together for a virtual tour or story"
      },
      {
        title: "Sharing and Export",
        description: "Export and share your immersive 3D experiences across different platforms."
      }
    ]
  };

  const advancedProject = {
    title: "The Spatial Content Producer",
    goal: "To create professional-grade spatial content and immersive experiences for commercial use.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Professional Capture Setup",
        description: "Set up professional-grade capture workflows for commercial projects.",
        prompt: "Plan and execute professional 3D capture for real estate, retail, or entertainment"
      },
      {
        title: "Advanced Post-Processing",
        description: "Apply advanced post-processing techniques to enhance 3D reconstructions.",
        prompt: "Enhance lighting, textures, and details in your 3D scenes for professional quality"
      },
      {
        title: "VR/AR Integration",
        description: "Integrate your 3D content with VR and AR platforms and applications.",
        prompt: "Optimize 3D scenes for VR headsets and AR mobile applications"
      },
      {
        title: "Commercial Applications",
        description: "Develop commercial applications using your 3D content.",
        prompt: "Create virtual showrooms, training environments, or entertainment experiences"
      },
      {
        title: "Distribution Strategy",
        description: "Develop strategies for distributing and monetizing spatial content."
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
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/10 to-yellow-500/10 rounded-full px-4 py-2 mb-6">
              <Film className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium text-sm">Luma AI Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Hands-On Projects with Luma AI
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Luma AI excels at 3D video capture and immersive content creation using advanced NeRF technology. 
                It's perfect for creators, developers, and businesses wanting to create spatial and immersive experiences.
              </p>
            </div>
            
            <a 
              href="https://lumalabs.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Luma AI
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
              Select a difficulty level and create immersive 3D content with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-orange-400 mr-2" />
            <span className="text-2xl font-bold">Luma AI Projects</span>
          </div>
          <p className="text-gray-400">
            Create immersive 3D content and spatial experiences with AI.
          </p>
        </div>
      </footer>
    </div>
  );
}