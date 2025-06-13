
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'launching' | 'flying' | 'landing'>('launching');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        
        if (prev < 30) {
          setPhase('launching');
        } else if (prev < 70) {
          setPhase('flying');
        } else {
          setPhase('landing');
        }
        
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-cosmic-background z-50 flex items-center justify-center overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Rocket container */}
        <div className="relative w-32 h-32">
          {/* Rocket */}
          <div 
            className={`absolute inset-0 transition-all duration-1000 ${
              phase === 'launching' ? 'translate-y-4 scale-100' :
              phase === 'flying' ? 'translate-y-0 scale-110 rotate-12' :
              'translate-y-2 scale-105 -rotate-6'
            }`}
          >
            <div className="w-full h-full relative">
              {/* Rocket body */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-b from-cosmic-nebula-blue to-cosmic-nebula-pink rounded-t-full"></div>
              
              {/* Rocket fins */}
              <div className="absolute top-16 left-6 w-4 h-8 bg-cosmic-comet-blue transform rotate-45 rounded"></div>
              <div className="absolute top-16 right-6 w-4 h-8 bg-cosmic-comet-blue transform -rotate-45 rounded"></div>
              
              {/* Rocket fire */}
              <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                phase === 'launching' ? 'scale-100' : phase === 'flying' ? 'scale-150' : 'scale-75'
              }`}>
                <div className="w-6 h-8 bg-gradient-to-b from-orange-400 via-red-500 to-yellow-300 rounded-b-full animate-pulse"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-yellow-300 to-transparent rounded-b-full animate-pulse"></div>
              </div>
              
              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cosmic-nebula-pink rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${60 + Math.random() * 20}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gradient animate-pulse">
            {phase === 'launching' ? 'بدء الإقلاع...' :
             phase === 'flying' ? 'الطيران عبر المجرة...' :
             'الهبوط في عالم الإبداع...'}
          </h1>
          
          {/* Progress bar */}
          <div className="w-80 h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full cosmic-gradient transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-white/70 text-lg">{Math.round(progress)}%</p>
        </div>

        {/* Orbiting planets */}
        <div className="absolute w-96 h-96 pointer-events-none">
          <div className="absolute w-4 h-4 bg-cosmic-planet-teal rounded-full animate-spin-slow" style={{ top: '10%', left: '50%', transformOrigin: '0 180px' }} />
          <div className="absolute w-3 h-3 bg-cosmic-nebula-pink rounded-full animate-spin-reverse" style={{ top: '50%', right: '10%', transformOrigin: '-180px 0' }} />
          <div className="absolute w-2 h-2 bg-cosmic-comet-blue rounded-full animate-spin-slow" style={{ bottom: '20%', left: '20%', transformOrigin: '140px -140px' }} />
        </div>
      </div>
    </div>
  );
}
