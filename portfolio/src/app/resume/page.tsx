'use client';

import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code, Database, Server, Smartphone } from 'lucide-react';
import Starfield from '../../components/Starfield/Starfield';

const ResumePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const experience = [
    {
      title: "Senior Full-Stack Developer -> Product Owner",
      company: "Business Warrior",
      location: "Lehi, UT",
      period: "2021-2025",
      description: [
        "Promoted from engineer to product owner after leading key platform initiatives in fintech lending.",
        "Designed and shipped a loan servicing platform managing $4M+ in debt across 4 countries.",
        "Built GAAP-compliant ledger system from scratch to support thousands of daily users.",
        "Led globbaly distributed team in a secure microservice environment using Node.js, React, AWS, and PostgreSQL",
        "Integrated third-party panking and payment APIs and delivered analytics dashboards via Looker Studio"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Angular", "MongoDB", "Python"]
    },
    {
      title: "Web Developer",
      company: "Freelance",
      location: "Draper, UT",
      period: "2020-2021",
      description: [
        "Built 8 client websites and web apps using Javascript, React, and Python, adapting quickly to each project's required stack.",
        "Performed functional, security, and performance testing for production readiness",
        "Managed multiple simultaneous projects  with consistent on-time delivery.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Python", "Java"]
    },
    {
      title: "Technical Content Manager",
      company: "ManagerPlus by iOffice",
      location: "Draper, UT",
      period: "2018-2020",
      description: [
        "Authored and maintained technical documentation for asset management software, covering user manuals, API guides, and system architecture documents.",
        "Collaborated with software development teams to ensure accurate and current documentation aligned with the latest software releases.",
        "Balanced customization and compliance issues in software configuration management practices."
      ],
      technologies: ["Javascript", "Wordpress", "PHP", "Adobe Creative Suite"]
    },
    {
      title: "Technical Writer",
      company: "Red Sky",
      location: "Draper, UT",
      period: "2016-2018",
      description: [
        "Authored and edited technical documentation, including user manuals, installation guides, and release notes for software products",
        "Conducted thorough research on complex technical topics to produce clear and concise documentation",
        "Translated complex technical concepts into easily understandable language for non-technical audiences"
      ],
      technologies: ["Javascript", "Wordpress", "Adobe Creative Suite"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computational Linguistics",
      school: "Brigham Young University",
      period: "2014",
      details: [
        "Relevant Coursework: Computational Syntax, Communication Algorythms",
        "Computational Languages: C++, Java, Python",
        "Spoken Languages: English, Spanish, Mandarin"
      ]
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",],
    backend: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "Microservices"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM"],
    tools: ["Git", "Docker", "AWS", "Jenkins", "Jest", "Cypress", "Figma", "JIRA"]
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with admin dashboard, payment processing, and inventory management",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      link: "https://github.com/yourusername/ecommerce"
    },
    {
      name: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates and team features",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      link: "https://github.com/yourusername/taskmanager"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} relative`}>
      {/* Starfield Background */}
      <Starfield darkMode={darkMode} starCount={100} speed={0.3} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} relative`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </a>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="/#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="/#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <span className="text-blue-600 font-medium">Resume</span>
            <a href="/#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-8 mb-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Jason Lee
                </h1>
                <p className="text-xl text-gray-600 mb-4">Technologist, Full-Stack Developer, Team Leader</p>
                <div className={`flex flex-wrap gap-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Colorado Springs, CO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>jason.lee.cultrans@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>(385) 209-4204</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <a href='/JasonCV.pdf' target="_blank" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                  <Download size={20} />
                  PDF
                </a>
                <a href="https://github.com/estorian" target="_blank" className={`p-3 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/jason-lee-31106aa6/" target="_blank" className={`p-3 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Passionate full-stack developer with 5+ years of experience building scalable web applications. 
              Expertise in React, Node.js, and modern JavaScript frameworks. Proven track record of delivering 
              high-quality solutions that drive business growth and enhance user experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-8 mb-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="text-blue-600" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-8 mb-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="text-blue-600" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className={`pb-8 ${index !== experience.length - 1 ? `border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}` : ''}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.location}</p>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0`}>
                      <Calendar size={16} />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {job.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-blue-600" />
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</p>
                  <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Projects */}
            <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="text-blue-600" />
                Key Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <a
                        href={project.link}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;