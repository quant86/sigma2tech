import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
      console.error('Send Error:', error);
    }
  };
  
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-primary">Contact Us</h2>
          <p>
            Ready to transform your technology infrastructure? Get in touch with 
            our team of experts to discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Contact info */}
          <div className="order-2 lg:order-1 fade-in">
            <div className="bg-primary text-white rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="mb-8 text-gray-300">
                  Have questions about our services? Need a custom solution for your 
                  business? Our team is ready to help you navigate your technology challenges.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent bg-opacity-20 p-3 rounded-full flex-shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Our Location</h4>
                      <p className="text-gray-300">123 Tech Boulevard, San Francisco, CA 94158</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent bg-opacity-20 p-3 rounded-full flex-shrink-0">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <p className="text-gray-300">info@nexustech.com</p>
                      <p className="text-gray-300">support@nexustech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent bg-opacity-20 p-3 rounded-full flex-shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <p className="text-gray-300">(555) 123-4567</p>
                      <p className="text-gray-300">(555) 987-6543</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-primary-600">
                  <h4 className="font-medium mb-4">Business Hours</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative h-64">
                <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
                {/* Map placeholder - replace with actual map in production */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/244130/pexels-photo-244130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Map location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="order-1 lg:order-2 fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-success-50 border border-success-200 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={48} className="text-success" />
                  </div>
                  <h4 className="text-xl font-semibold text-success-700 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-success-600">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                          formErrors.name ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-error">{formErrors.name}</p>
                      )}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                          formErrors.email ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-error">{formErrors.email}</p>
                      )}
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    {/* Company */}
                    <div>
                      <label 
                        htmlFor="company" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  {/* Service */}
                  <div className="mb-6">
                    <label 
                      htmlFor="service" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                        formErrors.service ? 'border-error' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Engineering</option>
                      <option value="devops">DevOps Implementation</option>
                      <option value="cloud">Cloud Migration</option>
                      <option value="cicd">CI/CD Pipeline</option>
                      <option value="database">Database Optimization</option>
                      <option value="microservices">Microservices Architecture</option>
                      <option value="other">Other</option>
                    </select>
                    {formErrors.service && (
                      <p className="mt-1 text-sm text-error">{formErrors.service}</p>
                    )}
                  </div>
                  
                  {/* Message */}
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                        formErrors.message ? 'border-error' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project and requirements..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-error">{formErrors.message}</p>
                    )}
                  </div>
                  
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;