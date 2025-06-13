
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Menu, X, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', story: 'محطة الإنطلاق' },
    { name: 'About', path: '/about', story: 'غرفة التحكم' },
    { name: 'Experience', path: '/experience', story: 'سجل الرحلات' },
    { name: 'Projects', path: '/projects', story: 'مختبر الابتكار' },
    { name: 'Skills', path: '/skills', story: 'ترسانة الأدوات' },
    { name: 'Contact', path: '/contact', story: 'قاعدة الاتصال' }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4",
      isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center animate-spin-slow">
            <div className="w-8 h-8 rounded-full bg-cosmic-background flex items-center justify-center">
              <div className="w-6 h-6 rounded-full cosmic-gradient"></div>
            </div>
          </div>
          <span className="text-xl font-semibold text-gradient">Cosmic Portfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative px-4 py-2 rounded-lg transition-all duration-300 group",
                location.pathname === item.path
                  ? "text-cosmic-nebula-blue bg-cosmic-nebula-blue/10"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              )}
              title={item.story}
            >
              {item.name}
              {location.pathname === item.path && (
                <div className="absolute inset-0 bg-cosmic-nebula-blue/20 rounded-lg animate-pulse-glow"></div>
              )}
            </Link>
          ))}
        </nav>
        
        {/* Social Icons and Mobile Menu */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110 duration-200"
            >
              <social.icon size={18} className="text-white" />
            </a>
          ))}
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-3 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-cosmic-background bg-opacity-95 backdrop-blur-md z-40 pt-20">
          <div className="flex flex-col items-center space-y-6 p-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-xl py-3 px-6 rounded-lg transition-all duration-300",
                  location.pathname === item.path
                    ? "text-cosmic-nebula-blue bg-cosmic-nebula-blue/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
