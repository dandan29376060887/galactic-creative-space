
import { useEffect, useState } from 'react';
import { Home, User, Briefcase, CodesandboxIcon, Award, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

export default function Sidebar() {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  
  const items: SidebarItem[] = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: CodesandboxIcon, href: '#projects' },
    { name: 'Skills', icon: Award, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = items.map(item => ({
        id: item.name.toLowerCase(),
        offset: document.getElementById(item.name.toLowerCase())?.offsetTop || 0
      }));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset - 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);
  
  return (
    <aside 
      className={cn(
        "fixed z-40 transition-all duration-500",
        isMobile 
          ? "bottom-6 left-1/2 transform -translate-x-1/2 w-auto" 
          : "top-1/2 right-6 transform -translate-y-1/2 h-auto"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spaceship command center design */}
      <nav className={cn(
        "relative spaceship-container transition-all duration-500",
        isMobile ? "flex-row" : "flex-col"
      )}>
        {/* Main navigation panel with hologram effect */}
        <div className={cn(
          "glass-card flex items-center justify-center p-3 relative overflow-hidden",
          "bg-gradient-to-br from-cosmic-deep-purple/20 via-cosmic-background/40 to-cosmic-nebula-blue/20",
          "border border-cosmic-nebula-blue/30 shadow-glow hologram-flicker",
          isMobile ? "flex-row rounded-full" : "flex-col rounded-2xl",
          isHovered ? "scale-105 shadow-glow" : ""
        )}>
          {/* Energy grid background */}
          <div className="absolute inset-0 energy-grid opacity-20 pointer-events-none" />
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-nebula-blue/0 via-cosmic-nebula-pink/30 to-cosmic-comet-blue/0 blur-sm" />
          
          {items.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative flex items-center justify-center transition-all duration-300 group spaceship-section",
                isMobile ? "mx-2 my-2" : "my-2 mx-2",
                "w-12 h-12 rounded-xl",
                activeSection === item.name.toLowerCase()
                  ? "text-cosmic-star-white bg-gradient-to-br from-cosmic-nebula-pink/30 to-cosmic-comet-blue/30"
                  : "text-white/60 hover:text-cosmic-star-white hover:bg-white/10"
              )}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Active section glow */}
              {activeSection === item.name.toLowerCase() && (
                <>
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cosmic-nebula-pink/20 to-cosmic-comet-blue/20 spaceship-pulse" />
                  <span className="absolute inset-0 rounded-xl border border-cosmic-nebula-pink/50 shadow-glow" />
                </>
              )}
              
              {/* Icon with enhanced effects */}
              <div className="relative z-10 flex items-center justify-center">
                <item.icon 
                  size={isMobile ? 20 : 22} 
                  className={cn(
                    "transition-all duration-300",
                    activeSection === item.name.toLowerCase() 
                      ? "drop-shadow-lg filter brightness-125" 
                      : "group-hover:scale-110"
                  )}
                />
                
                {/* Orbit animation for active item */}
                {activeSection === item.name.toLowerCase() && (
                  <div className="absolute inset-0">
                    <div className="absolute w-1 h-1 rounded-full bg-cosmic-nebula-pink opacity-60" style={{
                      animation: "orbit 4s linear infinite",
                      transformOrigin: "center"
                    }} />
                    <div className="absolute w-0.5 h-0.5 rounded-full bg-cosmic-comet-blue opacity-80" style={{
                      animation: "orbit 3s linear infinite reverse",
                      animationDelay: "-1s",
                      transformOrigin: "center"
                    }} />
                  </div>
                )}
              </div>
              
              {/* Tooltip for desktop */}
              {!isMobile && (
                <span className={cn(
                  "absolute right-full mr-3 text-sm whitespace-nowrap opacity-0 pointer-events-none",
                  "bg-cosmic-background/90 backdrop-blur-sm border border-cosmic-nebula-blue/30 rounded-lg px-3 py-1",
                  "transition-all duration-300 transform translate-x-2",
                  "group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto",
                  "shadow-glow text-cosmic-star-white"
                )}>
                  {item.name}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-cosmic-nebula-blue/30 border-y-4 border-y-transparent" />
                </span>
              )}
            </a>
          ))}
        </div>
        
        {/* Command status indicator */}
        <div className={cn(
          "absolute flex items-center space-x-1 transition-all duration-300",
          isMobile ? "top-full mt-2 left-1/2 transform -translate-x-1/2" : "left-full ml-2 top-1/2 transform -translate-y-1/2",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-2 h-2 rounded-full bg-cosmic-planet-teal spaceship-pulse" />
          <span className="text-xs text-cosmic-star-white/70 whitespace-nowrap">
            Navigation Active
          </span>
        </div>
      </nav>
      
      {/* Floating energy particles around sidebar */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cosmic-comet-blue opacity-40 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </aside>
  );
}
