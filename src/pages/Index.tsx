
import { useEffect, lazy, Suspense, useState } from 'react';
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
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Add staggered animations to child elements
          const children = entry.target.querySelectorAll('.stagger-animation');
          children.forEach((child, index) => {
            (child as HTMLElement).style.animationDelay = `${0.1 + index * 0.1}s`;
            child.classList.add('animate-fade-in');
            child.classList.remove('opacity-0');
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
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [isLoading]);

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
      
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
