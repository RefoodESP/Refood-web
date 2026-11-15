import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Cookie, Scale } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Aviso Legal y Política de Cookies | ReFood España",
  description:
    "Aviso legal (LSSI-CE), datos registrales de la Asociación Refood España y política de cookies de refoodesp.org.",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="label-text text-foreground/80 mb-3 block">LSSI-CE y Transparencia</span>
            <h1 className="text-foreground mb-4">Aviso Legal y Política de Cookies</h1>
            <p className="text-xl text-foreground/80 max-w-2xl normal-case">
              Información identificativa de la Asociación Refood España y condiciones de uso de este
              sitio web.
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12 text-foreground/80 normal-case">
            {/* Aviso Legal */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="text-foreground text-2xl font-bold normal-case">
                  1. Datos identificativos del titular (LSSI-CE)
                </h2>
              </div>

              <p className="text-sm leading-relaxed">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
                Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informan los
                datos identificativos de la entidad titular del dominio{" "}
                <strong>refoodesp.org</strong>:
              </p>

              <ul className="bg-muted p-6 border border-border space-y-2 text-sm">
                <li>
                  <strong>Denominación social:</strong> Refood España (Asociación sin ánimo de lucro)
                </li>
                <li>
                  <strong>C.I.F.:</strong> G88486006
                </li>
                <li>
                  <strong>Domicilio social:</strong> C/ Capitán Blanco Argibay 114, Lc Ext, 28029,
                  Madrid, España
                </li>
                <li>
                  <strong>Registro Nacional de Asociaciones:</strong> Nº 623287
                </li>
                <li>
                  <strong>Registro de Asociaciones de la Comunidad de Madrid:</strong> Nº 39.246
                </li>
                <li>
                  <strong>Declaración de Utilidad Pública:</strong> Reconocida en 2024
                </li>
                <li>
                  <strong>Correo electrónico de contacto:</strong>{" "}
                  <a
                    href="mailto:informacion@refoodesp.org"
                    className="text-primary font-semibold underline"
                  >
                    informacion@refoodesp.org
                  </a>
                </li>
              </ul>

              <div>
                <h3 className="text-foreground text-lg font-bold mb-2 normal-case">
                  2. Condiciones de uso y responsabilidad
                </h3>
                <p className="text-sm leading-relaxed">
                  El acceso y navegación por este sitio web atribuye la condición de usuario y
                  supone la aceptación de estas condiciones de uso. Los contenidos de esta web tienen
                  carácter meramente informativo y solidario para dar a conocer las actividades de
                  rescate de alimentos, voluntariado, donaciones y colaboración comunitaria de Refood
                  España.
                </p>
              </div>

              <div>
                <h3 className="text-foreground text-lg font-bold mb-2 normal-case">
                  3. Propiedad intelectual e industrial
                </h3>
                <p className="text-sm leading-relaxed">
                  Los textos, fotografías, memorias anuales, logotipos e identidad gráfica de Refood
                  España presentes en este sitio web pertenecen a la entidad o se utilizan con la
                  correspondiente autorización, quedando prohibida su reproducción comercial sin
                  consentimiento previo.
                </p>
              </div>

              <div>
                <h3 className="text-foreground text-lg font-bold mb-2 normal-case">
                  4. Enlaces externos y legislación aplicable
                </h3>
                <p className="text-sm leading-relaxed">
                  Este sitio web puede contener enlaces a páginas de medios de comunicación o redes
                  sociales externas sobre cuyo contenido Refood España no ejerce control editorial.
                  Las presentes condiciones se rigen por la legislación española vigente.
                </p>
              </div>
            </div>

            {/* Política de Cookies */}
            <section id="cookies" className="pt-8 border-t-2 border-border space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-primary" />
                <h2 className="text-foreground text-2xl font-bold normal-case">
                  5. Política de Cookies
                </h2>
              </div>

              <div className="p-6 bg-primary/10 border-2 border-primary">
                <p className="text-foreground font-semibold text-sm mb-2">
                  Este sitio web NO utiliza cookies de seguimiento, analítica ni publicidad.
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  En <strong>refoodesp.org</strong> respetamos tu privacidad por defecto: no
                  instalamos cookies de terceros, perfiles publicitarios ni herramientas de analítica
                  comportamental en tu navegador, por lo que no es necesario mostrarte ningún banner
                  de consentimiento invasivo.
                </p>
              </div>

              <div className="space-y-3 text-sm leading-relaxed">
                <h3 className="text-foreground text-lg font-bold normal-case">
                  Almacenamiento técnico local estrictamente necesario
                </h3>
                <p>
                  Para mejorar la experiencia de navegación (por ejemplo, recordar la posición de
                  desplazamiento al volver atrás entre páginas del sitio), la aplicación emplea
                  exclusivamente almacenamiento temporal de sesión en tu propio navegador (
                  <code>sessionStorage</code>), el cual no se transmite a servidores de terceros y se
                  elimina automáticamente al cerrar la pestaña o el navegador.
                </p>
                <p>
                  En cualquier momento puedes revisar o borrar los datos almacenados localmente
                  desde la configuración de privacidad de tu navegador. Para cualquier duda,
                  escríbenos a{" "}
                  <a
                    href="mailto:informacion@refoodesp.org"
                    className="text-primary font-semibold underline"
                  >
                    informacion@refoodesp.org
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
