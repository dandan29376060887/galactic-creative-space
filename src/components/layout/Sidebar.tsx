
import { Home, User, Briefcase, CodesandboxIcon, Mail, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  path: string;
  story: string;
}

export default function Sidebar() {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const items: SidebarItem[] = [
    { name: 'Home', icon: Rocket, path: '/', story: 'محطة الإنطلاق' },
    { name: 'About', icon: User, path: '/about', story: 'غرفة التحكم' },
    { name: 'Experience', icon: Briefcase, path: '/experience', story: 'سجل الرحلات' },
    { name: 'Projects', icon: CodesandboxIcon, path: '/projects', story: 'مختبر الابتكار' },
    { name: 'Skills', icon: CodesandboxIcon, path: '/skills', story: 'ترسانة الأدوات' },
    { name: 'Contact', icon: Mail, path: '/contact', story: 'قاعدة الاتصال' }
  ];
  
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
        {items.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative flex items-center justify-center transition-all duration-300 group",
                isMobile ? "mx-2 my-3 p-2" : "my-2 mx-3 p-2",
                isActive
                  ? "text-cosmic-nebula-blue scale-110"
                  : "text-white/60 hover:text-white hover:scale-105"
              )}
              title={item.story}
            >
              {/* تأثير الهولوجرام عند التحويم */}
              <div className="absolute inset-0 bg-cosmic-nebula-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <item.icon size={isMobile ? 18 : 20} className="relative z-10" />
              
              {isActive && (
                <>
                  <div className="absolute -inset-1 bg-cosmic-nebula-blue/20 rounded-lg animate-pulse-glow"></div>
                  <div className="absolute top-0 left-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse"></div>
                  <div className="absolute top-0 right-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-cosmic-nebula-blue rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </>
              )}
            </Link>
          );
        })}
        
        {/* مؤشر الحالة */}
        <div className={cn(
          "absolute bg-green-400 w-2 h-2 rounded-full animate-pulse",
          isMobile ? "-top-1 right-2" : "-right-1 top-2"
        )}></div>
      </nav>
    </aside>
  );
}
