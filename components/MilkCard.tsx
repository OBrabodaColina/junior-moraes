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
    // Sensor de movimento do celular (Giroscópio / Acelerômetro)
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let gamma = event.gamma || 0; // Captura a inclinação lateral do celular
      
      // Limitamos o ângulo máximo para o leite não virar completamente de cabeça para baixo
      if (gamma > 45) gamma = 45;
      if (gamma < -45) gamma = -45;
      
      setTilt(gamma);
    };

    // Sensor de mouse para manter o efeito funcionando em computadores
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 45;
      setTilt(x);
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
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
      {/* O Leite pela metade! Começa no top-[50%] (meio da caixa) */}
      <motion.div 
        className="absolute left-[-50%] top-[50%] w-[200%] h-[200%] bg-white/80 rounded-[45%] pointer-events-none"
        animate={{ 
          rotate: tilt, 
        }}
        // Física da mola para parecer que a água está "pesada" e balançando
        transition={{ type: 'spring', damping: 15, stiffness: 45 }}
      />
      
      {/* O Texto e Conteúdo (Sempre acima do leite) */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}