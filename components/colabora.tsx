import Link from "next/link"
import { Store, Heart, Building2 } from "lucide-react"

export function Colabora() {
  return (
    <section id="colabora" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Colabora con ReFood</span>
          <h2 className="text-foreground mb-4">
            Hay muchas formas de sumar
          </h2>
          <div className="divider-refood mx-auto mb-6" />
        </div>

        {/* Collaboration Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Food Donors */}
          <div className="card-refood p-8 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="refood-icon">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-foreground text-xl normal-case">Dona alimentos de tu negocio</h3>
            </div>
            <p className="text-foreground/70 mb-6 normal-case flex-1">
              ¿Tienes un establecimiento donde se vende comida? Podemos recoger tu excedente 
              cada día y darle una segunda vida. Es fácil, rápido y te damos un certificado 
              de donación.
            </p>
            <Link href="/quiero-colaborar" className="btn-refood w-full text-center block mt-auto">
              Quiero donar alimentos
            </Link>
          </div>

          {/* Financial Donations */}
          <div className="card-refood p-8 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="refood-icon">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-foreground text-xl normal-case">Haz una donación</h3>
            </div>
            <p className="text-foreground/70 mb-6 normal-case flex-1">
              Tu aporte económico nos ayuda a mantener el local, los carritos de transporte, 
              los tuppers y todo lo necesario para rescatar y repartir comida cada día.
            </p>
            <Link href="/quiero-colaborar-economicamente" className="btn-refood w-full text-center block mt-auto">
              Quiero donar
            </Link>
          </div>

          {/* Institutional Partnerships */}
          <div className="card-refood p-8 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="refood-icon">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-foreground text-xl normal-case">Colaboración institucional</h3>
            </div>
            <p className="text-foreground/70 mb-6 normal-case flex-1">
              ¿Representas a una ONG, empresa o entidad? Colaboremos en campañas, comunicación, 
              voluntariado corporativo o proyectos conjuntos para multiplicar el impacto en los barrios.
            </p>
            <Link href="/alianzas-institucionales" className="btn-refood w-full text-center block mt-auto">
              Tengo una propuesta
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
