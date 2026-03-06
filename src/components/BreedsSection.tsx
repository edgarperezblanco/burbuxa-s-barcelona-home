import breedBlue from "@/assets/breed-blue.jpg";
import breedLilac from "@/assets/breed-lilac.jpg";
import breedWhite from "@/assets/breed-white.jpg";
import breedBicolor from "@/assets/breed-bicolor.jpg";
import breedGolden from "@/assets/breed-golden.jpg";
import breedCinnamon from "@/assets/breed-cinnamon.jpg";

const breeds = [
  { name: "Blue", image: breedBlue, description: "El clásico gris azulado, elegante y aterciopelado" },
  { name: "Lilac", image: breedLilac, description: "Tonos suaves y delicados con un encanto único" },
  { name: "White", image: breedWhite, description: "Pureza y majestuosidad en cada mirada" },
  { name: "Bicolor", image: breedBicolor, description: "Combinaciones únicas que hacen especial a cada gatito" },
  { name: "Golden", image: breedGolden, description: "Calidez dorada con ojos que hipnotizan" },
  { name: "Cinnamon", image: breedCinnamon, description: "Tonos canela cálidos y reconfortantes" },
];

const BreedsSection = () => {
  return (
    <section id="razas" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Nuestras variedades
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
            British & Scottish Fold
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Cada color cuenta una historia diferente. Descubre la variedad que robará tu corazón.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {breeds.map((breed) => (
            <div key={breed.name} className="group cursor-pointer">
              <div className="image-rounded overflow-hidden mb-4 shadow-soft group-hover:shadow-warm transition-shadow duration-500">
                <img
                  src={breed.image}
                  alt={`British Shorthair ${breed.name}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-1">{breed.name}</h3>
              <p className="font-sans text-sm text-muted-foreground">{breed.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedsSection;
