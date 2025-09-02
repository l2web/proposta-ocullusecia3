import { Play, Eye, ThumbsUp } from 'lucide-react';

export const VideoSection = () => {
  const videos = [
    {
      src: "/vid/QG do Imóvel Próprio! Para você que está sonhando com sua casa, apartamento ou loteamento, essa .mp4",
      title: "QG do Imóvel Próprio! Para você que está sonhando com sua casa, apartamento ou loteamento, essa"
    },
    {
      src: "/vid/Mães são nossas primeiras guias, que com amor e dedicação nos mostram o caminho a seguir. Aqui n.mp4",
      title: "Mães são nossas primeiras guias, que com amor e dedicação nos mostram o caminho a seguir. Aqui n"
    },
    {
      src: "/vid/Muitos mitos são criados em relação á planos funerários. Aqui na Pax Maracaju, além de prestar u.mp4",
      title: "Muitos mitos são criados em relação á planos funerários. Aqui na Pax Maracaju, além de prestar u"
    },
    {
      src: "/vid/Que história inspiradora! ❤️ A determinação de uma mãe e o amor pelo seu filho, aliados ao profi.mp4",
      title: "Que história inspiradora! ❤️ A determinação de uma mãe e o amor pelo seu filho, aliados ao profi"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">NOSSO TRABALHO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Veja nossos <span className="text-gradient-gold">projetos</span>
            <br />em ação
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos casos de sucesso e veja como transformamos 
            ideias em resultados excepcionais para nossos clientes.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {videos.map((video, index) => (
            <div 
              key={video.src} 
              className="group fade-in-scale flex justify-center"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[9/16] bg-gradient-dark flex flex-col items-center mx-auto w-[90vw] max-w-xs md:w-full">
                <video 
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                  poster=""
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1 text-foreground truncate" title={video.title}>{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
};