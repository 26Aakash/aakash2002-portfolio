
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Food Recipe Sharing Web App',
      description: 'A full-stack web application built with MERN stack that allows users to share, discover, and save their favorite recipes. Features include user authentication, recipe categorization, ratings, and social sharing.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Cloudinary'],
      github: '#',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Blockchain-based Smart Land Registry',
      description: 'An innovative blockchain solution for land registry management using Ethereum smart contracts. Features immutable property records, secure ownership transfers, and IPFS integration for document storage.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'IPFS', 'React', 'MetaMask'],
      github: '#',
      live: '#',
      category: 'Blockchain'
    },
    {
      title: 'AI-Powered Storytelling for Exoplanets',
      description: 'NASA Space Apps Challenge project featuring an AI-powered storytelling application that makes exoplanet exploration engaging and educational. Uses machine learning to generate interactive narratives about space discoveries.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'NASA APIs', 'OpenAI', 'Node.js'],
      github: '#',
      live: '#',
      category: 'AI/ML'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced features including real-time inventory management, payment processing, order tracking, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      github: '#',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Cryptocurrency Portfolio Tracker',
      description: 'A real-time cryptocurrency portfolio tracking application with advanced analytics, price alerts, and market insights. Features beautiful charts and portfolio performance metrics.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop',
      technologies: ['React', 'Chart.js', 'CoinGecko API', 'Firebase', 'Material-UI'],
      github: '#',
      live: '#',
      category: 'Blockchain'
    },
    {
      title: 'Task Management Dashboard',
      description: 'A comprehensive project management tool with team collaboration features, task tracking, time management, and progress analytics. Built with modern UI/UX principles.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      github: '#',
      live: '#',
      category: 'Full Stack'
    }
  ];

  const categories = ['All', 'Full Stack', 'Blockchain', 'AI/ML'];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcase of my recent projects and technical achievements
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 bg-gray-800/50 p-2 rounded-lg border border-gray-700">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 rounded-full text-xs font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-md text-xs text-gray-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
            <Button 
              asChild
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
            >
              <a href="https://github.com/26Aakash" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
