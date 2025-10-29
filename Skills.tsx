import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Zap 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'XML'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Python', 'Django', 'FastAPI', 'PHP', 'Java', 'LiteSQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['Android Studio'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'DevOps & Infrastructure',
      skills: ['Docker', 'Linux', 'Git'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'PHP'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'VoIP & Telephony',
      skills: ['VoIP', 'Asterisk'],
      color: 'from-green-500 to-emerald-500'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Skills & <span className="hero-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="card-elevated p-6 h-full group hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="card-elevated p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 hero-text">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              methodologies, and best practices to deliver cutting-edge solutions. Currently diving 
              deep into AI/ML integration, Web3 technologies, and advanced system architecture.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;