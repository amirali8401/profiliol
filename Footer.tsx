import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold hero-text mb-2">Amirali Habashi</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Amirali Habashi. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> and React
            </span>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mx-auto"
            aria-label="Back to top"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;