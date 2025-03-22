
import { useState } from 'react';
import { Card } from '../ui/card';
import { Briefcase, GraduationCap, Award, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'education' | 'experience' | 'achievement';
}

export default function About() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      year: '2023',
      title: 'Senior Developer',
      description: 'Led the development of a cutting-edge SaaS platform, implementing modern web technologies and best practices.',
      icon: Briefcase,
      category: 'experience'
    },
    {
      id: 2,
      year: '2022',
      title: 'Master\'s Degree in Computer Science',
      description: 'Graduated with honors, specializing in web technologies and user experience design.',
      icon: GraduationCap,
      category: 'education'
    },
    {
      id: 3,
      year: '2021',
      title: 'Frontend Developer',
      description: 'Designed and built responsive web applications using React and modern CSS techniques.',
      icon: Briefcase,
      category: 'experience'
    },
    {
      id: 4,
      year: '2020',
      title: 'Developer Hackathon Winner',
      description: 'First place in the annual developer hackathon for creating an innovative accessibility solution.',
      icon: Award,
      category: 'achievement'
    },
    {
      id: 5,
      year: '2019',
      title: 'Bachelor\'s Degree in Design',
      description: 'Graduated with a focus on UI/UX design and web development fundamentals.',
      icon: GraduationCap,
      category: 'education'
    },
  ];
  
  const filteredItems = filter 
    ? timelineItems.filter(item => item.category === filter)
    : timelineItems;
  
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Cosmic Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore the timeline of my professional journey through the digital universe.
            From education to work experience and achievements.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={cn(
              "px-4 py-2 rounded-full transition-all",
              filter === null 
                ? "bg-cosmic-nebula-blue text-white" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            )}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          <button 
            className={cn(
              "px-4 py-2 rounded-full transition-all",
              filter === 'education' 
                ? "bg-cosmic-nebula-blue text-white" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            )}
            onClick={() => setFilter('education')}
          >
            Education
          </button>
          <button 
            className={cn(
              "px-4 py-2 rounded-full transition-all",
              filter === 'experience' 
                ? "bg-cosmic-nebula-blue text-white" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            )}
            onClick={() => setFilter('experience')}
          >
            Experience
          </button>
          <button 
            className={cn(
              "px-4 py-2 rounded-full transition-all",
              filter === 'achievement' 
                ? "bg-cosmic-nebula-blue text-white" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            )}
            onClick={() => setFilter('achievement')}
          >
            Achievements
          </button>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full cosmic-gradient flex items-center justify-center transform -translate-x-1/2 z-10">
                  <item.icon size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={cn(
                  "md:w-1/2 ml-12 md:ml-0",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}>
                  <Card className="h-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
