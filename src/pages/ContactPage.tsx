
import { useState, useEffect } from 'react';
import { Send, Mail, MapPin, Phone, MessageCircle, Clock, Globe, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import StarBackground from '@/components/ui/StarBackground';
import GlowingButton from '@/components/ui/GlowingButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
        projectType: ''
      });
      
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ahmed@cosmicdev.com',
      description: 'Send me an email anytime',
      href: 'mailto:ahmed@cosmicdev.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Cairo, Egypt',
      description: 'Available for remote work worldwide',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'I typically respond within a day',
      href: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#', color: '#333' },
    { name: 'LinkedIn', href: '#', color: '#0077B5' },
    { name: 'Twitter', href: '#', color: '#1DA1F2' },
    { name: 'Instagram', href: '#', color: '#E4405F' },
    { name: 'Dribbble', href: '#', color: '#EA4C89' }
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Site',
    'Portfolio Website',
    'Dashboard/Admin Panel',
    'Landing Page',
    'API Development',
    'Other'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s Discuss'
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      
      <div className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          )}>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-4 cosmic-gradient rounded-full blur-lg opacity-30 animate-pulse"></div>
              <span className="relative px-4 py-2 rounded-full bg-white/10 text-sm text-white/80 backdrop-blur-md">
                <MessageCircle className="inline mr-2" size={16} />
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient">
              Let's Create Something Amazing
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology and stunning design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className={cn(
              "lg:col-span-2 space-y-6 transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Rocket className="mr-3 text-cosmic-nebula-blue" size={24} />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{info.title}</h4>
                        <p className="text-cosmic-nebula-blue font-medium">{info.value}</p>
                        <p className="text-white/60 text-sm">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-white font-medium mb-4 flex items-center">
                    <Globe className="mr-2" size={16} />
                    Connect With Me
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.href} 
                        className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                        style={{ '--hover-color': social.color } as any}
                      >
                        <span className="text-white group-hover:scale-110 transition-transform">
                          {social.name.charAt(0)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-green-300 font-medium">Available for new projects</span>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Enhanced Contact Form */}
            <div className={cn(
              "lg:col-span-3 transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )} style={{ animationDelay: '0.3s' }}>
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Send className="mr-3 text-cosmic-nebula-pink" size={24} />
                  Send Me a Message
                </h3>
                
                {submitResult && (
                  <div className={cn(
                    "p-4 mb-6 rounded-lg border animate-fade-in",
                    submitResult.success 
                      ? 'bg-green-500/20 text-green-200 border-green-500/30' 
                      : 'bg-red-500/20 text-red-200 border-red-500/30'
                  )}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                      {submitResult.message}
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2 font-medium">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2 font-medium">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-white/70 mb-2 font-medium">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type} className="bg-cosmic-background">{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-white/70 mb-2 font-medium">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range} className="bg-cosmic-background">{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/70 mb-2 font-medium">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all"
                      placeholder="Project Inquiry / Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-2 font-medium">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-white/70 mb-2 font-medium">Project Timeline</label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 focus:border-transparent transition-all"
                      placeholder="e.g., 2-3 months, ASAP, Flexible"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <GlowingButton 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full justify-center py-4 text-lg"
                      variant="primary"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={20} className="mr-3" />
                          Send Message
                        </span>
                      )}
                    </GlowingButton>
                  </div>
                </form>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={cn(
            "mt-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Quick answers to common questions about working together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary depending on complexity, but most projects take 2-8 weeks from start to finish."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in React, TypeScript, Node.js, and modern web technologies for full-stack development."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, I offer maintenance and support packages to keep your application running smoothly."
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.1,
            animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}
