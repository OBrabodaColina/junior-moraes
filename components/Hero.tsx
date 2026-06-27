import React from 'react';
import WhatsAppBtn from './WhatsAppBtn';

export default function Hero() {
  return (
    <section className="bg-stone-900 text-stone-100 py-20 px-6 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Leite Fresco e Puro, Direto do Produtor
        </h1>
        <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed">
          Da nossa fazenda para você. Sem intermediários, sem burocracia. Qualidade garantida de quem produz com honestidade.
        </p>
        <WhatsAppBtn text="Negociar pelo WhatsApp" className="text-lg" />
      </div>
    </section>
  );
}