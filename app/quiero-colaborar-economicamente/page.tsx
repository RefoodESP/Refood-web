import Link from "next/link"
import { ArrowLeft, Heart, CreditCard, Building, CheckCircle } from "lucide-react"
import { DonacionForm } from "./donacion-form"
export default function QuieroColaborarEconomicamentePage() {
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
            Haz una donación
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            Tu aporte económico nos ayuda a mantener el local, los carritos de transporte, 
            los tuppers y todo lo necesario para rescatar y repartir comida cada día.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="text-foreground mb-6 text-2xl">Por qué donar</h2>
              
              <p className="text-foreground/70 mb-6 normal-case">
                ReFood funciona íntegramente con voluntarios, pero tenemos gastos fijos que 
                necesitamos cubrir: el alquiler del local, los materiales de transporte, 
                los envases, los suministros...
              </p>

              <p className="text-foreground/70 mb-8 normal-case">
                Cada euro que donas se invierte directamente en el proyecto. No tenemos 
                personal contratado, así que tu aportación va íntegramente a hacer posible 
                el rescate de alimentos.
              </p>

              <h3 className="text-foreground mb-4 text-xl normal-case">Tu donación se destina a</h3>
              <ul className="space-y-3 text-foreground/70 normal-case mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Alquiler y mantenimiento del local
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Carritos de transporte y bolsas reutilizables
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Tuppers y envases para las familias
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Suministros (luz, agua, limpieza)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Formación de voluntarios
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  Expansión a nuevos barrios
                </li>
              </ul>

              <div className="p-6 bg-primary/10 border-2 border-primary mb-8">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-foreground font-bold mb-2">Desgravación fiscal</h4>
                <p className="text-foreground/70 text-sm normal-case">
                  ReFood España es una asociación declarada de <strong>Utilidad Pública en 2024</strong>. Tus donaciones 
                  pueden desgravar hasta un 80% en el IRPF (los primeros 250 euros) y un 40% 
                  del resto (45% a partir del tercer año de donación continuada). Para solicitar tu certificado de donación, escríbenos a{" "}
                  <a href="mailto:financiacion@refoodesp.org" className="text-primary underline font-medium">
                    financiacion@refoodesp.org
                  </a>.
                </p>
              </div>

              <h3 className="text-foreground mb-4 text-xl normal-case">Datos bancarios</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Transferencia bancaria</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case font-mono">
                    IBAN: ES86 0049 6976 2524 1003 8471<br />
                    Titular: Refood España<br />
                    Concepto: Donación + tu nombre
                  </p>
                </div>
                <div className="p-4 bg-muted">
                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span className="font-bold text-foreground">Bizum (Donar a ONG)</span>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-2">
                    Código ONG: <strong>11800</strong> (ReFood España)
                  </p>
                  <ol className="text-foreground/70 text-xs normal-case list-decimal pl-4 space-y-1">
                    <li>Abre Bizum en tu banco y selecciona <strong>Donar a ONG</strong>.</li>
                    <li>Introduce el código <strong>11800</strong> o busca ReFood España.</li>
                    <li>Elige el importe y confirma tu donación.</li>
                  </ol>
                </div>
                <p className="text-foreground/70 text-sm normal-case pt-2">
                  ¿Dudas sobre donaciones, empresas o certificados fiscales? Escríbenos a{" "}
                  <a href="mailto:financiacion@refoodesp.org" className="text-primary underline font-medium">
                    financiacion@refoodesp.org
                  </a>.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <DonacionForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
