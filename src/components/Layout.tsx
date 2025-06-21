
import { ReactNode } from 'react';
import Navbar from './Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Dark navy background with geometric pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Geometric line pattern overlay */}
      <div className="fixed inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric-lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 L200,50" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
              <path d="M0,150 L200,100" stroke="#f59e0b" strokeWidth="1" opacity="0.2"/>
              <path d="M50,0 L150,200" stroke="#fbbf24" strokeWidth="1" opacity="0.3"/>
              <path d="M100,0 L200,200" stroke="#f59e0b" strokeWidth="1" opacity="0.2"/>
              <circle cx="50" cy="50" r="2" fill="#fbbf24" opacity="0.4"/>
              <circle cx="150" cy="150" r="2" fill="#f59e0b" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-lines)"/>
        </svg>
      </div>
      
      {/* Subtle ambient lighting effects */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Navbar />
      <ScrollArea className="h-screen relative z-10">
        <main className="pt-16">
          {children}
        </main>
      </ScrollArea>
    </div>
  );
};

export default Layout;
