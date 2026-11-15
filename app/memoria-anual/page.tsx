import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, FileText, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Memorias Anuales (2020–2025) | ReFood España",
  description:
    "Consulta y descarga las memorias anuales de actividad, impacto social y cuentas de ReFood España desde 2020 hasta 2025.",
}

const memorias = [
  {
    year: "2025",
    title: "Memoria Anual 2025",
    file: "/docs/memoria-2025.pdf",
    highlight: "Última memoria disponible",
    description:
      "Balance anual de rescate de excedente alimentario, actividad en los núcleos de Madrid, voluntarios y transparencia económica.",
  },
  {
    year: "2024",
    title: "Memoria Anual 2024",
    file: "/docs/memoria-2024.pdf",
    highlight: "Año de declaración de Utilidad Pública",
    description:
      "Resumen del impacto social en 2024, consolidación de la red vecinal y reconocimiento de la Declaración de Utilidad Pública.",
  },
  {
    year: "2023",
    title: "Memoria Anual 2023",
    file: "/docs/memoria-2023.pdf",
    description:
      "Actividad de rescate y reparto de alimentos, comercios colaboradores y evolución del voluntariado en el ejercicio 2023.",
  },
  {
    year: "2022",
    title: "Memoria Anual 2022",
    file: "/docs/memoria-2022.pdf",
    description:
      "Apertura y consolidación de la actividad comunitaria durante 2022 junto a familias, voluntarios y establecimientos de barrio.",
  },
  {
    year: "2021",
    title: "Memoria Anual 2021",
    file: "/docs/memoria-2021.pdf",
    description:
      "Memoria de actividad, rescate diario de alimentos y cifras de impacto correspondientes al año 2021.",
  },
  {
    year: "2020",
    title: "Memoria Anual 2020",
    file: "/docs/memoria-2020.pdf",
    description:
      "Respuesta solidaria vecinal y balance completo de actividad del proyecto durante el año 2020.",
  },
]

export default function MemoriaAnualPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Back Navigation */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/#noticias"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a noticias y documentos</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="label-text text-foreground/80 mb-3 block">Transparencia</span>
            <h1 className="text-foreground mb-4">Memorias anuales</h1>
            <p className="text-xl text-foreground/80 max-w-2xl normal-case">
              Compartimos de forma abierta nuestras memorias de actividad e impacto para rendir
              cuentas ante voluntarios, socios, comercios colaboradores y la comunidad.
            </p>
          </div>
        </section>

        {/* Memorias Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-primary/10 border-2 border-primary mb-10 flex items-start gap-4">
              <Award className="h-7 w-7 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-foreground text-lg font-bold normal-case mb-1">
                  Asociación declarada de Utilidad Pública (2024)
                </h2>
                <p className="text-foreground/75 text-sm normal-case">
                  ReFood España (CIF G88486006) mantiene un compromiso firme con la transparencia en
                  la gestión de donaciones y el impacto comunitario. Para solicitudes de certificados
                  o información financiera adicional, escribe a{" "}
                  <a
                    href="mailto:financiacion@refoodesp.org"
                    className="text-primary font-semibold underline"
                  >
                    financiacion@refoodesp.org
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {memorias.map((doc) => (
                <article
                  key={doc.year}
                  className="p-6 bg-card border-2 border-border flex flex-col justify-between gap-4 hover:border-primary transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-2 label-text text-primary">
                        <FileText className="h-4 w-4" />
                        Ejercicio {doc.year}
                      </span>
                      {doc.highlight && (
                        <span className="text-xs font-semibold bg-primary/15 text-foreground px-2.5 py-1 normal-case">
                          {doc.highlight}
                        </span>
                      )}
                    </div>
                    <h3 className="text-foreground text-xl font-bold normal-case mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-foreground/70 text-sm normal-case">{doc.description}</p>
                  </div>

                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors normal-case"
                  >
                    <Download className="h-4 w-4" />
                    Descargar PDF ({doc.year})
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
