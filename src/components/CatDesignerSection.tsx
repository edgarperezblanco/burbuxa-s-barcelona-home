import { useState } from "react";
import { Sparkles, Heart } from "lucide-react";

// Assets
import blueBritishHembra from "@/assets/blue-british-hembra.png";
import blueBritishMacho from "@/assets/blue-british-macho.png";
import blueScotishHembra from "@/assets/blue-scotish-hembra.png";
import blueScotishMacho from "@/assets/blue-scotish-macho.png";

import chocolateBritishHembra from "@/assets/chocolate-british-hembra.png";
import chocolateBritishMacho from "@/assets/chocolate-british-macho.png";
import chocolateScotishHembra from "@/assets/chocolate-scotish-hembra.png";
import chocolateScotishMacho from "@/assets/chocolate-scotish-macho.png";

import goldenBritishHembra from "@/assets/golden-british-hembra.png";
import goldenBritishMacho from "@/assets/golden-british-macho.png";
import goldenScotishHembra from "@/assets/golden-scotish-hembra.png";
import goldenScotishMacho from "@/assets/golden-scotish-macho.png";

import lilacBritishHembra from "@/assets/lilac-british-hembra.png";
import lilacBritishMacho from "@/assets/lilac-british-macho.png";
import lilacScotishHembra from "@/assets/lilac-scotish-hembra.png";
import lilacScotishMacho from "@/assets/lilac-scotish-macho.png";

import whiteBritishHembra from "@/assets/white-british-hembra.png";
import whiteBritishMacho from "@/assets/white-british-macho.png";
import whiteScotishHembra from "@/assets/white-scotish-hembra.png";
import whiteScotishMacho from "@/assets/white-scotish-macho.png";

// Mantendremos el video como un recurso disponible,
// pero por ahora hemos mapeado las 20 fotos exactas.

type Breed = "British Shorthair" | "Scottish Fold";
type Color = "Blue" | "Lilac" | "Golden" | "Blanco" | "Marron";
type Sex = "Macho" | "Hembra";

const breeds: Breed[] = ["British Shorthair", "Scottish Fold"];
const sexes: Sex[] = ["Macho", "Hembra"];

const colors: { name: Color; label: string; bgClass: string }[] = [
    { name: "Blue", label: "Azul", bgClass: "bg-[#8ba3b5]" },
    { name: "Lilac", label: "Lilac", bgClass: "bg-[#d4c1cc]" },
    { name: "Golden", label: "Dorado", bgClass: "bg-[#e2aa5f]" },
    { name: "Blanco", label: "Blanco", bgClass: "bg-[#f8f9fa] border border-gray-200" },
    { name: "Marron", label: "Marrón", bgClass: "bg-[#a06d53]" },
];

const mediaMap: Record<string, string> = {
    "British Shorthair-Blue-Hembra": blueBritishHembra,
    "British Shorthair-Blue-Macho": blueBritishMacho,
    "Scottish Fold-Blue-Hembra": blueScotishHembra,
    "Scottish Fold-Blue-Macho": blueScotishMacho,

    "British Shorthair-Marron-Hembra": chocolateBritishHembra,
    "British Shorthair-Marron-Macho": chocolateBritishMacho,
    "Scottish Fold-Marron-Hembra": chocolateScotishHembra,
    "Scottish Fold-Marron-Macho": chocolateScotishMacho,

    "British Shorthair-Golden-Hembra": goldenBritishHembra,
    "British Shorthair-Golden-Macho": goldenBritishMacho,
    "Scottish Fold-Golden-Hembra": goldenScotishHembra,
    "Scottish Fold-Golden-Macho": goldenScotishMacho,

    "British Shorthair-Lilac-Hembra": lilacBritishHembra,
    "British Shorthair-Lilac-Macho": lilacBritishMacho,
    "Scottish Fold-Lilac-Hembra": lilacScotishHembra,
    "Scottish Fold-Lilac-Macho": lilacScotishMacho,

    "British Shorthair-Blanco-Hembra": whiteBritishHembra,
    "British Shorthair-Blanco-Macho": whiteBritishMacho,
    "Scottish Fold-Blanco-Hembra": whiteScotishHembra,
    "Scottish Fold-Blanco-Macho": whiteScotishMacho,
};

