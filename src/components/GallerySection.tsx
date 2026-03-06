import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Gatito jugando con ovillo de lana" },
  { src: gallery2, alt: "Dos gatitos acurrucados" },
  { src: gallery3, alt: "Gatito dormido en una manta" },
  { src: gallery4, alt: "Scottish Fold explorando" },
  { src: gallery5, alt: "Gatito en cesta con naranjas" },
  { src: gallery6, alt: "Familia feliz con su nuevo gatito" },
];

const GallerySection = () => {
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
            Cada foto cuenta la historia de un hogar más feliz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className={`image-rounded overflow-hidden group cursor-pointer ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
                loading="lazy"
              />
            </div>
          ))}
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
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            Síguenos en Instagram — @burbuxasbarcelona_
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
