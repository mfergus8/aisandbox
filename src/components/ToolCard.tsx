import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  capabilities: string[];
}

export default function ToolCard({ 
  name, 
  description, 
  icon: Icon, 
  href, 
  gradient,
  capabilities 
}: ToolCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transition-all duration-300 group-hover:h-2" 
           style={{ background: gradient }} />
      
      <CardContent className="p-6 h-full flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="mb-4 p-3 bg-gradient-to-r rounded-lg w-fit transition-all duration-300 group-hover:scale-110" 
               style={{ background: gradient }}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="space-y-2">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center text-sm text-gray-500">
                <div className="w-1.5 h-1.5 bg-gradient-to-r rounded-full mr-2" 
                     style={{ background: gradient }} />
                {capability}
              </div>
            ))}
          </div>
        </div>
        
        <Link to={href} className="mt-6">
          <Button 
            variant="outline" 
            className="w-full border-2 hover:bg-gray-50 transition-all duration-300 group-hover:border-gray-400"
          >
            Start Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}