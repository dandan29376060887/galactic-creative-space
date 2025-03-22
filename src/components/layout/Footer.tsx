
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card py-12 px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gradient">Cosmic Portfolio</h3>
              <p className="text-white/70">
                A space-themed portfolio showcasing my development journey through the cosmos of web development.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Github size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail size={18} className="text-white" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white">Get In Touch</h3>
              <p className="text-white/70">
                hello@cosmic-portfolio.com
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Cosmic Portfolio. All rights reserved.
            </p>
            <p className="text-white/50 text-sm mt-4 md:mt-0">
              Made with precision and elegance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
