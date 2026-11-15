import Link from "next/link"
import { ArrowLeft, Building2, Megaphone, HandHeart, Users } from "lucide-react"
import { AlianzaForm } from "./alianza-form"
export default function AlianzasInstitucionalesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/#colabora"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a formas de colaborar</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="label-text text-foreground/60 mb-4 block">Colabora con ReFood</span>
          <h1 className="text-foreground mb-4">
            Colaboración institucional
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            ONGs, empresas y entidades: sumemos fuerzas para combatir el desperdicio alimentario 
            y fortalecer el tejido social de los barrios.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Más impacto, juntos</h2>
              <p className="text-foreground/70 mb-8 normal-case text-lg">
                ReFood crece gracias a la colaboración de organizaciones que comparten nuestra misión. 
                Tanto si representas a una ONG, una empresa con responsabilidad social, una administración 
                o un colectivo, hay muchas maneras de construir una alianza que multiplique el impacto.
              </p>

              <h3 className="text-foreground mb-6 text-xl normal-case">Formas de colaborar</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Campañas y comunicación</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Campañas conjuntas de sensibilización y difusión en medios.
                  </p>
                </div>

                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Voluntariado corporativo</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Tu equipo participa en las rutas y el reparto del barrio.
                  </p>
                </div>

                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <HandHeart className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Proyectos conjuntos</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Iniciativas con otras entidades para llegar a más familias.
                  </p>
                </div>

                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Patrocinio y recursos</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Apoyo económico, espacios, material o servicios para los núcleos.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <AlianzaForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
