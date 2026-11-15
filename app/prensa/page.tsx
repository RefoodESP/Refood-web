import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Mail, Newspaper } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "ReFood en Prensa | ReFood España",
  description:
    "Apariciones de ReFood España en medios de comunicación, entrevistas y reportajes sobre rescate de alimentos en Madrid.",
}

interface PressItem {
  title: string
  outlet: string
  date: string
  url?: string
  note?: string
}

const pressItems: PressItem[] = [
  {
    title: "Reportaje en Espejo Público",
    outlet: "Antena 3",
    date: "Febrero 2023",
    note: "Emisión televisiva sobre nuestra labor en Madrid.",
  },
  {
    title:
      "Descubre Refood, un proyecto que trabaja por crear barrios con cero desperdicio de alimentos y un tejido comunitario fuerte",
    outlet: "Cadena SER (Hoy por Hoy Madrid)",
    date: "Enero 2023",
    url: "https://twitter.com/HoyxHoyMadrid/status/1618603266723483651?s=20&t=MIiCGOTh_WTAsLzv-FcbQA",
  },
  {
    title:
      "Entrevista en Las Mañanas por el Día Internacional contra el Desperdicio Alimentario",
    outlet: "RNE",
    date: "Septiembre 2022",
    url: "https://www.rtve.es/play/audios/las-mananas-de-rne-con-inigo-alfonso/dia-mundial-contra-desperdicio-alimentos/6702603/",
  },
  {
    title: "Refood, jóvenes al rescate de comida en el norte de Madrid",
    outlet: "El Confidencial",
    date: "Enero 2022",
    url: "https://www.elconfidencial.com/espana/madrid/2022-01-21/jovenes-rescate-comida-norte-madrid_3361124/",
  },
  {
    title: "Reportaje en Te lo vas a comer",
    outlet: "La Sexta",
    date: "Septiembre 2021",
    url: "https://www.lasexta.com/programas/te-lo-vas-a-comer/testimonio-mujer-usuaria-asociacion-refood-momentos-mas-duros-unicos-que-han-estado-son-ellos_20210923614c6e7a1d28e9000199df10.html",
  },
  {
    title: "Entrevista en La Campana",
    outlet: "Toro TV",
    date: "Junio 2021",
    url: "https://www.youtube.com/watch?v=NWXNNRdUSZQ",
  },
  {
    title: "Focus Group: Voluntariado en tiempos de Instagram",
    outlet: "Gen Playz (RTVE)",
    date: "Mayo 2021",
    url: "https://www.rtve.es/play/videos/gen-playz/focus-group-voluntariado-tiempos-instagram/5919434/",
  },
  {
    title: "Refood: combatiendo el hambre a través del rescate de excedentes alimentarios",
    outlet: "El Mundo",
    date: "Mayo 2021",
    url: "https://www.elmundo.es/madrid/2021/05/31/60b3816421efa0cc428b45c8.html",
  },
  {
    title: "Reportaje en Liarla Pardo",
    outlet: "La Sexta",
    date: "Mayo 2021",
    url: "https://amp.lasexta.com/programas/liarla-pardo/reportajes/dar-comida-quienes-mas-necesitan-evitando-que-acabe-basura-asi-labor-solidaria-refood-tetuan_20210502608ed7435e5adb00010090a3.html",
  },
  {
    title: "Al rescate de ocho millones de toneladas de comida",
    outlet: "El País",
    date: "Abril 2021",
    url: "https://elpais.com/sociedad/pienso-luego-actuo/2021-04-04/al-rescate-de-ocho-millones-de-toneladas-de-comida.html?prm=ep-app-articulo",
  },
  {
    title: "Entrevista en La Brújula de Madrid",
    outlet: "Onda Cero",
    date: "Marzo 2021",
    url: "https://amp.ondacero.es/emisoras/comunidad-madrid/madrid/audios-podcast/brujula-madrid/brujula-madrid-03032021_20210303603fdf010bd46700014dea1b.html",
  },
  {
    title: "Reportaje en Más vale tarde",
    outlet: "La Sexta",
    date: "Diciembre 2020",
    note: "Emisión televisiva en directo.",
  },
  {
    title: "Llega a Madrid el Proyecto ReFood",
    outlet: "El Salto",
    date: "Mayo 2019",
    url: "https://www.elsaltodiario.com/consumo-que-suma/proyecto-refood-madrid",
  },
  {
    title: "Rescatando el excedente de alimentos no servidos en los negocios",
    outlet: "Tetuán 30 días",
    date: "Abril 2019",
    url: "https://www.tetuan30dias.com/actualidad/rescatando-excedente-alimentos-no-servidos-negocios",
  },
]

export default function PrensaPage() {
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
            <span>Volver a noticias y eventos</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="label-text text-foreground/80 mb-3 block">Medios de comunicación</span>
            <h1 className="text-foreground mb-4">ReFood en prensa</h1>
            <p className="text-xl text-foreground/80 max-w-2xl normal-case">
              Recopilación de reportajes, entrevistas y artículos publicados sobre el trabajo diario
              de ReFood España contra el desperdicio alimentario.
            </p>
          </div>
        </section>

        {/* Press Contact + Articles */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-muted border-2 border-border mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-foreground text-lg font-bold normal-case">
                    Contacto para medios de comunicación
                  </h2>
                  <p className="text-foreground/70 text-sm normal-case">
                    ¿Eres periodista o medio y quieres cubrir nuestras rutas o entrevistar al equipo?
                  </p>
                </div>
              </div>
              <a
                href="mailto:comunicacion@refoodesp.org"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shrink-0 normal-case"
              >
                comunicacion@refoodesp.org
              </a>
            </div>

            <div className="space-y-4">
              {pressItems.map((item, idx) => (
                <article
                  key={idx}
                  className="p-6 bg-card border-2 border-border hover:border-primary/60 transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 label-text text-primary">
                      <Newspaper className="h-3.5 w-3.5" />
                      {item.outlet}
                    </span>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm normal-case">{item.date}</span>
                  </div>
                  <h3 className="text-foreground text-lg font-bold normal-case mb-2">{item.title}</h3>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline normal-case"
                    >
                      Ver publicación
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    item.note && (
                      <p className="text-foreground/60 text-sm normal-case">{item.note}</p>
                    )
                  )}
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
