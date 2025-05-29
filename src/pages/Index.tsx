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
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/30">
                🚀 Building the Future with Code
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                  <span className="wave inline-block">👋</span> Hey there!{' '}
                  <br className="hidden md:block" />
                  I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Aakash Joshi
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                    ✨ Crafting Digital Magic ✨
                  </span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>{' '}
                  & Space Tech Enthusiast 🚀
                </h2>
                
                <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                  🎯 Turning caffeine into code and ideas into reality! I'm a passionate B.Tech Computer Science student 
                  who loves building <span className="text-cyan-400 font-semibold">exceptional digital experiences</span>. 
                  From blockchain to AI, I explore the cutting edge of technology while keeping my feet firmly planted 
                  in <span className="text-purple-400 font-semibold">solid engineering principles</span>. 
                  When I'm not coding, you'll find me gazing at the stars! 🌟
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-6 md:px-8 py-3 text-base md:text-lg font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <a href="#portfolio">🎨 View My Work</a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:scale-105 transition-all duration-300"
                  >
                    <a href="#contact">💼 Let's Collaborate</a>
                  </Button>

                  <Button 
                    asChild
                    variant="outline"
                    className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:scale-105 transition-all duration-300"
                  >
                    <a 
                      href="https://drive.google.com/file/d/1aWmQXBpI92NDtCSFLWJ_U6SlYTJnKbOy/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      📄 Download CV
                    </a>
                  </Button>
                </div>
                
                <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
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
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/25"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about technology, space science, and creating innovative solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">My Journey</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and core competencies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-400">Technical Skills</h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-400">Soft Skills</h2>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing my latest projects and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 rounded-full text-xs text-white font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-cyan-400 group-hover:text-cyan-300 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded text-xs text-gray-300 border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
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
      <section id="contact" className="min-h-screen pt-24 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:joshiaakashhld@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        joshiaakashhld@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:9045685738" className="text-gray-300 hover:text-cyan-400 transition-colors">
                        +91 9045685738
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <span className="text-gray-300">Bhimtal, Uttarakhand, India</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4 text-purple-400">Let's Connect</h4>
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

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-cyan-400 flex items-center justify-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Project Discussion"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project or just say hello..."
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 resize-none"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 font-medium flex items-center justify-center gap-2"
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
