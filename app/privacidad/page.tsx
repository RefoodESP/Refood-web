import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | ReFood España",
  description:
    "Política de privacidad y protección de datos personales (RGPD) de la Asociación Refood España.",
}

const treatmentRows = [
  {
    group: "Socios económicos",
    purposes:
      "(i) Gestionar su inscripción como socio dentro de la entidad; (ii) remitirle los certificados de donación pertinentes cuando usted así los solicite; y (iii) enviar comunicaciones informativas por correo electrónico sobre la organización del proyecto.",
    categories: "Nombre, apellidos, correo electrónico, D.N.I., código postal y domicilio.",
    basis:
      "Desarrollo de una relación contractual (Art. 6.1.b del RGPD) y nuestro interés legítimo (Art. 6.1.f del RGPD) para remitirle comunicaciones informativas y de carácter institucional.",
    retention: "Mientras usted sea socio del proyecto y durante 5 años tras su baja.",
  },
  {
    group: "Beneficiarios",
    purposes:
      "(i) Gestionar su inscripción y el desarrollo de su relación como persona beneficiaria dentro de nuestra asociación; y (ii) enviar comunicaciones informativas sobre la organización del proyecto así como cualquier otra actividad desarrollada por la entidad.",
    categories:
      "Nombre, apellidos, teléfono, correo electrónico, situación laboral, dirección, código postal y núcleo de Refood.",
    basis: "Su consentimiento (Art. 6.1.a del RGPD).",
    retention: "Durante el tiempo que esa persona o familia reciba apoyo del proyecto.",
  },
  {
    group: "Voluntarios",
    purposes:
      "(i) Gestionar su inscripción y el desarrollo de su actividad de voluntariado dentro de nuestra asociación; y (ii) enviar comunicaciones informativas, a través de medios electrónicos (email, WhatsApp o llamadas telefónicas), sobre la organización y actividades de la entidad.",
    categories:
      "Nombre, apellidos, teléfono, correo electrónico, ocupación, edad, domicilio y código postal.",
    basis:
      "Desarrollo de una relación contractual (Art. 6.1.b del RGPD) y nuestro interés legítimo (Art. 6.1.f del RGPD) para remitirle comunicaciones informativas y de carácter institucional.",
    retention:
      "Durante el tiempo que el voluntario esté en activo en el proyecto y durante los 2 años posteriores a su baja.",
  },
  {
    group: "Consultas y propuestas de colaboración",
    purposes: "(i) Gestionar su consulta, propuesta y/o colaboración.",
    categories: "Nombre, apellidos, teléfono y correo electrónico.",
    basis: "Interés legítimo (Art. 6.1.f del RGPD).",
    retention:
      "Durante el mínimo tiempo necesario para el desarrollo de la actividad o consulta propuesta.",
  },
]

const rightsList = [
  {
    right: "Acceso",
    description:
      "Derecho a obtener confirmación sobre si Refood España está tratando sus datos personales y a conocer cómo y para qué se tratan.",
    how: "Enviando un correo a informacion@refoodesp.org.",
  },
  {
    right: "Rectificación",
    description:
      "Derecho a solicitar la corrección de datos personales inexactos o incompletos.",
    how: "Enviando una solicitud de rectificación al correo mencionado.",
  },
  {
    right: "Supresión",
    description:
      "Derecho a solicitar la eliminación de sus datos personales cuando ya no sean necesarios para los fines para los que fueron recogidos.",
    how: "Solicite la supresión enviando un correo a la dirección proporcionada.",
  },
  {
    right: "Limitación del tratamiento",
    description:
      "Derecho a pedir que se limite el uso de sus datos personales en ciertas circunstancias, por ejemplo mientras se verifica su exactitud.",
    how: "A través de las mismas vías de contacto.",
  },
  {
    right: "Oposición",
    description:
      "Derecho a oponerse al tratamiento de sus datos personales cuando el tratamiento esté basado en nuestro interés legítimo.",
    how: "Enviando una solicitud de oposición al correo o dirección postal proporcionada.",
  },
  {
    right: "Portabilidad",
    description:
      "Derecho a recibir sus datos personales en un formato estructurado, de uso común y lectura mecánica, o a que se transmitan a otro responsable.",
    how: "A través de las vías de contacto indicadas.",
  },
  {
    right: "Retirar el consentimiento",
    description:
      "Derecho a retirar el consentimiento otorgado para el tratamiento de sus datos personales en cualquier momento.",
    how: "Enviando un correo a informacion@refoodesp.org.",
  },
]

