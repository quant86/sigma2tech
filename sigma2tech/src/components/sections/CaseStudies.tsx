import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: 'Cloud Migration for FinTech Platform',
      category: 'cloud',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Successfully migrated a legacy financial platform to AWS, resulting in 40% cost reduction and improved scalability.',
      tags: ['AWS', 'Docker', 'Terraform', 'Microservices'],
    },
    {
      id: 2,
      title: 'E-commerce Platform Optimization',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Rebuilt a high-traffic e-commerce platform with optimized architecture, resulting in 3x faster load times.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
    },
    {
      id: 3,
      title: 'DevOps Pipeline for Healthcare App',
      category: 'devops',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Implemented CI/CD pipeline for a healthcare application, reducing deployment time by 75%.',
      tags: ['Jenkins', 'Kubernetes', 'GitOps', 'Prometheus'],
    },
    {
      id: 4,
      title: 'IoT Platform for Smart Manufacturing',
      category: 'iot',
      image: 'https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Developed an IoT platform that processes data from thousands of sensors in real-time.',
      tags: ['Kafka', 'Elasticsearch', 'Python', 'Time Series DB'],
    },
    {
      id: 5,
      title: 'Microservices Migration for Media Company',
      category: 'cloud',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Transformed a monolithic media application into a scalable microservices architecture.',
      tags: ['Kubernetes', 'gRPC', 'API Gateway', 'GCP'],
    },
    {
      id: 6,
      title: 'Security Implementation for Banking System',
      category: 'devops',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Enhanced security infrastructure for a banking system with advanced threat detection.',
      tags: ['OAuth 2.0', 'Vault', 'WAF', 'SIEM'],
    },
  ];
  
  // Filter categories for the tabs
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cloud', label: 'Cloud Migration' },
    { id: 'devops', label: 'DevOps' },
    { id: 'web', label: 'Web Development' },
    { id: 'iot', label: 'IoT Solutions' },
  ];
  
  // Filter case studies based on active tab
  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeTab);

  return (
    <section id="case-studies" className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-primary">Case Studies</h2>
          <p>
            Explore our portfolio of successful projects that have helped businesses transform their technological capabilities.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex overflow-x-auto mb-10 pb-2 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className="card overflow-hidden group fade-in hover:translate-y-[-5px]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                
                {/* Tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {study.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-2xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 3 && (
                    <span className="text-2xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
                      +{study.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-accent font-medium group-hover:underline"
                >
                  <span>View Case Study</span>
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;