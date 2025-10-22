import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah has over 15 years of experience in software architecture and engineering leadership.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Chen',
      position: 'DevOps Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael specializes in implementing CI/CD pipelines and cloud infrastructure automation.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Jessica Rodriguez',
      position: 'Senior Software Engineer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Jessica has deep expertise in building scalable microservices and distributed systems.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'David Park',
      position: 'Cloud Architecture Specialist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'David helps businesses design and implement optimal cloud infrastructure on AWS, Azure, and GCP.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="team" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-primary">Our Team</h2>
          <p>
            Meet our team of experienced engineers and technology specialists 
            who are passionate about delivering exceptional solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="card overflow-hidden group fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Social media overlay */}
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <a 
                    href={member.social.linkedin} 
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-primary group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team stats section */}
        <div className="mt-16 bg-primary rounded-2xl overflow-hidden shadow-xl fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-3 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-semibold mb-4">
                We're a Team of Passionate Technologists
              </h3>
              <p className="mb-6 text-gray-300">
                Our diverse team brings together decades of combined experience across 
                various industries and technology stacks. We're united by our passion 
                for creating innovative solutions that drive business growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium mb-2">Our Expertise</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Full-stack development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Cloud architecture
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      DevOps & CI/CD
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Microservices
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Security implementation
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Our Approach</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Agile methodology
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Client-centered solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Continuous improvement
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Quality-driven development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Knowledge sharing
                    </li>
                  </ul>
                </div>
              </div>
              
              <a href="#contact" className="btn-primary bg-accent">
                Join Our Team
              </a>
            </div>
            
            <div className="col-span-2 hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary to-transparent opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;