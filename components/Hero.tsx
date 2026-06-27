'use client';
import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppBtn from './WhatsAppBtn';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-stone-900/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-stone-700/50"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Leite Fresco e Puro, Direto do Produtor
        </h1>
        <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed">
          Da nossa fazenda para você. Sem intermediários, sem burocracia. Qualidade garantida de quem produz com honestidade.
        </p>
        <WhatsAppBtn text="Negociar pelo WhatsApp" className="text-lg shadow-lg hover:scale-105" />
      </motion.div>
    </section>
  );
}