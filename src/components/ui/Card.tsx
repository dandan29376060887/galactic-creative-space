
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "glass" | "solid" | "gradient";
  isHoverable?: boolean;
}

export default function Card({
  children,
  variant = "glass",
  isHoverable = true,
  className,
  ...props
}: CardProps) {
  const baseClasses = "rounded-2xl p-6 transition-all duration-300";
  
  const variantClasses = {
    glass: "glass-card",
    solid: "bg-cosmic-deep-purple text-white",
    gradient: "cosmic-gradient text-white"
  };
  
  const hoverClasses = isHoverable 
    ? "hover:translate-y-[-5px] hover:shadow-lg" 
    : "";
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
