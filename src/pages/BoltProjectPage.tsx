import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, Sparkles } from 'lucide-react';

export default function BoltProjectPage() {
  const beginnerProject = {
    title: "Your First AI Web App",
    goal: "To create your first complete web application using Bolt.new's AI-powered development platform.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "App Concept",
        description: "Describe the web application you want to build to Bolt.new.",
        prompt: "Create a simple todo list app with add, delete, and mark complete functionality"
      },
      {
        title: "Feature Addition",
        description: "Add additional features to enhance your application.",
        prompt: "Add categories for todos and a search function to filter tasks"
      },
      {
        title: "Styling and Design",
        description: "Improve the visual design and user experience of your app.",
        prompt: "Make it look modern with a clean design, good colors, and responsive layout"
      },
      {
        title: "Deployment",
        description: "Deploy your application and share it with others using Bolt's instant deployment."
      }
    ]
  };

  const intermediateProject = {
    title: "The Full-Stack Builder",
    goal: "To build a complete full-stack application with database integration using Bolt.new's capabilities.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Database Design",
        description: "Design and implement a database schema for your application.",
        prompt: "Create a blog platform with users, posts, comments, and categories with proper relationships"
      },
      {
        title: "Authentication System",
        description: "Add user authentication and authorization to your application.",
        prompt: "Add user registration, login, and role-based access control"
      },
      {
        title: "API Development",
        description: "Create RESTful APIs for your application's functionality.",
        prompt: "Build APIs for CRUD operations on posts, user management, and comment system"
      },
      {
        title: "Frontend Integration",
        description: "Create a responsive frontend that consumes your APIs.",
        prompt: "Build a modern React frontend with routing, forms, and real-time updates"
      },
      {
        title: "Production Features",
        description: "Add production-ready features like error handling and optimization."
      }
    ]
  };

  const advancedProject = {
    title: "The Enterprise Application",
    goal: "To create a complex enterprise-level application with advanced features using Bolt.new's full capabilities.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "System Architecture",
        description: "Design a scalable architecture for an enterprise application.",
        prompt: "Create a project management system with teams, projects, tasks, time tracking, and reporting"
      },
      {
        title: "Advanced Features",
        description: "Implement complex business logic and advanced functionality.",
        prompt: "Add real-time collaboration, file uploads, notifications, and dashboard analytics"
      },
      {
        title: "Integration Services",
        description: "Integrate with external services and APIs for enhanced functionality.",
        prompt: "Integrate with email services, calendar APIs, and third-party authentication"
      },
      {
        title: "Performance Optimization",
        description: "Optimize the application for performance and scalability.",
        prompt: "Add caching, database optimization, and performance monitoring"
      },
      {
        title: "Enterprise Deployment",
        description: "Deploy with enterprise-grade security and monitoring features."
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
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Bolt.new Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with Bolt.new
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Bolt.new excels at full-stack web development with instant deployment and AI-powered code generation. 
                It's perfect for rapid prototyping and building complete web applications from simple descriptions.
              </p>
            </div>
            
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Bolt.new
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
              Select a difficulty level and build complete web applications with AI.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-2xl font-bold">Bolt.new Projects</span>
          </div>
          <p className="text-gray-400">
            Build complete web applications with AI-powered development.
          </p>
        </div>
      </footer>
    </div>
  );
}