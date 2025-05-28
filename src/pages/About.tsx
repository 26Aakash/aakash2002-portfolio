
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
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

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
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
                  AI-powered educational applications that make complex scientific concepts accessible to everyone. I believe in blending 
                  creativity with discipline to create technological solutions that have a meaningful impact.
                </p>
                <p className="text-lg">
                  As a leader and sports enthusiast, I've learned the importance of teamwork, perseverance, and strategic thinking - 
                  qualities that I bring to every project I work on.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">What Drives Me</h2>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg border border-cyan-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Innovation & Technology</h3>
                  <p className="text-gray-300">
                    I'm passionate about staying at the forefront of technological advancement, constantly learning and 
                    experimenting with new tools and frameworks to build better solutions.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Space Science</h3>
                  <p className="text-gray-300">
                    My fascination with space exploration and astronomy inspires me to create educational applications 
                    that make complex scientific concepts accessible and engaging.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Problem Solving</h3>
                  <p className="text-gray-300">
                    I enjoy tackling complex challenges and finding elegant solutions through careful analysis, 
                    creative thinking, and systematic implementation.
                  </p>
                </div>
              </div>
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
      </div>
    </Layout>
  );
};

export default About;
