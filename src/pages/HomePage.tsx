import Navigation from '@/components/Navigation';
import CategoryCard from '@/components/CategoryCard';
import { 
  MessageCircle, 
  Music, 
  Palette, 
  Video, 
  Search, 
  Mic, 
  Code,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const categories = [
    {
      title: "LLMs/Chat",
      description: "Learn to write, research, and code with powerful text-based AI.",
      icon: MessageCircle,
      href: "/llm-category",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Music Generation",
      description: "Compose original melodies, background tracks, and entire songs with AI.",
      icon: Music,
      href: "/music-category",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      imageUrl: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Image Generation",
      description: "Turn your text descriptions into stunning, original artwork and photos.",
      icon: Palette,
      href: "/art-category",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      imageUrl: "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Video Creation",
      description: "Create and edit compelling videos from simple text prompts or existing footage.",
      icon: Video,
      href: "/video-category",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      imageUrl: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Research",
      description: "Unlock powerful research capabilities with AI-powered search and analysis tools.",
      icon: Search,
      href: "/research-category",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      imageUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Voice",
      description: "Generate realistic speech, clone voices, and create audio content with AI.",
      icon: Mic,
      href: "/voice-category",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      imageUrl: "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Vibe Coding",
      description: "Build applications and websites with AI-powered coding assistants.",
      icon: Code,
      href: "/coding-category",
      gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      imageUrl: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Your AI Learning Journey Starts Here</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                The AI Sandbox
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light mb-6 max-w-3xl mx-auto leading-relaxed">
              Your Hands-On Guide to Mastering Modern AI Tools
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                Welcome to the AI Sandbox! This site is designed to help you move beyond just hearing about AI and start using it for practical, creative projects. Choose a category below to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[95vw]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore AI Categories
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Discover the power of AI across different domains. Each category offers hands-on projects and practical learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.title} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard {...category} />
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
            Empowering creators with hands-on AI education and practical projects.
          </p>
        </div>
      </footer>
    </div>
  );
}