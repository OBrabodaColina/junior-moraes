'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <section className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-white/50"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Produção Própria: Você sabe o que está comprando.</h2>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto font-medium">
            Aqui o trabalho é bruto e o produto é de verdade. Nosso leite vem direto do nosso curral, tirado de vacas da raça Holandesa. Sem frescura, sem aditivos de fábrica. É o autêntico leite da roça, tratado com o cuidado de quem conhece a lida diária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="/vaca-curral.jpeg" 
              alt="Vaca holandesa no curral da propriedade"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="/vaca-perfil.jpeg" 
              alt="Vaca leiteira da fazenda"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}