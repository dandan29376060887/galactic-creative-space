
import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default function MouseStarInteraction() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStar = (x: number, y: number) => {
      const star: Star = {
        x,
        y,
        size: Math.random() * 3 + 1,
        opacity: 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: 60
      };
      starsRef.current.push(star);
    };

    const updateStars = () => {
      starsRef.current = starsRef.current.filter(star => {
        star.x += star.vx;
        star.y += star.vy;
        star.life++;
        star.opacity = 1 - (star.life / star.maxLife);
        star.size *= 0.98;
        
        return star.life < star.maxLife && star.size > 0.1;
      });
    };

    const drawStars = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach(star => {
        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#7A6AEE';
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw sparkle effect
        ctx.strokeStyle = '#B855E8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(star.x - star.size * 2, star.y);
        ctx.lineTo(star.x + star.size * 2, star.y);
        ctx.moveTo(star.x, star.y - star.size * 2);
        ctx.lineTo(star.x, star.y + star.size * 2);
        ctx.stroke();
        
        ctx.restore();
      });
    };

    const animate = () => {
      updateStars();
      drawStars();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      setIsMouseActive(true);
      
      // Create stars around mouse position
      if (Math.random() < 0.3) {
        createStar(
          mouseRef.current.x + (Math.random() - 0.5) * 20,
          mouseRef.current.y + (Math.random() - 0.5) * 20
        );
      }
    };

    const handleMouseLeave = () => {
      setIsMouseActive(false);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Create burst of stars on click
      for (let i = 0; i < 8; i++) {
        createStar(
          clickX + (Math.random() - 0.5) * 30,
          clickY + (Math.random() - 0.5) * 30
        );
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-auto z-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
