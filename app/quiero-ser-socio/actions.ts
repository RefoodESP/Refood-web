import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type SocioFormState = BaseFormState

export async function submitSocioForm(
  _prevState: SocioFormState,
  formData: FormData,
): Promise<SocioFormState> {
  const nombre = (formData.get("nombre") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const dni = (formData.get("dni") as string)?.trim()
  const cuota = (formData.get("cuota") as string)?.trim()
  const iban = (formData.get("iban") as string)?.trim()
  const privacidad = formData.get("privacidad")

  if (!nombre || !email || !dni || !cuota || !iban) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }
  if (!privacidad) {
    return { status: "error", message: "Debes aceptar la política de privacidad." }
  }

  return submitToFormApi<SocioFormState>("socio", formData, {
    fallbackEmail: "socios@refoodesp.org",
    fallbackSubject: `Nueva alta de socio/a: ${nombre}`,
  })
}
