import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Terminal, Sparkles } from 'lucide-react';

export default function CursorProjectPage() {
  const beginnerProject = {
    title: "Your First AI-Assisted Code",
    goal: "To learn how to use Cursor's AI-first editor for intelligent code completion and assistance.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Setup and Familiarization",
        description: "Download Cursor and explore its AI-powered interface and features.",
        prompt: "Open Cursor and create a new JavaScript project to explore the AI features"
      },
      {
        title: "Natural Language Coding",
        description: "Use Cursor's natural language features to generate code from descriptions.",
        prompt: "Type: 'Create a function that calculates compound interest' and let Cursor generate it"
      },
      {
        title: "Code Explanation",
        description: "Ask Cursor to explain existing code and suggest improvements.",
        prompt: "Select any code block and ask Cursor to explain what it does and how to improve it"
      },
      {
        title: "Debugging Assistance",
        description: "Use Cursor's AI to help identify and fix bugs in your code."
      }
    ]
  };

  const intermediateProject = {
    title: "The Codebase Navigator",
    goal: "To use Cursor's advanced codebase understanding for complex project development and refactoring.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Project Analysis",
        description: "Let Cursor analyze your entire codebase and provide insights.",
        prompt: "Ask Cursor to analyze your project structure and suggest architectural improvements"
      },
      {
        title: "Intelligent Refactoring",
        description: "Use Cursor to refactor code while maintaining functionality.",
        prompt: "Select a complex function and ask Cursor to refactor it for better readability"
      },
      {
        title: "Cross-file Understanding",
        description: "Leverage Cursor's ability to understand relationships between files.",
        prompt: "Ask Cursor to trace how data flows between different components in your app"
      },
      {
        title: "Test Generation",
        description: "Generate comprehensive tests for your code using Cursor's understanding.",
        prompt: "Ask Cursor to generate unit tests for your main functions with edge cases"
      },
      {
        title: "Documentation Creation",
        description: "Create comprehensive documentation for your codebase with AI assistance."
      }
    ]
  };

  const advancedProject = {
    title: "The AI Development Partner",
    goal: "To build a complete application using Cursor as your AI development partner for architecture and implementation.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Architecture Planning",
        description: "Collaborate with Cursor to design the architecture for a complex application.",
        prompt: "Plan a full-stack e-commerce application architecture with Cursor's guidance"
      },
      {
        title: "Advanced Code Generation",
        description: "Use Cursor to generate complex components and business logic.",
        prompt: "Generate authentication system, database models, and API endpoints"
      },
      {
        title: "Performance Optimization",
        description: "Work with Cursor to optimize application performance and scalability.",
        prompt: "Analyze performance bottlenecks and implement optimizations with Cursor's help"
      },
      {
        title: "Security Implementation",
        description: "Implement security best practices with Cursor's security knowledge.",
        prompt: "Add input validation, authentication middleware, and security headers"
      },
      {
        title: "Production Deployment",
        description: "Prepare the application for production with Cursor's deployment guidance."
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
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600/10 to-red-500/10 rounded-full px-4 py-2 mb-6">
              <Terminal className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-medium text-sm">Cursor Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent">
                Hands-On Projects with Cursor
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Cursor excels as an AI-first code editor with deep codebase understanding and natural language programming. 
                It's perfect for developers who want to code faster with intelligent AI assistance.
              </p>
            </div>
            
            <a 
              href="https://cursor.sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Cursor
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
              Select a difficulty level and enhance your coding with AI-first development.
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
            <span className="text-2xl font-bold">Cursor Projects</span>
          </div>
          <p className="text-gray-400">
            Code faster with AI-first development and intelligent assistance.
          </p>
        </div>
      </footer>
    </div>
  );
}