
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Custom Web App Development',
      description: 'Full-stack web applications built with the MERN stack, featuring responsive design, robust backend architecture, and seamless user experiences.',
      icon: '🌐',
      features: [
        'React.js Frontend Development',
        'Node.js & Express.js Backend',
        'MongoDB Database Design',
        'RESTful API Development',
        'Authentication & Authorization',
        'Deployment & DevOps'
      ],
      price: 'Starting from $2,000',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing user interfaces designed with modern design principles and user-centered approach.',
      icon: '🎨',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design',
        'Figma/Adobe XD Design',
        'Design System Creation'
      ],
      price: 'Starting from $800',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Cutting-edge blockchain applications including smart contracts, DApps, and Web3 integrations for secure and transparent solutions.',
      icon: '⛓️',
      features: [
        'Smart Contract Development',
        'DApp Creation',
        'Ethereum Integration',
        'IPFS Implementation',
        'Web3.js Integration',
        'Blockchain Consulting'
      ],
      price: 'Starting from $3,000',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure backend systems with robust API architecture, database optimization, and cloud deployment.',
      icon: '⚙️',
      features: [
        'API Development & Integration',
        'Database Design & Optimization',
        'Server Architecture',
        'Cloud Deployment (AWS/Vercel)',
        'Security Implementation',
        'Performance Optimization'
      ],
      price: 'Starting from $1,500',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI-Powered Applications',
      description: 'Innovative AI solutions including educational storytelling platforms, data analysis tools, and machine learning integrations.',
      icon: '🤖',
      features: [
        'Machine Learning Integration',
        'Natural Language Processing',
        'AI-Powered Features',
        'Data Analysis & Visualization',
        'Educational AI Tools',
        'OpenAI API Integration'
      ],
      price: 'Starting from $2,500',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Technical Consultation',
      description: 'Expert guidance on technology stack selection, architecture planning, and project strategy for optimal development outcomes.',
      icon: '💡',
      features: [
        'Technology Stack Consultation',
        'Architecture Planning',
        'Code Review & Optimization',
        'Performance Auditing',
        'Security Assessment',
        'Project Strategy'
      ],
      price: 'Starting from $150/hour',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive development solutions tailored to bring your ideas to life with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-20`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <div>
                      <CardTitle className="text-cyan-400 text-xl">{service.title}</CardTitle>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 transition-all duration-300`}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. I'm here to help bring your vision to life 
              with modern technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3"
              >
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
