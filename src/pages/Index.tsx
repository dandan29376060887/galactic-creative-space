
import { useEffect, lazy, Suspense, useState, useRef } from 'react';
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
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'home', name: 'محطة الإنطلاق', story: 'بداية الرحلة نحو النجوم' },
    { id: 'about', name: 'غرفة التحكم', story: 'اكتشف من خلف عجلة القيادة' },
    { id: 'experience', name: 'سجل الرحلات', story: 'المحطات التي وصلت إليها' },
    { id: 'projects', name: 'مختبر الابتكار', story: 'الاختراعات التي غيرت المجرة' },
    { id: 'skills', name: 'ترسانة الأدوات', story: 'القوى التي تملكها' },
    { id: 'contact', name: 'قاعدة الاتصال', story: 'تواصل عبر الأبعاد' }
  ];

  // التنقل السلس بين الأقسام
  const navigateToSection = (index: number) => {
    if (index === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSection(index);
    
    const targetElement = document.getElementById(sections[index].id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // تتبع القسم الحالي بناءً على التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransitioning]);
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <StarBackground />
      
      {/* شاشة التحكم الجانبية */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 z-50 bg-black/40 backdrop-blur-md rounded-2xl border border-cosmic-nebula-blue/30 p-4">
        <div className="text-center mb-4">
          <div className="w-12 h-12 mx-auto bg-cosmic-nebula-blue/20 rounded-full flex items-center justify-center mb-2">
            <div className="w-6 h-6 bg-cosmic-nebula-blue rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-white/60">محطة التحكم</p>
        </div>
        
        <div className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(index)}
              className={`w-full p-3 rounded-xl text-left transition-all duration-300 ${
                currentSection === index
                  ? 'bg-cosmic-nebula-blue/30 border border-cosmic-nebula-blue/50 text-white'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <div className="text-xs font-medium">{section.name}</div>
              <div className="text-xs text-white/50 mt-1">{section.story}</div>
            </button>
          ))}
        </div>
        
        {/* مؤشر التقدم */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex justify-between text-xs text-white/50 mb-2">
            <span>التقدم</span>
            <span>{Math.round(((currentSection + 1) / sections.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1">
            <div 
              className="bg-cosmic-nebula-blue h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <Header />
      <Sidebar />
      
      <main ref={sectionsRef} className="relative">
        {/* تأثيرات الانتقال */}
        {isTransitioning && (
          <div className="fixed inset-0 bg-cosmic-background/50 backdrop-blur-sm z-40 flex items-center justify-center">
            <div className="text-center">
              <div className="cosmic-gradient w-20 h-20 rounded-full animate-pulse mb-4 mx-auto"></div>
              <p className="text-white text-lg">الانتقال إلى {sections[currentSection].name}...</p>
              <p className="text-white/60 text-sm mt-2">{sections[currentSection].story}</p>
            </div>
          </div>
        )}
        
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
