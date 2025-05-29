
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Download, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import CVSection from '@/components/CVSection';

const Index = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-700' },
    { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
    { name: 'Blockchain/Solidity', level: 70, color: 'from-purple-400 to-purple-600' },
    { name: 'Python', level: 75, color: 'from-blue-500 to-blue-700' },
    { name: 'UI/UX Design', level: 80, color: 'from-pink-400 to-pink-600' },
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
      title: "Food Recipe Sharing Web App",
      description: "A comprehensive MERN stack application that allows users to share, discover, and manage food recipes with features like user authentication, recipe categorization, and social interactions.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: "Full Stack"
    },
    {
      title: "Blockchain-based Smart Land Registry",
      description: "A decentralized application built on Ethereum blockchain for secure and transparent land ownership records management using smart contracts.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
      category: "Blockchain"
    },
    {
      title: "AI-Powered Storytelling for Exoplanets",
      description: "NASA Space Apps Challenge project that uses AI to create engaging stories about exoplanets, making space science accessible to children and students.",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "OpenAI API", "React", "Node.js"],
      category: "AI/ML"
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features including payment integration, inventory management, and responsive design.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      category: "Full Stack"
    },
    {
      title: "Cryptocurrency Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking application with live price updates, portfolio analytics, and market insights.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "CoinGecko API", "Chart.js"],
      category: "FinTech"
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative task management platform with real-time updates, team collaboration features, and intuitive dashboard design.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "Productivity"
    }
  ];

  return (
    <Layout>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
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
                    <a href="#portfolio">View My Work</a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-medium"
                  >
                    <a href="#contact">Hire Me</a>
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
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about technology, space science, and creating innovative solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">My Journey</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm Aakash Joshi, a passionate B.Tech Computer Science Engineering student at Birla Institute of Applied Sciences (BIAS), Bhimtal. 
                  My journey in technology began with a deep curiosity about how things work, which evolved into a comprehensive understanding of 
                  modern web technologies, blockchain, and AI applications.
                </p>
                <p className="text-lg">
                  With a strong foundation in both frontend and backend development, I specialize in creating exceptional digital experiences 
                  using the MERN stack. My academic background in Electronics and Communication Engineering provides me with a unique perspective 
                  on problem-solving and system design.
                </p>
                <p className="text-lg">
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              Educational <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Background</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg">
                        {edu.icon}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                    <CardTitle className="text-cyan-400 text-lg">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">{edu.institution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and core competencies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Technical Skills</h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-gray-800" />
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
              <h2 className="text-3xl font-bold mb-8 text-purple-400">Soft Skills</h2>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-gray-800" />
                      <div 
                        className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 transition-all duration-1000 ease-out"
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
      <section id="portfolio" className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing my latest projects and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 rounded-full text-xs text-white font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded text-xs text-gray-300 border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss your next project or collaboration opportunity
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">joshiaakashhld@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">+91 9045685738</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">Bhimtal, Uttarakhand, India</span>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
              </p>
              <div className="flex gap-4">
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
              </div>
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
