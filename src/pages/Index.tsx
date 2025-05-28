
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/30">
                🔥 Welcome to My Portfolio
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
              <div className="flex-1 text-left">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  <span className="wave inline-block">👋</span> Hello! I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Aakash Joshi
                  </span>
                </h1>
                
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                  Full Stack Developer & Tech Enthusiast
                </h2>
                
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  A passionate B.Tech Computer Science student specializing in building exceptional digital experiences. 
                  Proficient in both frontend and backend development, with a strong foundation in modern web technologies, 
                  blockchain, and AI-powered applications.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                  >
                    <Link to="/portfolio">View My Work</Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-medium"
                  >
                    <Link to="/contact">Hire Me</Link>
                  </Button>

                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-3 text-lg font-medium"
                  >
                    <a 
                      href="https://drive.google.com/file/d/your-cv-file-id/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download CV
                    </a>
                  </Button>
                </div>
                
                <div className="flex gap-6">
                  <a 
                    href="https://github.com/26Aakash" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aakash-joshi-8a1a63298/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                  <a 
                    href="mailto:joshiaakashhld@gmail.com"
                    className="p-3 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                  <a 
                    href="tel:9045685738"
                    className="p-3 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300 hover:scale-110"
                  >
                    <Phone className="w-6 h-6 text-gray-400 hover:text-white" />
                  </a>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
                  <img 
                    src="https://i.postimg.cc/7hfmKGvp/profile-pic.jpg"
                    alt="Aakash Joshi"
                    className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
        }
      `}</style>
    </Layout>
  );
};

export default Index;
