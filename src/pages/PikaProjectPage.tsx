import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

export default function PikaProjectPage() {
  const beginnerProject = {
    title: "Your First AI Video Clip",
    goal: "To create your first short video clip using Pika Labs' text-to-video generation.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Simple Scene Description",
        description: "Start with a basic scene description for your first video.",
        prompt: "A cat sitting by a window watching raindrops fall, cozy indoor lighting"
      },
      {
        title: "Add Motion Details",
        description: "Enhance your prompt with specific motion and camera movement.",
        prompt: "A cat sitting by a window, tail swaying gently, raindrops sliding down glass, soft camera zoom"
      },
      {
        title: "Style Enhancement",
        description: "Add visual style and mood to your video generation.",
        prompt: "A cat by a rainy window, cinematic lighting, warm colors, peaceful atmosphere"
      },
      {
        title: "Generate and Review",
        description: "Generate your video and review the results, trying variations if needed."
      }
    ]
  };

  const intermediateProject = {
    title: "The Social Media Creator",
    goal: "To create engaging short-form content optimized for social media platforms using Pika Labs.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Content Planning",
        description: "Plan a series of short videos for social media with consistent style.",
        prompt: "Create a trendy lifestyle video: morning coffee routine, aesthetic kitchen, golden hour lighting"
      },
      {
        title: "Trend Integration",
        description: "Incorporate current social media trends and popular visual styles.",
        prompt: "Add trending elements: slow motion pour, steam effects, minimalist aesthetic"
      },
      {
        title: "Platform Optimization",
        description: "Create versions optimized for different social platforms (TikTok, Instagram, etc.).",
        prompt: "Vertical format version for mobile, quick cuts, engaging visual hooks"
      },
      {
        title: "Series Creation",
        description: "Generate multiple related clips that work together as a content series.",
        prompt: "Create 3 related clips: coffee prep, brewing process, final presentation"
      },
      {
        title: "Engagement Optimization",
        description: "Focus on creating visually engaging content that captures attention quickly."
      }
    ]
  };

  const advancedProject = {
    title: "The Visual Storyteller",
    goal: "To create a complete visual narrative using multiple Pika Labs video clips with advanced techniques.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Story Development",
        description: "Develop a complete story that can be told through short video segments.",
        prompt: "Opening scene: mysterious figure walking through foggy city street at night, noir style"
      },
      {
        title: "Visual Continuity",
        description: "Create multiple scenes that maintain visual and narrative continuity.",
        prompt: "Next scene: same figure entering a dimly lit cafe, consistent lighting and mood"
      },
      {
        title: "Advanced Prompting",
        description: "Use sophisticated prompting techniques for complex scenes and emotions.",
        prompt: "Close-up: character's worried expression reflected in cafe window, rain outside, dramatic lighting"
      },
      {
        title: "Style Consistency",
        description: "Maintain consistent visual style and mood across all generated clips.",
        prompt: "Final scene: character making phone call, same noir aesthetic, tension building"
      },
      {
        title: "Narrative Assembly",
        description: "Plan how all clips work together to tell a complete visual story."
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
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600/10 to-red-500/10 rounded-full px-4 py-2 mb-6">
              <Play className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-medium text-sm">Pika Labs Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
                Hands-On Projects with Pika Labs
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Pika Labs excels at creating engaging short videos perfect for social media and content creation. 
                It's ideal for creators who need quick, high-quality video content with style and flair.
              </p>
            </div>
            
            <a 
              href="https://pika.art" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Pika Labs
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
              Select a difficulty level and start creating engaging short videos with AI.
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
            <span className="text-2xl font-bold">Pika Labs Projects</span>
          </div>
          <p className="text-gray-400">
            Create engaging short videos perfect for social media and content creation.
          </p>
        </div>
      </footer>
    </div>
  );
}