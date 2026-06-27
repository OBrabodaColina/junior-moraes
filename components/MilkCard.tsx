'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MilkCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MilkCard({ children, className = '' }: MilkCardProps) {
  const [tilt, setTilt] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Sensor de movimento do celular (Giroscópio)
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let gamma = event.gamma || 0; 
      let beta = event.beta || 0;
      
      // LIMITADOR DO LÍQUIDO: Permitimos inclinação de apenas 12 graus 
      if (gamma > 8) gamma = 8;
      if (gamma < -8) gamma = -8;
      
      setTilt(-gamma); 

      // O brilho do vidro (glare) continua livre
      const gx = Math.min(Math.max(((event.gamma || 0) + 60) / 120 * 100, 0), 100);
      const gy = Math.min(Math.max(((beta + 60) / 120) * 100, 0), 100);
      setGlare({ x: gx, y: gy });
    };

    // Sensor de mouse para desktop
    const handleMouseMove = (event: MouseEvent) => {
      // LIMITADOR DO MOUSE: max 12 ou -12
      const x = (event.clientX / window.innerWidth - 0.5) * 24; 
      setTilt(-x);

      const gx = (event.clientX / window.innerWidth) * 100;
      const gy = (event.clientY / window.innerHeight) * 100;
      setGlare({ x: gx, y: gy });
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className={`relative overflow-hidden rounded-[40px] bg-white/5 backdrop-blur-2xl saturate-150 transition-shadow duration-300 ${className}`}
      style={{ 
        boxShadow: 'inset 2px 2px 20px rgba(255,255,255,0.6), inset -5px -5px 20px rgba(0,0,0,0.05), 0 30px 60px -15px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.4)'
      }}
    >
      {/* Reflexo Dinâmico do Vidro (Liquid Glass Glare) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-80 transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 60%)`,
          mixBlendMode: 'overlay'
        }}
      />
      <div className="absolute top-0 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 z-20 pointer-events-none blur-[1px]" />

      {/* Recipiente do Líquido Plano (Leite Branco Sólido) */}
      <motion.div 
        // Aqui voltamos para bg-white, já que o seu texto escuro vai contrastar perfeitamente
        className="absolute left-[-50%] top-[25%] w-[200%] h-[200%] bg-white pointer-events-none z-0"
        style={{ 
          // Linha no topo bem marcada
          borderTop: '2px solid rgba(255, 255, 255, 1)' 
        }}
        animate={{ 
          rotate: tilt,
          y: Math.abs(tilt) * 1.5 
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 45 }}
      />
      
      {/* O Texto e Conteúdo (Sempre visível por cima de tudo) */}
      <div className="relative z-30 h-full w-full">
        {children}
      </div>
    </div>
  );
}