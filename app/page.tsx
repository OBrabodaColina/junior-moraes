import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Logistica from '@/components/Logistica';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans">
      <Hero />
      <Sobre />
      <Logistica />
      <Footer />
    </main>
  );
}