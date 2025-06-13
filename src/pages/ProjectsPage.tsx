
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ExternalLink, Github, Star, Eye, Code2, Rocket, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import StarBackground from '@/components/ui/StarBackground';
import GlowingButton from '@/components/ui/GlowingButton';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  stars: number;
  views: number;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Cosmic Dashboard",
      description: "A responsive admin dashboard with dark mode, charts, and data visualization components.",
      longDescription: "An advanced admin dashboard built with React and TypeScript, featuring real-time data visualization, responsive design, and a beautiful dark theme. Includes advanced charts, user management, and analytics.",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      stars: 234,
      views: 1200
    },
    {
      id: 2,
      title: "Space Tracker",
      description: "A web application for tracking celestial objects and space missions with real-time updates.",
      longDescription: "Track satellites, space missions, and celestial events in real-time. Features include 3D visualization, mission timelines, and notification system for upcoming space events.",
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "Three.js", "API Integration", "WebGL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      stars: 189,
      views: 856
    },
    {
      id: 3,
      title: "Nebula Social",
      description: "A social media platform designed for astronomy enthusiasts to share discoveries and connect.",
      longDescription: "Connect with fellow space enthusiasts, share your astronomical discoveries, and participate in stargazing events. Features real-time chat, image sharing, and event coordination.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Firebase", "Socket.io", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      stars: 145,
      views: 623
    },
    {
      id: 4,
      title: "Galaxy Explorer",
      description: "An interactive 3D visualization of our galaxy, allowing users to explore stars and planets.",
      longDescription: "Immerse yourself in a 3D representation of our galaxy. Explore star systems, learn about exoplanets, and navigate through space with realistic physics and stunning visuals.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Three.js", "WebGL", "JavaScript", "GLSL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      stars: 312,
      views: 945
    },
    {
      id: 5,
      title: "Quantum Portfolio",
      description: "A cutting-edge portfolio website with quantum-inspired animations and interactions.",
      longDescription: "Showcase your work with quantum-inspired animations, particle effects, and smooth transitions. Built with performance in mind and fully responsive design.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Framer Motion", "GSAP", "CSS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      stars: 198,
      views: 1100
    },
    {
      id: 6,
      title: "AI Code Assistant",
      description: "An intelligent code completion and review tool powered by machine learning.",
      longDescription: "Boost your coding productivity with AI-powered suggestions, automatic code review, and intelligent error detection. Supports multiple programming languages and frameworks.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      stars: 267,
      views: 789
    }
  ];
  
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

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
                <Code2 className="inline mr-2" size={16} />
                My Work
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-gradient">
              Featured Projects
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore my latest projects—each one a unique digital experience crafted with passion and precision
            </p>
          </div>

          {/* Enhanced Filter Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={cn(
                "px-6 py-3 rounded-full transition-all flex items-center gap-3 group",
                filter === null 
                  ? "bg-cosmic-nebula-blue text-white shadow-glow scale-105" 
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105"
              )}
              onClick={() => setFilter(null)}
            >
              <Filter size={18} />
              <span className="font-medium">All Projects</span>
              <span className="px-2 py-1 rounded-full bg-white/20 text-xs">{projects.length}</span>
            </button>
            
            {allTags.map(tag => (
              <button 
                key={tag}
                className={cn(
                  "px-6 py-3 rounded-full transition-all flex items-center gap-2 group",
                  filter === tag 
                    ? "bg-cosmic-nebula-blue text-white shadow-glow scale-105" 
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105"
                )}
                onClick={() => setFilter(tag)}
              >
                <span className="font-medium">{tag}</span>
                <span className="px-2 py-1 rounded-full bg-white/20 text-xs">
                  {projects.filter(p => p.tags.includes(tag)).length}
                </span>
              </button>
            ))}
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={cn(
                  "group cursor-pointer transition-all duration-500 overflow-hidden relative",
                  "hover:scale-105 hover:shadow-2xl",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image with Enhanced Effects */}
                <div className="relative overflow-hidden h-48 -mx-6 -mt-6 rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-background via-transparent to-transparent opacity-60 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-cosmic-nebula-pink/90 text-white text-xs font-medium rounded-full flex items-center gap-2 animate-pulse">
                      <Star size={12} className="fill-current" />
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-cosmic-gradient/80 flex items-center justify-center gap-4 transition-opacity duration-300 z-20",
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  )}>
                    <GlowingButton variant="outline" size="sm">
                      <Github size={16} className="mr-2" />
                      Code
                    </GlowingButton>
                    <GlowingButton variant="primary" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </GlowingButton>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Stats Bar */}
                  <div className="flex items-center justify-between mb-4 text-sm text-white/60">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-cosmic-nebula-blue" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} className="text-cosmic-nebula-pink" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cosmic-nebula-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag} 
                        className={cn(
                          "px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full transition-all duration-300",
                          "hover:bg-cosmic-nebula-blue/30 hover:text-white cursor-pointer"
                        )}
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-cosmic-nebula-blue/20 text-cosmic-nebula-blue hover:bg-cosmic-nebula-blue hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={cn(
            "text-center mt-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ animationDelay: '0.8s' }}>
            <Card className="glass-card p-8 max-w-2xl mx-auto">
              <Rocket size={48} className="text-cosmic-nebula-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Project?</h3>
              <p className="text-white/70 mb-6">
                Let's collaborate and bring your ideas to life with cutting-edge technology and creative design.
              </p>
              <GlowingButton variant="primary" size="lg">
                Start a Project
              </GlowingButton>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      {[...Array(25)].map((_, i) => (
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
