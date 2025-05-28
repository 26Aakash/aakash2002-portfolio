
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

const CVSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        My Resume
      </h3>
      <p className="text-gray-300 mb-6">
        Download or view my latest resume to learn more about my experience, skills, and achievements.
      </p>
      
      <div className="flex gap-4 flex-wrap">
        <Button 
          asChild
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/25"
        >
          <a 
            href="https://drive.google.com/file/d/your-cv-file-id/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View CV
          </a>
        </Button>
        
        <Button 
          asChild
          variant="outline"
          className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
        >
          <a 
            href="https://drive.google.com/uc?export=download&id=your-cv-file-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CVSection;
