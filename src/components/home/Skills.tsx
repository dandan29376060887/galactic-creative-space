
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
  color: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
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
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];
  
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-cosmic-nebula-blue/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The tools and technologies I've mastered on my journey through the digital cosmos.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={cn(
              "px-4 py-2 rounded-full transition-all",
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
                "px-4 py-2 rounded-full transition-all",
                activeCategory === category.id 
                  ? "bg-cosmic-nebula-blue text-white" 
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Desktop view - Orbit visualization */}
        <div className="hidden lg:block relative w-full h-[500px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full cosmic-gradient flex items-center justify-center z-10">
            <span className="text-white font-semibold">Skills</span>
          </div>
          
          {filteredSkills.map((skill, index) => {
            const angle = (index * (360 / filteredSkills.length)) * (Math.PI / 180);
            const radius = 200;
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div 
                key={skill.id}
                className="absolute flex items-center justify-center glass-card p-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  background: `linear-gradient(45deg, ${skill.color}33, ${skill.color}22)`,
                  border: `1px solid ${skill.color}55`,
                  animation: `orbit ${15 + Math.random() * 5}s linear infinite${index % 2 === 0 ? '' : ' reverse'}`,
                  animationDelay: `-${index}s`
                }}
              >
                <div className="text-center">
                  <p className="text-white font-medium whitespace-nowrap">{skill.name}</p>
                  <div className="mt-1 w-full bg-white/20 rounded-full h-1">
                    <div 
                      className="h-1 rounded-full" 
                      style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile view - Skill bars */}
        <div className="lg:hidden space-y-6">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="glass-card p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-white/70">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full transition-all duration-1000" 
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
