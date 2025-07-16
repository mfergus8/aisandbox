import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  Music, 
  Headphones, 
  Mic, 
  Radio, 
  Volume2,
  Sparkles
} from 'lucide-react';

export default function MusicCategoryPage() {
  const musicTools = [
    {
      name: "Suno AI",
      description: "Create complete songs with vocals and instruments from simple text prompts. Perfect for generating original music in any genre.",
      icon: Music,
      href: "/suno-projects",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      capabilities: ["Full Song Generation", "Vocal Synthesis", "Multi-Genre Support", "Lyric Creation"]
    },
    {
      name: "Udio",
      description: "Advanced AI music creation with professional-quality output and fine-tuned control over musical elements.",
      icon: Headphones,
      href: "/udio-projects",
      gradient: "linear-gradient(135deg, #a55eea 0%, #8854d0 100%)",
      capabilities: ["Professional Quality", "Style Control", "Instrument Separation", "Audio Mastering"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600/10 to-red-600/10 rounded-full px-4 py-2 mb-6">
              <Music className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-medium text-sm">AI Music Generation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                AI Music Generation Tools
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                AI music generation tools allow you to create original songs, background tracks, and soundscapes from simple text descriptions. Whether you're a content creator, filmmaker, or music enthusiast, these tools democratize music creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-pink-600 to-red-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Output Quality</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pricing Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ideal User</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Suno AI</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Complete songs with vocals</td>
                    <td className="px-6 py-4 text-gray-700">High-quality, radio-ready</td>
                    <td className="px-6 py-4 text-gray-700">Freemium with credits</td>
                    <td className="px-6 py-4 text-gray-700">Musicians, content creators</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Udio</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Professional music production</td>
                    <td className="px-6 py-4 text-gray-700">Studio-grade quality</td>
                    <td className="px-6 py-4 text-gray-700">Subscription-based</td>
                    <td className="px-6 py-4 text-gray-700">Professional producers</td>
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
              Select an AI music tool to explore hands-on projects and learn to create original music.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicTools.map((tool, index) => (
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
            <Sparkles className="h-6 w-6 text-pink-400 mr-2" />
            <span className="text-2xl font-bold">AI Music Generation</span>
          </div>
          <p className="text-gray-400">
            Create original music and soundtracks with the power of AI.
          </p>
        </div>
      </footer>
    </div>
  );
}