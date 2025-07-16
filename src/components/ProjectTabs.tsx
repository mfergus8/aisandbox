import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from './ProjectCard';

interface ProjectStep {
  title: string;
  description: string;
  prompt?: string;
}

interface Project {
  title: string;
  goal: string;
  steps: ProjectStep[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
}

interface ProjectTabsProps {
  beginnerProject?: Project;
  intermediateProject?: Project;
  advancedProject?: Project;
}

interface ProjectTabsProps {
  beginnerProject?: Project;
  intermediateProject?: Project;
  advancedProject?: Project;
  toolGradient?: string;
}

export default function ProjectTabs({ 
  beginnerProject, 
  intermediateProject, 
  advancedProject,
  toolGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}: ProjectTabsProps) {
  return (
    <div className="w-full max-w-none">
      <Tabs defaultValue="beginner" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-2xl p-2 grid grid-cols-3 gap-2 w-full max-w-md">
            <TabsTrigger 
              value="beginner" 
              className="relative px-6 py-3 rounded-xl font-semibold text-gray-600 transition-all duration-300 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50"
              style={{
                background: 'var(--tab-active, transparent)',
                '--tab-active': toolGradient
              } as React.CSSProperties}
            >
              <span className="relative z-10">Beginner</span>
            </TabsTrigger>
            <TabsTrigger 
              value="intermediate"
              className="relative px-6 py-3 rounded-xl font-semibold text-gray-600 transition-all duration-300 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50"
              style={{
                background: 'var(--tab-active, transparent)',
                '--tab-active': toolGradient
              } as React.CSSProperties}
            >
              <span className="relative z-10">Intermediate</span>
            </TabsTrigger>
            <TabsTrigger 
              value="advanced"
              className="relative px-6 py-3 rounded-xl font-semibold text-gray-600 transition-all duration-300 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50"
              style={{
                background: 'var(--tab-active, transparent)',
                '--tab-active': toolGradient
              } as React.CSSProperties}
            >
              <span className="relative z-10">Advanced</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        {beginnerProject && (
          <TabsContent value="beginner" className="mt-0">
            <div className="w-full">
              <ProjectCard {...beginnerProject} />
            </div>
          </TabsContent>
        )}
        
        {intermediateProject && (
          <TabsContent value="intermediate" className="mt-0">
            <div className="w-full">
              <ProjectCard {...intermediateProject} />
            </div>
          </TabsContent>
        )}
        
        {advancedProject && (
          <TabsContent value="advanced" className="mt-0">
            <div className="w-full">
              <ProjectCard {...advancedProject} />
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}