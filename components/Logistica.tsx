import React from 'react';
import WhatsAppBtn from './WhatsAppBtn';

export default function Logistica() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-stone-800 mb-6">Como funciona o pedido?</h2>
        <p className="text-lg text-stone-600 mb-12">
          O preço do nosso leite é justo e varia de acordo com o volume que você precisa. Quem compra em maior quantidade tem condições melhores. Chame no WhatsApp para conversarmos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          <div className="bg-stone-100 p-8 rounded-lg border border-stone-200">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Entregas na Cidade (Rio Verde)</h3>
            <p className="text-stone-600">
              Fazemos a entrega direto no seu endereço na cidade, <strong className="text-stone-800">exclusivo para pedidos acima de 50 litros</strong>. Ideal para quem precisa de volume e praticidade.
            </p>
          </div>

          <div className="bg-stone-100 p-8 rounded-lg border border-stone-200">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Retirada na Fazenda</h3>
            <p className="text-stone-600">
              Quer levar menos de 50 litros ou prefere buscar na fonte? Você pode vir retirar qualquer quantidade diretamente aqui com a gente.
            </p>
          </div>
        </div>

        <WhatsAppBtn text="Fazer Orçamento" />
      </div>
    </section>
  );
}