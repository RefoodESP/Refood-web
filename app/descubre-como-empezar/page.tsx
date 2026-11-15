import Link from "next/link"
import { ArrowLeft, MapPin, Users, Store, Scale, Laptop, Package, Lightbulb } from "lucide-react"
import { NucleoForm } from "./nucleo-form"
export default function DescubreComoEmpezarPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/#nucleos"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a núcleos</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="label-text text-foreground/60 mb-4 block">Crea un núcleo</span>
          <h1 className="text-foreground mb-4">
            Descubre cómo empezar
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Hacia el desperdicio cero, sin partir de cero. Si quieres montar un núcleo ReFood 
            en tu barrio, te acompañamos en todo el camino con nuestra experiencia y recursos.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-4 text-2xl">Un modelo que se replica</h2>
              <p className="text-foreground/70 mb-8 normal-case">
                Cada núcleo ReFood es autónomo, pero ninguno empieza solo. Compartimos contigo todo 
                lo que hemos aprendido desde 2019. No necesitas experiencia previa: necesitas ganas, 
                constancia y un grupo de vecinos dispuestos a organizarse.
              </p>

              <h3 className="text-foreground mb-4 text-xl normal-case">En qué te apoyamos</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Soluciones IT</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Herramientas digitales para gestionar rutas, voluntarios y reparto.
                  </p>
                </div>
                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Marco legal</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Constitución, seguros, protección de datos y normativa alimentaria.
                  </p>
                </div>
                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Asesoramiento</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Acompañamiento continuo para captar donantes y organizar el equipo.
                  </p>
                </div>
                <div className="card-refood p-5 flex flex-col">
                  <div className="refood-icon mb-3">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground text-base normal-case mb-1">Material</h4>
                  <p className="text-foreground/70 normal-case text-sm">
                    Carritos, tuppers, neveras y equipamiento para arrancar el núcleo.
                  </p>
                </div>
              </div>

              <h3 className="text-foreground mb-4 text-xl normal-case">Qué necesitas conseguir</h3>
              <div className="space-y-4">
                <div className="bg-muted p-5 border-l-4 border-primary flex gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground font-bold normal-case mb-1">Un local</h4>
                    <p className="text-foreground/70 normal-case text-sm">
                      Un espacio donde recibir, organizar y repartir los alimentos rescatados.
                    </p>
                  </div>
                </div>
                <div className="bg-muted p-5 border-l-4 border-primary flex gap-4">
                  <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground font-bold normal-case mb-1">Un grupo de voluntarios</h4>
                    <p className="text-foreground/70 normal-case text-sm">
                      Vecinos comprometidos que sostengan las rutas y el reparto.
                    </p>
                  </div>
                </div>
                <div className="bg-muted p-5 border-l-4 border-primary flex gap-4">
                  <Store className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground font-bold normal-case mb-1">Los primeros donantes</h4>
                    <p className="text-foreground/70 normal-case text-sm">
                      Comercios del barrio dispuestos a donar su excedente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <NucleoForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
