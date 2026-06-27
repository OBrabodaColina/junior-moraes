import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import SobreFundador from '@/components/SobreFundador';
import Logistica from '@/components/Logistica';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function Home() {
  return (
    // REMOVIDO: bg-stone-900. Agora a tag main é transparente e revela o background que está atrás dela!
    <main className="relative min-h-screen font-sans">
      
      {/* Background Interativo (Fica na camada -z-10) */}
      <InteractiveBackground />
      
      {/* Camada de conteúdo por cima do fundo (Fica na camada z-10) */}
      <div className="relative z-10">
        <Hero />
        <Sobre />
        {/* Nova seção do Fundador adicionada logo após o produto */}
        <SobreFundador />
        <Logistica />
        <Footer />
      </div>
    </main>
  );
}