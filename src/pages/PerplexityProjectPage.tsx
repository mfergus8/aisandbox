import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, Search, Sparkles } from 'lucide-react';

export default function PerplexityProjectPage() {
  const beginnerProject = {
    title: "The Fact-Checking Detective",
    goal: "To develop fact-checking skills using Perplexity's source verification and citation capabilities.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Claim Investigation",
        description: "Present a claim or statement to Perplexity and ask for verification with sources.",
        prompt: "I've heard that drinking 8 glasses of water a day is necessary for good health. Can you verify this information and provide reliable sources?"
      },
      {
        title: "Source Evaluation",
        description: "Ask Perplexity to evaluate the credibility and reliability of different sources on the topic.",
        prompt: "Evaluate the credibility of the sources you just provided. Which are most reliable and why?"
      },
      {
        title: "Evidence Analysis",
        description: "Have Perplexity analyze conflicting evidence and explain discrepancies between sources.",
        prompt: "Are there any conflicting viewpoints on this topic? If so, analyze the evidence on different sides and explain the discrepancies."
      },
      {
        title: "Conclusion Formation",
        description: "Work with Perplexity to form a well-supported conclusion based on the available evidence.",
        prompt: "Based on all the evidence and sources we've reviewed, what's the most accurate conclusion about daily water intake recommendations?"
      }
    ]
  };

  const intermediateProject = {
    title: "The Academic Research Assistant",
    goal: "To learn how to conduct thorough academic research using Perplexity's citation and synthesis capabilities.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Research Question Development",
        description: "Work with Perplexity to refine your research question and identify key areas to investigate.",
        prompt: "I want to research the impact of remote work on employee productivity. Help me develop a focused research question and identify key areas to investigate."
      },
      {
        title: "Literature Search",
        description: "Use Perplexity to find relevant academic sources and get summaries of key findings.",
        prompt: "Find recent academic studies on remote work and productivity. Summarize the key findings from the most credible sources."
      },
      {
        title: "Source Synthesis",
        description: "Have Perplexity help synthesize information from multiple sources into coherent themes.",
        prompt: "Synthesize the information from these studies. What are the main themes and patterns that emerge across different research?"
      },
      {
        title: "Gap Identification",
        description: "Ask Perplexity to identify gaps in the research and suggest areas for further investigation.",
        prompt: "Based on the research we've reviewed, what gaps exist in our understanding of remote work's impact on productivity?"
      },
      {
        title: "Bibliography Creation",
        description: "Work with Perplexity to organize sources and create a properly formatted bibliography.",
        prompt: "Help me create a properly formatted bibliography of all the sources we've discussed, using APA format."
      }
    ]
  };

  const advancedProject = {
    title: "The Comprehensive Researcher",
    goal: "To conduct comprehensive research on a complex topic using Perplexity's advanced search and synthesis capabilities.",
    difficulty: "Advanced" as const,
    estimatedTime: "90-120 minutes",
    steps: [
      {
        title: "Multi-angle Investigation",
        description: "Research your topic from multiple angles and perspectives using Perplexity's capabilities.",
        prompt: "I need to research the economic, social, and environmental impacts of renewable energy adoption. Help me investigate this topic from multiple perspectives."
      },
      {
        title: "Primary vs Secondary Sources",
        description: "Work with Perplexity to identify and differentiate between primary and secondary sources.",
        prompt: "Help me identify which of our sources are primary vs secondary. What are the advantages and limitations of each type for this research?"
      },
      {
        title: "Bias Analysis",
        description: "Have Perplexity help you identify potential biases in sources and account for them in your research.",
        prompt: "Analyze potential biases in our sources. What perspectives might be overrepresented or underrepresented in this research?"
      },
      {
        title: "Cross-referencing",
        description: "Use Perplexity to cross-reference information across multiple sources and identify patterns.",
        prompt: "Cross-reference the key claims across our sources. Where do they agree and disagree? What patterns emerge?"
      },
      {
        title: "Research Report",
        description: "Create a comprehensive research report with proper citations and source attribution.",
        prompt: "Help me create a comprehensive research report that synthesizes all our findings with proper citations and addresses the different perspectives we've uncovered."
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
            <div className="inline-flex items-center bg-gradient-to-r from-pink-600/10 to-rose-500/10 rounded-full px-4 py-2 mb-6">
              <Search className="h-4 w-4 text-pink-600 mr-2" />
              <span className="text-pink-600 font-medium text-sm">Perplexity Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Hands-On Projects with Perplexity
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                Perplexity excels at research synthesis, source citations, and fact-checking. 
                It's perfect for academic research, information verification, and creating well-sourced, credible content.
              </p>
            </div>
            
            <a 
              href="https://www.perplexity.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch Perplexity
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
              Select a difficulty level and master research skills with AI-powered citations.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-pink-400 mr-2" />
            <span className="text-2xl font-bold">Perplexity Projects</span>
          </div>
          <p className="text-gray-400">
            Master research skills and fact-checking with AI-powered citations.
          </p>
        </div>
      </footer>
    </div>
  );
}