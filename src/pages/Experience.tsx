
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Full-Stack Web Developer Intern',
      company: 'Ernst & Young Global',
      duration: 'Feb 2025 - Mar 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Working on enterprise-level web applications using modern technologies. Collaborating with senior developers to build scalable solutions and gain exposure to professional development practices.',
      achievements: [
        'Developed responsive web components using React.js',
        'Collaborated on backend API development with Node.js',
        'Participated in code reviews and agile development processes',
        'Gained experience with enterprise-level project management'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git'],
      status: 'upcoming'
    },
    {
      position: 'Blockchain Developer Intern',
      company: 'VOIS (Vodafone Intelligent Solutions)',
      duration: 'Jan 2025 - Feb 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Focused on blockchain technology implementation and smart contract development. Working on innovative solutions for telecommunications industry using distributed ledger technology.',
      achievements: [
        'Developed smart contracts using Solidity',
        'Implemented blockchain solutions for data integrity',
        'Collaborated on DApp development projects',
        'Learned enterprise blockchain architecture patterns'
      ],
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'JavaScript', 'Git'],
      status: 'upcoming'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Birla Institute of Applied Sciences (BIAS), Bhimtal',
      duration: '2022 - 2026 (Expected)',
      location: 'Bhimtal, Uttarakhand',
      description: 'Pursuing comprehensive education in computer science with focus on software development, algorithms, data structures, and emerging technologies.',
      highlights: [
        'Strong foundation in programming and software engineering',
        'Active participation in coding competitions',
        'Leadership roles in technical societies',
        'Sports representation at institute level'
      ]
    },
    {
      degree: 'Diploma in Electronics and Communication Engineering',
      institution: 'Technical Institute',
      duration: '2020 - 2022',
      location: 'India',
      description: 'Comprehensive study of electronics and communication systems, providing strong technical foundation and problem-solving skills.',
      highlights: [
        'Excellent academic performance',
        'Hands-on experience with electronic systems',
        'Strong mathematical and analytical skills foundation',
        'Project-based learning approach'
      ]
    }
  ];

  const achievements = [
    {
      title: 'NASA Space Apps Challenge Participant',
      year: '2024',
      description: 'Developed AI-Powered Storytelling App for Exoplanet Exploration',
      icon: '🚀'
    },
    {
      title: 'Sports Representative',
      year: '2023-2024',
      description: 'Represented institute in various sports competitions',
      icon: '🏆'
    },
    {
      title: 'Technical Leadership',
      year: '2023-Present',
      description: 'Leading technical teams and mentoring junior students',
      icon: '👨‍💼'
    },
    {
      title: 'Open Source Contributor',
      year: '2023-Present',
      description: 'Active contributor to various open source projects',
      icon: '💻'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Work <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey, educational background, and key achievements
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-cyan-400 mb-2">{exp.position}</CardTitle>
                        <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          exp.status === 'upcoming' 
                            ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {exp.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                        <span className="px-3 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-sm text-gray-300 border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400 mb-2">{edu.degree}</CardTitle>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                      <Building className="w-4 h-4" />
                      {edu.institution}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-cyan-400">{achievement.title}</h3>
                          <span className="text-sm text-gray-400">{achievement.year}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
