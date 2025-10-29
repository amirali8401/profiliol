import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Full stack application with modern technologies and best practices.',
      image: '/placeholder.svg',
      technologies: ['Java', 'Python', 'Django'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Project 2',
      description: 'Android mobile application with robust backend integration.',
      image: '/placeholder.svg',
      technologies: ['Android Studio', 'Java', 'XML'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Project 3',
      description: 'VoIP communication system with Asterisk integration.',
      image: '/placeholder.svg',
      technologies: ['VoIP', 'Asterisk', 'Linux'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Project 4',
      description: 'RESTful API with FastAPI and database management.',
      image: '/placeholder.svg',
      technologies: ['Python', 'FastAPI', 'LiteSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Project 5',
      description: 'Containerized web application with Docker deployment.',
      image: '/placeholder.svg',
      technologies: ['Docker', 'PHP', 'Linux'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Project 6',
      description: 'System programming with C/C++ for high performance.',
      image: '/placeholder.svg',
      technologies: ['C', 'C++', 'Linux'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Project 7',
      description: 'Full stack web application with responsive design.',
      image: '/placeholder.svg',
      technologies: ['HTML', 'CSS', 'Django'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my technical skills and creative problem-solving abilities
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="card-elevated group overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Notable <span className="hero-text">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="card-elevated p-6 h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card className="card-elevated p-8">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights. Check out my GitHub for more projects,
              contributions, and experiments with emerging technologies.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Projects
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
