
import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10 py-4",
      isScrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full cosmic-gradient flex items-center justify-center animate-spin-slow">
            <div className="w-8 h-8 rounded-full bg-cosmic-background flex items-center justify-center">
              <div className="w-6 h-6 rounded-full cosmic-gradient"></div>
            </div>
          </div>
          <span className="text-xl font-semibold text-gradient">Cosmic Portfolio</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">About</a>
          <a href="#projects" className="text-white opacity-80 hover:opacity-100 transition-opacity">Projects</a>
          <a href="#skills" className="text-white opacity-80 hover:opacity-100 transition-opacity">Skills</a>
          <a href="#contact" className="text-white opacity-80 hover:opacity-100 transition-opacity">Contact</a>
          
          <div className="flex items-center space-x-4 ml-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Github size={18} className="text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Linkedin size={18} className="text-white" />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <Menu size={20} className="text-white" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-cosmic-background bg-opacity-95 backdrop-blur-md z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-6">
            <a href="#about" 
               className="text-xl text-white"
               onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#projects" 
               className="text-xl text-white"
               onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" 
               className="text-xl text-white"
               onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#contact" 
               className="text-xl text-white"
               onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            
            <div className="flex items-center space-x-6 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Github size={24} className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
