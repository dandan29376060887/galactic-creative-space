
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Server, Image, Shield } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  color: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.75;
      
      if (isInView) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const skills: Skill[] = [
    { id: 1, name: 'React', level: 95, category: 'frontend', color: '#61DAFB' },
    { id: 2, name: 'TypeScript', level: 90, category: 'frontend', color: '#3178C6' },
    { id: 3, name: 'Tailwind CSS', level: 95, category: 'frontend', color: '#38B2AC' },
    { id: 4, name: 'Next.js', level: 85, category: 'frontend', color: '#000000' },
    { id: 5, name: 'Node.js', level: 80, category: 'backend', color: '#339933' },
    { id: 6, name: 'Express', level: 85, category: 'backend', color: '#000000' },
    { id: 7, name: 'MongoDB', level: 75, category: 'backend', color: '#47A248' },
    { id: 8, name: 'PostgreSQL', level: 70, category: 'backend', color: '#336791' },
    { id: 9, name: 'Figma', level: 85, category: 'design', color: '#F24E1E' },
    { id: 10, name: 'Adobe XD', level: 75, category: 'design', color: '#FF61F6' },
    { id: 11, name: 'Git', level: 90, category: 'other', color: '#F05032' },
    { id: 12, name: 'Docker', level: 70, category: 'other', color: '#2496ED' },
  ];
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;
  
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'design', name: 'Design', icon: Image },
    { id: 'other', name: 'Other', icon: Shield },
  ];
  
  return (
    <section id="skills" className="min-h-screen py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-cosmic-nebula-blue/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The tools and technologies I've mastered on my journey through the digital cosmos.
          </p>
        </div>
        
        <div className={cn(
          "flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <button 
            className={cn(
              "px-4 py-2 rounded-full transition-all flex items-center gap-2",
              activeCategory === null 
                ? "bg-cosmic-nebula-blue text-white" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            )}
            onClick={() => setActiveCategory(null)}
          >
            All Skills
          </button>
          
          {categories.map(category => (
            <button 
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full transition-all flex items-center gap-2",
                activeCategory === category.id 
                  ? "bg-cosmic-nebula-blue text-white" 
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon size={16} />
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills visualization with uploaded image */}
        <div className={cn(
          "relative w-full h-[600px] transition-all duration-1000 delay-400",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/e050f112-27fa-46c0-8fe0-76bcb461f28b.png"
              alt="Skills constellation"
              className={cn(
                "w-full max-w-4xl h-auto transition-all duration-2000",
                isVisible ? "animate-pulse" : ""
              )}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))',
                animation: isVisible ? 'floating 6s ease-in-out infinite' : 'none'
              }}
            />
          </div>
          
          {/* Floating particles around the image */}
          {isVisible && [...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cosmic-comet-blue opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Mobile view - Simplified skill list */}
        <div className="lg:hidden mt-12 space-y-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.id} 
              className={cn(
                "glass-card p-4 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-white/70">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full transition-all duration-1000" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%', 
                    backgroundColor: skill.color 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
