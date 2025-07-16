import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  imageUrl?: string;
}

export default function CategoryCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  gradient,
  imageUrl 
}: CategoryCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br opacity-90 group-hover:opacity-95 transition-opacity duration-300" 
           style={{ background: gradient }} />
      
      {imageUrl && (
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[280px]">
        <div>
          <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg w-fit">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          <p className="text-white/90 text-base leading-relaxed">
            {description}
          </p>
        </div>
        
        <Link to={href} className="mt-6">
          <Button 
            variant="secondary" 
            className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white transition-all duration-300 group-hover:scale-105"
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}