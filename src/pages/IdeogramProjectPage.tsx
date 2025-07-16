import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';

export default function IdeogramProjectPage() {
  const beginnerProject = {
    title: "Your First Text-in-Image Creation",
    goal: "To create images with readable text using Ideogram's specialized text rendering capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Simple Text Design",
        description: "Create a basic design with clear, readable text elements.",
        prompt: "Create a motivational poster with the text 'Dream Big' in bold letters, inspiring background"
      },
      {
        title: "Typography Styles",
        description: "Experiment with different typography styles and fonts.",
        prompt: "Design a vintage-style logo with the text 'Coffee House' in retro typography"
      },
      {
        title: "Text Integration",
        description: "Learn how to integrate text naturally into image compositions.",
        prompt: "Create a book cover design with the title 'Mystery Novel' integrated into a dark, atmospheric scene"
      },
      {
        title: "Color and Contrast",
        description: "Optimize text readability with proper color choices and contrast."
      }
    ]
  };

  const intermediateProject = {
    title: "The Brand Designer",
    goal: "To create professional brand graphics and marketing materials using Ideogram's text capabilities.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Logo Design",
        description: "Create professional logos with integrated text and visual elements.",
        prompt: "Design a modern tech company logo with the text 'InnovateTech' in sleek, futuristic style"
      },
      {
        title: "Marketing Graphics",
        description: "Create social media graphics and promotional materials with compelling text.",
        prompt: "Design an Instagram post for a sale with '50% OFF' prominently displayed, modern aesthetic"
      },
      {
        title: "Brand Consistency",
        description: "Maintain consistent typography and style across multiple brand materials.",
        prompt: "Create matching business card and letterhead designs with consistent text styling"
      },
      {
        title: "Multi-format Adaptation",
        description: "Adapt designs for different formats while maintaining text readability.",
        prompt: "Create horizontal banner, square social post, and vertical story versions of the same design"
      },
      {
        title: "Professional Polish",
        description: "Apply professional design principles for commercial-quality results."
      }
    ]
  };

  const advancedProject = {
    title: "The Typography Artist",
    goal: "To create complex typographic art and advanced text-based designs using Ideogram's full capabilities.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Typographic Art",
        description: "Create artistic compositions where text becomes the primary visual element.",
        prompt: "Design typographic art where the word 'MUSIC' is formed by musical notes and instruments"
      },
      {
        title: "Complex Layouts",
        description: "Design complex layouts with multiple text elements and hierarchies.",
        prompt: "Create a magazine cover with headline, subheadings, and body text in harmonious layout"
      },
      {
        title: "Creative Text Effects",
        description: "Apply advanced text effects like 3D, shadows, and environmental integration.",
        prompt: "Create 3D text effect where 'OCEAN' appears to be made of water with realistic reflections"
      },
      {
        title: "Multilingual Design",
        description: "Create designs that work with different languages and writing systems.",
        prompt: "Design a poster that incorporates both English and another language elegantly"
      },
      {
        title: "Interactive Concepts",
        description: "Design text-based graphics that suggest interactivity and engagement."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/art-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/10 to-yellow-500/10 rounded-full px-4 py-2 mb-6">
              <Layers className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium text-sm">Ideogram Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Hands-On Projects with Ideogram
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Ideogram excels at creating images with readable text and typography integration. 
                It's perfect for brand design, marketing materials, and any project requiring clear text within images.
              </p>
            </div>
            
            <a 
              href="https://ideogram.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Ideogram
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
              Select a difficulty level and master text-in-image creation with AI.
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
            <span className="text-2xl font-bold">Ideogram Projects</span>
          </div>
          <p className="text-gray-400">
            Master text-in-image creation and typography design with AI.
          </p>
        </div>
      </footer>
    </div>
  );
}