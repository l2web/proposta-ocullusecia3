import React, { useRef } from 'react';
import { FileText, CheckCircle, TrendingUp } from 'lucide-react';

// Versão clara dos componentes para impressão
const PrintableHeroSection = () => (
  <section className="w-full py-12 px-4 bg-white text-black">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="block">Proposta</span>
          <span className="block">Gervásio Oliveira</span>
          <span className="block">e Advogados Associados</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
          Estratégia de marketing digital completa para seu escritório de advocacia
        </p>
        
        <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
          <h3 className="text-xl font-semibold mb-4">Transforme sua presença digital</h3>
          <p className="text-gray-700 mb-4">
            Apresentamos uma solução completa de marketing digital desenvolvida especificamente para escritórios de advocacia que desejam aumentar sua visibilidade online, atrair mais clientes qualificados e fortalecer sua marca no mercado jurídico.
          </p>
          <p className="text-gray-700">
            Nossa proposta foi elaborada com base nas necessidades específicas do seu escritório, considerando o mercado jurídico atual e as melhores práticas de marketing digital para o setor.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PrintableAboutSection = () => (
  <section className="w-full py-12 px-4 bg-gray-50 text-black">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
          Somos uma agência de marketing digital especializada em resultados. Nosso foco é transformar sua presença online e gerar mais negócios para seu escritório.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Com uma equipe de profissionais experientes e dedicados, desenvolvemos estratégias personalizadas que atendem às necessidades específicas de cada cliente, garantindo resultados concretos e mensuráveis.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-3 rounded-lg border border-gray-200 mb-6">
        <h3 className="text-base font-semibold mb-2 text-center">Por que escolher a Perfil Marketing?</h3>
        <p className="text-sm text-gray-700">
          Nossa agência oferece atendimento personalizado para seu escritório de advocacia. Entendemos o setor jurídico e desenvolvemos estratégias eficazes para atrair clientes qualificados, com transparência e relatórios detalhados.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-semibold text-center">Experiência</h3>
          </div>
          <p className="text-sm text-gray-700">
            Mais de 5 anos em marketing digital para escritórios de advocacia, com conhecimento do mercado jurídico.
          </p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-semibold text-center">Metodologia</h3>
          </div>
          <p className="text-sm text-gray-700">
            Abordagem personalizada com foco em resultados mensuráveis e técnicas modernas de marketing digital.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PrintableClientsSection = () => (
  <section className="w-full py-6 px-4 bg-white text-black">
    <div className="container mx-auto">
      <div className="text-center mb-3">
        <h2 className="text-xl font-bold mb-1">Nossos Clientes</h2>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto">
          Empresas que confiam em nosso trabalho
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
        <div className="flex items-center justify-center p-1">
          <p className="text-sm font-semibold">Pax Maracaju</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="text-sm font-semibold">Grand Prix</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="text-sm font-semibold">Infinity</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="text-sm font-semibold">NewCred</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="text-sm font-semibold">R Import</p>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="text-sm font-semibold">Empreendimentos Parizotto</p>
        </div>
      </div>
    </div>
  </section>
);

const PrintableInvestmentSection = () => {
  const features = [
    "Estratégia personalizada para o escritório",
    "Gestão de todas as mídias sociais do escritório",
    "Relatórios mensais de desempenho",
    "Consultoria estratégica",
    "Produção completa de conteúdo em vídeo e foto 1x ao mês",
    "Campanhas de tráfego otimizadas",
    "Suporte 24/7",
    "Produção de material gráfico incluso (calendários, cartões etc)",
    "Desenvolvimento de site institucional completo",
    "Todos os custos de hospedagem e manutenção já inclusos no plano"
  ];

  return (
    <section className="w-full py-12 px-4 bg-gray-50 text-black" id="investment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investimento</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Plano completo para o crescimento digital do seu escritório
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Plano Premium</h3>
                  <p className="text-gray-600">Solução completa para seu escritório</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-3xl font-bold">R$ 3.200/mês</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const isHighlighted = [
                    "Produção completa de conteúdo em vídeo e foto 1x ao mês",
                    "Desenvolvimento de site institucional completo",
                    "Gestão de todas as mídias sociais do escritório",
                    "Produção de material gráfico incluso (calendários, cartões etc)"
                  ].includes(feature);
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 ${isHighlighted ? 'bg-gray-100 p-2 rounded-lg border border-gray-200' : ''}`}
                    >
                      <div className={`w-6 h-6 ${isHighlighted ? 'bg-gray-300' : 'bg-gray-200'} rounded-full flex items-center justify-center`}>
                        <span className="text-gray-700">✓</span>
                      </div>
                      <span className={`${isHighlighted ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4 justify-center mt-8">
                <div className="bg-gray-100 border border-gray-300 rounded-full px-6 py-3">
                  <div className="text-sm font-semibold text-gray-700">✓ Contrato inicial de apenas 3 meses</div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-4 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <div className="text-sm text-green-800">
                    Obs: todos os custos de deslocamento e alimentação já inclusos no plano para o atendimento presencial 1x ao mês em Campo Grande
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Sem taxa de setup • Cancele quando quiser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PrintableFooter = () => (
  <footer className="w-full py-8 px-4 bg-white text-black border-t border-gray-200">
    <div className="container mx-auto">
      <div className="text-center">
        <p className="text-gray-600 mb-2">Perfil Marketing Digital</p>
        <p className="text-gray-600 text-sm">contato@perfilmarketing.com.br | (67) 8205-2940</p>
        <p className="text-gray-500 text-xs mt-4">© {new Date().getFullYear()} Perfil Marketing Digital. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const PrintVersion = () => {
  const componentRef = useRef(null);

  return (
    <div className="min-h-screen bg-white">      
      <div ref={componentRef} className="bg-white print:p-0 max-w-[210mm] mx-auto" style={{ minHeight: '297mm' }}>
        <PrintableHeroSection />
        <PrintableAboutSection />
        <PrintableClientsSection />
        <PrintableInvestmentSection />
        <PrintableFooter />
      </div>
    </div>
  );
};

export default PrintVersion;