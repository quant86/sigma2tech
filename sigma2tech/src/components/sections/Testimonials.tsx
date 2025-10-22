import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      position: 'CTO, FinTech Innovations',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'NexusTech transformed our legacy systems into a modern, scalable architecture. Their DevOps implementation reduced our deployment time by 80% and significantly improved our development workflow.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sophia Chen',
      position: 'VP of Engineering, HealthTech Solutions',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Their expertise in cloud migration was instrumental in modernizing our healthcare platform. The team\'s attention to security and compliance was exceptional, giving us confidence throughout the process.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      position: 'Director of IT, Global Retail',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'We partnered with NexusTech to build our e-commerce platform from the ground up. Their engineering team delivered a high-performance solution that has scaled seamlessly with our rapid growth.',
      rating: 4,
    },
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    startSlideTimer();
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);
  
  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000);
  };
  
  const resetSlideTimer = () => {
    startSlideTimer();
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetSlideTimer();
  };
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
    resetSlideTimer();
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
    resetSlideTimer();
  };

  return (
    <section id="testimonials" className="section bg-primary text-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-white after:bg-accent">What Our Clients Say</h2>
          <p className="text-gray-300">
            Hear from businesses that have successfully transformed their technology 
            infrastructure with our solutions.
          </p>
        </div>
        
        {/* Testimonial slider */}
        <div className="relative mt-12 max-w-4xl mx-auto fade-in">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-primary-800 rounded-xl p-8 md:p-10 relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-8 text-accent opacity-30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                      </svg>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                          className="text-accent mr-1"
                          size={18}
                        />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Avatar and details */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-accent text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-accent rounded-full flex items-center justify-center focus:outline-none hover:bg-accent-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-accent rounded-full flex items-center justify-center focus:outline-none hover:bg-accent-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-accent' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Client logos */}
        <div className="mt-16 pt-12 border-t border-primary-700 fade-in">
          <h3 className="text-center text-xl mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="bg-primary-800 w-full h-16 rounded flex items-center justify-center px-4"
              >
                <div className="text-accent font-bold text-center">
                  {index === 0 && 'ACME Corp'}
                  {index === 1 && 'TechGlobal'}
                  {index === 2 && 'NextFin'}
                  {index === 3 && 'HealthPlus'}
                  {index === 4 && 'RetailNow'}
                  {index === 5 && 'EduTech'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;