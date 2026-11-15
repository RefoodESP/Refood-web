import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, Briefcase } from "lucide-react"
import { EquipoForm } from "./equipo-form"
export default function QuieroUnirmeEquipoPage() {
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
            Quiero unirme al equipo
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Aporta desde tu especialidad al funcionamiento del proyecto. Comunicación, 
            coordinación, logística... cada perfil suma.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Áreas de trabajo</h2>
              
              <p className="text-foreground/70 mb-6 normal-case">
                El equipo de gestión es el motor organizativo de ReFood. Trabajamos en 
                distintas áreas para que el proyecto funcione y crezca de manera sostenible.
              </p>

              <p className="text-foreground/70 mb-8 normal-case">
                Buscamos personas comprometidas que quieran aportar sus conocimientos y 
                habilidades. No importa tu profesión: si tienes ganas de contribuir, 
                seguro que hay un hueco para ti.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Calendar className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Horario</span>
                    <span className="text-foreground/70 normal-case">Flexible según el área</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Compromiso</span>
                    <span className="text-foreground/70 normal-case">Variable según disponibilidad</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted">
                  <Users className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Requisitos</span>
                    <span className="text-foreground/70 normal-case">Se valora experiencia en el área</span>
                  </div>
                </div>
              </div>

              <h3 className="text-foreground mb-4 text-xl normal-case">Áreas disponibles</h3>
              <div className="space-y-4">
                <div className="p-4 border-2 border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Comunicación y redes sociales</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case">
                    Gestión de redes, creación de contenido, diseño gráfico, fotografía...
                  </p>
                </div>
                <div className="p-4 border-2 border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Coordinación de voluntarios</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case">
                    Gestión de turnos, acogida de nuevos voluntarios, formación...
                  </p>
                </div>
                <div className="p-4 border-2 border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Logística y comercios</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case">
                    Relación con donantes, optimización de rutas, gestión de materiales...
                  </p>
                </div>
                <div className="p-4 border-2 border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Administración y fondos</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case">
                    Contabilidad, búsqueda de financiación, subvenciones, legal...
                  </p>
                </div>
                <div className="p-4 border-2 border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Digitalización y tecnología</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case">
                    Desarrollo web, herramientas digitales, automatización, datos...
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <EquipoForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
