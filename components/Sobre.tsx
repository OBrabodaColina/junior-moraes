import React from 'react';
import Image from 'next/image';
import MilkCard from './MilkCard';

export default function Sobre() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="py-20 px-6">
      <MilkCard className="max-w-5xl mx-auto p-8 md:p-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Produção Própria: Você sabe o que está comprando.</h2>
          <p className="text-lg text-stone-800 max-w-2xl mx-auto font-medium">
            Aqui o trabalho é bruto e o produto é de verdade. Nosso leite vem direto do nosso curral, tirado de vacas da raça Holandesa. Sem frescura, sem aditivos de fábrica. É o autêntico leite da roça, tratado com o cuidado de quem conhece a lida diária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          
          {/* Polaroid 1 - Vaca 1 */}
          <div className="relative bg-white p-4 pb-20 w-full max-w-sm shadow-xl border border-stone-200 transform -rotate-2 transition-transform duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
            <div className="relative h-64 md:h-72 w-full overflow-hidden bg-stone-100 border border-stone-200">
              <Image 
                src={`${basePath}/vaca-curral.jpeg`} 
                alt="Vaca holandesa no curral" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <p className="text-2xl font-bold text-stone-800" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive, sans-serif' }}>
                Funcionária do Mês
              </p>
              <p className="text-stone-500 text-sm font-medium mt-1">Setor de Produção</p>
            </div>
          </div>

          {/* Polaroid 2 - Vaca 2 */}
          <div className="relative bg-white p-4 pb-20 w-full max-w-sm shadow-xl border border-stone-200 transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl hover:z-10 mt-8 md:mt-0">
            <div className="relative h-64 md:h-72 w-full overflow-hidden bg-stone-100 border border-stone-200">
              <Image 
                src={`${basePath}/vaca-perfil.jpeg`} 
                alt="Vaca leiteira" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="absolute bottom-6 left-0 w-full text-center">
              <p className="text-2xl font-bold text-stone-800" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive, sans-serif' }}>
                Funcionária do Mês
              </p>
              <p className="text-stone-500 text-sm font-medium mt-1">Controle de Qualidade</p>
            </div>
          </div>

        </div>
      </MilkCard>
    </section>
  );
}