import Link from "next/link"
import { HelpCircle } from "lucide-react"

export function NeedsHelp() {
  return (
    <section id="necesitas-ayuda" className="py-20 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-text text-primary mb-4 block">Para familias del barrio</span>
            <h2 className="text-secondary-foreground mb-6">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-6 normal-case">
              Si vives en Tetuán o Pan Bendito y estás pasando un momento difícil, podemos 
              ayudarte.
            </p>
            <p className="text-secondary-foreground/80 mb-8 normal-case">
              Contacta con nosotros y te explicamos cómo funciona. Todo se hace con 
              respeto, cercanía y sin complicaciones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solicitar-ayuda" className="btn-refood text-center">
                Solicitar ayuda
              </Link>
            </div>
          </div>

          <div className="bg-secondary-foreground/10 p-8 rounded-xl">
            <HelpCircle className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-secondary-foreground mb-4 normal-case">Cómo funciona</h3>
            <ul className="space-y-4 text-secondary-foreground/80 normal-case">
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <span>Nos contactas por email, WhatsApp o vienes al local</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <span>Hablamos contigo para conocer tu situación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <span>Recoge tu comida a la hora en los días de reparto</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <span>Devuelves los tuppers limpios para el día siguiente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                <span>Involúcrate y contribuye con el proyecto en la medida de tus posibilidades</span>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </section>
  )
}
