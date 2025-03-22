
import { useState } from 'react';
import { Card } from '../ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // In a real application, these could come from an API or CMS
  const projects: Project[] = [
    {
      id: 1,
      title: "Cosmic Dashboard",
      description: "A responsive admin dashboard with dark mode, charts, and data visualization components.",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Space Tracker",
      description: "A web application for tracking celestial objects and space missions with real-time updates.",
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "Redux", "API Integration"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Nebula Social",
      description: "A social media platform designed for astronomy enthusiasts to share discoveries and connect.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Firebase", "Styled Components"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Galaxy Explorer",
      description: "An interactive 3D visualization of our galaxy, allowing users to explore stars and planets.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Three.js", "WebGL", "JavaScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
  ];
  
  // Get unique tags for filtering
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;
  
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cosmic-nebula-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-cosmic-nebula-pink/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-4 inline-block">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore my latest projects—each one a unique digital experience crafted with attention to detail.
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
            All Projects
          </button>
          
          {allTags.map(tag => (
            <button 
              key={tag}
              className={cn(
                "px-4 py-2 rounded-full transition-all",
                filter === tag 
                  ? "bg-cosmic-nebula-blue text-white" 
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="flex flex-col h-full">
              <Card className="flex flex-col h-full overflow-hidden group">
                <div className="relative overflow-hidden mb-4 h-48 -mx-6 -mt-6 rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-background to-transparent opacity-40 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {project.featured && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-cosmic-nebula-pink/90 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex mt-4 space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
