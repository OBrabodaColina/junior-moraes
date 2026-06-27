import React from 'react';
import Image from 'next/image';
import WhatsAppBtn from './WhatsAppBtn';
import MilkCard from './MilkCard';

export default function Hero() {
  return (
    // Atualizei a borda inferior para border-stone-200 para combinar com o fundo claro
    <section className="relative pt-16 pb-24 px-6 flex flex-col items-center text-center overflow-hidden border-b border-stone-200">
      
      <div className="mb-10 relative w-48 h-48 md:w-56 md:h-56 drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]">
        <Image 
          src="/logo-otimizado.png" 
          alt="Logo da Fazenda" 
          fill 
          className="object-contain filter contrast-125 saturate-110"
        />
      </div>

      <MilkCard className="max-w-3xl mx-auto p-10 bg-white/10 border-white/30 shadow-2xl">
        {/* Título principal atualizado para text-stone-900 (Preto/Cinza muito escuro) */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-6">
          Leite Fresco e Puro, Direto do Produtor
        </h1>
        {/* Subtítulo atualizado para text-stone-700 */}
        <p className="text-lg md:text-xl text-stone-700 mb-10 leading-relaxed font-medium">
          Da nossa fazenda para você. Sem intermediários, sem burocracia. Qualidade garantida de quem produz com honestidade.
        </p>
        <WhatsAppBtn text="Negociar pelo WhatsApp" className="text-lg shadow-xl hover:scale-105" />
      </MilkCard>
    </section>
  );
}