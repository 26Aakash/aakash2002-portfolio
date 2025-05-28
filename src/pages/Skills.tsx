
import Layout from '@/components/Layout';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
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

  const categories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+']
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Database & Storage',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'IPFS']
    },
    {
      title: 'Blockchain & Web3',
      icon: '⛓️',
      skills: ['Ethereum', 'Solidity', 'Smart Contracts', 'DApps', 'Web3.js', 'MetaMask']
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'OpenAI APIs', 'Data Analysis']
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technology <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-cyan-400">
                      <span className="text-2xl">{category.icon}</span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-sm text-gray-300 border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
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

export default Skills;
