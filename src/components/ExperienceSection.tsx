import { Heart, Shield, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Criados en familia",
    description: "Cada gatito crece en nuestro hogar, socializado con cariño desde el primer día. No son productos, son parte de nuestra familia hasta que se convierten en parte de la tuya.",
  },
  {
    icon: Shield,
    title: "Salud garantizada",
    description: "Controles veterinarios completos, vacunación al día, test genéticos y documentación oficial. Transparencia total en cada paso del proceso.",
  },
  {
    icon: MessageCircle,
    title: "Acompañamiento continuo",
    description: "Nuestra relación no termina con la entrega. Te guiamos en la adaptación, alimentación y cuidados. Siempre estaremos a un mensaje de distancia.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-golden-warm font-sans text-sm tracking-[0.3em] uppercase mb-4">
            La experiencia
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-4">
            Más que un gatito, un nuevo miembro de la familia.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-golden-soft transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
