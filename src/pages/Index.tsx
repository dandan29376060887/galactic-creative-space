
import { useEffect, lazy, Suspense, useState, useRef } from 'react';
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

// Enhanced loading placeholder for lazy-loaded components
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
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Simulate loading state for a smoother initial experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Add intersection observer for more sophisticated animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate section when it comes into view
          const animatableElements = entry.target.querySelectorAll('[data-animate="true"]');
          animatableElements.forEach(element => {
            element.classList.add('animate-fade-in');
          });
          
          // Track visible sections for navigation
          const sectionId = entry.target.id;
          if (sectionId && !visibleSections.includes(sectionId)) {
            setVisibleSections(prev => [...prev, sectionId]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [visibleSections]);

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
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cosmic-background z-50">
        <SectionLoader />
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen w-full">
      <StarBackground />
      <Header />
      <Sidebar />
      
      <main ref={sectionsRef} className="snap-y snap-mandatory">
        <Suspense fallback={<SectionLoader />}>
          <div className="snap-start min-h-screen">
            <Hero />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="snap-start min-h-screen">
            <About />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="snap-start min-h-screen">
            <Experience />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="snap-start min-h-screen">
            <Projects />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="snap-start min-h-screen">
            <Skills />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div className="snap-start min-h-screen">
            <Contact />
          </div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
