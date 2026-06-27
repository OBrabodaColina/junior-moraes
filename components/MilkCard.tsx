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
      
      if (gamma > 60) gamma = 60;
      if (gamma < -60) gamma = -60;
      
      setTilt(gamma * 1.2); 

      // Mapeia a inclinação para mover o reflexo de luz na tela do celular
      const gx = Math.min(Math.max(((gamma + 60) / 120) * 100, 0), 100);
      const gy = Math.min(Math.max(((beta + 60) / 120) * 100, 0), 100);
      setGlare({ x: gx, y: gy });
    };

    // Sensor de mouse para desktop
    const handleMouseMove = (event: MouseEvent) => {
      // Movimento do leite
      const x = (event.clientX / window.innerWidth - 0.5) * 80;
      setTilt(x);

      // Movimento do reflexo de luz (Liquid Glass Glare)
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
        // Sombras complexas para dar a espessura e a refração de um vidro líquido
        boxShadow: 'inset 2px 2px 20px rgba(255,255,255,0.6), inset -5px -5px 20px rgba(0,0,0,0.05), 0 30px 60px -15px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.3)'
      }}
    >
      {/* EFEITO LIQUID GLASS: Reflexo de luz móvel reagindo ao usuário */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-70 transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Linha de refração brilhante no topo do vidro */}
      <div className="absolute top-0 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 z-20 pointer-events-none blur-[1px]" />

      {/* Container do Leite com física elástica (80% cheio -> top em 20%) */}
      <motion.div 
        className="absolute left-[-50%] top-[20%] w-[200%] h-[200%] bg-white/90 pointer-events-none z-0"
        style={{ 
          // Uma leve borda branca no topo para marcar a superfície do líquido
          borderTop: '2px solid rgba(255, 255, 255, 1)' 
        }}
        animate={{ 
          rotate: tilt,
          y: Math.abs(tilt) * 1.5 // O líquido sobe nas laterais para não mostrar o fundo ao inclinar
        }}
        // Mantemos o damping baixo para manter o chacoalho da água
        transition={{ type: 'spring', damping: 6, mass: 0.8, stiffness: 90 }}
      />
      
      {/* O Texto e Conteúdo (Com Z-index elevado para ficar acima da luz e da água) */}
      <div className="relative z-30 h-full w-full">
        {children}
      </div>
    </div>
  );
}