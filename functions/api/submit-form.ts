export interface Env {
  BREVO_API_KEY?: string
  RESEND_API_KEY?: string
  EMAIL_FROM?: string
  FALLBACK_TO_EMAIL?: string
  CONTACT_SHEET_ID?: string
}

type FormType =
  | "contact"
  | "rutas"
  | "equipo"
  | "socio"
  | "donante"
  | "donacion"
  | "alianza"
  | "ayuda"
  | "nucleo"

type ContactRow = {
  nucleo: string
  label: string
  contacto: string
  whatsappme: string
  email: string
}

type EmailField = { label: string; value: string }

type FormResponse = {
  status: "success" | "error"
  delivery?: "email" | "fallback"
  message?: string
  whatsappme?: string
  mailtoUrl?: string
  nextDate?: string
  dayLabel?: string
}

const DEFAULT_SHEET_ID = "1dpxyKAe_fEam5wBFHSvms0kslFQObQy0B23drQQ6afM"
const DEFAULT_FROM = "ReFood España <informacion@refoodesp.org>"
const DEFAULT_TO = "informacion@refoodesp.org"

const BRAND = {
  yellow: "#F5B72F",
  dark: "#1A1A1A",
  bg: "#F7F7F5",
  border: "#E5E3DD",
  muted: "#6B6B6B",
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

const AREA_LABELS: Record<string, string> = {
  comunicacion: "Comunicación y redes sociales",
  coordinacion: "Coordinación de voluntarios",
  logistica: "Logística y relación con comercios",
  administracion: "Administración y captación de fondos",
  digitalizacion: "Digitalización y tecnología",
  otra: "Otra área",
}

const TIPO_NEGOCIO_LABELS: Record<string, string> = {
  fruteria: "Frutería",
  panaderia: "Panadería / Pastelería",
  restaurante: "Restaurante / Bar",
  supermercado: "Supermercado / Tienda",
  colegio: "Colegio / Universidad",
  otro: "Otro",
}

const TIPO_ENTIDAD_LABELS: Record<string, string> = {
  ong: "ONG / Entidad social",
  empresa: "Empresa",
  administracion: "Administración pública",
  fundacion: "Fundación",
  colectivo: "Colectivo / Asociación vecinal",
  otro: "Otro",
}

const INTERES_LABELS: Record<string, string> = {
  campanas: "Campañas y comunicación",
  voluntariado: "Voluntariado corporativo",
  proyectos: "Proyectos conjuntos",
  patrocinio: "Patrocinio y recursos",
  varios: "Varias opciones",
}

const METODO_LABELS: Record<string, string> = {
  transferencia: "Transferencia bancaria",
  bizum: "Bizum",
}

function jsonResponse(body: FormResponse, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ""
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const next = text[i + 1]

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"'
        i++
      } else if (char === '"') {
        inQuotes = false
      } else {
        field += char
      }
    } else if (char === '"') {
      inQuotes = true
    } else if (char === ",") {
      row.push(field)
      field = ""
    } else if (char === "\n") {
      row.push(field)
      rows.push(row)
      row = []
      field = ""
    } else if (char !== "\r") {
      field += char
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

async function fetchContactRows(sheetId: string): Promise<ContactRow[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=0`
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; ReFoodBot/1.0)",
      Accept: "text/csv,text/plain,*/*",
    },
  })
  if (!res.ok) {
    throw new Error(`Sheet fetch failed: ${res.status}`)
  }
  const csvText = await res.text()
  const rows = parseCsv(csvText)
  if (rows.length < 2) return []

  return rows.slice(1).map((r) => ({
    nucleo: (r[0] || "").trim(),
    label: (r[1] || "").trim(),
    contacto: (r[2] || "").trim(),
    whatsappme: (r[3] || "").trim(),
    email: (r[4] || "").trim(),
  }))
}

function findContact(rows: ContactRow[], nucleo: string, label: string): ContactRow | undefined {
  const nNucleo = normalize(nucleo)
  const nLabel = normalize(label)
  return rows.find((r) => normalize(r.nucleo) === nNucleo && normalize(r.label) === nLabel)
}

async function resolveContact(
  sheetId: string,
  nucleo: string,
  label: string,
  fallbackEmail: string,
): Promise<{ email: string; whatsappme: string }> {
  try {
    const rows = await fetchContactRows(sheetId)
    const exact = findContact(rows, nucleo, label)
    if (exact?.email) {
      return { email: exact.email, whatsappme: exact.whatsappme }
    }
    const general = findContact(rows, "Refood", "Informacion")
    if (general?.email) {
      return { email: general.email, whatsappme: general.whatsappme }
    }
  } catch (err) {
    console.warn("Google Sheet lookup failed, using fallback contact:", err)
  }
  return { email: fallbackEmail, whatsappme: "" }
}

function buildWhatsappLink(whatsappme: string, prefill: string): string {
  if (!whatsappme) return ""
  const sep = whatsappme.includes("?") ? "&" : "?"
  return `${whatsappme}${sep}text=${encodeURIComponent(prefill)}`
}

function buildMailtoUrl(to: string, subject: string, fields: EmailField[], message?: string): string {
  const lines = fields.map((f) => `${f.label}: ${f.value}`)
  if (message) {
    lines.push("", "Mensaje:", message)
  }
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`
}

function getNextDateForWeekday(targetWeekday: number): { nextDate: string } {
  const nowParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date())

  const year = Number(nowParts.find((p) => p.type === "year")?.value)
  const month = Number(nowParts.find((p) => p.type === "month")?.value)
  const day = Number(nowParts.find((p) => p.type === "day")?.value)

  const utcDate = new Date(Date.UTC(year, month - 1, day, 12, 0, 0))
  const currentDay = utcDate.getUTCDay()
  let diff = (targetWeekday - currentDay + 7) % 7
  if (diff === 0) diff = 7
  utcDate.setUTCDate(utcDate.getUTCDate() + diff)

  const nextDate = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(utcDate)

  return { nextDate }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function buildHtml(params: {
  heading: string
  intro: string
  fields: EmailField[]
  message?: string
}): string {
  const rows = params.fields
    .map(
      (f) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid ${BRAND.border};font-size:13px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.04em;font-weight:700;width:40%;vertical-align:top;">${escapeHtml(
            f.label,
          )}</td>
          <td style="padding:10px 16px;border-bottom:1px solid ${BRAND.border};font-size:15px;color:${BRAND.dark};">${escapeHtml(
            f.value,
          )}</td>
        </tr>`,
    )
    .join("")

  const messageBlock = params.message
    ? `
      <div style="margin-top:24px;padding:16px 20px;background:${BRAND.bg};border-left:4px solid ${BRAND.yellow};">
        <div style="font-size:12px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.05em;font-weight:700;margin-bottom:6px;">Mensaje</div>
        <div style="font-size:15px;color:${BRAND.dark};white-space:pre-wrap;line-height:1.6;">${escapeHtml(
          params.message,
        )}</div>
      </div>`
    : ""

  return `<!DOCTYPE html>
<html lang="es">
  <body style="margin:0;padding:0;background:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:${BRAND.dark};padding:24px 32px;">
                <span style="color:${BRAND.yellow};font-weight:800;font-size:18px;letter-spacing:0.06em;text-transform:uppercase;">ReFood España</span>
              </td>
            </tr>
            <tr>
              <td style="height:6px;background:${BRAND.yellow};font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 12px;font-size:20px;color:${BRAND.dark};">${escapeHtml(params.heading)}</h1>
                <p style="margin:0 0 24px;font-size:15px;color:${BRAND.muted};line-height:1.6;">${escapeHtml(params.intro)}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border};border-radius:8px;overflow:hidden;">
                  ${rows}
                </table>
                ${messageBlock}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:${BRAND.bg};border-top:1px solid ${BRAND.border};">
                <p style="margin:0;font-size:12px;color:${BRAND.muted};line-height:1.5;">Este mensaje se ha generado automáticamente desde el formulario de la web de ReFood España. Responde directamente a este correo para contactar con la persona interesada.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function parseFromIdentity(fromRaw: string): { name: string; email: string } {
  const match = fromRaw.match(/^(.*?)\s*<([^>]+)>$/)
  if (match) {
    return {
      name: match[1].replace(/^"|"$/g, "").trim() || "ReFood España",
      email: match[2].trim(),
    }
  }
  return { name: "ReFood España", email: fromRaw.trim() || DEFAULT_TO }
}

