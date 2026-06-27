import React from 'react';
import WhatsAppBtn from './WhatsAppBtn';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <p className="text-xl font-semibold text-white mb-2">
          Pronto para fazer o seu pedido ou tirar dúvidas sobre grandes volumes?
        </p>
        <p className="mb-8">
          📍 Fazenda localizada na zona rural, a [inserir quilometragem] km de Rio Verde, GO.
        </p>
        
        <WhatsAppBtn text="Consultar Preço" />
        
        <p className="text-sm text-stone-500 mt-10">
          *Atendimento direto com o produtor. Valores e disponibilidade sob consulta via WhatsApp.
        </p>
      </div>
    </footer>
  );
}