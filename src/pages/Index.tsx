import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { VideoSection } from '@/components/VideoSection';
import { ClientsSection } from '@/components/ClientsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { InvestmentSection } from '@/components/InvestmentSection';
import { Footer } from '@/components/Footer';

// Tarja especial entre preço e vídeos
const PresenteSection = () => (
  <section className="w-full py-16 px-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 flex flex-col items-center justify-center text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black drop-shadow-lg">Temos uma oportunidade única para você</h2>
    <p className="text-lg md:text-xl mb-8 text-black font-medium">Essa proposta é exclusiva para a Gervásio Oliveira e Advogados Associados</p>
    <a
      href="#investment"
      className="px-8 py-4 rounded-full bg-black text-yellow-300 font-extrabold text-lg shadow-lg hover:bg-yellow-900 hover:text-white transition-all duration-300 border-4 border-black hover:border-yellow-700 transform hover:scale-105 focus:scale-105 inline-block"
      style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
    >
      Ver proposta
    </a>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ClientsSection />
      <PresenteSection />
      <InvestmentSection />
      <Footer />
    </div>
  );
};

export default Index;
