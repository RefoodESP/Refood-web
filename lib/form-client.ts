export type BaseFormState = {
  status: "idle" | "success" | "error"
  delivery?: "email" | "fallback"
  message?: string
  whatsappme?: string
  mailtoUrl?: string
}

function formDataToObject(formData: FormData): Record<string, string | boolean> {
  const data: Record<string, string | boolean> = {}
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      data[key] = value.trim()
    }
  }
  return data
}

function buildFallbackMailto(
  to: string,
  subject: string,
  data: Record<string, string | boolean>,
): string {
  const lines = Object.entries(data)
    .filter(([key, value]) => key !== "website" && value !== "" && value !== false)
    .map(([key, value]) => `${key}: ${String(value)}`)
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`
}

export async function submitToFormApi<T extends BaseFormState>(
  formType: string,
  formData: FormData,
  options?: {
    fallbackEmail?: string
    fallbackSubject?: string
    extraOnFallback?: Partial<T>
  },
): Promise<T> {
  const data = formDataToObject(formData)
  const fallbackEmail = options?.fallbackEmail || "informacion@refoodesp.org"
  const fallbackSubject = options?.fallbackSubject || `Formulario web ReFood (${formType})`
  const fallbackMailto = buildFallbackMailto(fallbackEmail, fallbackSubject, data)

  try {
    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ formType, data }),
    })

    // Static local preview servers (e.g. `npx serve out`) return 404/405 for /api/*
    if (res.status === 404 || res.status === 405) {
      return {
        status: "success",
        delivery: "fallback",
        mailtoUrl: fallbackMailto,
        ...(options?.extraOnFallback ?? {}),
      } as T
    }

    const parsed = (await res.json()) as T
    if (!res.ok) {
      return {
        status: "error",
        message: parsed.message || "No pudimos enviar el formulario. Inténtalo de nuevo en unos minutos.",
      } as T
    }

    return parsed
  } catch {
    return {
      status: "success",
      delivery: "fallback",
      mailtoUrl: fallbackMailto,
      ...(options?.extraOnFallback ?? {}),
    } as T
  }
}
