
import { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/card';
import { Briefcase, Star, Trophy, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: number;
  year: string;
  company: string;
  title: string;
  description: string;
  skills: string[];
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [starRotation, setStarRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll animation for timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is visible
      const visiblePortion = Math.max(0, Math.min(windowHeight - rect.top, element.offsetHeight));
      const visibleRatio = visiblePortion / element.offsetHeight;
      
      setAnimationProgress(Math.min(100, visibleRatio * 150));
      
      // Calculate star rotation based on scroll
      setStarRotation(visibleRatio * 720); // 2 full rotations

      // Update active experience item based on scroll
      const experienceItems = document.querySelectorAll('[data-experience-item]');
      experienceItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top <= windowHeight * 0.6 && itemRect.bottom >= windowHeight * 0.4) {
          setActiveIndex(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      year: '2023 - Present',
      company: 'Tech Innovations Inc.',
      title: 'Senior Developer',
      description: 'Leading a team of developers to create cutting-edge web applications with modern frontend technologies. Implementing advanced UI patterns and optimizing application performance.',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL']
    },
    {
      id: 2,
      year: '2021 - 2023',
      company: 'Digital Solutions Co.',
      title: 'Frontend Developer',
      description: 'Designed and built responsive web applications using React and modern CSS techniques. Collaborated with UX designers to implement pixel-perfect interfaces and animations.',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX', 'Tailwind']
    },
    {
      id: 3,
      year: '2019 - 2021',
      company: 'Creative Web Labs',
      title: 'Junior Developer',
      description: 'Developed and maintained responsive websites and implemented UI components for various clients. Worked with international teams to deliver high-quality web solutions.',
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Best Developer Award 2023',
      description: 'Recognized for exceptional contribution to product development and team leadership.',
      icon: Trophy
    },
    {
      id: 2,
      title: 'Speaker at ReactConf 2022',
      description: 'Presented advanced React patterns and performance optimization techniques.',
      icon: Award
    },
    {
      id: 3,
      title: 'Open Source Contributor',
      description: 'Active contributor to several popular open-source projects with over 50 merged PRs.',
      icon: Star
    },
    {
      id: 4,
      title: 'Hackathon Winner 2021',
      description: 'Led a team to victory in the annual tech innovation hackathon.',
      icon: Award
    },
    {
      id: 5,
      title: 'Certified Cloud Architect',
      description: 'Achieved professional certification in cloud architecture and deployment.',
      icon: Trophy
    }
  ];
  
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Animated stars that move along the timeline */}
      <div className="absolute left-4 md:left-1/2 top-1/3 bottom-1/3 w-px">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full cosmic-gradient"
            style={{
              top: `${(i * 10) % 100}%`,
              left: '-3px',
              opacity: 0.6 + (i % 4 * 0.1),
              transform: `translateY(${animationProgress - (i * 20)}px)`,
              transition: 'transform 0.5s ease-out',
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
            Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My career path through the tech universe, showcasing the companies and roles that have shaped my expertise.
          </p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-nebula-blue/20 via-cosmic-nebula-pink/50 to-cosmic-deep-purple/30">
            <div 
              className="absolute top-0 left-0 w-full bg-cosmic-gradient"
              style={{ 
                height: `${animationProgress}%`, 
                transition: 'height 0.5s ease-out',
                boxShadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)'
              }}
            ></div>
          </div>
          
          <div className="space-y-12">
            {experienceItems.map((item, index) => (
              <div 
                key={item.id}
                data-experience-item
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center transition-all duration-500",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  activeIndex === index ? "scale-105" : "scale-100 opacity-80"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center transform -translate-x-1/2 z-10 shadow-glow">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={cn(
                  "md:w-1/2 ml-12 md:ml-0",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}>
                  <Card className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-glow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-cosmic-nebula-blue/20 text-cosmic-nebula-blue text-sm">
                        {item.year}
                      </span>
                      <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center">
                        <Briefcase size={18} className="text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <h4 className="text-md text-cosmic-nebula-pink mb-3">{item.company}</h4>
                    <p className="text-white/70 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full flex items-center gap-1"
                        >
                          <Star 
                            size={10} 
                            className="text-cosmic-nebula-pink transition-transform duration-300"
                            style={{ 
                              transform: activeIndex === index ? `rotate(${starRotation}deg)` : 'rotate(0deg)'
                            }}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section with Enhanced Visuals */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
              Recognition
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.id} 
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-glow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center mr-4 animate-pulse-glow">
                    <achievement.icon 
                      size={24} 
                      className="text-white animate-spin-slow"
                      style={{ 
                        animationDuration: `${5 + index}s`
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                </div>
                <p className="text-white/70">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add floating stars in background */}
      {[...Array(25)].map((_, i) => (
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
