
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
  
  const items: SidebarItem[] = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: CodesandboxIcon, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all sections and their offsets
      const sections = items.map(item => ({
        id: item.name.toLowerCase(),
        offset: document.getElementById(item.name.toLowerCase())?.offsetTop || 0
      }));
      
      // Find the current active section
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
    <aside className={cn(
      "fixed z-40 transition-all duration-300",
      isMobile 
        ? "bottom-6 left-1/2 transform -translate-x-1/2 w-auto" 
        : "top-1/2 left-6 transform -translate-y-1/2 h-auto"
    )}>
      <nav className={cn(
        "glass-card flex items-center justify-center p-2",
        isMobile ? "flex-row rounded-full" : "flex-col rounded-full"
      )}>
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "relative flex items-center justify-center transition-all duration-300",
              isMobile ? "mx-3 my-2" : "my-3 mx-2",
              activeSection === item.name.toLowerCase()
                ? "text-cosmic-nebula-pink"
                : "text-white/60 hover:text-white"
            )}
          >
            {activeSection === item.name.toLowerCase() && (
              <span 
                className={cn(
                  "absolute bg-white/10 rounded-full -z-10",
                  isMobile ? "inset-0" : "inset-0"
                )}
              />
            )}
            <item.icon size={isMobile ? 20 : 22} />
            {!isMobile && (
              <span className={cn(
                "ml-2 text-sm opacity-0 absolute left-full pl-2 whitespace-nowrap",
                "group-hover:opacity-100 transition-opacity duration-300"
              )}>
                {item.name}
              </span>
            )}
          </a>
        ))}
      </nav>
    </aside>
  );
}
