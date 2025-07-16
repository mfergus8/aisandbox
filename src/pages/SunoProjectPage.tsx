import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Music, Sparkles } from 'lucide-react';

export default function SunoProjectPage() {
  const beginnerProject = {
    title: "Your First AI Song",
    goal: "To create your first complete song with vocals using Suno AI's text-to-music capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Song Concept",
        description: "Start by describing the type of song you want to create.",
        prompt: "Create a upbeat pop song about summer vacation with catchy vocals and a modern beat"
      },
      {
        title: "Lyric Generation",
        description: "Let Suno generate lyrics or provide your own custom lyrics.",
        prompt: "Write lyrics about road trips, beach days, and making memories with friends"
      },
      {
        title: "Style Refinement",
        description: "Experiment with different musical styles and genres.",
        prompt: "Make it sound like a mix of Taylor Swift and Ed Sheeran with acoustic guitar"
      },
      {
        title: "Final Generation",
        description: "Generate your final song and listen to the complete track with vocals.",
        prompt: "Generate the full song with professional vocals and instrumentation"
      }
    ]
  };

  const intermediateProject = {
    title: "The Genre Explorer",
    goal: "To explore different musical genres and create a diverse collection of AI-generated songs.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Genre Research",
        description: "Research and select 3-4 different musical genres to explore.",
        prompt: "Create a jazz ballad with smooth saxophone and sultry vocals about late night city life"
      },
      {
        title: "Rock Anthem",
        description: "Create a powerful rock song with driving guitars and strong vocals.",
        prompt: "Generate an epic rock anthem about overcoming challenges with electric guitars and powerful drums"
      },
      {
        title: "Electronic Dance",
        description: "Produce an electronic dance track with synthesizers and beats.",
        prompt: "Create an energetic EDM track with pulsing synths and a drop that gets people dancing"
      },
      {
        title: "Acoustic Folk",
        description: "Generate a gentle folk song with acoustic instruments and storytelling lyrics.",
        prompt: "Make a folk song with acoustic guitar and harmonica telling a story about small town life"
      },
      {
        title: "Genre Comparison",
        description: "Compare your different songs and analyze how Suno adapts to different styles."
      }
    ]
  };

  const advancedProject = {
    title: "The Music Producer",
    goal: "To create a complete album concept with multiple songs that tell a cohesive story or theme.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Album Concept",
        description: "Develop a central theme or story for your album.",
        prompt: "Create the opening track for an album about space exploration - make it ambient and mysterious"
      },
      {
        title: "Character Songs",
        description: "Create songs from different character perspectives within your theme.",
        prompt: "Now create a song from an astronaut's perspective - more personal and emotional"
      },
      {
        title: "Musical Progression",
        description: "Build musical complexity and emotional arc across multiple tracks.",
        prompt: "Create the climactic track - intense and dramatic as they discover alien life"
      },
      {
        title: "Resolution Track",
        description: "Create a final song that brings resolution to your album's story.",
        prompt: "Make the final track - hopeful and uplifting as humanity makes first contact"
      },
      {
        title: "Album Assembly",
        description: "Review all tracks and consider how they work together as a complete album experience."
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
            <div className="inline-flex items-center bg-gradient-to-r from-red-600/10 to-orange-500/10 rounded-full px-4 py-2 mb-6">
              <Music className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-red-600 font-medium text-sm">Suno AI Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Hands-On Projects with Suno AI
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Suno AI excels at creating complete songs with vocals and instruments from simple text prompts. 
                It's perfect for musicians, content creators, and anyone wanting to explore music creation.
              </p>
            </div>
            
            <a 
              href="https://suno.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Suno AI
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
              Select a difficulty level and start creating original music with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #dc2626 0%, #ea580c 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-red-400 mr-2" />
            <span className="text-2xl font-bold">Suno AI Projects</span>
          </div>
          <p className="text-gray-400">
            Create complete songs with vocals and instruments using AI.
          </p>
        </div>
      </footer>
    </div>
  );
}