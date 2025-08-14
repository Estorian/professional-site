'use client';

import React, { useEffect, useRef } from 'react';

export interface StarfieldProps {
  darkMode?: boolean;
  starCount?: number;
  speed?: number;
  className?: string;
  colors?: {
    dark: {
      star: string;
      glow: string;
    };
    light: {
      star: string;
      glow: string;
    };
  };
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
  twinklePhase: number;
}

const Starfield: React.FC<StarfieldProps> = ({
  darkMode = false,
  starCount = 150,
  speed = 1,
  className = "fixed inset-0 pointer-events-none z-0",
  colors = {
    dark: {
      star: "255, 255, 255",
      glow: "147, 197, 253"
    },
    light: {
      star: "100, 116, 139",
      glow: "59, 130, 246"
    }
  }
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number|null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: (Math.random() * 0.5 + 0.1) * speed,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
      starsRef.current = stars;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const currentColors = darkMode ? colors.dark : colors.light;
      const baseOpacity = darkMode ? 1 : 0.6;
      const glowOpacity = darkMode ? 0.1 : 0.05;
      
      starsRef.current.forEach((star) => {
        // Move star
        star.x -= star.speed;
        
        // Reset star position when it goes off screen
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }
        
        // Twinkle effect
        star.twinklePhase += star.twinkle;
        const twinkleOpacity = star.opacity + Math.sin(star.twinklePhase) * 0.3;
        const finalOpacity = Math.max(0, twinkleOpacity * baseOpacity);
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${currentColors.star}, ${finalOpacity})`;
        ctx.fill();
        
        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${currentColors.glow}, ${finalOpacity * glowOpacity})`;
          ctx.fill();
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [darkMode, starCount, speed, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background: 'transparent' }}
    />
  );
};

export default Starfield;