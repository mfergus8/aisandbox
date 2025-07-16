import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Edit, Sparkles } from 'lucide-react';

export default function GoogleVeoProjectPage() {
  const beginnerProject = {
    title: "Your First Veo Video",
    goal: "To create your first professional video using Google Veo's advanced generation capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Basic Video Generation",
        description: "Start with a simple video concept using Veo's text-to-video features.",
        prompt: "Create a peaceful nature scene with a flowing river and forest, gentle camera movement"
      },
      {
        title: "Quality Enhancement",
        description: "Apply Veo's quality controls for professional-grade output.",
        prompt: "Enhance with 4K resolution, improved lighting, and realistic water physics"
      },
      {
        title: "Google Integration",
        description: "Explore integration with other Google services and tools.",
        prompt: "Export to Google Drive and optimize for YouTube upload"
      },
      {
        title: "Professional Output",
        description: "Finalize your video with professional formatting and quality settings."
      }
    ]
  };

  const intermediateProject = {
    title: "The Enterprise Creator",
    goal: "To create professional business content using Google Veo's enterprise-focused features.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Business Content Planning",
        description: "Plan professional video content for business or educational use.",
        prompt: "Create corporate presentation video: modern office environment, professional atmosphere"
      },
      {
        title: "Brand Integration",
        description: "Integrate brand elements and corporate identity into video content.",
        prompt: "Add company branding, consistent color scheme, professional typography"
      },
      {
        title: "Multi-format Creation",
        description: "Create versions optimized for different business platforms and uses.",
        prompt: "Generate versions for: LinkedIn, company website, internal training, conference presentation"
      },
      {
        title: "Collaboration Features",
        description: "Use Veo's collaboration tools for team-based video production.",
        prompt: "Share project with team members, collect feedback, implement revisions"
      },
      {
        title: "Enterprise Distribution",
        description: "Prepare content for enterprise distribution and compliance requirements."
      }
    ]
  };

  const advancedProject = {
    title: "The Production Manager",
    goal: "To manage a complete video production pipeline using Google Veo's advanced professional features.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Production Pipeline Setup",
        description: "Set up a complete video production workflow using Veo's advanced features.",
        prompt: "Plan multi-part video series: consistent style, professional quality, scalable production"
      },
      {
        title: "Advanced Controls",
        description: "Use Veo's most sophisticated controls for precise video generation.",
        prompt: "Apply advanced camera controls, lighting setups, and motion parameters"
      },
      {
        title: "Quality Assurance",
        description: "Implement quality control processes for professional video production.",
        prompt: "Review output quality, consistency checks, professional standards compliance"
      },
      {
        title: "Workflow Integration",
        description: "Integrate Veo into existing professional video production workflows.",
        prompt: "Connect with editing software, asset management, and distribution systems"
      },
      {
        title: "Scalable Production",
        description: "Develop processes for scaling video production using AI assistance."
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
            <div className="inline-flex items-center bg-gradient-to-r from-teal-600/10 to-pink-500/10 rounded-full px-4 py-2 mb-6">
              <Edit className="h-4 w-4 text-teal-600 mr-2" />
              <span className="text-teal-600 font-medium text-sm">Google Veo Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-pink-500 bg-clip-text text-transparent">
                Hands-On Projects with Google Veo
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Google Veo excels at professional video generation with enterprise-grade quality and Google ecosystem integration. 
                It's perfect for businesses and professionals requiring high-quality, scalable video production.
              </p>
            </div>
            
            <a 
              href="https://deepmind.google/technologies/veo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-pink-500 hover:from-teal-700 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Google Veo
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
              Select a difficulty level and explore professional video creation with Google's AI.
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
            <span className="text-2xl font-bold">Google Veo Projects</span>
          </div>
          <p className="text-gray-400">
            Create professional videos with Google's advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
}