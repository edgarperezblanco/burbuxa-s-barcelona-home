import heroImage from "@/assets/hero-kitten.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="British Shorthair kitten in a cozy basket"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-6">
            British & Scottish Fold · Barcelona
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-primary-foreground leading-[1.15] mb-6">
            Construyendo hogares llenos de amor y ronroneos.
          </h1>
          <p className="text-lg md:text-xl text-warm-beige/90 font-sans font-light leading-relaxed mb-10 max-w-lg">
            Somos Burbuxa's, un criadero transparente dirigido por auténticos enamorados de los gatos British y Scottish Fold en Barcelona.
          </p>
          <a
            href="#story"
            className="inline-flex items-center gap-3 bg-golden-warm/90 hover:bg-golden-warm text-charcoal font-sans font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-warm text-sm tracking-wide uppercase"
          >
            Conoce a nuestra familia
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="translate-y-px">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s", opacity: 0 }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-warm-beige/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
