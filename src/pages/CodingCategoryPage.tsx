import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Zap, 
  GitBranch,
  Sparkles
} from 'lucide-react';

export default function CodingCategoryPage() {
  const codingTools = [
    {
      name: "Cursor",
      description: "AI-first code editor that understands your codebase and helps you write, edit, and debug code faster.",
      icon: Terminal,
      href: "/cursor-projects",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      capabilities: ["AI-first Editor", "Codebase Understanding", "Natural Language", "Refactoring"]
    },
    {
      name: "Bolt.new",
      description: "AI-powered full-stack web development platform that builds complete applications from simple prompts.",
      icon: Zap,
      href: "/bolt-projects",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      capabilities: ["Full-stack Development", "Instant Deployment", "AI Code Generation", "Web Applications"]
    },
    {
      name: "Lovable",
      description: "AI-powered app development platform that creates beautiful, functional applications through natural language.",
      icon: Cpu,
      href: "/lovable-projects",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      capabilities: ["App Development", "Natural Language", "Beautiful UI", "Rapid Prototyping"]
    },
    {
      name: "Rork",
      description: "AI development assistant that helps with code review, debugging, and optimization across multiple languages.",
      icon: GitBranch,
      href: "/rork-projects",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      capabilities: ["Code Review", "Debugging", "Optimization", "Multi-language Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full px-4 py-2 mb-6">
              <Code className="h-4 w-4 text-indigo-600 mr-2" />
              <span className="text-indigo-600 font-medium text-sm">AI Coding Tools</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Coding Tools
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                AI coding tools revolutionize software development by providing intelligent code completion, bug detection, and automated programming assistance. These tools help developers write better code faster, learn new technologies, and focus on creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Integration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Strength</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pricing</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Cursor</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Standalone editor</td>
                    <td className="px-6 py-4 text-gray-700">Codebase understanding</td>
                    <td className="px-6 py-4 text-gray-700">$20/month</td>
                    <td className="px-6 py-4 text-gray-700">AI-first development</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Bolt.new</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Web platform</td>
                    <td className="px-6 py-4 text-gray-700">Full-stack generation</td>
                    <td className="px-6 py-4 text-gray-700">Usage-based</td>
                    <td className="px-6 py-4 text-gray-700">Rapid prototyping</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Lovable</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Web platform</td>
                    <td className="px-6 py-4 text-gray-700">App development</td>
                    <td className="px-6 py-4 text-gray-700">Subscription</td>
                    <td className="px-6 py-4 text-gray-700">App creators</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Rork</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Multiple platforms</td>
                    <td className="px-6 py-4 text-gray-700">Code review & debugging</td>
                    <td className="px-6 py-4 text-gray-700">Freemium</td>
                    <td className="px-6 py-4 text-gray-700">Code reviewers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose a Tool to Start Coding
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Select an AI coding tool to explore hands-on projects and enhance your development workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codingTools.map((tool, index) => (
              <div 
                key={tool.name} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-indigo-400 mr-2" />
            <span className="text-2xl font-bold">AI Coding Tools</span>
          </div>
          <p className="text-gray-400">
            Enhance your development workflow with AI-powered coding assistance.
          </p>
        </div>
      </footer>
    </div>
  );
}