export function Impact() {
  const stats = [
    { number: "2.500+", label: "Raciones rescatadas", description: "cada mes" },
    { number: "150+", label: "Familias del barrio", description: "atendidas" },
    { number: "1.200+", label: "Kg desperdicio evitado", description: "cada mes" },
    { number: "80+", label: "Voluntarios/as", description: "activos" },
    { number: "40+", label: "Comercios del barrio", description: "colaboradores" },
    { number: "2", label: "Núcleos de barrio", description: "Tetuán y Pan Bendito" },
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary-foreground/80 mb-4 block">Nuestro impacto</span>
          <h2 className="text-primary-foreground mb-4">
            Esto es lo que conseguimos juntos
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto normal-case">
            Cada número representa horas de trabajo voluntario, comercios comprometidos 
            y familias del barrio que reciben comida buena cada semana.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-background p-6 text-center rounded-lg">
              <span className="stat-number block whitespace-nowrap">{stat.number}</span>
              <span className="stat-label block mt-2">{stat.label}</span>
              <span className="text-xs text-muted-foreground mt-1 block normal-case">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-primary-foreground/60 text-sm mt-8 normal-case">
          * Datos aproximados. Consulta nuestras memorias anuales para cifras exactas.
        </p>
      </div>
    </section>
  )
}
