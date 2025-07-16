import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, Sparkles } from 'lucide-react';

export default function GrokProjectPage() {
  const beginnerProject = {
    title: "The Social Media Trend Tracker",
    goal: "To use Grok's real-time X/Twitter access to track and analyze current social media trends and conversations.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Trend Identification",
        description: "Ask Grok to identify what topics are currently trending on X/Twitter.",
        prompt: "What are the top trending topics on X/Twitter right now? Give me details about each trend and why it's gaining traction."
      },
      {
        title: "Sentiment Analysis",
        description: "Have Grok analyze the sentiment and public opinion around specific trending topics.",
        prompt: "Pick the most interesting trend and analyze the sentiment around it. What are people saying? Is the reaction mostly positive, negative, or mixed?"
      },
      {
        title: "Influence Mapping",
        description: "Ask Grok to identify key influencers and voices driving the conversation on trending topics.",
        prompt: "Who are the key voices and influencers driving this conversation? What different perspectives are they bringing?"
      },
      {
        title: "Trend Prediction",
        description: "Work with Grok to predict how these trends might evolve and what might trend next.",
        prompt: "Based on the current conversation patterns, how do you think this trend will evolve? What might trend next?"
      }
    ]
  };

  const intermediateProject = {
    title: "The Breaking News Analyst",
    goal: "To leverage Grok's real-time information access to stay updated on breaking news and analyze developing stories.",
    difficulty: "Intermediate" as const,
    estimatedTime: "45-60 minutes",
    steps: [
      {
        title: "News Monitoring",
        description: "Ask Grok to provide updates on breaking news stories as they develop.",
        prompt: "What breaking news stories are developing right now? Provide updates and context for each major story."
      },
      {
        title: "Source Verification",
        description: "Have Grok help verify information and identify reliable sources for breaking news.",
        prompt: "For the most significant story, help me verify the information. What sources are reporting this and how reliable are they?"
      },
      {
        title: "Impact Analysis",
        description: "Work with Grok to analyze the potential impacts of breaking news on different sectors or communities.",
        prompt: "Analyze the potential impacts of this story. How might it affect different industries, communities, or global markets?"
      },
      {
        title: "Timeline Creation",
        description: "Ask Grok to help create a timeline of events for complex developing stories.",
        prompt: "Create a timeline of how this story has developed. What were the key moments and turning points?"
      }
    ]
  };

  const advancedProject = {
    title: "The Real-Time Event Commentator",
    goal: "To use Grok as a real-time commentator for live events, sports, or cultural moments happening on social media.",
    difficulty: "Advanced" as const,
    estimatedTime: "90-120 minutes",
    steps: [
      {
        title: "Event Selection",
        description: "Choose a live event or ongoing situation that's being discussed on X/Twitter.",
        prompt: "I want to follow [current live event] as it unfolds. Give me real-time updates and commentary based on X/Twitter discussions."
      },
      {
        title: "Live Commentary",
        description: "Have Grok provide ongoing commentary and analysis as the event progresses.",
        prompt: "Provide live commentary on what's happening right now. What are the key moments and how are people reacting?"
      },
      {
        title: "Audience Reaction",
        description: "Ask Grok to analyze how the audience is reacting to different moments in the event.",
        prompt: "How is the audience reacting to what just happened? What are the different camps of opinion forming?"
      },
      {
        title: "Cultural Context",
        description: "Work with Grok to understand the broader cultural significance of the event and reactions.",
        prompt: "Put this event in broader cultural context. Why is this significant and what does the reaction tell us about current culture?"
      },
      {
        title: "Summary Creation",
        description: "Have Grok create a comprehensive summary of the event and its social media impact.",
        prompt: "Create a comprehensive summary of this event, its key moments, and its impact on social media conversation."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/llm-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600/10 to-yellow-500/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium text-sm">Grok Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Hands-On Projects with Grok
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Grok excels at real-time social media analysis, current events tracking, and conversational humor. 
                It's perfect for staying current with trends, analyzing social media conversations, and engaging in witty dialogue.
              </p>
            </div>
            
            <a 
              href="https://grok.x.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Grok
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
              Select a difficulty level and explore Grok's real-time social media capabilities.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-orange-400 mr-2" />
            <span className="text-2xl font-bold">Grok Projects</span>
          </div>
          <p className="text-gray-400">
            Stay current with real-time social media insights and witty AI conversation.
          </p>
        </div>
      </footer>
    </div>
  );
}