
import { useEffect, useState, lazy, Suspense } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import StarBackground from '../components/ui/StarBackground';

// Lazy-loaded components with suspense
const Hero = lazy(() => import('../components/home/Hero'));
const About = lazy(() => import('../components/home/About'));
const Experience = lazy(() => import('../components/home/Experience'));
const Projects = lazy(() => import('../components/home/Projects'));
const Skills = lazy(() => import('../components/home/Skills'));
const Contact = lazy(() => import('../components/home/Contact'));

// Loading placeholder for lazy-loaded components
const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-16 h-16 rounded-full cosmic-gradient animate-pulse-glow flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-cosmic-background flex items-center justify-center">
        <div className="w-8 h-8 rounded-full cosmic-gradient animate-spin-slow"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  // Add intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setVisibleSections(prev => {
            if (!prev.includes(id)) {
              return [...prev, id];
            }
            return prev;
          });
          
          // Add animation classes to children elements
          const children = entry.target.querySelectorAll('[data-animate]');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in');
              child.classList.remove('opacity-0', 'translate-y-10');
            }, index * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(section);
      
      // Find all elements to animate within sections
      const animatedElements = section.querySelectorAll('h1, h2, h3, p, .card, [data-animate]');
      animatedElements.forEach(el => {
        el.setAttribute('data-animate', 'true');
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
      });
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
          
          // Update URL without causing a page reload
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full">
      <StarBackground />
      <Header />
      <Sidebar />
      
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.includes('about') || <div id="about" className="h-screen"></div>}
          {visibleSections.includes('about') && <About />}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.includes('experience') || <div id="experience" className="h-screen"></div>}
          {visibleSections.includes('experience') && <Experience />}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.includes('projects') || <div id="projects" className="h-screen"></div>}
          {visibleSections.includes('projects') && <Projects />}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.includes('skills') || <div id="skills" className="h-screen"></div>}
          {visibleSections.includes('skills') && <Skills />}
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.includes('contact') || <div id="contact" className="h-screen"></div>}
          {visibleSections.includes('contact') && <Contact />}
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
