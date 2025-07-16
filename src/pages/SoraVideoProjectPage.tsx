import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Camera, Sparkles } from 'lucide-react';

export default function SoraVideoProjectPage() {
  const beginnerProject = {
    title: "Your First AI Video",
    goal: "To create your first high-quality video using Sora's revolutionary text-to-video capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Simple Scene Creation",
        description: "Start with a basic scene description for your first video generation.",
        prompt: "A golden retriever playing in a sunny meadow, slow motion, beautiful natural lighting"
      },
      {
        title: "Camera Movement",
        description: "Add camera movement and cinematic elements to enhance your video.",
        prompt: "Same scene with gentle camera pan following the dog, cinematic depth of field"
      },
      {
        title: "Duration and Quality",
        description: "Experiment with different video lengths and quality settings.",
        prompt: "Extend to 10 seconds, add more dynamic movement and realistic physics"
      },
      {
        title: "Final Enhancement",
        description: "Apply final touches and export your completed video."
      }
    ]
  };

  const intermediateProject = {
    title: "The Cinematic Creator",
    goal: "To create professional-quality cinematic content using Sora's advanced video generation features.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Scene Planning",
        description: "Plan a cinematic sequence with multiple shots and camera angles.",
        prompt: "Opening shot: aerial view of a futuristic city at sunset, dramatic lighting, cinematic composition"
      },
      {
        title: "Character Integration",
        description: "Add human characters with realistic movement and expressions.",
        prompt: "Street level: person walking through the city, realistic human movement, detailed facial expressions"
      },
      {
        title: "Complex Scenes",
        description: "Create complex scenes with multiple elements and interactions.",
        prompt: "Busy marketplace scene: multiple people interacting, realistic crowd dynamics, atmospheric lighting"
      },
      {
        title: "Cinematic Techniques",
        description: "Apply advanced cinematic techniques like lighting, composition, and pacing.",
        prompt: "Close-up dramatic shot: character's emotional reaction, professional lighting, shallow depth of field"
      },
      {
        title: "Sequence Assembly",
        description: "Plan how multiple shots work together to create a complete cinematic sequence."
      }
    ]
  };

  const advancedProject = {
    title: "The Film Director",
    goal: "To create a complete short film using Sora's most advanced capabilities and cinematic storytelling.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Film Concept",
        description: "Develop a complete short film concept with narrative structure.",
        prompt: "Opening scene: mysterious figure in rain-soaked alley, noir lighting, tension building"
      },
      {
        title: "Advanced Cinematography",
        description: "Use sophisticated camera work and visual storytelling techniques.",
        prompt: "Complex tracking shot: camera follows character through multiple environments, seamless transitions"
      },
      {
        title: "Realistic Physics",
        description: "Create scenes with complex physics and realistic environmental interactions.",
        prompt: "Action sequence: realistic water splashes, fabric movement, accurate lighting reflections"
      },
      {
        title: "Emotional Storytelling",
        description: "Focus on character development and emotional narrative through visual means.",
        prompt: "Character development scene: subtle facial expressions conveying internal conflict, masterful lighting"
      },
      {
        title: "Professional Production",
        description: "Apply professional film production standards for broadcast-quality results."
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
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full px-4 py-2 mb-6">
              <Camera className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">Sora Video Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Hands-On Projects with Sora Video
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Sora excels at creating cinematic-quality videos with realistic motion and physics. 
                It's perfect for filmmakers, content creators, and professionals seeking high-end video production capabilities.
              </p>
            </div>
            
            <a 
              href="https://openai.com/sora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Sora
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
              Select a difficulty level and start creating cinematic videos with AI.
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
            <span className="text-2xl font-bold">Sora Video Projects</span>
          </div>
          <p className="text-gray-400">
            Create cinematic-quality videos with revolutionary AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
}