
import { useEffect, lazy, Suspense } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import StarBackground from '../components/ui/StarBackground';

// Lazy-loaded components للأداء الأفضل
const Hero = lazy(() => import('../components/home/Hero'));
const About = lazy(() => import('../components/home/About'));
const Experience = lazy(() => import('../components/home/Experience'));
const Projects = lazy(() => import('../components/home/Projects'));
const Skills = lazy(() => import('../components/home/Skills'));
const Contact = lazy(() => import('../components/home/Contact'));

// شاشة تحميل بسيطة لتحسين الأداء
const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cosmic-nebula-blue/30 border-t-cosmic-nebula-blue rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-cosmic-nebula-pink/20 border-b-cosmic-nebula-pink rounded-full animate-spin-reverse"></div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <StarBackground />
      
      <Header />
      <Sidebar />
      
      <main className="relative">
        <Suspense fallback={<SectionLoader />}>
          <section id="home" className="min-h-screen relative">
            <Hero />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="about" className="min-h-screen relative">
            <About />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="experience" className="min-h-screen relative">
            <Experience />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="projects" className="min-h-screen relative">
            <Projects />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="skills" className="min-h-screen relative">
            <Skills />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="contact" className="min-h-screen relative">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
