import videoSrc from "@/assets/blue-british.mp4";

const TeEstamosEsperandoSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Tu próximo compañero
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
            Te estamos esperando
          </h2>
          <p className="max-w-2xl mx-auto font-sans text-muted-foreground leading-relaxed">
            Descubre la belleza y el carácter único de nuestros gatos British Shorthair. Un amigo fiel y cariñoso está listo para formar parte de tu vida.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black/5">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TeEstamosEsperandoSection;
