import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import perfilLogo from '@/assets/perfil-logo.jpg';

export const Footer = () => {
  const quickLinks = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Clientes", href: "#clients" },
    { name: "Contato", href: "#contact" }
  ];

  const services = [
    { name: "Marketing Digital", href: "#" },
    { name: "Produção Visual", href: "#" },
    { name: "Gestão de Mídias", href: "#" },
    { name: "Criação de Sites", href: "#" },
    { name: "Campanhas de Tráfego", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(-135deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/img/logo-perfil-marketing-400-185-branco.webp" 
                  alt="Perfil Marketing" 
                  className="w-32 h-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gradient-gold">PERFIL</h3>
                  <p className="text-primary font-medium">MARKETING</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Transformamos marcas em experiências inesquecíveis através de estratégias 
                inovadoras e design excepcional. Mais de 15 anos criando sucessos.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Dourados, MS</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(67)9 8205-2940</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contato@perfilmarketing.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <span className="w-5 h-5 text-primary">🌐</span>
                  <a href="https://perfilmarketing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    perfilmarketing.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links removidos */}

            {/* Services */}
            <div className="fade-in-up delay-200">
              <h4 className="text-lg font-semibold text-foreground mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright atualizado */}
            <div className="text-muted-foreground text-sm">
              2025 Perfil Marketing - <a href="https://perfilmarketing.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">perfilmarketing.com</a>
            </div>

            {/* Back to top */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
            >
              Voltar ao topo
              <div className="w-6 h-6 border border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="text-xs">↑</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};