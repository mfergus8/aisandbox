import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Volume2, Sparkles } from 'lucide-react';

export default function MurfProjectPage() {
  const beginnerProject = {
    title: "Your First Professional Voiceover",
    goal: "To create your first professional-quality voiceover using Murf AI's text-to-speech capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Voice Selection",
        description: "Choose from Murf's library of professional voices for your project.",
        prompt: "Browse voice options and select a professional voice that matches your content tone"
      },
      {
        title: "Script Input",
        description: "Enter your script and adjust pacing and emphasis for natural delivery.",
        prompt: "Welcome to our company presentation. Today we'll explore innovative solutions for modern businesses."
      },
      {
        title: "Voice Customization",
        description: "Adjust pitch, speed, and emphasis to perfect your voiceover.",
        prompt: "Experiment with different speed settings and add emphasis to key words"
      },
      {
        title: "Export and Use",
        description: "Generate and download your professional voiceover for use in presentations or videos."
      }
    ]
  };

  const intermediateProject = {
    title: "The Presentation Producer",
    goal: "To create a complete presentation with multiple voice segments and professional narration.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Presentation Planning",
        description: "Plan a multi-section presentation with different voice requirements.",
        prompt: "Create voiceover for: introduction, main content sections, transitions, and conclusion"
      },
      {
        title: "Voice Variety",
        description: "Use different voices for different sections to maintain engagement.",
        prompt: "Use professional male voice for introduction, female voice for main content"
      },
      {
        title: "Timing and Pacing",
        description: "Adjust timing to match slide transitions and visual content.",
        prompt: "Synchronize voiceover timing with slide changes and visual elements"
      },
      {
        title: "Background Music",
        description: "Add appropriate background music to enhance the presentation.",
        prompt: "Add subtle background music that complements the professional tone"
      },
      {
        title: "Final Production",
        description: "Combine all elements into a polished presentation with seamless audio."
      }
    ]
  };

  const advancedProject = {
    title: "The Audio Brand Creator",
    goal: "To develop a complete audio brand identity using Murf AI's advanced features and voice customization.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Brand Voice Development",
        description: "Develop a consistent brand voice that reflects your company's personality.",
        prompt: "Create brand voice guidelines: tone, pace, emphasis style for all company audio"
      },
      {
        title: "Multi-format Content",
        description: "Create audio content for various formats: ads, tutorials, announcements.",
        prompt: "Generate: 30-second radio ad, 2-minute explainer, phone system messages"
      },
      {
        title: "Voice Consistency",
        description: "Maintain consistent voice characteristics across all brand content.",
        prompt: "Ensure same voice personality across different content types and lengths"
      },
      {
        title: "Localization",
        description: "Create versions in different languages while maintaining brand consistency.",
        prompt: "Adapt brand voice for different languages and cultural contexts"
      },
      {
        title: "Brand Audio Library",
        description: "Build a comprehensive library of branded audio assets for ongoing use."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/voice-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600/10 to-red-500/10 rounded-full px-4 py-2 mb-6">
              <Volume2 className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-medium text-sm">Murf AI Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
                Hands-On Projects with Murf AI
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Murf AI excels at professional voiceovers with studio-quality voices perfect for business presentations. 
                It's ideal for marketers, educators, and professionals needing high-quality voice content.
              </p>
            </div>
            
            <a 
              href="https://murf.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Murf AI
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
              Select a difficulty level and create professional voiceovers with AI.
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
            <span className="text-2xl font-bold">Murf AI Projects</span>
          </div>
          <p className="text-gray-400">
            Create professional voiceovers with studio-quality AI voices.
          </p>
        </div>
      </footer>
    </div>
  );
}