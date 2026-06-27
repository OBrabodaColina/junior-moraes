import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Logistica from '@/components/Logistica';
import Footer from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans">
      {/* Background Interativo processado pelo Client */}
      <InteractiveBackground />
      
      {/* Camada de conteúdo por cima do fundo */}
      <div className="relative z-10">
        <Hero />
        <Sobre />
        <Logistica />
        <Footer />
      </div>
    </main>
  );
}