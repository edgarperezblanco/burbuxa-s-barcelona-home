import founderImage from "@/assets/founder.jpg";

const StorySection = () => {
  return (
    <section id="story" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="image-rounded shadow-elevated">
              <img
                src={founderImage}
                alt="Fundadora de Burbuxa's Barcelona con un gato British Shorthair"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
            {/* Trust badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-2xl p-5 shadow-warm border border-border">
              <p className="text-xs font-sans tracking-wider uppercase text-muted-foreground mb-1">Criador Profesional Registrado</p>
              <p className="font-serif text-sm text-foreground">Núcleo Zoológico <span className="font-bold">B2023032</span></p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Nuestra historia
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-8">
              No estaba destinada a construir casas, sino a llenar hogares de amor.
            </h2>
            <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
              <p>
                Lo que comenzó como una pasión por la arquitectura —por crear espacios bellos y funcionales— se transformó en algo mucho más profundo. Descubrí que lo que realmente me movía no eran las paredes, sino lo que sucede dentro de ellas.
              </p>
              <p>
                Burbuxa's Barcelona nació de esa revelación: un criadero familiar donde cada gatito British y Scottish Fold crece rodeado de cariño, cuidados veterinarios de primera y la atención personalizada que merece.
              </p>
              <p>
                En un mundo lleno de criaderos impersonales y estafas, elegimos la transparencia total. Cada familia que nos elige se convierte en parte de nuestra historia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
