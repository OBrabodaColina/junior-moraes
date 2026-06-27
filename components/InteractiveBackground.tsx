import React from 'react';
import Image from 'next/image';

import bgImage from '../public/background.jpeg'; 

export default function InteractiveBackground() {
  return (
    // Voltamos para o bg-stone-100 (fundo claro original)
    <div className="fixed inset-0 pointer-events-none -z-10 bg-stone-100">
      <Image
        src={bgImage}
        alt="Textura de Fundo"
        fill
        priority
        // Se ainda achar muito clara/desbotada, mude o opacity-40 para opacity-100
        className="object-cover opacity-40"
      />
    </div>
  );
}