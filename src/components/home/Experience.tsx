
import { useState } from 'react';
import { Card } from '../ui/card';
import { Briefcase, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Suspense, lazy } from 'react';

interface ExperienceItem {
  id: number;
  year: string;
  company: string;
  title: string;
  description: string;
  skills: string[];
}

export default function Experience() {
  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      year: '2023 - Present',
      company: 'Tech Innovations Inc.',
      title: 'Senior Developer',
      description: 'Leading a team of developers to create cutting-edge web applications with modern frontend technologies.',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: 2,
      year: '2021 - 2023',
      company: 'Digital Solutions Co.',
      title: 'Frontend Developer',
      description: 'Designed and built responsive web applications using React and modern CSS techniques.',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX']
    },
    {
      id: 3,
      year: '2019 - 2021',
      company: 'Creative Web Labs',
      title: 'Junior Developer',
      description: 'Developed and maintained responsive websites and implemented UI components for various clients.',
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }
  ];
  
  return (
    <section id="experience" className="py-24 px-6 relative">
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
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experienceItems.map((item) => (
            <div key={item.id} className="group">
              <Card className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:transform hover:translate-y-[-8px] hover:shadow-2xl">
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
                      <Star size={10} className="text-cosmic-nebula-pink" />
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
