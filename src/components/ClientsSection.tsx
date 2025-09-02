import { Building2, TrendingUp } from 'lucide-react';
import clientLogos from '@/assets/client-logos.jpg';

export const ClientsSection = () => {
  // Logos fictícios dos clientes
  const clients = [
    { name: "NewCred", logo: "/img/logo-newcred.png" },
    { name: "Suncare", logo: "/img/logo-suncare.png" },
    { name: "Infinity", logo: "/img/Logo-Infinity.png" },
    { name: "Grand Prix", logo: "/img/Logo-Grand-Prix.png" },
    { name: "Pax Maracaju", logo: "/img/Logo-Pax-Maracaju.png" },
    { name: "Parizotto", logo: "/img/logo-parizotto.png" }
  ];

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(-45deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">NOSSOS CLIENTES</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Marcas que <span className="text-gradient-gold">confiam</span>
            <br />em nosso trabalho
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Temos o orgulho de trabalhar com empresas de diversos segmentos, 
            sempre entregando resultados que superam expectativas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center fade-in-up">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">500+</div>
            <p className="text-muted-foreground">Campanhas Criadas</p>
          </div>
          <div className="text-center fade-in-up delay-100">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">15+</div>
            <p className="text-muted-foreground">Anos de Mercado</p>
          </div>
          <div className="text-center fade-in-up delay-200">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">98%</div>
            <p className="text-muted-foreground">Satisfação dos Clientes</p>
          </div>
        </div>

        {/* Clients grid */}
        <div className="fade-in-up delay-300">
          <div className="flex flex-col items-center gap-6 mb-12">
            {/* Mobile: uma logo abaixo da outra; Desktop: linhas */}
            <div className="flex flex-col gap-4 w-full md:hidden">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className="group cursor-pointer fade-in-scale"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="card-luxury p-6 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-gold">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: 3 em cima, 3 embaixo */}
            <div className="hidden md:flex flex-col items-center gap-6 w-full">
              <div className="flex justify-center gap-8 w-full">
                {clients.slice(0, 3).map((client, index) => (
                  <div
                    key={client.name}
                    className="group cursor-pointer fade-in-scale"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="card-luxury p-6 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-gold">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-8 w-full">
                {clients.slice(3, 6).map((client, index) => (
                  <div
                    key={client.name}
                    className="group cursor-pointer fade-in-scale"
                    style={{ animationDelay: `${(index + 3) * 50}ms` }}
                  >
                    <div className="card-luxury p-6 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-gold">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial highlight */}
        <div className="max-w-4xl mx-auto text-center fade-in-up delay-400">
          <div className="card-luxury p-8 md:p-12">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-light italic text-muted-foreground mb-6 leading-relaxed">
              "A Perfil Marketing esteve conosco desde nosso início. Desenvolveram a nossa identidade visual e são responsáveis por todas as nossas campanhas de markting."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">WR</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">William Ribas</div>
                <div className="text-sm text-muted-foreground">Gestor da New Cred</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};