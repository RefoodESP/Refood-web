import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, MapPin } from "lucide-react"
import { RouteForm } from "./route-form"
export default function QuieroHacerRutasPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/#sumate" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a formas de participar</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-foreground mb-4">
            Quiero participar
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Súmate a ReFood y participa en el día a día del barrio. Recogerás comida de los 
            comercios, ayudarás a organizarla y conocerás gente increíble.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">En qué consiste</h2>
              
              <p className="text-foreground/70 mb-6 normal-case">
                El rescate de alimentos es el corazón de ReFood. Cada tarde, equipos de 
                voluntarios recorren el barrio recogiendo los excedentes de comercios 
                colaboradores: fruterías, panaderías, restaurantes, supermercados...
              </p>

              <p className="text-foreground/70 mb-8 normal-case">
                De vuelta al local, clasificamos todo y preparamos packs para las familias 
                que vienen a recogerlos. Es un trabajo sencillo pero muy gratificante: 
                ves el impacto directo de tu esfuerzo.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Calendar className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Horario</span>
                    <span className="text-foreground/70 normal-case">Lunes a Jueves, tardes (19:00-21:00)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Compromiso</span>
                    <span className="text-foreground/70 normal-case">1 día a la semana, 2-3 horas</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Users className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Requisitos</span>
                    <span className="text-foreground/70 normal-case">No hace falta experiencia previa</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Ubicación</span>
                    <span className="text-foreground/70 normal-case">Núcleos de Tetuán y Pan Bendito</span>
                  </div>
                </div>
              </div>

              <h3 className="text-foreground mb-4 text-xl normal-case">Tareas habituales</h3>
              <ul className="space-y-3 text-foreground/70 normal-case">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">1.</span>
                  Recoger excedentes de tiendas del barrio
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">2.</span>
                  Clasificar y preparar los packs de comida
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">3.</span>
                  Atender a las familias en el local
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">4.</span>
                  Mantener el espacio limpio y ordenado
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="/docs/programa-voluntariado-tetuan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold underline normal-case hover:opacity-80"
                >
                  Descargar programa de voluntariado (PDF)
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <RouteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
