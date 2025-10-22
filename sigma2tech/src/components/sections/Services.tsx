import React from 'react';
import { 
  Code2, 
  Server, 
  Cloud, 
  GitMerge, 
  Database,
  LayoutGrid,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  // Service items
  const services = [
    {
      icon: <Code2 size={32} className="text-accent" />,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that perfectly align with your business requirements and objectives.',
    },
    {
      icon: <Server size={32} className="text-accent" />,
      title: 'DevOps Implementation',
      description: 'Streamline your development processes with automated CI/CD pipelines and infrastructure as code.',
    },
    {
      icon: <Cloud size={32} className="text-accent" />,
      title: 'Cloud Migration & Optimization',
      description: 'Migrate your applications to the cloud and optimize your infrastructure for performance and cost.',
    },
    {
      icon: <GitMerge size={32} className="text-accent" />,
      title: 'CI/CD Pipeline Development',
      description: 'Implement robust continuous integration and delivery pipelines to accelerate your software delivery.',
    },
    {
      icon: <Database size={32} className="text-accent" />,
      title: 'Database Design & Optimization',
      description: 'Design scalable database architectures and optimize performance for high-traffic applications.',
    },
    {
      icon: <LayoutGrid size={32} className="text-accent" />,
      title: 'Microservices Architecture',
      description: 'Transform monolithic applications into flexible, scalable microservices architectures.',
    },
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: 'Security Implementation',
      description: 'Implement robust security practices throughout your software development lifecycle.',
    },
    {
      icon: <TrendingUp size={32} className="text-accent" />,
      title: 'Performance Optimization',
      description: 'Optimize your applications for maximum performance, speed, and reliability.',
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-primary">Our Services</h2>
          <p>
            We deliver end-to-end software engineering and DevOps solutions 
            to help businesses innovate and scale efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card p-6 hover:bg-primary hover:text-white group transition-all duration-300 fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 inline-block bg-primary-50 rounded-lg group-hover:bg-white group-hover:bg-opacity-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional service information */}
        <div className="mt-16 bg-primary text-white rounded-2xl overflow-hidden shadow-xl fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold mb-4">End-to-End Technology Solutions</h3>
              <p className="mb-6 text-gray-300">
                Our comprehensive approach covers everything from initial planning and 
                architecture design to development, deployment, and ongoing maintenance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Discovery & Planning</h4>
                    <p className="text-gray-300 text-sm">We analyze your requirements and create a comprehensive project roadmap.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Development & Testing</h4>
                    <p className="text-gray-300 text-sm">Our engineers build and rigorously test your solution to ensure quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Deployment & Integration</h4>
                    <p className="text-gray-300 text-sm">We implement DevOps practices for seamless deployment and integration.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Maintenance & Optimization</h4>
                    <p className="text-gray-300 text-sm">We provide ongoing support to ensure your solution continues to perform optimally.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="btn-primary bg-white text-primary hover:bg-accent hover:text-white">
                  Discuss Your Project
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-90"></div>
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Engineers working" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;