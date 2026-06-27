import React from 'react';
import WhatsAppBtn from './WhatsAppBtn';
import MilkCard from './MilkCard';

export default function Logistica() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <MilkCard className="p-8 md:p-12 mb-10">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Como funciona o pedido?</h2>
          <p className="text-lg text-stone-800 mb-8 font-medium max-w-3xl mx-auto">
            O preço do nosso leite é justo e varia de acordo com o volume que você precisa. Quem compra em maior quantidade tem condições melhores. Chame no WhatsApp para conversarmos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
            <div className="bg-white/60 p-8 rounded-2xl shadow-sm border border-stone-200">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Entregas na Cidade (Rio Verde)</h3>
              <p className="text-stone-800 font-medium">
                Fazemos a entrega direto no seu endereço na cidade, <strong className="text-stone-900 font-extrabold">exclusivo para pedidos acima de 50 litros</strong>. Ideal para quem precisa de volume e praticidade.
              </p>
            </div>

            <div className="bg-white/60 p-8 rounded-2xl shadow-sm border border-stone-200">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Retirada na Fazenda</h3>
              <p className="text-stone-800 font-medium">
                Quer levar menos de 50 litros ou prefere buscar na fonte? Você pode vir retirar qualquer quantidade diretamente aqui com a gente.
              </p>
            </div>
          </div>
          
          <WhatsAppBtn text="Fazer Orçamento" className="shadow-lg hover:scale-105" />
        </MilkCard>
      </div>
    </section>
  );
}