import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading development of modern web applications with focus on performance and user experience. Working with cutting-edge technologies and agile methodologies.',
      achievements: [
        'Developed responsive web applications serving thousands of users',
        'Implemented modern UI/UX patterns and accessibility standards',
        'Collaborated with cross-functional teams on product development'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained customer-facing applications in a fast-paced startup environment. Worked closely with design and product teams.',
      achievements: [
        'Built MVP that secured $2M Series A funding',
        'Developed real-time chat feature serving 10K+ concurrent users',
        'Integrated payment systems processing $500K+ monthly'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces for various client projects. Collaborated with designers to implement pixel-perfect designs.',
      achievements: [
        'Delivered 10+ client projects with excellent user feedback',
        'Improved website performance and accessibility standards',
        'Established reusable component libraries'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2017 - 2021',
      honors: 'Dean\'s List',
      relevant: ['Data Structures & Algorithms', 'Web Development', 'Database Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Experience & <span className="hero-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background that shaped my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-8">Professional Experience</h3>
              
              {experiences.map((exp, index) => (
                <motion.div key={exp.title} variants={itemVariants}>
                  <Card className="card-elevated p-6 relative">
                    {/* Timeline connector */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-accent opacity-30"></div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {exp.company.charAt(0)}
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                          <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                            <span className="font-medium">{exp.company}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div>
                          <h5 className="font-semibold mb-2">Key Achievements:</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              {education.map((edu, index) => (
                <Card key={edu.degree} className="card-elevated p-6">
                  <div className="space-y-3">
                    <h4 className="font-bold">{edu.degree}</h4>
                    <div className="text-muted-foreground">
                      <div className="font-medium">{edu.school}</div>
                      <div className="text-sm">{edu.period}</div>
                      {edu.honors && (
                        <Badge variant="secondary" className="mt-2">
                          {edu.honors}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-1">
                        {edu.relevant.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-elevated p-6 text-center">
                <h4 className="font-bold mb-4">Download Resume</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a comprehensive overview of my experience and skills
                </p>
                <Button className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="card-elevated p-6">
                <h4 className="font-bold mb-4">Certifications</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">React Developer Certification</div>
                    <div className="text-muted-foreground">Meta • 2023</div>
                  </div>
                  <div>
                    <div className="font-medium">JavaScript Algorithms</div>
                    <div className="text-muted-foreground">freeCodeCamp • 2022</div>
                  </div>
                  <div>
                    <div className="font-medium">Modern Web Development</div>
                    <div className="text-muted-foreground">Coursera • 2021</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;