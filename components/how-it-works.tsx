import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Rescate",
    description: "Las personas voluntarias de ReFood hacen rutas por el barrio y recogen el excedente de comida del comercio local.",
    image: "/images/metodo-rescate.jpg",
    alt: "Voluntarios haciendo ruta por las calles del barrio con sus carritos"
  },
  {
    number: "02",
    title: "Distribución",
    description: "En el local, el equipo organiza y registra la comida y la reparte en packs según las necesidades de cada familia.",
    image: "/images/metodo-distribucion.jpg",
    alt: "Voluntario pesando y registrando alimentos en el local de ReFood"
  },
  {
    number: "03",
    title: "Entrega",
    description: "Las familias acuden a recoger su comida a la hora indicada en los días de reparto y devuelven el material limpio listo para el día siguiente.",
    image: "/images/metodo-entrega.jpg",
    alt: "Voluntario llegando al local de ReFood Madrid con un carrito cargado de alimentos"
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">El Método ReFood</span>
          <h2 className="text-foreground mb-4">
            Rescatar · Redistribuir · Revolucionar
          </h2>
          <div className="divider-refood mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto normal-case">
            Un modelo sencillo que cualquier barrio puede replicar. 
            Así es como transformamos el exceso en solidaridad cada día.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card-refood overflow-hidden group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover border-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary px-4 py-2" style={{ borderRadius: 0 }}>
                  <span className="font-extrabold text-primary-foreground text-2xl">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-foreground mb-3 text-xl">{step.title}</h3>
                <p className="text-foreground/70 text-sm normal-case">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
