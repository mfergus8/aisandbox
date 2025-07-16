import Navigation from '@/components/Navigation';
import ToolCard from '@/components/ToolCard';
import { 
  Video, 
  Film, 
  Play, 
  Camera, 
  Edit,
  Sparkles
} from 'lucide-react';

export default function VideoCategoryPage() {
  const videoTools = [
    {
      name: "Runway ML",
      description: "Advanced AI video generation and editing with text-to-video, image-to-video, and professional editing tools.",
      icon: Video,
      href: "/runway-projects",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      capabilities: ["Text-to-Video", "Video Editing", "Motion Graphics", "Green Screen"]
    },
    {
      name: "Pika Labs",
      description: "Create engaging short videos from text prompts with a focus on social media and content creation.",
      icon: Play,
      href: "/pika-projects",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      capabilities: ["Short Videos", "Social Media", "Quick Generation", "Style Transfer"]
    },
    {
      name: "Sora",
      description: "OpenAI's revolutionary text-to-video model creating high-quality, realistic videos from text descriptions.",
      icon: Camera,
      href: "/sora-video-projects",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      capabilities: ["Text-to-Video", "High Quality", "Realistic Motion", "Long Duration"]
    },
    {
      name: "Luma AI",
      description: "3D video capture and generation, creating immersive content from simple inputs.",
      icon: Film,
      href: "/luma-projects",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      capabilities: ["3D Capture", "Immersive Video", "NeRF Technology", "Spatial Content"]
    },
    {
      name: "Google Veo",
      description: "Google's advanced video generation model with high-quality output and precise control over video elements.",
      icon: Edit,
      href: "/google-veo-projects",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      capabilities: ["Advanced Generation", "Quality Control", "Google Integration", "Professional Output"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/10 to-yellow-600/10 rounded-full px-4 py-2 mb-6">
              <Video className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium text-sm">AI Video Creation</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                AI Video Creation Tools
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                AI video creation tools revolutionize content production by generating, editing, and enhancing videos through artificial intelligence. From text-to-video generation to automated editing, these tools make professional video creation accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-6">
              <h2 className="text-xl font-bold text-white text-center">
                Side-by-Side Comparison
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Primary Function</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Video Length</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quality Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Runway ML</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Video generation & editing</td>
                    <td className="px-6 py-4 text-gray-700">Short to medium clips</td>
                    <td className="px-6 py-4 text-gray-700">Professional grade</td>
                    <td className="px-6 py-4 text-gray-700">Creative professionals</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Pika Labs</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Text-to-video generation</td>
                    <td className="px-6 py-4 text-gray-700">Short clips (3-4 seconds)</td>
                    <td className="px-6 py-4 text-gray-700">Good for social media</td>
                    <td className="px-6 py-4 text-gray-700">Content creators</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Sora</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Text-to-video generation</td>
                    <td className="px-6 py-4 text-gray-700">Up to 60 seconds</td>
                    <td className="px-6 py-4 text-gray-700">Cinematic quality</td>
                    <td className="px-6 py-4 text-gray-700">Filmmakers, creators</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Luma AI</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">3D video capture</td>
                    <td className="px-6 py-4 text-gray-700">Variable</td>
                    <td className="px-6 py-4 text-gray-700">High-tech immersive</td>
                    <td className="px-6 py-4 text-gray-700">VR/AR developers</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">Google Veo</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">Advanced video generation</td>
                    <td className="px-6 py-4 text-gray-700">Variable length</td>
                    <td className="px-6 py-4 text-gray-700">Professional quality</td>
                    <td className="px-6 py-4 text-gray-700">Enterprise users</td>
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
              Select an AI video tool to explore hands-on projects and learn to create compelling video content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTools.map((tool, index) => (
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
            <Sparkles className="h-6 w-6 text-orange-400 mr-2" />
            <span className="text-2xl font-bold">AI Video Creation</span>
          </div>
          <p className="text-gray-400">
            Create compelling video content with the power of artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}