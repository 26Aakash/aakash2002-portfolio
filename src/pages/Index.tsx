
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Download, GraduationCap, Calendar, MapPin, Send, User, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import CVSection from '@/components/CVSection';

const Index = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 85, color: 'from-yellow-500 to-orange-600' },
    { name: 'Node.js', level: 80, color: 'from-orange-400 to-yellow-500' },
    { name: 'MongoDB', level: 75, color: 'from-yellow-400 to-orange-500' },
    { name: 'Express.js', level: 80, color: 'from-orange-500 to-yellow-600' },
    { name: 'Blockchain/Solidity', level: 70, color: 'from-yellow-500 to-orange-500' },
    { name: 'Python', level: 75, color: 'from-orange-400 to-yellow-500' },
    { name: 'UI/UX Design', level: 80, color: 'from-yellow-400 to-orange-600' },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Leadership', level: 85 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Critical Thinking', level: 90 },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Birla Institute of Applied Sciences (BIAS), Bhimtal",
      year: "Expected 2026",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Technical Institute",
      year: "2022",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Secondary Education",
      institution: "K.V. Convent Sr. Sec. School",
      year: "2019",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const projects = [
    {
      title: "College Tips Gallery",
      description: "A comprehensive web gallery showcasing college tips, resources, and guidance for students. Features an intuitive interface with organized content to help students navigate their academic journey effectively.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/26Aakash",
      live: "http://127.0.0.1:5500/index.html",
      category: "Web Development"
    },
    {
      title: "Food Recipe Sharing Web App",
      description: "A comprehensive MERN stack application that allows users to share, discover, and manage food recipes with features like user authentication, recipe categorization, and social interactions.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Blockchain-based Smart Land Registry",
      description: "A decentralized application built on Ethereum blockchain for secure and transparent land ownership records management using smart contracts.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
      github: "#",
      live: "#",
      category: "Blockchain"
    },
    {
      title: "AI-Powered Storytelling for Exoplanets",
      description: "NASA Space Apps Challenge project that uses AI to create engaging stories about exoplanets, making space science accessible to children and students.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenAI API", "React", "Node.js"],
      github: "#",
      live: "#",
      category: "AI/ML"
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features including payment integration, inventory management, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Cryptocurrency Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking application with live price updates, portfolio analytics, and market insights.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "CoinGecko API", "Chart.js"],
      github: "#",
      live: "#",
      category: "FinTech"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <Layout>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
        {/* Much darker background */}
        <div className="absolute inset-0">
          {/* Primary dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Very subtle yellow/orange geometric elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-500/8 to-orange-600/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-orange-500/8 to-yellow-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-500/6 to-orange-600/6 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          {/* Geometric line patterns with lower opacity */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="opacity-15">
              <g stroke="#fbbf24" strokeWidth="1" fill="none">
                <path d="M0,200 Q400,50 800,200" opacity="0.4"/>
                <path d="M200,0 Q600,300 1000,100" opacity="0.3"/>
                <path d="M0,400 Q500,200 1000,400" opacity="0.2"/>
              </g>
              <g fill="#f59e0b" opacity="0.4">
                <circle cx="100" cy="100" r="3"/>
                <circle cx="300" cy="150" r="2"/>
                <circle cx="500" cy="80" r="3"/>
                <circle cx="700" cy="200" r="2"/>
                <circle cx="900" cy="120" r="3"/>
              </g>
            </svg>
          </div>
          
          {/* Floating elements with reduced opacity */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-full text-yellow-300 text-sm font-medium mb-6 border border-yellow-500/30 backdrop-blur-sm shadow-lg">
                🔥 Welcome to My Portfolio
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  <span className="wave inline-block">👋</span> Hello I'm{' '}
                  <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                    Aakash Joshi
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light">
                    a passionate full stack developer ✨
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                    A Passionate Full Stack Web Developer
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
                  Specializing in building exceptional digital experiences. 
                  Proficient in both frontend and backend development, with a 
                  strong foundation in modern web technologies and best practices. 🚀
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold border-0 px-6 md:px-8 py-3 text-base md:text-lg shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <a href="#portfolio">Download Resume</a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-yellow-500/70 text-yellow-400 hover:bg-yellow-500/10 px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:scale-105 transition-all duration-300"
                  >
                    <a href="#contact">Hire Me</a>
                  </Button>
                </div>
                
                <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
                  <a 
                    href="https://github.com/26Aakash" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800/70 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-600/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50"
                  >
                    <Github className="w-6 h-6 text-slate-400 hover:text-yellow-400" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aakash-joshi-8a1a63298/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800/70 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-600/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50"
                  >
                    <Linkedin className="w-6 h-6 text-slate-400 hover:text-yellow-400" />
                  </a>
                  <a 
                    href="mailto:joshiaakashhld@gmail.com"
                    className="p-3 rounded-full bg-slate-800/70 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-600/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50"
                  >
                    <Mail className="w-6 h-6 text-slate-400 hover:text-yellow-400" />
                  </a>
                  <a 
                    href="tel:9045685738"
                    className="p-3 rounded-full bg-slate-800/70 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-600/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50"
                  >
                    <Phone className="w-6 h-6 text-slate-400 hover:text-yellow-400" />
                  </a>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Enhanced yellow/orange glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 rounded-full blur-2xl opacity-60 animate-pulse scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-xl opacity-40 animate-pulse scale-105 delay-300"></div>
                  
                  {/* Profile image with yellow border */}
                  <img 
                    src="https://i.postimg.cc/bYgHyFQD/pic-1.jpg"
                    alt="Aakash Joshi"
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-yellow-500/70 shadow-2xl shadow-yellow-500/25 transition-transform duration-300 hover:scale-105"
                  />
                  
                  {/* Floating elements with yellow/orange theme */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-700"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full animate-bounce delay-1000"></div>
                  <div className="absolute top-1/4 -left-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-yellow-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-orange-500/8 to-transparent rounded-full blur-3xl"></div>
          
          {/* Professional geometric pattern with lower opacity */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2030c0-3.314-2.686-6-6-6s-6%202.686-6%206%202.686%206%206%206%206-2.686%206-6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Passionate about technology, innovation, and creating solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">My Journey</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  I'm Aakash Joshi, a passionate B.Tech Computer Science Engineering student at Birla Institute of Applied Sciences (BIAS), Bhimtal. 
                  My journey in technology began with a deep curiosity about how things work, which evolved into a comprehensive understanding of 
                  modern web technologies, blockchain, and AI applications.
                </p>
                <p className="text-base md:text-lg">
                  With a strong foundation in both frontend and backend development, I specialize in creating exceptional digital experiences 
                  using the MERN stack. My academic background in Electronics and Communication Engineering provides me with a unique perspective 
                  on problem-solving and system design.
                </p>
                <p className="text-base md:text-lg">
                  Beyond coding, I have a deep fascination with space science and astronomy, which drives my interest in developing 
                  AI-powered educational applications that make complex scientific concepts accessible to everyone.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <CVSection />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Educational <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Background</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-lg">
                        {edu.icon}
                      </div>
                      <div className="flex items-center text-sm text-slate-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                    <CardTitle className="text-yellow-400 text-lg">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                      <p className="text-slate-300 text-sm">{edu.institution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen pt-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/50 to-black/80"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-500/8 to-orange-500/8 rounded-full blur-2xl animate-pulse delay-200"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/8 to-yellow-500/8 rounded-full blur-2xl animate-pulse delay-700"></div>
          
          {/* Professional hexagon pattern with very low opacity */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M40%2020L20%2040l20%2020%2020-20-20-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-15"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and core competencies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400">Technical Skills</h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-slate-800" />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-orange-400">Soft Skills</h2>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-slate-800" />
                      <div 
                        className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen pt-24 px-4 relative overflow-hidden">
        {/* Much darker background for Portfolio section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80"></div>
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-yellow-500/6 to-orange-500/6 rounded-full blur-3xl animate-pulse delay-400"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-orange-500/6 to-yellow-500/6 rounded-full blur-3xl animate-pulse delay-900"></div>
          
          {/* Professional tech pattern with very low opacity */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M0%200h20v20H0v20h20V20h20V0H20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-15"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Showcasing my latest projects and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 group backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/80 to-orange-600/80 rounded-full text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-yellow-400 group-hover:text-yellow-300 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded text-xs text-slate-300 border border-yellow-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-24 px-4 pb-8 relative overflow-hidden">
        {/* Very dark background for Contact section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/60 to-black/80"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-500/8 to-yellow-500/8 rounded-full blur-3xl animate-pulse delay-600"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/8 to-orange-500/8 rounded-full blur-3xl animate-pulse delay-1200"></div>
          
          {/* Professional circuit pattern with very low opacity */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M30%200v30H0v30h30V30h30V0H30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-12"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-12">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-800/40 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-lg">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a href="mailto:joshiaakashhld@gmail.com" className="text-slate-300 hover:text-yellow-400 transition-colors">
                        joshiaakashhld@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-800/40 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-lg">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <a href="tel:9045685738" className="text-slate-300 hover:text-yellow-400 transition-colors">
                        +91 9045685738
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-800/40 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <span className="text-slate-300">Bhimtal, Uttarakhand, India</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-orange-400">Let's Connect</h4>
                  <p className="text-slate-300 mb-6">
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/26Aakash" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-600/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50"
                    >
                      <Github className="w-6 h-6 text-slate-400 hover:text-yellow-400" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/aakash-joshi-8a1a63298/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800/50 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-600/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-700/50"
                    >
                      <Linkedin className="w-6 h-6 text-slate-400 hover:text-yellow-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-yellow-400 flex items-center justify-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-yellow-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-yellow-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Project Discussion"
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-yellow-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project or just say hello..."
                        className="bg-slate-900/50 border-slate-600 text-white placeholder-slate-400 focus:border-yellow-500 resize-none"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black py-3 font-bold flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
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

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
