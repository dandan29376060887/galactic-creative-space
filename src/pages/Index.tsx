
import { useEffect, lazy, Suspense, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import StarBackground from '../components/ui/StarBackground';

// Lazy-loaded components
const Hero = lazy(() => import('../components/home/Hero'));
const About = lazy(() => import('../components/home/About'));
const Experience = lazy(() => import('../components/home/Experience'));
const Projects = lazy(() => import('../components/home/Projects'));
const Skills = lazy(() => import('../components/home/Skills'));
const Contact = lazy(() => import('../components/home/Contact'));

// Simplified loading component
const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-16 h-16 rounded-full cosmic-gradient animate-pulse flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-cosmic-background"></div>
    </div>
  </div>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  // Reduced loading time for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Optimized intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
          const sectionIndex = sections.indexOf(sectionId);
          if (sectionIndex !== -1) {
            setCurrentSection(sectionIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Simplified smooth scroll
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cosmic-background z-50">
        <SectionLoader />
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <StarBackground />
      
      <Header />
      <Sidebar />
      
      {/* Simplified navigation indicator */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="glass-card p-2 rounded-full">
          <div className="flex flex-col space-y-2">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSection === index 
                    ? 'bg-cosmic-nebula-pink shadow-glow scale-125' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <main className="snap-y snap-mandatory overflow-y-auto">
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <Hero />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <About />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <Experience />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <Projects />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <Skills />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
