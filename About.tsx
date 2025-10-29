import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Photo */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <Card className="card-elevated p-6 text-center">
              <div className="relative inline-block">
                <img
                  src={profilePhoto}
                  alt="Amirali"
                  className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
              </div>
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                About <span className="hero-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with expertise in creating 
                digital solutions that bridge the gap between design and functionality. My journey 
                began with a curiosity for technology and evolved into a dedication to building 
                products that solve real-world problems and enhance user experiences.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, and continuously learning about the latest industry trends. 
                I believe in the power of clean code, thoughtful architecture, and user-centered design.
              </p>
              
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring 
                that every project not only meets functional requirements but also delivers an 
                exceptional and intuitive user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <Card className="card-elevated p-4 text-center">
                <div className="text-2xl font-bold hero-text">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              
              <Card className="card-elevated p-4 text-center">
                <div className="text-2xl font-bold hero-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;