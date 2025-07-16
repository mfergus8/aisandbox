import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Brain, Sparkles } from 'lucide-react';

export default function ClaudeProjectPage() {
  const beginnerProject = {
    title: "The Thoughtful Analyst",
    goal: "To learn how to use Claude's analytical capabilities for breaking down complex topics and developing nuanced understanding.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Topic Introduction",
        description: "Present a complex topic to Claude and ask for a comprehensive breakdown.",
        prompt: "I want to understand climate change policy. Can you break this down into its key components and explain each part clearly?"
      },
      {
        title: "Multiple Perspectives",
        description: "Ask Claude to present different viewpoints and perspectives on the topic.",
        prompt: "Now show me different perspectives on climate change policy from various stakeholders - governments, businesses, environmental groups, and citizens."
      },
      {
        title: "Critical Questions",
        description: "Have Claude help you develop critical questions that deepen your understanding.",
        prompt: "What are the most important questions I should be asking about climate change policy to truly understand its complexity?"
      },
      {
        title: "Synthesis",
        description: "Work with Claude to synthesize the information into a coherent understanding.",
        prompt: "Help me synthesize all this information into a clear, balanced understanding of climate change policy challenges and opportunities."
      }
    ]
  };

  const intermediateProject = {
    title: "The Ethical Dilemma Analyzer",
    goal: "To explore complex ethical scenarios and develop critical thinking skills using Claude's thoughtful analysis capabilities.",
    difficulty: "Intermediate" as const,
    estimatedTime: "45-60 minutes",
    steps: [
      {
        title: "Present the Scenario",
        description: "Give Claude a complex ethical dilemma to analyze from multiple perspectives.",
        prompt: "Analyze this ethical dilemma: A self-driving car must choose between hitting one person or five people. Consider utilitarian, deontological, and virtue ethics perspectives."
      },
      {
        title: "Explore Perspectives",
        description: "Ask Claude to dive deeper into each ethical framework and how they apply to the scenario.",
        prompt: "Dive deeper into each ethical framework. How would a strict utilitarian vs. a rule-based deontologist approach this differently?"
      },
      {
        title: "Consider Real-World Applications",
        description: "Discuss how this analysis might apply to real-world policy decisions or personal choices.",
        prompt: "How might this ethical analysis apply to real-world decisions about autonomous vehicle programming and regulation?"
      },
      {
        title: "Develop Your Position",
        description: "Use Claude's analysis to help you formulate and defend your own ethical position on the dilemma.",
        prompt: "Based on our discussion, help me formulate and defend my own ethical position on how autonomous vehicles should be programmed to handle such scenarios."
      }
    ]
  };

  const advancedProject = {
    title: "The Philosophical Dialogue",
    goal: "To engage in deep philosophical discussions and explore complex ideas through Socratic dialogue with Claude.",
    difficulty: "Advanced" as const,
    estimatedTime: "90-120 minutes",
    steps: [
      {
        title: "Choose a Philosophical Question",
        description: "Select a fundamental philosophical question to explore through dialogue.",
        prompt: "I want to explore the question 'What is the nature of consciousness?'. Let's have a Socratic dialogue where you help me examine my assumptions and reasoning."
      },
      {
        title: "Examine Assumptions",
        description: "Let Claude guide you through examining your initial assumptions and beliefs about the topic.",
        prompt: "Challenge my initial assumptions about consciousness. What am I taking for granted that might not be true?"
      },
      {
        title: "Explore Counterarguments",
        description: "Have Claude present counterarguments and alternative perspectives to challenge your thinking.",
        prompt: "Present the strongest counterarguments to my current understanding of consciousness. What would philosophers like Dennett or Chalmers say?"
      },
      {
        title: "Synthesize Insights",
        description: "Work together to synthesize new insights and understanding from the dialogue.",
        prompt: "Help me synthesize the insights we've uncovered. What new understanding of consciousness have we developed together?"
      },
      {
        title: "Apply to Life",
        description: "Discuss how these philosophical insights might apply to real-life situations and decisions.",
        prompt: "How do these insights about consciousness apply to practical questions about AI, medical ethics, and how we treat other beings?"
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
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600/10 to-purple-500/10 rounded-full px-4 py-2 mb-6">
              <Brain className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium text-sm">Claude Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                Hands-On Projects with Claude
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Claude excels at thoughtful analysis, ethical reasoning, and long-form content creation. 
                It's perfect for research, deep discussions, and complex problem-solving that requires nuanced understanding.
              </p>
            </div>
            
            <a 
              href="https://claude.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Claude
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
              Select a difficulty level that matches your experience and dive into thoughtful AI analysis.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-2xl font-bold">Claude Projects</span>
          </div>
          <p className="text-gray-400">
            Engage in thoughtful analysis and meaningful conversations with AI.
          </p>
        </div>
      </footer>
    </div>
  );
}