const getMediaForCombination = (breed: Breed, color: Color, sex: Sex) => {
    const key = `${breed}-${color}-${sex}`;
    return { type: "image" as const, src: mediaMap[key] || blueBritishMacho };
};

const CatDesignerSection = () => {
    const [breed, setBreed] = useState<Breed>("British Shorthair");
    const [color, setColor] = useState<Color>("Blue");
    const [sex, setSex] = useState<Sex>("Macho");

    const currentMedia = getMediaForCombination(breed, color, sex);

    // Clave única para forzar animación cuando cambia la media
    const mediaKey = `${breed}-${color}-${sex}`;

    return (
        <section id="diseña-tu-gato" className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Creador de Sueños
                        <Sparkles className="w-4 h-4" />
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-4">
                        ¿Cómo imaginas a tu gatito?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Juega con las diferentes opciones y visualiza a tu compañero ideal. Cada combinación tiene un encanto único esperando por ti.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Media Display Area */}
                    <div className="relative aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden shadow-warm bg-card border-[8px] border-white/50 animate-fade-in group">
                        <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
                        <div key={mediaKey} className="absolute inset-0 animate-in fade-in zoom-in-95 duration-700">
                            <img
                                src={currentMedia.src}
                                alt={`Gato ${breed} color ${color} ${sex}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Controls Area */}
                    <div className="flex flex-col gap-10 bg-white/40 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-soft animate-fade-in">

                        {/* 1. Raza */}
                        <div className="space-y-5">
                            <h3 className="font-serif text-2xl text-foreground flex items-center gap-2">
                                1. Elige su raza
                            </h3>
                            <div className="flex bg-muted/50 p-1.5 rounded-full relative">
                                {breeds.map((b) => (
                                    <button
                                        key={b}
                                        onClick={() => setBreed(b)}
                                        className={`flex-1 py-3.5 px-6 rounded-full text-sm sm:text-base font-medium transition-all duration-500 z-10 
                      ${breed === b ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        {b}
                                    </button>
                                ))}
                                {/* Active Slider Background */}
                                <div
                                    className="absolute inset-y-1.5 w-[calc(50%-0.375rem)] bg-white rounded-full shadow-sm transition-transform duration-500 ease-out"
                                    style={{
                                        transform: breed === "British Shorthair" ? "translateX(0)" : "translateX(100%)",
                                    }}
                                />
                            </div>
                        </div>

                        {/* 2. Color */}
                        <div className="space-y-5">
                            <h3 className="font-serif text-2xl text-foreground">
                                2. Su color
                            </h3>
                            <div className="flex flex-wrap gap-4 sm:gap-6">
                                {colors.map((c) => (
                                    <div key={c.name} className="flex flex-col items-center gap-2">
                                        <button
                                            onClick={() => setColor(c.name)}
                                            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 
                        ${color === c.name ? 'ring-4 ring-primary/20 ring-offset-4 ring-offset-white scale-110' : 'hover:scale-105 hover:ring-2 hover:ring-primary/10 hover:ring-offset-2'}`}
                                            aria-label={`Seleccionar color ${c.label}`}
                                        >
                                            <span className={`absolute inset-0 rounded-full shadow-inner ${c.bgClass}`} />
                                            {color === c.name && (
                                                <Sparkles className="w-5 h-5 text-white absolute drop-shadow-md mix-blend-overlay" />
                                            )}
                                        </button>
                                        <span className={`text-xs font-medium transition-colors ${color === c.name ? 'text-primary' : 'text-muted-foreground'}`}>
                                            {c.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Sexo */}
                        <div className="space-y-5">
                            <h3 className="font-serif text-2xl text-foreground">
                                3. ¿Macho o Hembra?
                            </h3>
                            <div className="flex gap-4">
                                {sexes.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSex(s)}
                                        className={`flex-1 py-4 px-6 border-2 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2
                      ${sex === s
                                                ? 'border-primary/50 bg-primary/5 text-primary shadow-sm'
                                                : 'border-transparent bg-muted/30 hover:bg-muted/50 text-muted-foreground'}`}
                                    >
                                        {sex === s && <Heart className="w-4 h-4 animate-in zoom-in" />}
                                        <span className="font-medium text-lg">{s}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatDesignerSection;
