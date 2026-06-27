import React from 'react';
import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="bg-stone-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Produção Própria: Você sabe o que está comprando.</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Aqui o trabalho é bruto e o produto é de verdade. Nosso leite vem direto do nosso curral, tirado de vacas da raça Holandesa. Sem frescura, sem aditivos de fábrica. É o autêntico leite da roça, tratado com o cuidado de quem conhece a lida diária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/WhatsApp Image 2026-06-27 at 09.43.09 - 2.jpeg" 
              alt="Vaca holandesa no curral da propriedade"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/WhatsApp Image 2026-06-27 at 09.43.09.jpeg" 
              alt="Vaca leiteira da fazenda"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}