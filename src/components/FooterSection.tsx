const FooterSection = () => {
  return (
    <footer id="contacto" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground leading-tight mb-4">
              ¿Listo para conocer a tu nuevo compañero?
            </h2>
            <p className="font-sans text-warm-beige/70 leading-relaxed">
              Contáctanos para conocer a nuestros gatitos disponibles y comenzar el camino hacia tu nuevo miembro de la familia.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href="https://www.instagram.com/burbuxasbarcelona_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-golden-warm/90 hover:bg-golden-warm text-charcoal font-sans font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide"
            >
              Escríbenos
            </a>
          </div>
        </div>

        <div className="border-t border-charcoal-light/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-serif text-primary-foreground text-lg">
              Burbuxa's <span className="text-golden-warm">Barcelona</span>
            </p>
            <p className="font-sans text-sm text-warm-beige/50 mt-1">
              Criadero profesional registrado · Núcleo Zoológico B2023032
            </p>
          </div>
          <p className="font-sans text-xs text-warm-beige/40">
            © {new Date().getFullYear()} Burbuxa's Barcelona. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
