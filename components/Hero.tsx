import React from 'react';
import WhatsAppBtn from './WhatsAppBtn';
import MilkCard from './MilkCard';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <MilkCard className="max-w-3xl mx-auto p-10 bg-white/60 border-white/50">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-6">
          Leite Fresco e Puro, Direto do Produtor
        </h1>
        <p className="text-lg md:text-xl text-stone-800 mb-10 leading-relaxed font-medium">
          Da nossa fazenda para você. Sem intermediários, sem burocracia. Qualidade garantida de quem produz com honestidade.
        </p>
        <WhatsAppBtn text="Negociar pelo WhatsApp" className="text-lg shadow-lg hover:scale-105" />
      </MilkCard>
    </section>
  );
}