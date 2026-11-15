import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Calendar, Users, Store, Heart, ArrowRight } from "lucide-react"
export default function NucleoPanBenditoPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Link 
          href="/#nucleos" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a núcleos</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-foreground text-background px-4 py-1 text-sm font-bold">
              DESDE 2022
            </span>
          </div>
          <h1 className="text-foreground mb-4">
            Núcleo Pan Bendito
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl normal-case">
            El segundo núcleo de ReFood en España. La prueba de que el modelo funciona 
            y se puede replicar en cualquier barrio con ganas de organizarse.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="stat-number text-3xl text-primary">4</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Comercios colaboradores</span>
            </div>
            <div>
              <span className="stat-number text-3xl text-primary">16</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Familias beneficiarias</span>
            </div>
            <div>
              <span className="stat-number text-3xl text-primary">28</span>
              <span className="block text-background/70 text-sm mt-1 normal-case">Voluntarios activos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column - History */}
            <div className="lg:col-span-2">
              <h2 className="text-foreground mb-8">Nuestra historia</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/70 mb-6 normal-case text-lg">
                  Pan Bendito es un barrio del distrito de Carabanchel, en el sur de Madrid. 
                  Un barrio obrero con una fuerte identidad vecinal y una larga tradición de 
                  solidaridad y organización comunitaria.
                </p>

                <div className="my-8 p-6 bg-primary/10 border-l-4 border-primary">
                  <p className="text-foreground font-semibold normal-case mb-0">
                    En 2022, tras consolidar las operaciones en Tetuán, ReFood España decidió 
                    dar el salto y abrir un segundo núcleo. Pan Bendito fue el lugar elegido 
                    por su tejido asociativo y la necesidad detectada en el barrio.
                  </p>
                </div>

                <p className="text-foreground/70 mb-6 normal-case">
                  El núcleo de Pan Bendito nació con la experiencia acumulada de Tetuán. 
                  Los voluntarios pioneros del primer núcleo acompañaron el proceso de apertura, 
                  compartiendo aprendizajes y ayudando a formar al nuevo equipo.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  Hoy, el núcleo de Pan Bendito opera de forma autónoma, con su propio equipo 
                  de voluntarios y sus propios comercios colaboradores. Aunque más pequeño que 
                  Tetuán, demuestra que el modelo ReFood es replicable y escalable.
                </p>

                <h3 className="text-foreground mb-4 mt-8">El barrio de Pan Bendito</h3>

                <p className="text-foreground/70 mb-6 normal-case">
                  Pan Bendito forma parte del distrito de Carabanchel, uno de los más poblados 
                  de Madrid. Es un barrio con una mezcla de población tradicional y nuevos 
                  vecinos, con una fuerte presencia de familias trabajadoras.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  El barrio cuenta con un activo tejido asociativo: asociaciones vecinales, 
                  grupos culturales, iniciativas solidarias... ReFood se integra en esta red, 
                  colaborando con otras entidades para maximizar el impacto.
                </p>

                <p className="text-foreground/70 mb-6 normal-case">
                  La idiosincrasia del barrio, su carácter acogedor y su tradición de 
                  solidaridad entre vecinos, han sido fundamentales para el éxito del núcleo. 
                  Aquí, como en Tetuán, la comunidad es el verdadero motor del proyecto.
                </p>
              </div>

              {/* Growth Vision */}
              <div className="mt-12 p-8 bg-foreground text-background">
                <h3 className="text-primary mb-4">Un núcleo en crecimiento</h3>
                <p className="text-background/80 normal-case mb-6">
                  Pan Bendito es todavía un núcleo joven, pero con un enorme potencial de 
                  crecimiento. Estamos trabajando para ampliar la red de comercios colaboradores 
                  y llegar a más familias del barrio.
                </p>
                <p className="text-background/80 normal-case mb-0">
                  Si vives o trabajas en Pan Bendito, Carabanchel o alrededores, te invitamos 
                  a conocernos y formar parte de este proyecto. Cada persona suma.
                </p>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">El día a día</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/nucleo-pan-bendito.jpg"
                      alt="Voluntarios en Pan Bendito"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/images/pan-bendito-dia-2.jpg"
                      alt="Equipo de voluntarios"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-12">
                <h3 className="text-foreground mb-6">Hitos importantes</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2022</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Apertura del núcleo de Pan Bendito, el segundo de ReFood España
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2023</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Consolidación del equipo de voluntarios y primeros comercios estables
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 shrink-0">
                      <span className="stat-number text-xl">2024</span>
                    </div>
                    <div className="flex-1 p-4 bg-muted">
                      <p className="text-foreground/70 normal-case mb-0">
                        Crecimiento sostenido: más familias atendidas, más voluntarios activos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Info Card */}
              <div className="bg-muted p-6 mb-8">
                <h3 className="text-foreground mb-6 text-xl normal-case">Información práctica</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Dirección</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        C/ Álvarez Abellán, 37<br />
                        28025 Madrid
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Horario de operaciones</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        Tardes (horario variable)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-foreground block">Días de operación</span>
                      <span className="text-foreground/70 text-sm normal-case">
                        2 días por semana
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                <Link 
                  href="/quiero-hacer-rutas" 
                  className="block p-6 bg-primary hover:bg-primary/90 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-6 w-6 text-foreground" />
                    <h4 className="text-foreground font-bold normal-case">Hazte voluntario/a</h4>
                  </div>
                  <p className="text-foreground/80 text-sm normal-case mb-3">
                    Únete a las rutas de recogida y reparto de alimentos
                  </p>
                  <span className="inline-flex items-center gap-1 text-foreground font-bold text-sm group-hover:gap-2 transition-all">
                    Apuntarme
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link 
                  href="/quiero-colaborar" 
                  className="block p-6 border-2 border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Store className="h-6 w-6 text-primary" />
                    <h4 className="text-foreground font-bold normal-case">Dona alimentos</h4>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-3">
                    ¿Tienes un comercio en el barrio? Únete como donante
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                    Más información
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link 
                  href="/quiero-colaborar-economicamente" 
                  className="block p-6 border-2 border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-6 w-6 text-primary" />
                    <h4 className="text-foreground font-bold normal-case">Apóyanos</h4>
                  </div>
                  <p className="text-foreground/70 text-sm normal-case mb-3">
                    Colabora económicamente con el proyecto
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                    Donar
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-square bg-muted flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground/70 text-sm normal-case">
                    C/ Álvarez Abellán, 37<br />
                    28025 Madrid
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Calle+Álvarez+Abellán+37+Madrid" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-bold text-sm mt-4 hover:underline"
                  >
                    Ver en Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
