import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  MessageCircle, 
  Brain, 
  Search, 
  Sparkles, 
  Zap,
  Users,
  Code,
  Globe,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function LLMCategoryPage() {
  const llmTools = [
    {
      name: "ChatGPT",
      description: "OpenAI's versatile conversational AI, perfect for creative writing, coding assistance, and complex problem-solving.",
      icon: MessageCircle,
      href: "/chatgpt-projects",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      capabilities: ["Creative Writing", "Code Generation", "Problem Solving", "Conversational AI"]
    },
    {
      name: "Claude",
      description: "Anthropic's thoughtful AI assistant, excelling at nuanced conversations, analysis, and ethical reasoning.",
      icon: Brain,
      href: "/claude-projects",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      capabilities: ["Deep Analysis", "Ethical Reasoning", "Long-form Content", "Research Assistant"]
    },
    {
      name: "Google Gemini",
      description: "Google's multimodal AI with exceptional integration across Google services and real-time information access.",
      icon: Star,
      href: "/gemini-projects",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      capabilities: ["Multimodal Input", "Real-time Data", "Google Integration", "Visual Understanding"]
    },
    {
      name: "Grok",
      description: "X's irreverent AI with real-time Twitter/X access and a unique conversational style.",
      icon: Zap,
      href: "/grok-projects",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      capabilities: ["Real-time Social Media", "Conversational Humor", "Current Events", "Unique Personality"]
    },
    {
      name: "Perplexity",
      description: "The AI research assistant that combines search with synthesis, perfect for fact-checking and research.",
      icon: Search,
      href: "/perplexity-projects",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      capabilities: ["Research & Citations", "Fact Checking", "Source Verification", "Academic Writing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Large Language Models</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                An Introduction to Large Language Models (LLMs)
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                Large Language Models, or LLMs, are AI systems designed to understand, generate, and work with human language. They are the power behind chatbots, writing assistants, and powerful research tools. Below is a comparison of some of the leading models available today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Publisher</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stand-out Capabilities</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Example Everyday Use</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ideal For...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">ChatGPT</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">OpenAI</td>
                    <td className="px-6 py-4 text-gray-700">Versatile conversation, code generation, creative writing</td>
                    <td className="px-6 py-4 text-gray-700">Writing emails, debugging code, brainstorming ideas</td>
                    <td className="px-6 py-4 text-gray-700">General-purpose AI assistance, beginners</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Claude</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Anthropic</td>
                    <td className="px-6 py-4 text-gray-700">Thoughtful analysis, ethical reasoning, long-form content</td>
                    <td className="px-6 py-4 text-gray-700">Research summaries, ethical discussions, detailed analysis</td>
                    <td className="px-6 py-4 text-gray-700">Researchers, writers, thoughtful conversations</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Gemini</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Google</td>
                    <td className="px-6 py-4 text-gray-700">Multimodal input, real-time information, Google integration</td>
                    <td className="px-6 py-4 text-gray-700">Image analysis, current events, Google Workspace tasks</td>
                    <td className="px-6 py-4 text-gray-700">Google users, multimodal projects, current info needs</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Grok</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">X (Twitter)</td>
                    <td className="px-6 py-4 text-gray-700">Real-time X/Twitter data, conversational humor, current events</td>
                    <td className="px-6 py-4 text-gray-700">Social media trends, witty responses, breaking news</td>
                    <td className="px-6 py-4 text-gray-700">Social media users, current events, casual conversation</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Perplexity</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Perplexity AI</td>
                    <td className="px-6 py-4 text-gray-700">Research synthesis, source citations, fact-checking</td>
                    <td className="px-6 py-4 text-gray-700">Academic research, fact verification, sourced answers</td>
                    <td className="px-6 py-4 text-gray-700">Students, researchers, fact-checkers</td>
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
              Choose a Model to Start a Project
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Select an LLM to explore hands-on projects and learn practical applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {llmTools.map((tool, index) => (
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
            <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-2xl font-bold">The AI Sandbox</span>
          </div>
          <p className="text-gray-400">
            Master the art of AI conversation and text generation.
          </p>
        </div>
      </footer>
    </div>
  );
}