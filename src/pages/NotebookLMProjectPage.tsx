import Navigation from '@/components/Navigation';
import ProjectTabs from '@/components/ProjectTabs';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Sparkles } from 'lucide-react';

export default function NotebookLMProjectPage() {
  const beginnerProject = {
    title: "Your First Document Analysis",
    goal: "To learn how to use NotebookLM to analyze and understand your documents with AI assistance.",
    difficulty: "Beginner" as const,
    estimatedTime: "30-45 minutes",
    steps: [
      {
        title: "Document Upload",
        description: "Upload your first document to NotebookLM for analysis.",
        prompt: "Upload a research paper, article, or document you want to understand better"
      },
      {
        title: "Ask Questions",
        description: "Start asking questions about your document to understand its content.",
        prompt: "What are the main points of this document? Can you summarize the key findings?"
      },
      {
        title: "Deep Dive Analysis",
        description: "Ask more specific questions to explore particular aspects of your document.",
        prompt: "What evidence supports the main argument? What are the limitations mentioned?"
      },
      {
        title: "Generate Insights",
        description: "Use NotebookLM to generate new insights and connections from your document."
      }
    ]
  };

  const intermediateProject = {
    title: "The Research Synthesizer",
    goal: "To use NotebookLM for synthesizing information across multiple documents and sources.",
    difficulty: "Intermediate" as const,
    estimatedTime: "60-90 minutes",
    steps: [
      {
        title: "Multi-Document Upload",
        description: "Upload multiple related documents to create a comprehensive knowledge base.",
        prompt: "Upload 3-5 related research papers or articles on the same topic"
      },
      {
        title: "Cross-Document Analysis",
        description: "Ask questions that require synthesizing information across multiple sources.",
        prompt: "How do these different sources agree or disagree on the main topic? What are the common themes?"
      },
      {
        title: "Comparative Analysis",
        description: "Compare methodologies, findings, and conclusions across your documents.",
        prompt: "Compare the research methods used in these studies. Which findings are most reliable?"
      },
      {
        title: "Knowledge Synthesis",
        description: "Create new insights by combining information from all your sources.",
        prompt: "Based on all these sources, what would be the best approach to [your research question]?"
      },
      {
        title: "Research Summary",
        description: "Generate a comprehensive summary that incorporates insights from all documents."
      }
    ]
  };

  const advancedProject = {
    title: "The Knowledge Navigator",
    goal: "To create a comprehensive research system using NotebookLM's advanced features for complex analysis.",
    difficulty: "Advanced" as const,
    estimatedTime: "120-180 minutes",
    steps: [
      {
        title: "Knowledge Base Creation",
        description: "Build a comprehensive knowledge base with diverse document types and sources.",
        prompt: "Upload research papers, reports, articles, and other relevant documents on your research topic"
      },
      {
        title: "Advanced Questioning",
        description: "Use sophisticated questioning techniques to extract deep insights.",
        prompt: "What are the underlying assumptions in these works? How do they reflect different theoretical frameworks?"
      },
      {
        title: "Critical Analysis",
        description: "Perform critical analysis of arguments, evidence, and methodologies.",
        prompt: "Critically evaluate the strength of evidence presented. What are potential biases or limitations?"
      },
      {
        title: "Hypothesis Generation",
        description: "Use the knowledge base to generate new hypotheses and research directions.",
        prompt: "Based on gaps in current research, what new hypotheses could be tested?"
      },
      {
        title: "Research Roadmap",
        description: "Create a comprehensive research roadmap based on your analysis."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation showBackButton backTo="/research-category" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-blue-500/10 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">NotebookLM Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Hands-On Projects with NotebookLM
              </span>
            </h1>
            <div className="max-w-4xl mx-auto mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                NotebookLM excels at document analysis and research synthesis with AI-powered conversations. 
                It's perfect for researchers, students, and professionals who need to understand and work with complex documents.
              </p>
            </div>
            
            <a 
              href="https://notebooklm.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Launch NotebookLM
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
              Select a difficulty level and master document analysis with AI-powered research assistance.
            </p>
          </div>
          
          <ProjectTabs 
            beginnerProject={beginnerProject}
            intermediateProject={intermediateProject}
            advancedProject={advancedProject}
            toolGradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-none text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">NotebookLM Projects</span>
          </div>
          <p className="text-gray-400">
            Master document analysis and research synthesis with AI assistance.
          </p>
        </div>
      </footer>
    </div>
  );
}