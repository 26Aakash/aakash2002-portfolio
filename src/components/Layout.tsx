
import { ReactNode } from 'react';
import Navbar from './Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Professional background with enhanced depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-indigo-900/20"></div>
      
      {/* Sophisticated texture overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046%208.954-20%2020-20s20%208.954%2020%2020-8.954%2020-20%2020-20-8.954-20-20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Ambient lighting effects */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
