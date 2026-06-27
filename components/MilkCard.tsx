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
      
      // Limite de inclinação
      if (gamma > 60) gamma = 60;
      if (gamma < -60) gamma = -60;
      
      // Na vida real, o líquido gira no sentido CONTRÁRIO à inclinação do copo 
      // para se manter reto em relação ao chão. Por isso o valor é negativo.
      setTilt(-gamma); 

      // Brilho do vidro
      const gx = Math.min(Math.max(((gamma + 60) / 120) * 100, 0), 100);
      const gy = Math.min(Math.max(((beta + 60) / 120) * 100, 0), 100);
      setGlare({ x: gx, y: gy });
    };

    // Sensor de mouse para desktop
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 80;
      setTilt(-x); // Líquido reage ao mouse

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

      {/* Recipiente do Líquido Plano (Gira com o Giroscópio) */}
      <motion.div 
        className="absolute bg-white/10 backdrop-blur-md pointer-events-none z-0"
        style={{ 
          // Linha sutil no topo para marcar a superfície do líquido
          borderTop: '2px solid rgba(255, 255, 255, 0.4)',
          // Aumentamos o tamanho de 200% para 400% para esconder as pontas ("quadrados")
          width: '400%',
          height: '400%',
          left: '-150%',
          top: '15%',
          // Previne falhas gráficas no Safari/iOS ao renderizar o blur girando
          willChange: 'transform'
        }}
        animate={{ 
          rotate: tilt,
          y: Math.abs(tilt) * 2 // Sobe um pouco mais rápido nas laterais para compensar
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 45 }}
      />
      
      {/* O Texto e Conteúdo */}
      <div className="relative z-30 h-full w-full">
        {children}
      </div>
    </div>
  );
}