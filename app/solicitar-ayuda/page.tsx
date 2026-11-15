import Link from "next/link"
import { ArrowLeft, Heart, ShieldCheck, HandHeart } from "lucide-react"
import { HelpForm } from "./help-form"

export default function SolicitarAyudaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/#necesitas-ayuda"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="label-text text-foreground/60 mb-4 block">Para familias del barrio</span>
          <h1 className="text-foreground mb-4">
            Solicitar ayuda
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Si vives en Tetuán o Pan Bendito y estás pasando un momento difícil, 
            estamos aquí. Rellena el formulario y nos ponemos en contacto contigo 
            en la mayor brevedad posible.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-4 text-2xl">Un barrio que se cuida</h2>
              <p className="text-foreground/70 mb-8 normal-case">
                Esto no es caridad: es un barrio que se organiza para que nadie pase hambre. 
                Toda solicitud se trata con respeto, discreción y cercanía. No hay 
                burocracia ni juicios: solo vecinos ayudando a vecinos.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-muted p-5 border-l-4 border-primary flex gap-4">
                  <Heart className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground font-bold normal-case mb-1">Sin complicaciones</h4>
                    <p className="text-foreground/70 normal-case text-sm">
                      El proceso es sencillo. Nos cuentas tu situación y buscamos la mejor 
                      forma de ayudarte.
                    </p>
                  </div>
                </div>
                <div className="bg-muted p-5 border-l-4 border-primary flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground font-bold normal-case mb-1">Confidencialidad total</h4>
                    <p className="text-foreground/70 normal-case text-sm">
                      Tus datos y tu situación son privados. Solo el equipo del núcleo 
                      tiene acceso a la información.
                    </p>
                  </div>
                </div>
                <div className="bg-muted p-5 border-l-4 border-primary flex gap-4">
                  <HandHeart className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground font-bold normal-case mb-1">Trato digno</h4>
                    <p className="text-foreground/70 normal-case text-sm">
                      La dignidad va por delante de todo. Aquí te tratamos como lo que eres: 
                      un vecino más del barrio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary text-secondary-foreground p-6">
                <h3 className="text-secondary-foreground mb-3 text-lg normal-case">¿Cómo funciona?</h3>
                <ol className="space-y-3 text-secondary-foreground/80 normal-case text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span>Rellenas este formulario o nos contactas directamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span>Hablamos contigo para conocer tu situación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span>Recoges tu comida a la hora en los días de reparto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <span>Devuelves los tuppers limpios para el día siguiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <span>Colaboras con el proyecto en la medida de tus posibilidades</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <HelpForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