async function deliverEmail(
  env: Env,
  params: {
    to: string
    replyTo?: string
    subject: string
    heading: string
    intro: string
    fields: EmailField[]
    message?: string
  },
): Promise<{ ok: true; delivery: "email" | "fallback" } | { ok: false; error: string }> {
  const fromRaw = env.EMAIL_FROM || DEFAULT_FROM
  const html = buildHtml(params)

  if (env.BREVO_API_KEY) {
    const sender = parseFromIdentity(fromRaw)
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender,
        to: [{ email: params.to }],
        replyTo: params.replyTo ? { email: params.replyTo } : undefined,
        subject: params.subject,
        htmlContent: html,
      }),
    })
    if (!res.ok) {
      const detail = await res.text()
      console.error("Brevo API error:", res.status, detail)
      return { ok: false, error: "No pudimos enviar el correo. Inténtalo de nuevo en unos minutos." }
    }
    return { ok: true, delivery: "email" }
  }

  if (env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromRaw,
        to: [params.to],
        reply_to: params.replyTo ? [params.replyTo] : undefined,
        subject: params.subject,
        html,
      }),
    })
    if (!res.ok) {
      const detail = await res.text()
      console.error("Resend API error:", res.status, detail)
      return { ok: false, error: "No pudimos enviar el correo. Inténtalo de nuevo en unos minutos." }
    }
    return { ok: true, delivery: "email" }
  }

  return { ok: true, delivery: "fallback" }
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  let body: Record<string, unknown>
  try {
    body = (await context.request.json()) as Record<string, unknown>
  } catch {
    return jsonResponse({ status: "error", message: "Solicitud inválida." }, 400)
  }

  // Honeypot check against automated spam bots
  if (str(body.website)) {
    return jsonResponse({ status: "success", delivery: "fallback" })
  }

  const formType = str(body.formType) as FormType
  const payload = (typeof body.data === "object" && body.data !== null ? body.data : body) as Record<
    string,
    unknown
  >

  const sheetId = context.env.CONTACT_SHEET_ID || DEFAULT_SHEET_ID
  const fallbackEmail = context.env.FALLBACK_TO_EMAIL || DEFAULT_TO

  let lookupNucleo = "Refood"
  let lookupLabel = "Informacion"
  let replyTo = ""
  let subject = ""
  let heading = ""
  let intro = ""
  let fields: EmailField[] = []
  let message = ""
  let whatsappPrefill = ""
  let extra: { nextDate?: string; dayLabel?: string } = {}

  switch (formType) {
    case "contact": {
      const name = str(payload.name)
      const email = str(payload.email)
      const subjectInput = str(payload.subject)
      const msg = str(payload.message)
      if (!name || !email || !subjectInput || !msg) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos." }, 400)
      }
      replyTo = email
      subject = `Contacto web — ${subjectInput}`
      heading = "Nuevo mensaje desde el formulario de contacto"
      intro = "Has recibido un nuevo mensaje a través del formulario de contacto de la web."
      fields = [
        { label: "Nombre", value: name },
        { label: "Email", value: email },
        { label: "Asunto", value: subjectInput },
      ]
      message = msg
      whatsappPrefill = `Hola, soy ${name}. Os he escrito a través del formulario de contacto de la web (${subjectInput}).`
      break
    }

    case "rutas": {
      const nombre = str(payload.nombre)
      const email = str(payload.email)
      const telefono = str(payload.telefono)
      const nucleo = str(payload.nucleo)
      const disponibilidad = str(payload.disponibilidad)
      const msg = str(payload.mensaje)
      if (!nombre || !email || !disponibilidad || !nucleo) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      const dayConfig = DAY_CONFIG[disponibilidad]
      if (!dayConfig) {
        return jsonResponse({ status: "error", message: "El día seleccionado no es válido." }, 400)
      }
      const nucleoLabel = NUCLEO_LABELS[nucleo]
      if (!nucleoLabel) {
        return jsonResponse({ status: "error", message: "El núcleo seleccionado no es válido." }, 400)
      }
      const { nextDate } = getNextDateForWeekday(dayConfig.weekday)
      lookupNucleo = nucleoLabel
      lookupLabel = dayConfig.label
      replyTo = email
      subject = `Nuevo voluntario de rutas — ${nucleoLabel}, ${dayConfig.label}: ${nombre}`
      heading = `Nuevo voluntario para rutas (${nucleoLabel} — ${dayConfig.label})`
      intro = `Se ha inscrito una nueva persona para hacer rutas los ${dayConfig.label} en ${nucleoLabel}. Su primer día previsto es el ${nextDate}.`
      fields = [
        { label: "Nombre", value: nombre },
        { label: "Email", value: email },
        { label: "Teléfono", value: telefono || "No indicado" },
        { label: "Núcleo", value: nucleoLabel },
        { label: "Día", value: dayConfig.label },
        { label: "Primer día previsto", value: nextDate },
      ]
      message = msg
      whatsappPrefill = `Hola, soy ${nombre}. Acabo de inscribirme para hacer rutas los ${dayConfig.label} en ${nucleoLabel}.`
      extra = { nextDate, dayLabel: dayConfig.label }
      break
    }

    case "equipo": {
      const nombre = str(payload.nombre)
      const email = str(payload.email)
      const telefono = str(payload.telefono)
      const area = str(payload.area)
      const motivacion = str(payload.motivacion)
      if (!nombre || !email || !area) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      const areaLabel = AREA_LABELS[area] || area
      lookupNucleo = "Refood"
      lookupLabel = "Equipo gestores"
      replyTo = email
      subject = `Nueva candidatura al equipo (${areaLabel}): ${nombre}`
      heading = "Nueva candidatura para el equipo de gestión"
      intro =
        "Una persona quiere unirse al equipo de gestión de ReFood. Estos son sus datos para que podáis contactar y concertar una entrevista informal."
      fields = [
        { label: "Nombre", value: nombre },
        { label: "Email", value: email },
        { label: "Teléfono", value: telefono || "No indicado" },
        { label: "Área de interés", value: areaLabel },
      ]
      message = motivacion
      whatsappPrefill = `Hola, soy ${nombre}. Me gustaría unirme al equipo de gestión de ReFood (${areaLabel}).`
      break
    }

    case "socio": {
      const nombre = str(payload.nombre)
      const email = str(payload.email)
      const telefono = str(payload.telefono)
      const dni = str(payload.dni)
      const direccion = str(payload.direccion)
      const cuota = str(payload.cuota)
      const iban = str(payload.iban)
      const privacidad = payload.privacidad
      if (!nombre || !email || !dni || !cuota || !iban) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      if (!privacidad) {
        return jsonResponse({ status: "error", message: "Debes aceptar la política de privacidad." }, 400)
      }
      const cuotaLabel = cuota === "otra" ? "Otra cantidad" : `${cuota} euros/mes`
      lookupNucleo = "Refood"
      lookupLabel = "Socios"
      replyTo = email
      subject = `Nueva alta de socio/a: ${nombre}`
      heading = "Nueva solicitud de alta como socio/a"
      intro =
        "Una persona quiere darse de alta como socio/a de ReFood. Estos son sus datos para tramitar la domiciliación."
      fields = [
        { label: "Nombre", value: nombre },
        { label: "Email", value: email },
        { label: "Teléfono", value: telefono || "No indicado" },
        { label: "DNI/NIE", value: dni },
        { label: "Dirección", value: direccion || "No indicada" },
        { label: "Cuota mensual", value: cuotaLabel },
        { label: "IBAN", value: iban },
      ]
      whatsappPrefill = `Hola, soy ${nombre}. Acabo de solicitar el alta como socio/a de ReFood.`
      break
    }

    case "donante": {
      const negocio = str(payload.negocio)
      const tipo = str(payload.tipo)
      const nucleo = str(payload.nucleo)
      const contacto = str(payload.contacto)
      const email = str(payload.email)
      const telefono = str(payload.telefono)
      const direccion = str(payload.direccion)
      const horario = str(payload.horario)
      const comentarios = str(payload.comentarios)
      if (!negocio || !tipo || !nucleo || !contacto || !email || !telefono || !direccion) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      const nucleoLabel = NUCLEO_LABELS[nucleo]
      if (!nucleoLabel) {
        return jsonResponse({ status: "error", message: "El núcleo seleccionado no es válido." }, 400)
      }
      lookupNucleo = nucleoLabel
      lookupLabel = "Donantes"
      replyTo = email
      subject = `Nuevo comercio donante en ${nucleoLabel}: ${negocio}`
      heading = `Nuevo comercio donante (${nucleoLabel})`
      intro = "Un comercio quiere donar su excedente de alimentos. Estos son sus datos para coordinar la recogida."
      fields = [
        { label: "Negocio", value: negocio },
        { label: "Tipo de negocio", value: TIPO_NEGOCIO_LABELS[tipo] || tipo },
        { label: "Núcleo", value: nucleoLabel },
        { label: "Persona de contacto", value: contacto },
        { label: "Email", value: email },
        { label: "Teléfono", value: telefono },
        { label: "Dirección", value: direccion },
        { label: "Horario de cierre", value: horario || "No indicado" },
      ]
      message = comentarios
      whatsappPrefill = `Hola, soy ${contacto} de ${negocio}. Nos gustaría donar nuestro excedente de alimentos a ReFood (${nucleoLabel}).`
      break
    }

    case "donacion": {
      const nombre = str(payload.nombre)
      const dni = str(payload.dni)
      const email = str(payload.email)
      const direccion = str(payload.direccion)
      const cantidad = str(payload.cantidad)
      const metodo = str(payload.metodo)
      const fecha = str(payload.fecha)
      const privacidad = payload.privacidad
      if (!nombre || !dni || !email || !cantidad || !metodo || !fecha) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      if (!privacidad) {
        return jsonResponse({ status: "error", message: "Debes aceptar la política de privacidad." }, 400)
      }
      lookupNucleo = "Refood"
      lookupLabel = "Socios"
      replyTo = email
      subject = `Solicitud de certificado de donación: ${nombre}`
      heading = "Nueva solicitud de certificado de donación"
      intro =
        "Una persona ha realizado una donación y solicita su certificado fiscal. Estos son los datos para emitirlo."
      fields = [
        { label: "Nombre", value: nombre },
        { label: "DNI/NIF", value: dni },
        { label: "Email", value: email },
        { label: "Dirección fiscal", value: direccion || "No indicada" },
        { label: "Cantidad donada", value: `${cantidad} €` },
        { label: "Método de pago", value: METODO_LABELS[metodo] || metodo },
        { label: "Fecha de la donación", value: fecha },
      ]
      whatsappPrefill = `Hola, soy ${nombre}. He realizado una donación a ReFood y he solicitado el certificado fiscal.`
      break
    }

    case "alianza": {
      const entidad = str(payload.entidad)
      const tipo = str(payload.tipo)
      const contacto = str(payload.contacto)
      const telefono = str(payload.telefono)
      const email = str(payload.email)
      const interes = str(payload.interes)
      const msg = str(payload.mensaje)
      if (!entidad || !tipo || !contacto || !email) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      lookupNucleo = "Refood"
      lookupLabel = "Instituciones"
      replyTo = email
      subject = `Nueva propuesta de colaboración: ${entidad}`
      heading = "Nueva propuesta de colaboración institucional"
      intro =
        "Una entidad ha enviado una propuesta de colaboración a través de la web. Estos son sus datos para responder y explorar la alianza."
      fields = [
        { label: "Entidad", value: entidad },
        { label: "Tipo de entidad", value: TIPO_ENTIDAD_LABELS[tipo] || tipo },
        { label: "Persona de contacto", value: contacto },
        { label: "Teléfono", value: telefono || "No indicado" },
        { label: "Email", value: email },
        { label: "Interés", value: interes ? INTERES_LABELS[interes] || interes : "No indicado" },
      ]
      message = msg
      whatsappPrefill = `Hola, escribo de ${entidad}. Acabamos de enviar una propuesta de colaboración a ReFood.`
      break
    }

    case "ayuda": {
      const nombre = str(payload.nombre)
      const telefono = str(payload.telefono)
      const email = str(payload.email)
      const barrio = str(payload.barrio)
      const personas = str(payload.personas)
      const msg = str(payload.mensaje)
      if (!nombre || !telefono || !barrio || !personas || !msg) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      const nucleoLabel = NUCLEO_LABELS[barrio]
      const zonaLabel = nucleoLabel || "Otro barrio"
      lookupNucleo = nucleoLabel || "Refood"
      lookupLabel = nucleoLabel ? "Beneficiarios" : "Informacion"
      replyTo = email
      subject = `Solicitud de ayuda — ${zonaLabel}: ${nombre}`
      heading = `Nueva solicitud de ayuda (${zonaLabel})`
      intro =
        "Una familia del barrio ha solicitado ayuda a través de la web. Ponte en contacto con ella lo antes posible."
      fields = [
        { label: "Nombre", value: nombre },
        { label: "Teléfono", value: telefono },
        { label: "Email", value: email || "No indicado" },
        { label: "Barrio", value: zonaLabel },
        { label: "Personas en el hogar", value: personas },
      ]
      message = msg
      whatsappPrefill = `Hola, soy ${nombre}. Acabo de enviar una solicitud de ayuda desde la web de ReFood (${zonaLabel}).`
      break
    }

    case "nucleo": {
      const nombre = str(payload.nombre)
      const email = str(payload.email)
      const telefono = str(payload.telefono)
      const barrio = str(payload.barrio)
      const msg = str(payload.mensaje)
      if (!nombre || !email || !barrio) {
        return jsonResponse({ status: "error", message: "Por favor, completa todos los campos obligatorios." }, 400)
      }
      lookupNucleo = "Refood"
      lookupLabel = "Nucleos"
      replyTo = email
      subject = `Nuevo núcleo en ${barrio}: ${nombre}`
      heading = "Interés en crear un nuevo núcleo"
      intro =
        "Una persona quiere montar un núcleo ReFood en su barrio. Estos son sus datos para acompañarle en el proceso."
      fields = [
        { label: "Nombre", value: nombre },
        { label: "Email", value: email },
        { label: "Teléfono", value: telefono || "No indicado" },
        { label: "Barrio o zona", value: barrio },
      ]
      message = msg
      whatsappPrefill = `Hola, soy ${nombre}. Me gustaría crear un núcleo ReFood en ${barrio}.`
      break
    }

    default:
      return jsonResponse({ status: "error", message: "Formulario no reconocido." }, 400)
  }

  const contact = await resolveContact(sheetId, lookupNucleo, lookupLabel, fallbackEmail)
  const deliveryResult = await deliverEmail(context.env, {
    to: contact.email,
    replyTo: replyTo || undefined,
    subject,
    heading,
    intro,
    fields,
    message,
  })

  if (!deliveryResult.ok) {
    return jsonResponse({ status: "error", message: deliveryResult.error }, 502)
  }

  const whatsappme = buildWhatsappLink(contact.whatsappme, whatsappPrefill)
  const mailtoUrl = buildMailtoUrl(contact.email, subject, fields, message)

  return jsonResponse({
    status: "success",
    delivery: deliveryResult.delivery,
    whatsappme,
    mailtoUrl,
    ...extra,
  })
}
