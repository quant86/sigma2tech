import React from 'react';
import { Code2, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 size={24} className="text-accent" />
              <span className="font-bold text-xl">NexusTech</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Transforming businesses through cutting-edge software engineering and DevOps solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">Software Engineering</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">DevOps Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">Cloud Migration</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">CI/CD Implementation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">Microservices Architecture</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-300 hover:text-accent transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-accent transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Tech Boulevard, San Francisco, CA 94158</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">info@nexustech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {year} NexusTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;