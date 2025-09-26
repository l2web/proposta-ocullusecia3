import { Check, DollarSign, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InvestmentSection = () => {
  const features = [
    "Estratégia personalizada para sua marca",
    "Gestão de todas as mídias sociais do escritório",
    "Relatórios mensais detalhados das campanhas",
    "Consultoria estratégica mensal presencial",
    "Produção completa de conteúdo em vídeo e foto 1x ao mês",
    "Campanhas de tráfego pago otimizadas",
    "Suporte prioritário 24/7",
    "Produção de material gráfico incluso (calendários, cartões etc)",
    "Desenvolvimento de site institucional completo",
    "Todos os custos de hospedagem e manutenção já inclusos no plano"
  ];

  return (
    <section id="investment" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">INVESTIMENTO</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforme sua marca com 
              <br /><span className="text-gradient-gold">investimento inteligente</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um valor mensal que cabe no seu orçamento e traz resultados extraordinários 
              para o crescimento da sua empresa.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="fade-in-up delay-200">
            <div className="card-luxury p-8 md:p-12 relative overflow-hidden">
              {/* Premium badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-luxury text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  COMPLETO
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Pacote Marketing Premium</h3>
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-6xl md:text-7xl font-bold text-gradient-gold">3.200</span>
                    <span className="text-lg text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2">Tudo incluso para acelerar seus resultados</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  // Verificar se o recurso é um dos que deve ser destacado
                  const isHighlighted = [
                    "Produção completa de conteúdo em vídeo e foto 1x ao mês",
                    "Desenvolvimento de site institucional completo",
                    "Gestão de todas as mídias sociais do escritório",
                    "Produção de material gráfico incluso (calendários, cartões etc)"
                  ].includes(feature);
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 fade-in-scale ${isHighlighted ? 'bg-primary/10 p-2 rounded-lg border border-primary/20' : ''}`}
                      style={{animationDelay: `${index * 50}ms`}}
                    >
                      <div className={`w-6 h-6 ${isHighlighted ? 'bg-primary/30' : 'bg-primary/20'} rounded-full flex items-center justify-center`}>
                        <Check className={`w-4 h-4 ${isHighlighted ? 'text-primary' : 'text-primary'}`} />
                      </div>
                      <span className={`${isHighlighted ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{feature}</span>
                    </div>
                  );
                })}
              </div>

              {/* Guarantee badge - agora dentro do card, com espaçamento */}
              <div className="flex flex-col gap-4 justify-center mt-8">
                <div className="bg-secondary border-2 border-primary/30 rounded-full px-6 py-3">
                  <div className="text-sm font-semibold text-primary">✓ Contrato inicial de apenas 3 meses</div>
                </div>
                <div className="bg-green-100 border border-green-300 rounded-lg px-6 py-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div className="text-sm text-green-800">
                    Obs: todos os custos de deslocamento e alimentação já inclusos no plano para o atendimento presencial 1x ao mês em Campo Grande
                  </div>
                </div>
                
                {/* CTA movido para baixo dos cards de observação */}
                <div className="text-center mt-6">
                  <a
                    href="https://wa.me/556782052940?text=Ol%C3%A1%2C%20quero%20escalar%20o%20marketing%20da%20Ócullus%20&%20Cia%20-%2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mb-4 inline-flex items-center justify-center px-8 py-4 rounded-full bg-yellow-400 text-black font-extrabold text-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 border-4 border-black hover:border-yellow-700"
                    style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
                  >
                    Fale conosco agora mesmo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Sem taxa de setup • Cancele quando quiser
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits highlight */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 fade-in-up delay-400">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Foco em resultados</h4>
              <p className="text-sm text-muted-foreground">
                Todas as nossas ações são focadas em gerar ROI para nossos clientes
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Qualidade Premium</h4>
              <p className="text-sm text-muted-foreground">
                Padrão de excelência em todos os nossos projetos
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Resultados Reais</h4>
              <p className="text-sm text-muted-foreground">
                Crescimento comprovado para centenas de clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};