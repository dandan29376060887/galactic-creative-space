
import { useEffect, useState } from 'react';
import { Home, User, Briefcase, CodesandboxIcon, Mail, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  href: string;
  story: string;
}

export default function Sidebar() {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('home');
  
  const items: SidebarItem[] = [
    { name: 'Home', icon: Rocket, href: '#home', story: 'محطة الإنطلاق' },
    { name: 'About', icon: User, href: '#about', story: 'غرفة التحكم' },
    { name: 'Experience', icon: Briefcase, href: '#experience', story: 'سجل الرحلات' },
    { name: 'Projects', icon: CodesandboxIcon, href: '#projects', story: 'مختبر الابتكار' },
    { name: 'Skills', icon: CodesandboxIcon, href: '#skills', story: 'ترسانة الأدوات' },
    { name: 'Contact', icon: Mail, href: '#contact', story: 'قاعدة الاتصال' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sections = items.map(item => ({
        id: item.name.toLowerCase(),
        offset: document.getElementById(item.name.toLowerCase())?.offsetTop || 0
      }));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
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
        : "top-1/2 right-6 transform -translate-y-1/2 h-auto"
    )}>
      <nav className={cn(
        "spaceship-panel hologram-effect flex items-center justify-center p-3",
        isMobile ? "flex-row rounded-full" : "flex-col rounded-2xl"
      )}>
        {/* مؤشر الطاقة */}
        <div className={cn(
          "absolute bg-cosmic-nebula-blue/20 rounded-full transition-all duration-500",
          isMobile ? "h-full w-12" : "w-full h-12",
          activeSection === 'home' && (isMobile ? "left-2" : "top-2"),
          activeSection === 'about' && (isMobile ? "left-14" : "top-14"),
          activeSection === 'experience' && (isMobile ? "left-26" : "top-26"),
          activeSection === 'projects' && (isMobile ? "left-38" : "top-38"),
          activeSection === 'skills' && (isMobile ? "left-50" : "top-50"),
          activeSection === 'contact' && (isMobile ? "left-62" : "top-62")
        )}></div>
        
        {items.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "relative flex items-center justify-center transition-all duration-300 group",
              isMobile ? "mx-2 my-3 p-2" : "my-2 mx-3 p-2",
              activeSection === item.name.toLowerCase()
                ? "text-cosmic-nebula-blue scale-110"
                : "text-white/60 hover:text-white hover:scale-105"
            )}
            title={item.story}
          >
            {/* تأثير الهولوجرام عند التحويم */}
            <div className="absolute inset-0 bg-cosmic-nebula-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <item.icon size={isMobile ? 18 : 20} className="relative z-10" />
            
            {activeSection === item.name.toLowerCase() && (
              <>
                <div className="absolute -inset-1 bg-cosmic-nebula-blue/20 rounded-lg animate-pulse-glow"></div>
                <div className="absolute top-0 left-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </>
            )}
          </a>
        ))}
        
        {/* مؤشر الحالة */}
        <div className={cn(
          "absolute bg-green-400 w-2 h-2 rounded-full animate-pulse",
          isMobile ? "-top-1 right-2" : "-right-1 top-2"
        )}></div>
      </nav>
    </aside>
  );
}
