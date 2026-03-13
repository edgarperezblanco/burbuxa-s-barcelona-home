import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-6"
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-wide">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Burbuxa's
          </span>
          <span className={`ml-1 ${scrolled ? "text-golden-warm" : "text-golden-warm"}`}>
            Barcelona
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Nuestra historia", "Diseña tu gato", "Experiencia", "Galería", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className={`font-sans text-sm tracking-wide transition-colors ${scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-warm-beige/80 hover:text-primary-foreground"
                }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
