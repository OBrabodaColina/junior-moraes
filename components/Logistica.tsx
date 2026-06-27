'use client';
import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppBtn from './WhatsAppBtn';

export default function Logistica() {
  return (
    <section className="py-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/50"
      >
        <h2 className="text-3xl font-bold text-stone-800 mb-6">Como funciona o pedido?</h2>
        <p className="text-lg text-stone-700 mb-12 font-medium">
          O preço do nosso leite é justo e varia de acordo com o volume que você precisa. Quem compra em maior quantidade tem condições melhores. Chame no WhatsApp para conversarmos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          <motion.div whileHover={{ y: -5 }} className="bg-white/80 p-8 rounded-2xl shadow-sm border border-stone-200">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Entregas na Cidade (Rio Verde)</h3>
            <p className="text-stone-700">
              Fazemos a entrega direto no seu endereço na cidade, <strong className="text-stone-900">exclusivo para pedidos acima de 50 litros</strong>. Ideal para quem precisa de volume e praticidade.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white/80 p-8 rounded-2xl shadow-sm border border-stone-200">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Retirada na Fazenda</h3>
            <p className="text-stone-700">
              Quer levar menos de 50 litros ou prefere buscar na fonte? Você pode vir retirar qualquer quantidade diretamente aqui com a gente.
            </p>
          </motion.div>
        </div>

        <WhatsAppBtn text="Fazer Orçamento" className="shadow-lg hover:scale-105" />
      </motion.div>
    </section>
  );
}