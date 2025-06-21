
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

const CVSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        My Resume
      </h3>
      <p className="text-gray-300 mb-6">
        Download or view my latest resume to learn more about my experience, skills, and achievements.
      </p>
      
      <div className="flex gap-4 flex-wrap">
        <Button 
          asChild
          className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold border-0 shadow-lg shadow-yellow-500/25"
        >
          <a 
            href="https://drive.google.com/file/d/1aWmQXBpI92NDtCSFLWJ_U6SlYTJnKbOy/view?usp=sharing" 
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
          className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
        >
          <a 
            href="https://drive.google.com/uc?export=download&id=1aWmQXBpI92NDtCSFLWJ_U6SlYTJnKbOy" 
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
