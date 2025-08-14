'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, Palette, Brain, Building, Braces, Ampersand, Rocket, MountainSnow } from 'lucide-react';
import Starfield from '@/components/Starfield/Starfield';
import Navigation from '@/components/Navigation/Navigation';

const Portfolio = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const roles = ['Full-Stack Developer', 'TypeScript Expert', 'Database Architect', 'Product Owner', 'FinTech Expert', 'Data Analyst', 'Your Next Specialist'];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const skills = [
    { name: 'Frontend', icon: Code, color: 'text-blue-500', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Angular'] },
    { name: 'Backend', icon: Server, color: 'text-green-500', items: ['Node.js', 'Python', 'Next.js', 'REST API', 'AWS'] },
    { name: 'Management', icon: Brain, color: 'text-purple-500', items: ['Product Ownership', 'Agile', 'JIRA', 'Confluence'] },
    { name: 'Industries', icon: Building , color: 'text-pink-500', items: ['FinTech', 'Asset Management', 'Marketing'] },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-br from-blue-400 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-br from-green-400 to-blue-500'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts, real-time metrics, and customizable reports for business intelligence.',
      tech: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      image: 'bg-gradient-to-br from-orange-400 to-red-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <link rel='icon' href='favicon-16x16.png'/>
      <Starfield darkMode={darkMode}/>
      <Navigation darkMode ={darkMode} setDarkMode={setDarkMode}/>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <MountainSnow size={150}/>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
             Jason Lee
            </span>
          </h1>
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I am a Full-stack engineer and product owner with 6+ years of experience in fintech and healthtech. I build scalable web platforms using React, 
            Node.js, and PostgreSQL using a strong background in system design, API development, and GAAP-compliant financial systems. I am known for bridging technical and business 
            teams to deliver user-focused, secure solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-50'}`}
            >
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Estorian/" target="_blank" className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jason-lee-31106aa6/" target="_blank" className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:jason.lee.cultrans@gmail.com" className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}>
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="opacity-50" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800/90' : 'bg-gray-50/90'} relative z-10 backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-900 hover:shadow-gray-900/50' : 'bg-white hover:shadow-gray-300/50'}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color.includes('blue') ? 'from-blue-500 to-blue-600' : skill.color.includes('green') ? 'from-green-500 to-green-600' : skill.color.includes('purple') ? 'from-purple-500 to-purple-600' : 'from-pink-500 to-pink-600'} flex items-center justify-center mb-4`}>
                  <skill.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <div className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'} inline-block mr-2 mb-2`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-gray-800 hover:shadow-gray-900/50' : 'bg-white hover:shadow-gray-300/50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className={`h-48 ${project.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Braces size={32} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/90' : 'bg-gray-50/90'} relative z-10 backdrop-blur-sm`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:jason.lee.cultrans@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Jason Lee. Built with Next.js, React, and TypeScript.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;