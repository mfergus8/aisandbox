import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  Search, 
  BookOpen, 
  Database, 
  FileText, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function ResearchCategoryPage() {
  const researchTools = [
    {
      name: "Perplexity AI",
      description: "AI-powered research assistant that provides sourced answers with citations for academic and professional research.",
      icon: Search,
      href: "/perplexity-projects",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      capabilities: ["Source Citations", "Real-time Data", "Academic Research", "Fact Checking"]
    },
    {
      name: "NotebookLM",
      description: "Google's AI-powered research assistant that helps you understand and work with your documents and sources.",
      icon: BookOpen,
      href: "/notebooklm-projects",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      capabilities: ["Document Analysis", "Source Integration", "AI Conversations", "Research Synthesis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-600/10 to-green-600/10 rounded-full px-4 py-2 mb-6">
              <Search className="h-4 w-4 text-teal-600 mr-2" />
              <span className="text-teal-600 font-medium text-sm">AI Research Tools</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                AI Research & Analysis Tools
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                AI research tools revolutionize how we discover, analyze, and synthesize information. From academic literature reviews to fact-checking and data analysis, these tools enhance research efficiency and accuracy across all domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-teal-600 to-green-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Primary Focus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data Sources</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Output Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Perplexity AI</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">General research with citations</td>
                    <td className="px-6 py-4 text-gray-700">Web, academic, news</td>
                    <td className="px-6 py-4 text-gray-700">Sourced answers</td>
                    <td className="px-6 py-4 text-gray-700">General research, fact-checking</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">NotebookLM</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Document-based research</td>
                    <td className="px-6 py-4 text-gray-700">Your uploaded documents</td>
                    <td className="px-6 py-4 text-gray-700">AI conversations</td>
                    <td className="px-6 py-4 text-gray-700">Document analysis, research</td>
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
              Choose a Tool to Start Researching
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Select an AI research tool to explore hands-on projects and enhance your research capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchTools.map((tool, index) => (
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
            <Sparkles className="h-6 w-6 text-teal-400 mr-2" />
            <span className="text-2xl font-bold">AI Research Tools</span>
          </div>
          <p className="text-gray-400">
            Enhance your research capabilities with AI-powered analysis and discovery.
          </p>
        </div>
      </footer>
    </div>
  );
}