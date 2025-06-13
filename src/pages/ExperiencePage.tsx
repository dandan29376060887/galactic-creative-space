
import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Star, Trophy, Award, Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import StarBackground from '@/components/ui/StarBackground';

interface ExperienceItem {
  id: number;
  year: string;
  company: string;
  title: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'work' | 'education' | 'certification';
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  year: string;
  category: string;
}

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<'all' | 'work' | 'education' | 'certification'>('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      year: '2023 - Present',
      company: 'Tech Innovations Inc.',
      title: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      description: 'Leading a team of 8 developers to create cutting-edge web applications with modern technologies. Implementing advanced UI patterns and optimizing application performance for enterprise-level solutions.',
      achievements: [
        'Increased application performance by 40%',
        'Led migration to microservices architecture',
        'Mentored 5 junior developers'
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      type: 'work'
    },
    {
      id: 2,
      year: '2021 - 2023',
      company: 'Digital Solutions Co.',
      title: 'Frontend Developer',
      location: 'New York, NY',
      description: 'Designed and built responsive web applications using React and modern CSS techniques. Collaborated with UX designers to implement pixel-perfect interfaces and animations.',
      achievements: [
        'Delivered 15+ successful projects',
        'Improved user engagement by 60%',
        'Implemented design system adoption'
      ],
      skills: ['React', 'JavaScript', 'CSS', 'Figma', 'Git'],
      type: 'work'
    },
    {
      id: 3,
      year: '2019 - 2021',
      company: 'Creative Web Labs',
      title: 'Junior Developer',
      location: 'Boston, MA',
      description: 'Developed and maintained responsive websites and implemented UI components for various clients. Worked with international teams to deliver high-quality web solutions.',
      achievements: [
        'Completed 25+ client projects',
        'Maintained 99.9% uptime',
        'Reduced loading times by 30%'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
      type: 'work'
    },
    {
      id: 4,
      year: '2018 - 2019',
      company: 'Stanford University',
      title: 'Computer Science Degree',
      location: 'Stanford, CA',
      description: 'Completed Bachelor of Science in Computer Science with focus on web technologies and software engineering principles.',
      achievements: [
        'Graduated Magna Cum Laude',
        'Dean\'s List for 3 semesters',
        'Led student tech club'
      ],
      skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Databases'],
      type: 'education'
    },
    {
      id: 5,
      year: '2023',
      company: 'AWS',
      title: 'AWS Solutions Architect',
      location: 'Online',
      description: 'Professional certification in cloud architecture and deployment strategies.',
      achievements: [
        'Scored 950/1000 on exam',
        'Completed hands-on labs',
        'Cloud architecture expertise'
      ],
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Security'],
      type: 'certification'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Best Developer Award 2023',
      description: 'Recognized for exceptional contribution to product development and team leadership.',
      icon: Trophy,
      year: '2023',
      category: 'Achievement'
    },
    {
      id: 2,
      title: 'Speaker at ReactConf 2022',
      description: 'Presented advanced React patterns and performance optimization techniques.',
      icon: Award,
      year: '2022',
      category: 'Speaking'
    },
    {
      id: 3,
      title: 'Open Source Contributor',
      description: 'Active contributor to several popular open-source projects with over 100 merged PRs.',
      icon: Star,
      year: '2021-2023',
      category: 'Community'
    },
    {
      id: 4,
      title: 'Hackathon Winner 2021',
      description: 'Led a team to victory in the annual tech innovation hackathon.',
      icon: Award,
      year: '2021',
      category: 'Competition'
    }
  ];

  const filteredExperience = selectedType === 'all' 
    ? experienceItems 
    : experienceItems.filter(item => item.type === selectedType);

  const typeStats = {
    all: experienceItems.length,
    work: experienceItems.filter(item => item.type === 'work').length,
    education: experienceItems.filter(item => item.type === 'education').length,
    certification: experienceItems.filter(item => item.type === 'certification').length
  };

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
                <Briefcase className="inline mr-2" size={16} />
                Career Journey
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient">
              Professional Experience
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              My journey through the tech universe, showcasing the companies, roles, and achievements that have shaped my expertise
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Experience', icon: Star },
              { id: 'work', label: 'Work', icon: Briefcase },
              { id: 'education', label: 'Education', icon: Award },
              { id: 'certification', label: 'Certifications', icon: Trophy }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as any)}
                className={cn(
                  "px-6 py-3 rounded-full transition-all flex items-center gap-3 group",
                  selectedType === type.id
                    ? "bg-cosmic-nebula-blue text-white shadow-glow scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105"
                )}
              >
                <type.icon size={18} />
                <span className="font-medium">{type.label}</span>
                <span className="px-2 py-1 rounded-full bg-white/20 text-xs">
                  {typeStats[type.id as keyof typeof typeStats]}
                </span>
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mb-20" ref={timelineRef}>
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-nebula-blue/20 via-cosmic-nebula-pink/50 to-cosmic-deep-purple/30">
              <div className="absolute top-0 left-0 w-full h-full bg-cosmic-gradient animate-pulse-slow opacity-60"></div>
            </div>
            
            <div className="space-y-12">
              {filteredExperience.map((item, index) => (
                <div 
                  key={item.id}
                  className={cn(
                    "relative flex flex-col md:flex-row md:items-start transition-all duration-500",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                    isVisible ? "animate-fade-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center transform -translate-x-1/2 z-10 shadow-glow">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={cn(
                    "md:w-1/2 ml-16 md:ml-0",
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  )}>
                    <Card className="p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-nebula-blue to-cosmic-nebula-pink"></div>
                      </div>

                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={cn(
                          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
                          item.type === 'work' ? "bg-cosmic-nebula-blue/20 text-cosmic-nebula-blue" :
                          item.type === 'education' ? "bg-cosmic-nebula-pink/20 text-cosmic-nebula-pink" :
                          "bg-cosmic-planet-teal/20 text-cosmic-planet-teal"
                        )}>
                          {item.type === 'work' && <Briefcase size={14} />}
                          {item.type === 'education' && <Award size={14} />}
                          {item.type === 'certification' && <Trophy size={14} />}
                          {item.year}
                        </span>
                        
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cosmic-nebula-blue transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-lg text-cosmic-nebula-pink mb-4 font-medium">{item.company}</h4>
                      <p className="text-white/70 mb-6 leading-relaxed">{item.description}</p>
                      
                      {/* Achievements */}
                      {item.achievements.length > 0 && (
                        <div className="mb-6">
                          <h5 className="text-white font-medium mb-3 flex items-center gap-2">
                            <TrendingUp size={16} className="text-cosmic-nebula-blue" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-white/70">
                                <div className="w-2 h-2 rounded-full cosmic-gradient mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full transition-all duration-300 hover:bg-cosmic-nebula-blue/30 hover:text-white cursor-pointer"
                          >
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

          {/* Achievements Section */}
          <div className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recognition & Awards</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Milestones and recognitions that mark my journey in the tech industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.id} 
                  className={cn(
                    "p-6 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden",
                    isVisible ? "animate-fade-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cosmic-nebula-blue/5 to-cosmic-nebula-pink/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="w-16 h-16 rounded-full cosmic-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cosmic-nebula-blue transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">{achievement.description}</p>
                  
                  <div className="flex items-center justify-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {achievement.year}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-white/10">
                      {achievement.category}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      {[...Array(30)].map((_, i) => (
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
