import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Headphones, Sparkles } from 'lucide-react';

export default function UdioProjectPage() {
  const beginnerProject = {
    title: "Your First Professional Track",
    goal: "To create your first professional-quality music track using Udio's advanced AI music generation.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Genre Selection",
        description: "Choose a musical genre and style for your track.",
        prompt: "Create a smooth jazz track with saxophone and piano, relaxed tempo"
      },
      {
        title: "Melody Development",
        description: "Develop the main melody and harmonic structure.",
        prompt: "Focus on a memorable melody line with rich jazz harmonies"
      },
      {
        title: "Arrangement",
        description: "Add layers and arrange the different instrumental parts.",
        prompt: "Add bass line, drums, and subtle string accompaniment"
      },
      {
        title: "Final Production",
        description: "Polish and master your track for professional quality output."
      }
    ]
  };

  const intermediateProject = {
    title: "The Multi-Track Producer",
    goal: "To create a complex multi-layered composition using Udio's advanced production features.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Track Planning",
        description: "Plan a multi-section song with verses, chorus, and bridge.",
        prompt: "Create a pop-rock song structure with intro, verse, chorus, verse, chorus, bridge, final chorus"
      },
      {
        title: "Instrumental Layers",
        description: "Build complex instrumental arrangements with multiple layers.",
        prompt: "Layer electric guitars, bass, drums, keyboards, and backing vocals"
      },
      {
        title: "Dynamic Control",
        description: "Use Udio's controls to manage dynamics and energy throughout the song.",
        prompt: "Build energy from quiet verse to powerful chorus, with dynamic bridge section"
      },
      {
        title: "Professional Mixing",
        description: "Apply professional mixing techniques for radio-ready sound.",
        prompt: "Balance all elements with proper EQ, compression, and spatial effects"
      },
      {
        title: "Mastering",
        description: "Master the final track for distribution across platforms."
      }
    ]
  };

  const advancedProject = {
    title: "The Album Creator",
    goal: "To produce a cohesive album of multiple tracks with consistent style and professional quality.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Album Concept",
        description: "Develop a central theme and musical style for your album.",
        prompt: "Create a concept album about urban life with consistent electronic-pop style"
      },
      {
        title: "Track Sequencing",
        description: "Plan the flow and progression between different album tracks.",
        prompt: "Design 5 tracks that flow together: opening anthem, introspective ballad, upbeat dance track, emotional climax, hopeful finale"
      },
      {
        title: "Sonic Consistency",
        description: "Maintain consistent sound palette and production style across all tracks.",
        prompt: "Use similar synth sounds, drum samples, and vocal processing throughout"
      },
      {
        title: "Advanced Production",
        description: "Apply advanced production techniques like sidechaining, automation, and creative effects.",
        prompt: "Add creative transitions, automated filters, and unique sound design elements"
      },
      {
        title: "Album Mastering",
        description: "Master the entire album for consistent loudness and tonal balance across all tracks."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/music-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-purple-500/10 rounded-full px-4 py-2 mb-6">
              <Headphones className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Udio Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                Hands-On Projects with Udio
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Udio excels at professional-quality music production with advanced control over musical elements. 
                It's perfect for serious musicians and producers seeking studio-grade AI music creation.
              </p>
            </div>
            
            <a 
              href="https://udio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Udio
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
              Select a difficulty level and start creating professional-quality music with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #a55eea 0%, #8854d0 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-2xl font-bold">Udio Projects</span>
          </div>
          <p className="text-gray-400">
            Create professional-quality music with advanced AI production tools.
          </p>
        </div>
      </footer>
    </div>
  );
}