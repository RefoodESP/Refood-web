import Image from "next/image"

export function About() {
  return (
    <section id="que-es" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Quiénes somos</span>
          <h2 className="text-foreground mb-4">
            El puente entre el exceso y la necesidad
          </h2>
          <div className="divider-refood mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              ReFood España nace de una idea sencilla: en cada barrio sobra comida buena y, 
              a la vez, hay familias que la necesitan. Entre esos dos extremos, el exceso y 
              la necesidad, están las personas voluntarias de ReFood.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Somos nosotros quienes, cada día, tendemos el puente: recogemos el excedente 
              del comercio del barrio, lo preparamos y lo repartimos cerca de donde se generó.
            </p>
            <blockquote className="cita-refood">
              El objetivo concreto es claro y medible: desperdicio cero. Pero lo que de 
              verdad construimos por el camino es otra cosa: un barrio más unido, más atento 
              y más capaz de cuidarse a sí mismo.
            </blockquote>
          </div>

          <div className="relative">
            <Image
              src="/images/equipo-refood.jpg"
              alt="Equipo de voluntarios de ReFood con delantales sosteniendo cajas de frutas y verduras"
              width={600}
              height={400}
              className="foto-refood w-full border-0"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="card-refood p-8">
            <div className="refood-icon mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-lg normal-case">Misión</h3>
            <p className="text-foreground/70 font-semibold text-xl mb-4 normal-case">
              Acabar con el desperdicio, barrio a barrio
            </p>
            <p className="text-foreground/60 normal-case">
              Redistribuir el excedente de comida de los establecimientos del barrio 
              entre personas en situación de vulnerabilidad.
            </p>
          </div>

          {/* Visión */}
          <div className="card-refood p-8 border-primary border-2">
            <div className="refood-icon mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-lg normal-case">Visión</h3>
            <p className="text-foreground/70 font-semibold text-xl mb-4 normal-case">
              Un barrio con desperdicio cero
            </p>
            <p className="text-foreground/60 normal-case">
              Un tejido social de barrio fuerte, donde establecimientos, voluntarias 
              y familias interactúan y refuerzan sus relaciones.
            </p>
          </div>

          {/* Valores */}
          <div className="card-refood p-8">
            <div className="refood-icon mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-lg normal-case">Valores</h3>
            <ul className="space-y-3 text-foreground/60 normal-case">
              <li>
                <span className="font-bold text-foreground">Aprovechar.</span>{" "}
                A todo se le saca provecho.
              </li>
              <li>
                <span className="font-bold text-foreground">Acoger.</span>{" "}
                Todo el mundo suma, todo el mundo cabe.
              </li>
              <li>
                <span className="font-bold text-foreground">Aportar.</span>{" "}
                Cada granito hace la montaña.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
