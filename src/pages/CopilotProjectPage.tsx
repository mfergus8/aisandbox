import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Sparkles } from 'lucide-react';

export default function CopilotProjectPage() {
  const beginnerProject = {
    title: "Your First AI Code Assistant",
    goal: "To learn how to use GitHub Copilot for basic code completion and assistance.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Setup and Installation",
        description: "Install GitHub Copilot in your preferred code editor (VS Code, JetBrains, etc.).",
        prompt: "Install the GitHub Copilot extension and sign in with your GitHub account"
      },
      {
        title: "Simple Function Creation",
        description: "Write a comment describing a function and let Copilot generate it.",
        prompt: "// Function to calculate the area of a circle given radius"
      },
      {
        title: "Code Completion",
        description: "Start typing code and use Copilot's suggestions to complete it.",
        prompt: "function fibonacci(n) { // Let Copilot complete this function"
      },
      {
        title: "Comment-to-Code",
        description: "Practice writing descriptive comments that generate useful code.",
        prompt: "// Create a function that validates email addresses using regex"
      }
    ]
  };

  const intermediateProject = {
    title: "The Code Reviewer",
    goal: "To use GitHub Copilot for code review, refactoring, and optimization tasks.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Code Refactoring",
        description: "Use Copilot to help refactor existing code for better readability.",
        prompt: "// Refactor this code to use modern ES6 features and improve readability"
      },
      {
        title: "Error Handling",
        description: "Add comprehensive error handling to existing functions.",
        prompt: "// Add proper error handling and validation to this function"
      },
      {
        title: "Performance Optimization",
        description: "Optimize code performance with Copilot's suggestions.",
        prompt: "// Optimize this algorithm for better time complexity"
      },
      {
        title: "Documentation Generation",
        description: "Generate comprehensive documentation for your code.",
        prompt: "// Generate JSDoc comments for this function with examples"
      },
      {
        title: "Unit Test Creation",
        description: "Create unit tests for your functions using Copilot."
      }
    ]
  };

  const advancedProject = {
    title: "The Full-Stack Developer",
    goal: "To build a complete application using GitHub Copilot for both frontend and backend development.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Project Architecture",
        description: "Plan and create the basic structure of a full-stack application.",
        prompt: "// Create a REST API server with Express.js for a todo application"
      },
      {
        title: "Database Integration",
        description: "Set up database models and connections with Copilot's help.",
        prompt: "// Create MongoDB schema for user authentication and todo items"
      },
      {
        title: "API Development",
        description: "Build complete API endpoints with proper validation and error handling.",
        prompt: "// Create CRUD endpoints for todo items with authentication middleware"
      },
      {
        title: "Frontend Components",
        description: "Create React components for the user interface.",
        prompt: "// Create a React component for displaying and managing todo items"
      },
      {
        title: "Integration and Testing",
        description: "Connect frontend to backend and add comprehensive testing."
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
              <Code className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">GitHub Copilot Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with GitHub Copilot
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                GitHub Copilot excels at intelligent code completion and programming assistance. 
                It's perfect for developers of all levels looking to enhance their coding productivity and learn new techniques.
              </p>
            </div>
            
            <a 
              href="https://github.com/features/copilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get GitHub Copilot
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
              Select a difficulty level and enhance your coding workflow with AI assistance.
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
            <span className="text-2xl font-bold">GitHub Copilot Projects</span>
          </div>
          <p className="text-gray-400">
            Enhance your coding productivity with AI-powered programming assistance.
          </p>
        </div>
      </footer>
    </div>
  );
}