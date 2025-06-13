
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import Contact from '@/components/home/Contact';
import StarBackground from '@/components/ui/StarBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarBackground />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about" className="relative">
        <About />
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="relative">
        <Experience />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="relative">
        <Projects />
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="relative">
        <Skills />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="relative">
        <Contact />
      </section>
    </div>
  );
}
