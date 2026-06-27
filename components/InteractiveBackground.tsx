'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveBackground() {
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    // Reatividade para Mobile (Giroscópio)
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let gamma = event.gamma || 0; // Inclinação esquerda/direita
      if (gamma > 45) gamma = 45;
      if (gamma < -45) gamma = -45;
      setTilt(gamma);
    };

    // Reatividade para Desktop (Mouse)
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
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-white">
      {/* Fundo com a textura de manchas de vaca */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/image_a71a70.png')`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Efeito da Garrafa de Leite Reativa ao Fundo */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[600px] opacity-60 blur-[1px]">
        <div className="relative w-full h-full border-4 border-white/60 rounded-[100px] overflow-hidden bg-white/20 backdrop-blur-md shadow-2xl">
          {/* Líquido (Leite) que se movimenta */}
          <motion.div 
            className="absolute bottom-0 w-[200%] h-[120%] bg-white rounded-[40%]"
            animate={{ 
              rotate: tilt, 
              y: 200 + Math.abs(tilt) // Ajusta a altura conforme inclina
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 60 }}
            style={{ left: '-50%' }}
          />
        </div>
      </div>
    </div>
  );
}