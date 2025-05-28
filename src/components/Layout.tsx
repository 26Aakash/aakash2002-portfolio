
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
