import { Sparkles } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">O QUE FAZEMOS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nossa <span className="text-gradient-gold">estratégia</span>
            <br />para sua marca
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto fade-in-up delay-200">
          <div className="card-luxury p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Estratégia Digital</h3>
                  <p className="text-muted-foreground">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Branding & Design</h3>
                  <p className="text-muted-foreground">
                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Produção de Conteúdo</h3>
                  <p className="text-muted-foreground">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                    fugit, sed quia consequuntur.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Gestão Completa</h3>
                  <p className="text-muted-foreground">
                    Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
                    quisquam est, qui dolorem ipsum.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="text-lg font-semibold text-primary mb-3">Nosso Compromisso</h4>
                <p className="text-muted-foreground">
                  At vero eos et accusamus et iusto odio dignissimos qui blanditiis 
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                  excepturi sint occaecati cupiditate non provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};