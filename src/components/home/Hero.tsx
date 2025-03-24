
import { useState, useEffect, useRef } from 'react';
import GlowingButton from '../ui/GlowingButton';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [nameText, setNameText] = useState("");
  const fullText = "Welcome to my cosmic realm";
  const fullName = "John Doe";
  const typingSpeed = 100;
  const nameTypingSpeed = 150;
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Type the welcome text
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Start typing name after a delay
        setTimeout(() => {
          let nameIndex = 0;
          const nameTypingInterval = setInterval(() => {
            if (nameIndex < fullName.length) {
              setNameText(fullName.substring(0, nameIndex + 1));
              nameIndex++;
            } else {
              clearInterval(nameTypingInterval);
            }
          }, nameTypingSpeed);
        }, 500);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cosmic-nebula-blue/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-cosmic-nebula-pink/10 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 relative z-10">
        <div className="flex flex-col justify-center items-start space-y-6 lg:space-y-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80 mb-6 inline-block">
              Cosmic Explorer & Developer
            </span>
            <h2 className="text-2xl md:text-3xl text-cosmic-nebula-pink mb-4">
              <span className="text-gradient">{nameText}</span>
              {nameText.length < fullName.length && <span className="animate-pulse">|</span>}
            </h2>
            <h1 ref={textRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {displayText}
              {displayText.length < fullText.length && <span className="animate-pulse">|</span>}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient mt-2">
              Building digital experiences
            </h2>
          </div>
          
          <p className="text-white/70 text-lg md:text-xl max-w-lg animate-fade-in" style={{ animationDelay: "1s" }}>
            A passionate developer crafting beautiful, functional digital experiences. Welcome to my 
            portfolio—a cosmic journey through my projects and skills.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <GlowingButton variant="primary" onClick={scrollToAbout}>
              Explore My Work
            </GlowingButton>
            <GlowingButton variant="outline" isAnimated={false}>
              Contact Me
            </GlowingButton>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Cosmic illustration/animation placeholder */}
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 cosmic-gradient rounded-full opacity-20 animate-pulse-glow"></div>
            <div className="absolute inset-4 bg-cosmic-background rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Center planet */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-nebula-blue to-cosmic-planet-teal animate-spin-slow"></div>
              
              {/* Orbiting elements */}
              <div className="absolute w-full h-full">
                <div className="absolute w-10 h-10 rounded-full bg-cosmic-nebula-pink" style={{
                  animation: "orbit 15s linear infinite",
                  transformOrigin: "center"
                }}></div>
                
                <div className="absolute w-6 h-6 rounded-full bg-cosmic-planet-orange" style={{
                  animation: "orbit 10s linear infinite",
                  animationDelay: "-5s",
                  transformOrigin: "center"
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>
      
      {/* Floating stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </section>
  );
}
