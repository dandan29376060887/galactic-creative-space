import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Rocket, Star, Sparkles } from 'lucide-react';
import GlowingButton from '@/components/ui/GlowingButton';
import StarBackground from '@/components/ui/StarBackground';
import MouseStarInteraction from '@/components/ui/MouseStarInteraction';

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [nameText, setNameText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const navigate = useNavigate();
  
  const welcomeTexts = ["Welcome to my cosmic realm of innovation", "Exploring digital frontiers with creativity", "Crafting exceptional digital experiences", "Building the future with endless possibilities"];
  const fullName = "Ahmed Hassan";
  const nameTypingSpeed = 150;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % welcomeTexts.length;
      const fullText = welcomeTexts[i];
      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTypingSpeed(100);
        setLoopNum(loopNum + 1);
      } else {
        setDisplayText(isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1));
      }
    };
    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, welcomeTexts]);

  useEffect(() => {
    if (nameText.length < fullName.length) {
      const nameTimer = setTimeout(() => {
        setNameText(fullName.substring(0, nameText.length + 1));
      }, nameTypingSpeed);
      return () => clearTimeout(nameTimer);
    }
  }, [nameText]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{
      background: 'radial-gradient(ellipse at bottom, #0B0D1C 0%, #1E0B3A 50%, #0B0D1C 100%)'
    }}>
      <StarBackground />
      <MouseStarInteraction />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-cosmic-nebula-blue/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cosmic-nebula-pink/15 blur-3xl animate-float" style={{
          animationDelay: "2s"
        }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cosmic-planet-teal/10 blur-3xl animate-float" style={{
          animationDelay: "4s"
        }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm text-white/90 border border-white/20 animate-pulse-glow">
                    <Sparkles size={16} className="text-cosmic-nebula-pink" />
                    Cosmic Explorer & Developer
                  </span>
                  
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl text-cosmic-nebula-pink font-bold">
                      <span className="text-gradient">{nameText}</span>
                      {nameText.length < fullName.length && <span className="animate-pulse text-cosmic-nebula-blue">|</span>}
                    </h2>
                    
                    <div className="h-24 md:h-28 flex items-start">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {displayText}
                        <span className="animate-pulse ml-1 text-cosmic-nebula-pink">|</span>
                      </h1>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-gradient">
                      Full-stack Developer & UI/UX Enthusiast
                    </h3>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in" style={{
                  animationDelay: "0.5s"
                }}>
                  Passionate technologist crafting elegant solutions to complex problems. 
                  I blend modern web technologies with stunning design to create immersive 
                  digital experiences that inspire and engage.
                </p>
                
                <div className="flex flex-wrap gap-6 animate-fade-in" style={{
                  animationDelay: "1s"
                }}>
                  <GlowingButton variant="primary" onClick={() => navigate('/projects')} className="transform hover:scale-105 transition-all duration-300">
                    <Rocket size={18} className="mr-2" />
                    Explore My Work
                  </GlowingButton>
                  <GlowingButton variant="outline" onClick={() => navigate('/contact')} className="transform hover:scale-105 transition-all duration-300">
                    Contact Me
                  </GlowingButton>
                </div>
              </div>
              
              {/* Right Content - Enhanced Cosmic Animation */}
              <div className="flex items-center justify-center relative animate-fade-in" style={{
                animationDelay: "0.3s"
              }}>
                <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-cosmic-nebula-blue/30 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-full border border-cosmic-nebula-pink/40 animate-spin-reverse"></div>
                  
                  {/* Center cosmic core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full cosmic-gradient animate-pulse-glow flex items-center justify-center">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-cosmic-background border-2 border-white/20 flex items-center justify-center">
                          <Rocket size={48} className="text-cosmic-nebula-blue animate-bounce-subtle" />
                        </div>
                      </div>
                      
                      {/* Orbiting elements */}
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute w-4 h-4 rounded-full shadow-glow" 
                            style={{
                              background: `linear-gradient(45deg, ${['#7A6AEE', '#B855E8', '#4FD1C7', '#60A5FA', '#F59E0B', '#EC4899'][i]}, ${['#B855E8', '#4FD1C7', '#60A5FA', '#F59E0B', '#EC4899', '#7A6AEE'][i]})`,
                              animation: `orbit ${15 + i * 2}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`,
                              animationDelay: `-${i * 2}s`,
                              transformOrigin: '200px 200px'
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute w-2 h-2 rounded-full bg-white/60 animate-float" 
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                      }} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Smooth transition to footer */}
        <div className="h-20 bg-gradient-to-b from-transparent to-cosmic-background opacity-80"></div>
      </div>
      
      {/* Enhanced floating stars */}
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className="absolute rounded-full bg-white pointer-events-none" 
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 6}s`
          }} 
        />
      ))}
    </div>
  );
}
