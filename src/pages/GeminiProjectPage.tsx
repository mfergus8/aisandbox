import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Sparkles } from 'lucide-react';

export default function GeminiProjectPage() {
  const beginnerProject = {
    title: "The Real-Time Researcher",
    goal: "To leverage Gemini's real-time information access to conduct current research and stay updated on recent developments.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Current Events Query",
        description: "Ask Gemini about recent developments in your field of interest.",
        prompt: "What are the latest developments in artificial intelligence from the past week? Provide specific examples and sources."
      },
      {
        title: "Trend Analysis",
        description: "Have Gemini analyze trends and patterns in the current information it provides.",
        prompt: "Based on these recent AI developments, what trends do you see emerging? How do they connect to each other?"
      },
      {
        title: "Impact Assessment",
        description: "Ask Gemini to assess the potential impact of these developments on relevant industries or areas.",
        prompt: "How might these AI developments impact different industries like healthcare, education, and finance in the next 6 months?"
      },
      {
        title: "Future Implications",
        description: "Discuss with Gemini what these current trends might mean for the future.",
        prompt: "Looking at these trends, what predictions can we make about the AI landscape in the next 2-3 years?"
      }
    ]
  };

  const intermediateProject = {
    title: "The Multimodal Analyzer",
    goal: "To learn how to use Gemini's multimodal capabilities by analyzing images, text, and data together for comprehensive insights.",
    difficulty: "Intermediate" as const,
    estimatedTime: "45-60 minutes",
    steps: [
      {
        title: "Image Analysis",
        description: "Upload an image and ask Gemini to provide detailed analysis of what it sees.",
        prompt: "Analyze this image in detail. Describe what you see, the mood, composition, and any interesting details or patterns."
      },
      {
        title: "Text-Image Connection",
        description: "Provide related text content and ask Gemini to make connections between the image and text.",
        prompt: "Here's some text about [topic]. How does this image relate to or illustrate the concepts in this text?"
      },
      {
        title: "Data Integration",
        description: "Add relevant data or statistics and have Gemini synthesize insights from all three sources.",
        prompt: "Now consider this data: [relevant statistics]. How do the image, text, and data work together to tell a complete story?"
      },
      {
        title: "Comprehensive Report",
        description: "Ask Gemini to create a comprehensive analysis report combining all the multimodal inputs.",
        prompt: "Create a comprehensive analysis report that synthesizes insights from the image, text, and data we've discussed."
      }
    ]
  };

  const advancedProject = {
    title: "The Visual Storyteller",
    goal: "To combine Gemini's text generation with image analysis to create compelling visual stories and narratives.",
    difficulty: "Advanced" as const,
    estimatedTime: "90-120 minutes",
    steps: [
      {
        title: "Visual Inspiration",
        description: "Upload a series of images and ask Gemini to identify narrative potential and themes.",
        prompt: "Look at these images and suggest a compelling story that could connect them. What narrative themes do you see?"
      },
      {
        title: "Story Development",
        description: "Work with Gemini to develop characters, plot, and setting based on the visual elements.",
        prompt: "Let's develop this story further. Create characters that fit these images and develop a plot that connects all the visual elements."
      },
      {
        title: "Narrative Integration",
        description: "Have Gemini write story segments that specifically reference and build upon the visual elements.",
        prompt: "Write the opening chapter of this story, making specific references to the visual elements we see in the images."
      },
      {
        title: "Multimedia Enhancement",
        description: "Use Gemini to suggest how to enhance the story with additional multimedia elements.",
        prompt: "How could we enhance this story with additional multimedia elements? What other visuals, sounds, or interactive elements would strengthen the narrative?"
      },
      {
        title: "Final Presentation",
        description: "Create a complete multimedia story presentation combining visuals and narrative.",
        prompt: "Help me create a presentation outline that combines our story with the visual elements for maximum impact."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/llm-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">Gemini Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with Google Gemini
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Gemini excels at multimodal input processing, real-time information access, and Google Workspace integration. 
                It's perfect for combining text, images, and data to create comprehensive analyses and stay current with information.
              </p>
            </div>
            
            <a 
              href="https://gemini.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Gemini
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
              Select a difficulty level and explore Gemini's multimodal capabilities.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">Gemini Projects</span>
          </div>
          <p className="text-gray-400">
            Harness the power of multimodal AI and real-time information.
          </p>
        </div>
      </footer>
    </div>
  );
}