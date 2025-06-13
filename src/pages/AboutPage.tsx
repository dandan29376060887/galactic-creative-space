
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { User, Mail, MapPin, Briefcase, ExternalLink, Award, BookOpen, Coffee, Rocket, Download, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import StarBackground from '@/components/ui/StarBackground';
import GlowingButton from '@/components/ui/GlowingButton';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Ahmed Hassan' },
    { icon: Mail, label: 'Email', value: 'ahmed@example.com' },
    { icon: MapPin, label: 'Location', value: 'Cairo, Egypt' },
    { icon: Briefcase, label: 'Experience', value: '5+ Years' }
  ];

  const interests = [
    { icon: Coffee, label: 'Coffee Enthusiast', color: 'text-cosmic-nebula-pink' },
    { icon: BookOpen, label: 'Lifelong Learner', color: 'text-cosmic-nebula-blue' },
    { icon: Award, label: 'Problem Solver', color: 'text-cosmic-planet-teal' },
    { icon: Rocket, label: 'Space Explorer', color: 'text-cosmic-comet-blue' }
  ];

  const achievements = [
    '5+ Years of Professional Development',
    '50+ Successful Projects Delivered',
    '15+ Technologies Mastered',
    '10+ Awards & Recognitions'
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      
      <div className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with enhanced animation */}
          <div className={cn(
            "text-center mb-16 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          )}>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-4 cosmic-gradient rounded-full blur-lg opacity-30 animate-pulse"></div>
              <span className="relative px-4 py-2 rounded-full bg-white/10 text-sm text-white/80 backdrop-blur-md">
                <Rocket className="inline mr-2" size={16} />
                About Me
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient animate-fade-in">
              My Cosmic Journey
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Exploring the universe of code, design, and innovation. Discover the story behind the developer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Section */}
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <Card className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 cosmic-gradient rounded-full blur-3xl opacity-20"></div>
                
                {/* Profile Photo */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full cosmic-gradient animate-spin-slow"></div>
                  <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-cosmic-background">
                    <div className="w-full h-full bg-cosmic-nebula-blue/20 flex items-center justify-center relative">
                      <User size={80} className="text-white/50" />
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 cosmic-gradient rounded-full opacity-60 animate-bounce"></div>
                      <div className="absolute bottom-4 -left-3 w-6 h-6 cosmic-gradient rounded-full opacity-60 animate-pulse"></div>
                      <div className="absolute top-1/2 -right-4 w-4 h-4 cosmic-gradient rounded-full opacity-60 animate-ping"></div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Ahmed Hassan</h2>
                  <p className="text-xl text-cosmic-nebula-pink mb-4">Cosmic Developer & Designer</p>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-cosmic-nebula-blue fill-current" />
                    ))}
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                  <div className="flex bg-white/5 rounded-full p-1">
                    {[
                      { id: 'personal', label: 'Personal' },
                      { id: 'interests', label: 'Interests' },
                      { id: 'achievements', label: 'Achievements' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "px-6 py-2 rounded-full transition-all duration-300",
                          activeTab === tab.id
                            ? "bg-cosmic-nebula-blue text-white shadow-glow"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[200px]">
                  {activeTab === 'personal' && (
                    <div className="space-y-4 animate-fade-in">
                      {personalInfo.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center">
                            <item.icon size={18} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-white/60">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'interests' && (
                    <div className="grid grid-cols-2 gap-4 animate-fade-in">
                      {interests.map((interest, index) => (
                        <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                          <interest.icon size={32} className={cn("mb-2", interest.color)} />
                          <p className="text-white text-sm text-center">{interest.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'achievements' && (
                    <div className="space-y-3 animate-fade-in">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-2 h-2 rounded-full cosmic-gradient"></div>
                          <p className="text-white/80">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-8">
                  <GlowingButton variant="primary" className="flex-1">
                    <Download size={18} className="mr-2" />
                    Download CV
                  </GlowingButton>
                  <GlowingButton variant="outline" className="flex-1">
                    <ExternalLink size={18} className="mr-2" />
                    Portfolio
                  </GlowingButton>
                </div>
              </Card>
            </div>

            {/* Story Section */}
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )} style={{ animationDelay: '0.3s' }}>
              <Card className="glass-card p-8 h-full relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 cosmic-gradient rounded-full blur-3xl opacity-20"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Rocket className="mr-3 text-cosmic-nebula-pink" size={24} />
                  My Story
                </h3>
                
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    Welcome to my cosmic journey! I'm a passionate developer who believes that 
                    code is the language of the future. My adventure began with curiosity about 
                    how digital worlds are created, which evolved into a deep love for crafting 
                    exceptional user experiences.
                  </p>
                  
                  <p>
                    With over 5 years of experience navigating the vast universe of web development, 
                    I've had the privilege of working with cutting-edge technologies and collaborating 
                    with amazing teams to bring innovative ideas to life.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe 
                    in the power of technology to solve real-world problems and create meaningful 
                    connections between people.
                  </p>
                  
                  <div className="bg-white/5 rounded-lg p-4 border-l-4 border-cosmic-nebula-blue">
                    <p className="text-cosmic-nebula-blue font-medium mb-2">Mission Statement</p>
                    <p className="text-white/70 italic">
                      "To create digital experiences that inspire, engage, and empower users while 
                      pushing the boundaries of what's possible in web development."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {[...Array(20)].map((_, i) => (
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
    </div>
  );
}
