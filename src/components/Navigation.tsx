import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface NavigationProps {
  showBackButton?: boolean;
  backTo?: string;
}

export default function Navigation({ showBackButton, backTo = '/' }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              The AI Sandbox
            </span>
          </Link>
          
          {showBackButton && (
            <Link to={backTo}>
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-100">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}