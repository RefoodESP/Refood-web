import Link from "next/link"
import { ArrowLeft, Store, CheckCircle } from "lucide-react"
import { DonanteForm } from "./donante-form"
export default function QuieroColaborarPage() {
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-foreground mb-4">
            Dona alimentos de tu negocio
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            ¿Tienes un establecimiento donde se vende comida? Podemos recoger tu excedente 
            cada día y darle una segunda vida.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Cómo funciona</h2>
              
              <p className="text-foreground/70 mb-6 normal-case">
                Cada tarde, nuestros voluntarios pasan por los comercios colaboradores para 
                recoger los productos que no se han vendido pero siguen en perfecto estado. 
                Frutas, verduras, pan, productos de pastelería, platos preparados...
              </p>

              <p className="text-foreground/70 mb-8 normal-case">
                Es muy sencillo: tú preparas lo que te sobra y nosotros lo recogemos. Sin 
                complicaciones, sin papeleo innecesario. Y lo mejor: esa comida llega a 
                familias del barrio que la necesitan.
              </p>

              <h3 className="text-foreground mb-4 text-xl normal-case">Ventajas para tu negocio</h3>
              <ul className="space-y-3 text-foreground/70 normal-case mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Reduces el desperdicio de tu negocio
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Contribuyes a la economía circular del barrio
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Certificado de donación para tu contabilidad
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Visibilidad como comercio solidario
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Recogida gratuita y sin compromiso
                </li>
              </ul>

              <h3 className="text-foreground mb-4 text-xl normal-case">Qué alimentos recogemos</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3 bg-muted text-foreground/70 text-sm normal-case">Frutas y verduras</div>
                <div className="p-3 bg-muted text-foreground/70 text-sm normal-case">Pan y bollería</div>
                <div className="p-3 bg-muted text-foreground/70 text-sm normal-case">Productos lácteos</div>
                <div className="p-3 bg-muted text-foreground/70 text-sm normal-case">Platos preparados</div>
                <div className="p-3 bg-muted text-foreground/70 text-sm normal-case">Conservas</div>
                <div className="p-3 bg-muted text-foreground/70 text-sm normal-case">Productos envasados</div>
              </div>

              <div className="p-6 bg-primary/10 border-2 border-primary">
                <Store className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-foreground font-bold mb-2">Ya somos más de 30 comercios</h4>
                <p className="text-foreground/70 text-sm normal-case">
                  Fruterías, panaderías, restaurantes, supermercados, colegios mayores... 
                  Únete a la red de comercios con desperdicio cero.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <DonanteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
