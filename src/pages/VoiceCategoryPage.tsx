import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  Mic, 
  Volume2, 
  Radio, 
  Headphones, 
  Speaker,
  Sparkles
} from 'lucide-react';

export default function VoiceCategoryPage() {
  const voiceTools = [
    {
      name: "ElevenLabs",
      description: "Advanced AI voice synthesis with realistic speech generation, voice cloning, and multilingual support.",
      icon: Mic,
      href: "/elevenlabs-projects",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      capabilities: ["Voice Cloning", "Multilingual", "Realistic Speech", "API Integration"]
    },
    {
      name: "Murf AI",
      description: "Professional AI voiceover platform with studio-quality voices for presentations, videos, and podcasts.",
      icon: Volume2,
      href: "/murf-projects",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      capabilities: ["Professional Voiceovers", "Studio Quality", "Multiple Voices", "Commercial Use"]
    },
    {
      name: "Sesame",
      description: "AI-powered voice assistant and conversation platform for natural voice interactions and automation.",
      icon: Headphones,
      href: "/sesame-projects",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      capabilities: ["Voice Conversations", "AI Assistant", "Natural Interactions", "Voice Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-rose-600/10 to-pink-600/10 rounded-full px-4 py-2 mb-6">
              <Mic className="h-4 w-4 text-rose-600 mr-2" />
              <span className="text-rose-600 font-medium text-sm">AI Voice Generation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                AI Voice & Speech Tools
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                AI voice tools transform text into natural-sounding speech, clone voices, and create audio content. From podcasts to audiobooks, these tools make professional voice production accessible to creators, businesses, and developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Specialty</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Voice Quality</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Use Case</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Target User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">ElevenLabs</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Voice cloning & synthesis</td>
                    <td className="px-6 py-4 text-gray-700">Extremely realistic</td>
                    <td className="px-6 py-4 text-gray-700">Custom voice creation</td>
                    <td className="px-6 py-4 text-gray-700">Developers, creators</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Murf AI</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Professional voiceovers</td>
                    <td className="px-6 py-4 text-gray-700">Studio quality</td>
                    <td className="px-6 py-4 text-gray-700">Business presentations</td>
                    <td className="px-6 py-4 text-gray-700">Businesses, marketers</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Sesame</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Voice conversations</td>
                    <td className="px-6 py-4 text-gray-700">Natural, conversational</td>
                    <td className="px-6 py-4 text-gray-700">Voice automation</td>
                    <td className="px-6 py-4 text-gray-700">Businesses, assistants</td>
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
              Choose a Tool to Start Creating
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Select an AI voice tool to explore hands-on projects and learn to create professional audio content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceTools.map((tool, index) => (
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
            <Sparkles className="h-6 w-6 text-rose-400 mr-2" />
            <span className="text-2xl font-bold">AI Voice Generation</span>
          </div>
          <p className="text-gray-400">
            Transform text into natural speech and create professional audio content.
          </p>
        </div>
      </footer>
    </div>
  );
}