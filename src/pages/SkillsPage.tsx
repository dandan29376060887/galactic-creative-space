
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code, Server, Image, Shield, Zap, Rocket, Star } from 'lucide-react';
import StarBackground from '@/components/ui/StarBackground';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  color: string;
  icon?: React.ElementType;
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const skills: Skill[] = [
    { id: 1, name: 'React', level: 95, category: 'frontend', color: '#61DAFB', icon: Code },
    { id: 2, name: 'TypeScript', level: 90, category: 'frontend', color: '#3178C6', icon: Code },
    { id: 3, name: 'Tailwind CSS', level: 95, category: 'frontend', color: '#38B2AC', icon: Code },
    { id: 4, name: 'Next.js', level: 85, category: 'frontend', color: '#000000', icon: Rocket },
    { id: 5, name: 'Node.js', level: 80, category: 'backend', color: '#339933', icon: Server },
    { id: 6, name: 'Express', level: 85, category: 'backend', color: '#000000', icon: Server },
    { id: 7, name: 'MongoDB', level: 75, category: 'backend', color: '#47A248', icon: Server },
    { id: 8, name: 'PostgreSQL', level: 70, category: 'backend', color: '#336791', icon: Server },
    { id: 9, name: 'Figma', level: 85, category: 'design', color: '#F24E1E', icon: Image },
    { id: 10, name: 'Adobe XD', level: 75, category: 'design', color: '#FF61F6', icon: Image },
    { id: 11, name: 'Git', level: 90, category: 'other', color: '#F05032', icon: Shield },
    { id: 12, name: 'Docker', level: 70, category: 'other', color: '#2496ED', icon: Shield },
  ];
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;
  
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Code, count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: Server, count: skills.filter(s => s.category === 'backend').length },
    { id: 'design', name: 'Design', icon: Image, count: skills.filter(s => s.category === 'design').length },
    { id: 'other', name: 'Other', icon: Shield, count: skills.filter(s => s.category === 'other').length },
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
                <Zap className="inline mr-2" size={16} />
                My Arsenal
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient">
              Skills & Technologies
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              The cosmic tools and technologies I've mastered on my journey through the digital universe
            </p>
          </div>

          {/* Enhanced Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button 
              className={cn(
                "px-6 py-3 rounded-full transition-all flex items-center gap-3 group relative overflow-hidden",
                activeCategory === null 
                  ? "bg-cosmic-nebula-blue text-white shadow-glow scale-105" 
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105"
              )}
              onClick={() => setActiveCategory(null)}
            >
              <Star size={20} />
              <span className="font-medium">All Skills</span>
              <span className="px-2 py-1 rounded-full bg-white/20 text-xs">{skills.length}</span>
            </button>
            
            {categories.map(category => (
              <button 
                key={category.id}
                className={cn(
                  "px-6 py-3 rounded-full transition-all flex items-center gap-3 group relative overflow-hidden",
                  activeCategory === category.id 
                    ? "bg-cosmic-nebula-blue text-white shadow-glow scale-105" 
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105"
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon size={20} />
                <span className="font-medium">{category.name}</span>
                <span className="px-2 py-1 rounded-full bg-white/20 text-xs">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <Card 
                key={skill.id}
                className={cn(
                  "glass-card p-6 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Animated background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(45deg, ${skill.color}33, ${skill.color}11)` 
                  }}
                />

                {/* Skill Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center relative"
                    style={{ backgroundColor: `${skill.color}22` }}
                  >
                    {skill.icon && (
                      <skill.icon 
                        size={24} 
                        style={{ color: skill.color }}
                        className={cn(
                          "transition-transform duration-300",
                          hoveredSkill === skill.id ? "scale-110 rotate-12" : ""
                        )}
                      />
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{skill.level}%</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={12} 
                          className={cn(
                            "transition-colors duration-300",
                            i < Math.floor(skill.level / 20) 
                              ? "text-cosmic-nebula-blue fill-current" 
                              : "text-white/20"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>

                {/* Enhanced Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}66`
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Floating particles when hovered */}
                  {hoveredSkill === skill.id && (
                    <div className="absolute -top-2 left-0 w-full h-8 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full animate-bounce"
                          style={{
                            backgroundColor: skill.color,
                            left: `${20 + i * 25}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '1s'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mt-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm capitalize">
                    {skill.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={cn(
            "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ animationDelay: '0.8s' }}>
            <Card className="glass-card p-6 text-center">
              <div className="w-16 h-16 cosmic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Frontend Expert</h3>
              <p className="text-white/70">Modern React, TypeScript, and CSS frameworks</p>
            </Card>

            <Card className="glass-card p-6 text-center">
              <div className="w-16 h-16 cosmic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Server size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Backend Development</h3>
              <p className="text-white/70">Node.js, databases, and API development</p>
            </Card>

            <Card className="glass-card p-6 text-center">
              <div className="w-16 h-16 cosmic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Always Learning</h3>
              <p className="text-white/70">Constantly exploring new technologies and trends</p>
            </Card>
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
