
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isAnimated?: boolean;
}

export default function GlowingButton({
  children,
  variant = "primary",
  size = "md",
  isAnimated = true,
  className,
  ...props
}: GlowingButtonProps) {
  const baseClasses = "relative overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cosmic-nebula-blue/50 active:scale-95";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cosmic-nebula-blue to-cosmic-nebula-pink text-white border border-white/10",
    secondary: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
    outline: "bg-transparent border border-cosmic-nebula-pink text-cosmic-nebula-pink hover:bg-cosmic-nebula-pink/10",
    ghost: "bg-transparent text-cosmic-nebula-blue hover:bg-cosmic-nebula-blue/10 hover:text-cosmic-nebula-pink"
  };
  
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };
  
  const glowClasses = isAnimated ? "after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-white/20 after:blur-xl after:scale-150 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500" : "";
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isAnimated && "animate-pulse-glow",
        glowClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
