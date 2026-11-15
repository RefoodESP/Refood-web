import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type RouteFormState = BaseFormState & {
  nextDate?: string
  dayLabel?: string
}

const DAY_CONFIG: Record<string, { label: string; weekday: number }> = {
  lunes: { label: "lunes", weekday: 1 },
  martes: { label: "martes", weekday: 2 },
  miercoles: { label: "miércoles", weekday: 3 },
  jueves: { label: "jueves", weekday: 4 },
}

const NUCLEO_LABELS: Record<string, string> = {
  tetuan: "Tetuán",
  "pan-bendito": "Pan Bendito",
}

function getNextDateForWeekday(weekday: number): string {
  const today = new Date()
  const result = new Date(today)
  const currentDay = today.getDay()
  let diff = (weekday - currentDay + 7) % 7
  if (diff === 0) diff = 7
  result.setDate(today.getDate() + diff)
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(result)
}

export async function submitRouteForm(
  _prevState: RouteFormState,
  formData: FormData,
): Promise<RouteFormState> {
  const nombre = (formData.get("nombre") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const nucleo = ((formData.get("nucleo") as string) || "").trim()
  const disponibilidad = (formData.get("disponibilidad") as string)?.trim()

  if (!nombre || !email || !disponibilidad || !nucleo) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }

  const dayConfig = DAY_CONFIG[disponibilidad]
  if (!dayConfig) {
    return { status: "error", message: "El día seleccionado no es válido." }
  }

  const nucleoLabel = NUCLEO_LABELS[nucleo]
  if (!nucleoLabel) {
    return { status: "error", message: "El núcleo seleccionado no es válido." }
  }

  const nextDate = getNextDateForWeekday(dayConfig.weekday)

  return submitToFormApi<RouteFormState>("rutas", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Nuevo voluntario de rutas — ${nucleoLabel}, ${dayConfig.label}: ${nombre}`,
    extraOnFallback: {
      nextDate,
      dayLabel: dayConfig.label,
    },
  })
}
