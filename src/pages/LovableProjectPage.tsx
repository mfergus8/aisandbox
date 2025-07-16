import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Cpu, Sparkles } from 'lucide-react';

export default function LovableProjectPage() {
  const beginnerProject = {
    title: "Your First Beautiful App",
    goal: "To create your first beautiful, functional application using Lovable's natural language development.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "App Vision",
        description: "Describe the app you want to create in natural language.",
        prompt: "Create a weather app that shows current conditions and 5-day forecast with beautiful animations"
      },
      {
        title: "Design Enhancement",
        description: "Refine the visual design and user experience.",
        prompt: "Make it more visually appealing with gradients, smooth animations, and modern typography"
      },
      {
        title: "Feature Addition",
        description: "Add additional functionality to enhance the user experience.",
        prompt: "Add location search, favorite cities, and weather alerts"
      },
      {
        title: "Mobile Optimization",
        description: "Ensure the app works perfectly on mobile devices with responsive design."
      }
    ]
  };

  const intermediateProject = {
    title: "The App Designer",
    goal: "To create a complex application with multiple screens and advanced UI components using Lovable.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Multi-Screen Planning",
        description: "Plan an application with multiple screens and navigation.",
        prompt: "Create a fitness tracking app with dashboard, workout plans, progress tracking, and social features"
      },
      {
        title: "Advanced UI Components",
        description: "Implement complex UI components and interactions.",
        prompt: "Add charts for progress tracking, calendar for workout scheduling, and social feed"
      },
      {
        title: "Data Management",
        description: "Implement data persistence and state management.",
        prompt: "Add user profiles, workout history, and progress data that persists between sessions"
      },
      {
        title: "Interactive Features",
        description: "Add interactive elements like animations and real-time updates.",
        prompt: "Add workout timers, progress animations, and achievement notifications"
      },
      {
        title: "User Testing",
        description: "Test the app flow and refine the user experience based on feedback."
      }
    ]
  };

  const advancedProject = {
    title: "The Product Creator",
    goal: "To build a complete product-ready application with advanced features and professional polish.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Product Strategy",
        description: "Define a complete product strategy and feature set.",
        prompt: "Create a comprehensive task management platform for teams with collaboration features"
      },
      {
        title: "Advanced Architecture",
        description: "Implement complex application architecture with multiple modules.",
        prompt: "Add team management, project organization, real-time collaboration, and reporting"
      },
      {
        title: "Professional Features",
        description: "Add enterprise-level features and integrations.",
        prompt: "Add user permissions, API integrations, export features, and admin dashboard"
      },
      {
        title: "Performance Optimization",
        description: "Optimize the application for performance and scalability.",
        prompt: "Optimize loading times, add caching, and ensure smooth performance with large datasets"
      },
      {
        title: "Production Polish",
        description: "Add final touches for a production-ready application with professional quality."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/coding-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/10 to-yellow-500/10 rounded-full px-4 py-2 mb-6">
              <Cpu className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium text-sm">Lovable Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Hands-On Projects with Lovable
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Lovable excels at creating beautiful, functional applications through natural language development. 
                It's perfect for designers and creators who want to build stunning apps without complex coding.
              </p>
            </div>
            
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Lovable
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
              Select a difficulty level and create beautiful applications with natural language.
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
            <span className="text-2xl font-bold">Lovable Projects</span>
          </div>
          <p className="text-gray-400">
            Create beautiful applications through natural language development.
          </p>
        </div>
      </footer>
    </div>
  );
}