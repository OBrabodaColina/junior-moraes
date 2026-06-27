import React from 'react';
import Image from 'next/image';

export default function SobreFundador() {
  return (
    <section className="bg-stone-50 py-24 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Foto do Fundador: Apresentação Livre, sem cortes e sem quadro */}
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative w-full max-w-sm drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-[1.02]">
            <Image 
              src="/junior-otimizado.jpeg" 
              alt="João Batista de Moraes Junior" 
              // Usamos width e height para manter a proporção real da foto sem cortar o chapéu
              width={600}
              height={800}
              className="w-full h-auto rounded-3xl filter contrast-110 brightness-105"
            />
          </div>
        </div>

        {/* Copywriting: Autoridade e Humanização */}
        <div className="w-full md:w-7/12 text-left">
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
            Conheça Quem Está Por Trás
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-8 leading-tight">
            Tradição, robustez e 30 anos de trabalho duro.
          </h3>
          
          <div className="space-y-5 text-lg text-stone-700 font-medium leading-relaxed">
            <p>
              Muito prazer, sou <strong className="text-stone-900">João Batista de Moraes Junior</strong> — mas por aqui, todos me chamam de Junior.
            </p>
            <p>
              Minha trajetória não começou ontem. São quase três décadas de dedicação diária e trabalho árduo na <strong>Sertão Petróleo</strong>, no polo industrial próximo à GO 174. O setor industrial me ensinou desde cedo o valor inegociável da disciplina, da responsabilidade e do compromisso com a excelência.
            </p>
            <p>
              Hoje, trago toda essa bagagem, robustez e seriedade para a nossa produção leiteira. O mesmo rigor e honestidade que apliquei durante toda a minha vida na indústria, eu aplico no cuidado com nosso rebanho e no trato com meus clientes. 
            </p>
            <blockquote className="text-xl font-bold text-stone-900 italic pt-6 mt-6 border-t border-stone-300">
              "Aqui, você não compra apenas leite fresco. Você leva para casa a garantia e o resultado da dedicação de uma vida inteira."
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}