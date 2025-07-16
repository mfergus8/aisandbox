import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mic, Sparkles } from 'lucide-react';

export default function ElevenLabsProjectPage() {
  const beginnerProject = {
    title: "Your First AI Voice",
    goal: "To create your first AI-generated speech using ElevenLabs' text-to-speech capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Choose a Voice",
        description: "Select from ElevenLabs' library of pre-made voices.",
        prompt: "Browse the voice library and select a voice that matches your project needs"
      },
      {
        title: "Simple Text Input",
        description: "Enter your first text to be converted to speech.",
        prompt: "Hello, this is my first AI-generated voice. I'm excited to explore what's possible with voice synthesis."
      },
      {
        title: "Adjust Settings",
        description: "Experiment with stability and clarity settings to perfect the voice.",
        prompt: "Try different stability (0.5-0.8) and clarity (0.7-0.9) settings to find your preferred sound"
      },
      {
        title: "Generate and Download",
        description: "Generate your final audio and download the result."
      }
    ]
  };

  const intermediateProject = {
    title: "The Voice Cloner",
    goal: "To create a custom voice clone using ElevenLabs' voice cloning technology.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Voice Sample Recording",
        description: "Record or upload high-quality voice samples for cloning.",
        prompt: "Record 1-2 minutes of clear speech in a quiet environment"
      },
      {
        title: "Voice Training",
        description: "Use ElevenLabs to train a custom voice model from your samples.",
        prompt: "Upload your voice samples and let ElevenLabs create your custom voice"
      },
      {
        title: "Voice Testing",
        description: "Test your cloned voice with different types of text.",
        prompt: "Test with: casual conversation, formal presentation, and emotional content"
      },
      {
        title: "Fine-tuning",
        description: "Adjust the voice settings to improve naturalness and accuracy.",
        prompt: "Experiment with different stability and similarity settings"
      },
      {
        title: "Production Use",
        description: "Create a longer piece of content using your cloned voice."
      }
    ]
  };

  const advancedProject = {
    title: "The Audio Producer",
    goal: "To create a complete audio production using multiple voices and advanced ElevenLabs features.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Script Development",
        description: "Create a multi-character script for your audio production.",
        prompt: "Write a dialogue between 3 different characters for a short audio drama"
      },
      {
        title: "Voice Casting",
        description: "Select or create different voices for each character.",
        prompt: "Choose distinct voices: young female narrator, older male character, child character"
      },
      {
        title: "Emotional Range",
        description: "Generate the same text with different emotional tones.",
        prompt: "Create the same line with happy, sad, angry, and surprised emotions"
      },
      {
        title: "Multilingual Content",
        description: "Experiment with ElevenLabs' multilingual capabilities.",
        prompt: "Generate the same content in English, Spanish, and French"
      },
      {
        title: "Final Production",
        description: "Combine all voice elements into a complete audio production."
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
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full px-4 py-2 mb-6">
              <Mic className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">ElevenLabs Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with ElevenLabs
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                ElevenLabs excels at realistic voice synthesis and cloning with multilingual support. 
                It's perfect for content creators, developers, and professionals needing high-quality AI voices.
              </p>
            </div>
            
            <a 
              href="https://elevenlabs.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch ElevenLabs
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
              Select a difficulty level and start creating realistic AI voices.
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
            <span className="text-2xl font-bold">ElevenLabs Projects</span>
          </div>
          <p className="text-gray-400">
            Create realistic AI voices with advanced synthesis and cloning technology.
          </p>
        </div>
      </footer>
    </div>
  );
}