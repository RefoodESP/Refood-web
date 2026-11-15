"use client"

import Link from "next/link"
import { FileText, ArrowRight, Download, ChevronLeft, ChevronRight, Newspaper } from "lucide-react"
import { useState, useRef } from "react"

const news = [
  {
    type: "Evento",
    date: "15 Junio 2026",
    title: "Jornada de puertas abiertas en Tetuán",
    description: "Ven a conocer nuestro local, cómo trabajamos y únete a una ruta de rescate.",
    link: "#",
  },
  {
    type: "Evento",
    date: "22 Junio 2026",
    title: "Taller de aprovechamiento de alimentos",
    description: "Aprende a sacar el máximo partido a los alimentos y reducir el desperdicio en casa.",
    link: "#",
  },
  {
    type: "Noticia",
    date: "1 Mayo 2026",
    title: "ReFood Pan Bendito cumple 4 años",
    description: "Celebramos el aniversario del núcleo de Carabanchel con cifras récord de impacto.",
    link: "#",
  },
  {
    type: "Noticia",
    date: "15 Abril 2026",
    title: "Nuevos comercios colaboradores en Tetuán",
    description: "Tres nuevos establecimientos se suman a las rutas de rescate de alimentos.",
    link: "#",
  },
  {
    type: "Evento",
    date: "10 Abril 2026",
    title: "Asamblea general de socios",
    description: "Reunión anual para revisar el impacto del año y planificar el siguiente.",
    link: "#",
  },
]

const memories = [
  { title: "Memoria Anual 2025", type: "PDF", link: "/docs/memoria-2025.pdf", external: true },
  { title: "Memoria Anual 2024", type: "PDF", link: "/docs/memoria-2024.pdf", external: true },
  { title: "Todas las Memorias (2020–2025)", type: "Histórico", link: "/memoria-anual/", external: false },
]

export function News() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, news.length - 1))
    setCurrentIndex(newIndex)
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / news.length
      carouselRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth"
      })
    }
  }

  const handlePrev = () => scrollToIndex(currentIndex - 1)
  const handleNext = () => scrollToIndex(currentIndex + 1)

  return (
    <section id="noticias" className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Lo último en ReFood</span>
          <h2 className="text-foreground mb-4">
            Noticias y eventos
          </h2>
          <div className="divider-refood mx-auto" />
        </div>

        {/* News Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background border border-border rounded-full p-2 shadow-md hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Ver anterior"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentIndex >= news.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background border border-border rounded-full p-2 shadow-md hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Ver siguiente"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div className="flex gap-6 transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
              {news.map((item, index) => (
                <article key={index} className="card-refood p-6 min-w-[calc(33.333%-16px)] flex-shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`label-text ${item.type === "Evento" ? "text-accent-comunidad" : "text-primary"}`}>
                      {item.type}
                    </span>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm normal-case">{item.date}</span>
                  </div>
                  <h4 className="text-foreground mb-2 normal-case">{item.title}</h4>
                  <p className="text-foreground/60 text-sm mb-4 normal-case">{item.description}</p>
                  {item.link && item.link !== "#" && (
                    <Link href={item.link} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Leer más <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-border"}`}
                aria-label={`Ir a noticia ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/prensa/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors normal-case"
            >
              <Newspaper className="h-5 w-5" />
              Ver ReFood en prensa y medios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Memorias y Documentos Section */}
        <div className="bg-background p-8 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-foreground normal-case">Memorias y documentos</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {memories.map((doc, index) => {
              const cardContent = (
                <>
                  {doc.external ? (
                    <Download className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  ) : (
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  )}
                  <div className="flex-1">
                    <span className="text-foreground text-sm font-medium normal-case block">{doc.title}</span>
                    <span className="label-text text-muted-foreground text-xs">{doc.type}</span>
                  </div>
                </>
              )
              const cardClassName = "flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors group"

              return doc.external ? (
                <a
                  key={index}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              ) : (
                <Link key={index} href={doc.link} className={cardClassName}>
                  {cardContent}
                </Link>
              )
            })}
          </div>
          
          <p className="text-muted-foreground text-sm mt-6 normal-case text-center">
            Consulta nuestras{" "}
            <Link href="/memoria-anual/" className="text-primary font-semibold hover:underline">
              memorias anuales (2020–2025)
            </Link>{" "}
            para conocer en detalle nuestro impacto y cuentas.
          </p>
        </div>
      </div>
    </section>
  )
}
