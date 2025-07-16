import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Target } from 'lucide-react';

interface ProjectStep {
  title: string;
  description: string;
  prompt?: string;
}

interface ProjectCardProps {
  title: string;
  goal: string;
  steps: ProjectStep[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
}

export default function ProjectCard({ 
  title, 
  goal, 
  steps, 
  difficulty, 
  estimatedTime 
}: ProjectCardProps) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge className={`${getDifficultyColor(difficulty)} font-medium`}>
            {difficulty}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {estimatedTime}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-100">
          <div className="flex items-start space-x-3">
            <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-purple-900 mb-1">Goal</h4>
              <p className="text-purple-800 text-sm leading-relaxed">{goal}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            Step-by-Step Directions
          </h4>
          
          {steps.map((step, index) => (
            <div key={index} className="pl-7 border-l-2 border-gray-100 hover:border-purple-200 transition-colors">
              <div className="pb-4">
                <h5 className="font-medium text-gray-900 mb-2">
                  Step {index + 1}: {step.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                {step.prompt && (
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                      Prompt Example
                    </p>
                    <p className="text-sm text-gray-700 font-mono italic">
                      "{step.prompt}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}