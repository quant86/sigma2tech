import React, { useEffect } from 'react';
import { ArrowRight, Server, Code, GitBranch, Code2 } from 'lucide-react';

const Hero = () => {
  // Animate elements on page load
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Create an observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe each element
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-700 opacity-95 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary rounded-full blur-[140px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white fade-in">
            <div className="mb-6 inline-block px-4 py-1 bg-accent bg-opacity-20 rounded-full">
              <span className="text-accent font-medium text-sm">Innovative Tech Solutions</span>
            </div>
            <h1 className="mb-6">
              Building the Future of <span className="text-accent">Technology</span> Infrastructure
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              We combine software engineering expertise with DevOps excellence to help businesses innovate, scale, and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="flex justify-center fade-in">
            <div className="relative">
              {/* Main circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white bg-opacity-5 rounded-full flex items-center justify-center border border-white border-opacity-10 backdrop-blur-sm">
                <div className="w-52 h-52 md:w-64 md:h-64 bg-primary-600 rounded-full flex items-center justify-center border border-accent border-opacity-40">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-primary-700 rounded-full flex items-center justify-center border border-secondary border-opacity-30 shadow-2xl">
                    <div className="text-accent">
                      <Code2 size={60} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center border border-accent border-opacity-30 animate-float shadow-lg backdrop-blur-sm">
                <Code size={24} className="text-accent" />
              </div>
              
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center border border-secondary border-opacity-30 animate-float shadow-lg backdrop-blur-sm" style={{ animationDelay: '1s' }}>
                <Server size={24} className="text-secondary" />
              </div>
              
              <div className="absolute -bottom-4 right-12 w-16 h-16 bg-primary-100 bg-opacity-10 rounded-full flex items-center justify-center border border-primary-300 border-opacity-30 animate-float shadow-lg backdrop-blur-sm" style={{ animationDelay: '2s' }}>
                <GitBranch size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-12 pt-12 border-t border-white border-opacity-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white fade-in">
          <div>
            <div className="font-bold text-3xl md:text-4xl mb-2 text-accent">250+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="font-bold text-3xl md:text-4xl mb-2 text-accent">50+</div>
            <div className="text-gray-300">Tech Experts</div>
          </div>
          <div>
            <div className="font-bold text-3xl md:text-4xl mb-2 text-accent">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="font-bold text-3xl md:text-4xl mb-2 text-accent">99%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;