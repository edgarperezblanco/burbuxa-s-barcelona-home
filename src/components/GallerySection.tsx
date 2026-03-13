import { useEffect } from 'react';

const GallerySection = () => {
  useEffect(() => {
    // Inject the Elfsight script dynamically when the component mounts
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/block/platforms.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script if the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="galería" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
            Momentos que enamoran
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Síguenos en las redes del día a día para ver crecer a nuestros gatitos.
          </p>
        </div>

        {/* Elfsight Instagram Widget Container */}
        <div className="w-full min-h-[400px] flex items-center justify-center bg-background/50 rounded-[2.5rem] p-4 shadow-soft">
          <div className="elfsight-app-DSXySUWjD7m" data-elfsight-app-lazy></div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/burbuxasbarcelona_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @burbuxasbarcelona_
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
