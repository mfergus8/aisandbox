import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  Palette, 
  Image, 
  Brush, 
  Camera, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function ArtCategoryPage() {
  const artTools = [
    {
      name: "Midjourney",
      description: "Create stunning, artistic images from text descriptions. Known for its exceptional artistic quality and creative interpretations.",
      icon: Palette,
      href: "/midjourney-projects",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      capabilities: ["Artistic Style", "High Quality", "Creative Interpretation", "Community Features"]
    },
    {
      name: "Sora",
      description: "OpenAI's advanced text-to-image and video generator with exceptional quality and prompt understanding.",
      icon: Image,
      href: "/sora-projects",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      capabilities: ["Text-to-Image", "Video Generation", "High Quality", "Prompt Accuracy"]
    },
    {
      name: "Gemini",
      description: "Google's multimodal AI that can generate images and understand visual content with advanced reasoning.",
      icon: Brush,
      href: "/gemini-image-projects",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      capabilities: ["Multimodal AI", "Visual Understanding", "Google Integration", "Advanced Reasoning"]
    },
    {
      name: "Ideogram",
      description: "AI image generator specializing in text rendering within images and creative typography.",
      icon: Layers,
      href: "/ideogram-projects",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      capabilities: ["Text in Images", "Typography", "Creative Design", "Brand Graphics"]
    },
    {
      name: "Reve",
      description: "Advanced AI image generator focused on artistic expression and creative visual storytelling.",
      icon: Camera,
      href: "/reve-projects",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      capabilities: ["Artistic Expression", "Visual Storytelling", "Creative Control", "Style Variety"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full px-4 py-2 mb-6">
              <Palette className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">AI Image Generation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                AI Image Generation Tools
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                AI image generation tools transform text descriptions into stunning visual art. From concept art to marketing materials, these tools democratize visual creation and enable anyone to bring their imagination to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Strength</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Art Style</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Access Method</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Midjourney</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Artistic quality and creativity</td>
                    <td className="px-6 py-4 text-gray-700">Highly artistic, painterly</td>
                    <td className="px-6 py-4 text-gray-700">Discord bot</td>
                    <td className="px-6 py-4 text-gray-700">Concept art, creative projects</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Sora</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Image and video generation</td>
                    <td className="px-6 py-4 text-gray-700">High-quality, realistic</td>
                    <td className="px-6 py-4 text-gray-700">OpenAI platform</td>
                    <td className="px-6 py-4 text-gray-700">Content creation, media</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Gemini</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Multimodal understanding</td>
                    <td className="px-6 py-4 text-gray-700">Intelligent, contextual</td>
                    <td className="px-6 py-4 text-gray-700">Google platform</td>
                    <td className="px-6 py-4 text-gray-700">Business integration</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Ideogram</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Text rendering in images</td>
                    <td className="px-6 py-4 text-gray-700">Typography-focused</td>
                    <td className="px-6 py-4 text-gray-700">Web platform</td>
                    <td className="px-6 py-4 text-gray-700">Brand design, marketing</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Reve</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Artistic expression</td>
                    <td className="px-6 py-4 text-gray-700">Creative, diverse styles</td>
                    <td className="px-6 py-4 text-gray-700">Web platform</td>
                    <td className="px-6 py-4 text-gray-700">Artists, storytellers</td>
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
              Select an AI art tool to explore hands-on projects and learn to create stunning visuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artTools.map((tool, index) => (
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
            <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">AI Image Generation</span>
          </div>
          <p className="text-gray-400">
            Transform your imagination into stunning visual art with AI.
          </p>
        </div>
      </footer>
    </div>
  );
}