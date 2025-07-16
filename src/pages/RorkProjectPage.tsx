import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, GitBranch, Sparkles } from 'lucide-react';

export default function RorkProjectPage() {
  const beginnerProject = {
    title: "Your First Code Review",
    goal: "To learn how to use Rork for automated code review and basic debugging assistance.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Code Analysis Setup",
        description: "Upload your code to Rork for initial analysis and review.",
        prompt: "Upload a JavaScript function and ask Rork to review it for potential issues"
      },
      {
        title: "Bug Detection",
        description: "Use Rork to identify common bugs and code issues.",
        prompt: "Ask Rork to find potential bugs, security issues, and performance problems"
      },
      {
        title: "Code Improvement",
        description: "Get suggestions for improving code quality and readability.",
        prompt: "Request suggestions for better variable names, code structure, and best practices"
      },
      {
        title: "Learning from Feedback",
        description: "Understand Rork's suggestions and apply them to improve your coding skills."
      }
    ]
  };

  const intermediateProject = {
    title: "The Code Optimizer",
    goal: "To use Rork's advanced features for comprehensive code optimization and refactoring.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Multi-file Analysis",
        description: "Analyze entire codebases across multiple files and languages.",
        prompt: "Upload a complete project and ask Rork to analyze architecture and dependencies"
      },
      {
        title: "Performance Optimization",
        description: "Identify and fix performance bottlenecks in your code.",
        prompt: "Find performance issues and get specific recommendations for optimization"
      },
      {
        title: "Security Audit",
        description: "Conduct a comprehensive security review of your codebase.",
        prompt: "Perform security audit focusing on vulnerabilities and secure coding practices"
      },
      {
        title: "Refactoring Guidance",
        description: "Get guidance on refactoring complex code for better maintainability.",
        prompt: "Suggest refactoring strategies for complex functions and class structures"
      },
      {
        title: "Code Standards",
        description: "Ensure code follows industry standards and best practices."
      }
    ]
  };

  const advancedProject = {
    title: "The Development Mentor",
    goal: "To use Rork as a comprehensive development mentor for advanced code analysis and team collaboration.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Team Code Standards",
        description: "Establish and enforce consistent code standards across your development team.",
        prompt: "Create custom code review rules and standards for team consistency"
      },
      {
        title: "Advanced Debugging",
        description: "Use Rork for complex debugging scenarios and root cause analysis.",
        prompt: "Analyze complex bugs with multiple potential causes and get debugging strategies"
      },
      {
        title: "Architecture Review",
        description: "Get comprehensive architecture reviews and improvement suggestions.",
        prompt: "Review overall system architecture and suggest improvements for scalability"
      },
      {
        title: "Code Quality Metrics",
        description: "Implement comprehensive code quality tracking and improvement processes.",
        prompt: "Set up quality metrics tracking and continuous improvement processes"
      },
      {
        title: "Mentorship Integration",
        description: "Integrate Rork into your development workflow for ongoing code mentorship."
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
            <div className="inline-flex items-center bg-gradient-to-r from-teal-600/10 to-pink-500/10 rounded-full px-4 py-2 mb-6">
              <GitBranch className="h-4 w-4 text-teal-600 mr-2" />
              <span className="text-teal-600 font-medium text-sm">Rork Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-pink-500 bg-clip-text text-transparent">
                Hands-On Projects with Rork
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Rork excels at code review, debugging, and optimization across multiple programming languages. 
                It's perfect for developers and teams who want to improve code quality and learn best practices.
              </p>
            </div>
            
            <a 
              href="https://rork.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-pink-500 hover:from-teal-700 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Rork
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
              Select a difficulty level and improve your code quality with AI-powered review.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-teal-400 mr-2" />
            <span className="text-2xl font-bold">Rork Projects</span>
          </div>
          <p className="text-gray-400">
            Improve code quality with AI-powered review and optimization.
          </p>
        </div>
      </footer>
    </div>
  );
}