export default function PrivacyPage() {
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
            <span className="label-text text-foreground/80 mb-3 block">Protección de datos (RGPD)</span>
            <h1 className="text-foreground mb-4">Política de Privacidad</h1>
            <p className="text-lg text-foreground/80 max-w-2xl normal-case mb-6">
              Actualizada a 20 de agosto de 2025. Información completa sobre el tratamiento de datos
              personales en Refood España.
            </p>
            <a
              href="/docs/politica-de-privacidad-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-opacity normal-case"
            >
              <Download className="h-4 w-4" />
              Descargar Política de Privacidad oficial (PDF)
            </a>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12 text-foreground/80 normal-case">
            <div className="p-6 bg-muted border-2 border-border flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">
                Refood España es una asociación sin ánimo de lucro destinada al rescate de excedente
                alimentario de calidad y su posterior donación hacia personas en situación de
                vulnerabilidad. Desde 2018 trabajamos en los barrios de Madrid, y en{" "}
                <strong>2024</strong> se nos reconoció la declaración de{" "}
                <strong>Utilidad Pública</strong> como asociación.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-4 normal-case">
                1. ¿Quién es el responsable del tratamiento de sus datos?
              </h2>
              <p className="mb-4">
                Refood España es el responsable del tratamiento de sus datos personales. Puede
                identificarnos a través de los siguientes datos:
              </p>
              <ul className="bg-muted p-6 border border-border space-y-2 text-sm">
                <li>
                  <strong>Razón social:</strong> Refood España
                </li>
                <li>
                  <strong>C.I.F.:</strong> G88486006
                </li>
                <li>
                  <strong>Nº en el Registro Nacional de Asociaciones:</strong> 623287
                </li>
                <li>
                  <strong>Domicilio social:</strong> C/ Capitán Blanco Argibay 114, Lc Ext, 28029,
                  Madrid, España
                </li>
                <li>
                  <strong>Email de contacto:</strong>{" "}
                  <a
                    href="mailto:informacion@refoodesp.org"
                    className="text-primary font-semibold underline"
                  >
                    informacion@refoodesp.org
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-4 normal-case">
                2. ¿De quién podemos gestionar datos personales?
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Personas voluntarias:</strong> gestión de un grupo estable de voluntarios
                  para sacar adelante los rescates diarios y la operativa del proyecto.
                </li>
                <li>
                  <strong>Personas beneficiarias:</strong> registro necesario para coordinar las
                  salidas del alimento rescatado y el apoyo en el barrio.
                </li>
                <li>
                  <strong>Personas socias:</strong> personas y entidades que apoyan económicamente
                  de forma estable el proyecto para cubrir los gastos fijos mensuales.
                </li>
                <li>
                  <strong>Personas que nos propongan colaboraciones y/o consultas:</strong> personas
                  o entidades que contactan con nosotros a través de los canales habituales.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-4 normal-case">
                3. Tabla informativa sobre finalidades, legitimación y retención
              </h2>
              <div className="overflow-x-auto border border-border">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-muted text-foreground">
                    <tr>
                      <th className="p-3 border-b border-border font-bold">Titulares de datos</th>
                      <th className="p-3 border-b border-border font-bold">Finalidades</th>
                      <th className="p-3 border-b border-border font-bold">Categorías de datos</th>
                      <th className="p-3 border-b border-border font-bold">Base legitimadora</th>
                      <th className="p-3 border-b border-border font-bold">Período de retención</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatmentRows.map((row) => (
                      <tr key={row.group} className="border-b border-border align-top">
                        <td className="p-3 font-semibold text-foreground">{row.group}</td>
                        <td className="p-3">{row.purposes}</td>
                        <td className="p-3">{row.categories}</td>
                        <td className="p-3">{row.basis}</td>
                        <td className="p-3">{row.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-4">
                Antes de la eliminación definitiva, los datos podrán ser anonimizados de forma que
                no pueda identificarse a ninguna persona, con el fin exclusivo de elaborar
                estadísticas de impacto comunitario.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-3 normal-case">
                4. Cesión de datos personales a terceros
              </h2>
              <p className="text-sm leading-relaxed">
                Refood España no realizará transferencias internacionales de datos personales bajo
                ningún concepto. Tampoco cederá datos personales a terceros salvo en supuestos
                estrictamente necesarios o bajo obligación legal, como la tramitación de la
                cobertura del seguro de accidentes de voluntariado para la persona voluntaria.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-3 normal-case">
                5. Medidas de seguridad
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Cifrado:</strong> protección mediante cifrado en las comunicaciones
                  electrónicas.
                </li>
                <li>
                  <strong>Control de acceso:</strong> acceso restringido únicamente al personal o
                  gestores autorizados bajo compromiso de confidencialidad.
                </li>
                <li>
                  <strong>Almacenamiento seguro:</strong> uso de sistemas en la nube con altos
                  estándares de seguridad.
                </li>
                <li>
                  <strong>Auditorías y revisiones:</strong> revisión periódica de políticas y
                  procedimientos de seguridad.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-4 normal-case">
                6. Sus derechos y opciones
              </h2>
              <div className="overflow-x-auto border border-border">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-muted text-foreground">
                    <tr>
                      <th className="p-3 border-b border-border font-bold">Derecho</th>
                      <th className="p-3 border-b border-border font-bold">Descripción</th>
                      <th className="p-3 border-b border-border font-bold">Cómo ejercerlo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rightsList.map((r) => (
                      <tr key={r.right} className="border-b border-border align-top">
                        <td className="p-3 font-semibold text-foreground">{r.right}</td>
                        <td className="p-3">{r.description}</td>
                        <td className="p-3">{r.how}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-4">
                Podremos solicitarle que acredite su identidad antes de proceder a resolver su
                solicitud sobre el ejercicio de derechos en materia de protección de datos.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-2xl font-bold mb-3 normal-case">
                7. Contacto y autoridad de control
              </h2>
              <p className="text-sm mb-3">
                Puede contactar con nosotros a través de{" "}
                <a
                  href="mailto:informacion@refoodesp.org"
                  className="text-primary font-semibold underline"
                >
                  informacion@refoodesp.org
                </a>
                . Si considera que sus derechos no han sido debidamente atendidos, puede presentar
                una reclamación ante la autoridad de control competente:
              </p>
              <ul className="bg-muted p-4 border border-border text-sm space-y-1">
                <li>
                  <strong>Agencia Española de Protección de Datos (AEPD)</strong>
                </li>
                <li>C/ Jorge Juan 6, 28001, Madrid</li>
                <li>Teléfono: 900 293 183</li>
                <li>
                  Web:{" "}
                  <a
                    href="https://www.aepd.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    www.aepd.es
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
