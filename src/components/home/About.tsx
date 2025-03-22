
import { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { User, Mail, MapPin, Calendar, ExternalLink, Award, BookOpen, Briefcase, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.75;
      
      if (isInView) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Check initially in case section is already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmic-nebula-pink/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cosmic-nebula-blue/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Cosmic Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get to know the person behind the code - my story, skills, and what drives me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Photo with animation */}
          <div className={cn(
            "order-2 md:order-1 flex justify-center transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full cosmic-gradient animate-pulse-slow"></div>
              {/* Photo container */}
              <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-cosmic-background">
                <div className="w-full h-full bg-cosmic-nebula-blue/20 flex items-center justify-center">
                  <User size={80} className="text-white/50" />
                  {/* Replace the User icon with your photo */}
                  {/* <img 
                    src="/path-to-your-photo.jpg" 
                    alt="Your Name" 
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>
              
              {/* Floating stars */}
              <div className="absolute -top-4 -right-2 w-6 h-6 cosmic-gradient rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-5 -left-3 w-4 h-4 cosmic-gradient rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-4 w-3 h-3 cosmic-gradient rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* About Info with animation */}
          <div className={cn(
            "order-1 md:order-2 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">John Doe</h3>
              <h4 className="text-xl font-medium text-cosmic-nebula-pink mb-6 typing-text">
                Cosmic Developer & Designer
              </h4>
              
              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  I'm a passionate web developer with expertise in modern frontend technologies. 
                  With a strong foundation in React, TypeScript and UI/UX design, I create 
                  engaging digital experiences that combine aesthetics with functionality.
                </p>
                
                <p className="leading-relaxed">
                  My journey in tech started with a curiosity about how things work, which evolved into 
                  a career building applications that help businesses succeed in the digital universe.
                </p>
                
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Name</p>
                      <p>John Doe</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <p>john@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Location</p>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center">
                      <Briefcase size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Experience</p>
                      <p>5+ Years</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10">
                    <Coffee size={16} className="text-cosmic-nebula-pink" />
                    <span>Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10">
                    <BookOpen size={16} className="text-cosmic-nebula-blue" />
                    <span>Lifelong Learner</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10">
                    <Award size={16} className="text-cosmic-planet-teal" />
                    <span>Problem Solver</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-nebula-blue/20 hover:bg-cosmic-nebula-blue/30 transition-colors text-cosmic-nebula-blue"
                  >
                    <span>View Resume</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating stars */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </section>
  );
}
