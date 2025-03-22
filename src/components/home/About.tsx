
import { useState } from 'react';
import { Card } from '../ui/card';
import { User, Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
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
          {/* Profile Photo */}
          <div className="order-2 md:order-1 flex justify-center">
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
          
          {/* About Info */}
          <div className="order-1 md:order-2">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Cosmic Developer</h3>
              
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
                      <Calendar size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Experience</p>
                      <p>5+ Years</p>
                    </div>
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
    </section>
  );
}
