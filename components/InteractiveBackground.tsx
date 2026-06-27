import React from 'react';

export default function InteractiveBackground() {
  // Puxa o prefixo '/junior-moraes' em produção, ou deixa vazio no localhost
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-stone-100">
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          // Agora ele monta o caminho correto dinamicamente!
          backgroundImage: `url('${basePath}/background.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}