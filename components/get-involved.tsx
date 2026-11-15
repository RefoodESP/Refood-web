import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Users, Briefcase, Crown, Mail } from "lucide-react"

export function GetInvolved() {
  return (
    <section id="sumate" className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Súmate al desperdicio 0</span>
          <h2 className="text-foreground mb-4">
            Hay muchas formas de formar parte
          </h2>
          <div className="divider-refood mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto normal-case">
            Elige la que más te encaje y empieza a construir barrio con nosotros. 
            Aquí no sobra nadie. Ni una persona del barrio, ni un kilo de comida.
          </p>
        </div>

        {/* Volunteer Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Option A: Food Rescue */}
          <div className="card-refood p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="refood-icon">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-foreground text-xl normal-case">Rescate de alimentos</h3>
            </div>

            <p className="text-foreground/70 mb-6 normal-case">
              Participa en las rutas de recogida por el barrio. Recogerás comida de los 
              comercios, ayudarás a organizarla y conocerás gente increíble.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Lunes a Jueves, tardes (19:00-21:00)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Compromiso: 1 día/semana, 2-3 horas</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">No hace falta experiencia</span>
              </div>
            </div>

            <ul className="space-y-2 mb-8 text-foreground/60 normal-case flex-1">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Recoger excedentes de tiendas del barrio
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Clasificar y preparar los packs de comida
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Atender a las familias en el local
              </li>
            </ul>

            <Link href="/quiero-hacer-rutas" className="btn-refood w-full text-center block mt-auto">
              Quiero participar
            </Link>
          </div>

          {/* Option B: Management Team */}
          <div className="card-refood p-8 border-primary border-2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="refood-icon">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-foreground text-xl normal-case">Equipo de gestión</h3>
            </div>

            <p className="text-foreground/70 mb-6 normal-case">
              Aporta desde tu especialidad al funcionamiento del proyecto. Comunicación, 
              coordinación, logística... cada perfil suma.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Horario flexible según área</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Compromiso variable según disponibilidad</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Se valora experiencia en el área</span>
              </div>
            </div>

            <ul className="space-y-2 mb-8 text-foreground/60 normal-case flex-1">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Comunicación y redes sociales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Coordinación de voluntarios
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Logística y relación con comercios
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Administración y captación de fondos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Digitalización y tecnología
              </li>
            </ul>

            <Link href="/quiero-unirme-equipo" className="btn-refood w-full text-center block mt-auto">
              Quiero unirme al equipo
            </Link>
          </div>

          {/* Option C: Member/Socio */}
          <div className="card-refood p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="refood-icon">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-foreground text-xl normal-case">Hazte socio/a</h3>
            </div>

            <p className="text-foreground/70 mb-6 normal-case">
              Mantente conectado con la comunidad ReFood como miembro asociado. Recibe 
              información actualizada y participa en las decisiones del proyecto.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Noticias, comunicaciones y eventos</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-foreground/80 normal-case">Contribución mensual</span>
              </div>
            </div>

            <ul className="space-y-2 mb-8 text-foreground/60 normal-case flex-1">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Soporte mensual a la asociación
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Acceso a la newsletter
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                Desgravación fiscal por tu donación
              </li>
            </ul>

            <Link href="/quiero-ser-socio" className="btn-refood w-full text-center block mt-auto">
              Quiero ser socio/a
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square relative overflow-hidden" style={{ borderRadius: 0 }}>
            <Image
              src="/images/galeria-alfonso-puras.jpg"
              alt="Voluntario con delantal de colaborador de ReFood"
              fill
              className="object-cover border-0"
            />
          </div>
          <div className="aspect-square relative overflow-hidden" style={{ borderRadius: 0 }}>
            <Image
              src="/images/galeria-cargando-alimentos.jpg"
              alt="Voluntario cargando alimentos"
              fill
              className="object-cover border-0"
            />
          </div>
          <div className="aspect-square relative overflow-hidden" style={{ borderRadius: 0 }}>
            <Image
              src="/images/galeria-voluntariado-3.jpg"
              alt="Voluntaria distribuyendo comida en recipientes azules"
              fill
              className="object-cover border-0 object-top"
            />
          </div>
          <div className="aspect-square relative overflow-hidden" style={{ borderRadius: 0 }}>
            <Image
              src="/images/galeria-voluntariado-4.jpg"
              alt="Voluntaria repartiendo alimentos en contenedores"
              fill
              className="object-cover border-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
