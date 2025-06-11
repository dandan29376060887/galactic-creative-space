
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

// Enhanced loading placeholder with spaceship theme
const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center relative">
    <div className="absolute inset-0 bg-gradient-to-br from-cosmic-deep-purple/30 via-cosmic-background to-cosmic-nebula-blue/20"></div>
    
    {/* Spaceship loading animation */}
    <div className="relative">
      <div className="w-24 h-24 rounded-full cosmic-gradient animate-pulse-glow flex items-center justify-center relative">
        <div className="w-20 h-20 rounded-full bg-cosmic-background flex items-center justify-center">
          <div className="w-16 h-16 rounded-full cosmic-gradient animate-spin-slow"></div>
          
          {/* Orbiting elements */}
          <div className="absolute w-full h-full">
            <div className="absolute w-2 h-2 rounded-full bg-cosmic-comet-blue shadow-glow" style={{
              animation: "orbit 3s linear infinite",
              transformOrigin: "center"
            }}></div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-cosmic-nebula-pink shadow-glow" style={{
              animation: "orbit 2s linear infinite reverse",
              animationDelay: "-1s",
              transformOrigin: "center"
            }}></div>
          </div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2">
        <p className="text-cosmic-nebula-blue animate-pulse text-lg font-medium">
          Navigating through space...
        </p>
      </div>
    </div>
    
    {/* Floating particles */}
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-cosmic-star-white"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.8 + 0.2,
          animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite alternate`,
          animationDelay: `${Math.random() * 3}s`
        }}
      />
    ))}
  </div>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  // Enhanced loading with spaceship theme
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced intersection observer for spaceship navigation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add transition effect when entering new section
          setIsTransitioning(true);
          setTimeout(() => setIsTransitioning(false), 500);
          
          // Animate section elements
          const animatableElements = entry.target.querySelectorAll('[data-animate="true"]');
          animatableElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate-fade-in');
            }, index * 100);
          });
          
          // Update current section for spaceship navigation
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

  // Enhanced smooth scroll with spaceship effect
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        setIsTransitioning(true);
        
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Add spaceship transition effect
          document.body.style.background = 'radial-gradient(ellipse at center, #1B2735 0%, #090A0F 100%)';
          
          setTimeout(() => {
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            
            setTimeout(() => {
              setIsTransitioning(false);
              document.body.style.background = 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)';
            }, 300);
          }, 200);
          
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
      
      {/* Spaceship transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-deep-purple/50 via-transparent to-cosmic-nebula-blue/50 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 cosmic-gradient rounded-full animate-pulse-glow opacity-30"></div>
          </div>
        </div>
      )}
      
      <Header />
      <Sidebar />
      
      {/* Spaceship navigation indicator */}
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
      
      <main ref={sectionsRef} className="snap-y snap-mandatory overflow-y-auto">
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <Hero />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-deep-purple/10 via-transparent to-cosmic-nebula-blue/10"></div>
            <About />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-nebula-pink/5 via-transparent to-cosmic-deep-purple/10"></div>
            <Experience />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-comet-blue/10 via-transparent to-cosmic-nebula-pink/5"></div>
            <Projects />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-planet-teal/10 via-transparent to-cosmic-comet-blue/10"></div>
            <Skills />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section className="snap-start min-h-screen relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-deep-purple/10 via-transparent to-cosmic-nebula-blue/10"></div>
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
