
import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <header className="py-4 px-6 flex items-center justify-between border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-xl font-medium">Kuhu</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-gray-600 hover:text-primary transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary transition-colors" />
          </a>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Kuhu</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600">
                Python Developer & Data Scientist
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                I build robust web applications, data analytics solutions, and automation tools using Python and modern technologies.
              </p>
              <div className="flex gap-4 pt-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline">
                  View Resume
                </Button>
              </div>
            </div>
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                <Terminal className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1 space-y-4">
                <p className="text-lg">
                  I'm a passionate Python developer with expertise in web development, data science, and automation. 
                  With 5+ years of experience, I've worked on a variety of projects ranging from enterprise web applications to machine learning models.
                </p>
                <p className="text-lg">
                  My approach to development focuses on creating efficient, maintainable, and scalable solutions. 
                  I'm committed to writing clean code and staying updated with the latest technologies and best practices.
                </p>
                <p className="text-lg">
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new programming paradigms.
                </p>
              </div>
              <div className="flex-1 space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">Education</h3>
                  <p className="text-gray-600">MSc in Computer Science</p>
                  <p className="text-gray-600">University of Technology, 2018-2020</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">Experience</h3>
                  <p className="text-gray-600">Senior Python Developer</p>
                  <p className="text-gray-600">Tech Solutions Inc, 2020-Present</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard 
                title="Python Development" 
                icon={<Code className="h-8 w-8 text-primary" />}
                skills={["Django", "Flask", "FastAPI", "OOP", "Python 3.x"]}
              />
              <SkillCard 
                title="Data Science" 
                icon={<Terminal className="h-8 w-8 text-primary" />}
                skills={["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Data Visualization"]}
              />
              <SkillCard 
                title="Web Technologies" 
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                skills={["HTML/CSS", "JavaScript", "RESTful APIs", "GraphQL", "Microservices"]}
              />
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Data Analysis Dashboard"
                description="A Flask-based web application for visualizing and analyzing large datasets with interactive charts and filtering capabilities."
                technologies={["Python", "Flask", "Pandas", "Plotly", "SQLAlchemy"]}
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard 
                title="Automated Trading Bot"
                description="A Python bot that uses machine learning algorithms to analyze market trends and execute trades automatically based on predefined strategies."
                technologies={["Python", "TensorFlow", "Pandas", "REST APIs", "Docker"]}
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard 
                title="Content Management System"
                description="A Django-based CMS with custom user roles, content workflow, and API integrations for third-party services."
                technologies={["Python", "Django", "PostgreSQL", "Redis", "Celery"]}
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
              <ProjectCard 
                title="Natural Language Processing Tool"
                description="A Python library for text analysis, sentiment detection, and automated summarization using advanced NLP techniques."
                technologies={["Python", "NLTK", "spaCy", "Transformers", "FastAPI"]}
                githubUrl="https://github.com"
                liveUrl="https://example.com"
              />
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-primary hover:underline">
                <Mail className="h-5 w-5" /> contact@example.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
            <Button className="px-8">
              Download Resume
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t bg-white/80 backdrop-blur-sm text-center text-gray-600">
        <p>© {new Date().getFullYear()} Kuhu. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl 
}: { 
  title: string, 
  description: string, 
  technologies: string[], 
  githubUrl: string, 
  liveUrl: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Technologies:</div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default Index;
