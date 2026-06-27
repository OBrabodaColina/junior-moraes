'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MilkCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MilkCard({ children, className = '' }: MilkCardProps) {
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let gamma = event.gamma || 0; 
      if (gamma > 45) gamma = 45;
      if (gamma < -45) gamma = -45;
      setTilt(gamma);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 45;
      setTilt(x);
    };

    window.addEventListener('deviceorientation', handleOrientation);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl shadow-2xl border border-white/40 bg-white/30 backdrop-blur-md ${className}`}
    >
      {/* O Leite se movendo no fundo da caixa */}
      <motion.div 
        className="absolute -bottom-[30%] left-[-50%] w-[200%] h-[150%] bg-white/70 rounded-[40%] pointer-events-none"
        animate={{ 
          rotate: tilt, 
          y: 100 + Math.abs(tilt) * 1.5
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 60 }}
      />
      
      {/* O Texto e Conteúdo (Sempre acima do leite) */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}