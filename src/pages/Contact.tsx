
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'joshiaakashhld@gmail.com',
      link: 'mailto:joshiaakashhld@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 9045685738',
      link: 'tel:+919045685738',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Bhimtal, Uttarakhand, India',
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/26Aakash',
      link: 'https://github.com/26Aakash',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/aakash-joshi-8a1a63298',
      link: 'https://www.linkedin.com/in/aakash-joshi-8a1a63298/',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's discuss your project ideas and create something amazing together. I'm always excited to work on innovative solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                    <Send className="w-6 h-6" />
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700/50 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700/50 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500/20"
                        placeholder="Project Discussion"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-cyan-500 focus:ring-cyan-500/20 focus:outline-none resize-none"
                        placeholder="Tell me about your project ideas, requirements, and how I can help you..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 text-lg font-medium shadow-lg shadow-cyan-500/25"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Let's Connect</h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, and innovative ideas. 
                  Whether you're looking for a full-stack developer, need consultation on your project, 
                  or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4">
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Quick Response</h3>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent inquiries, 
                  feel free to call me directly. I'm in the India Standard Time (IST) timezone.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into reality. I'm here to help you build exceptional digital experiences 
              with modern technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
              >
                <a href="mailto:joshiaakashhld@gmail.com">Email Me Directly</a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3"
              >
                <a href="tel:+919045685738">Call Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
