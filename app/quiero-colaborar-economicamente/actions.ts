import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type DonacionFormState = BaseFormState

export async function submitDonacionForm(
  _prevState: DonacionFormState,
  formData: FormData,
): Promise<DonacionFormState> {
  const nombre = (formData.get("nombre") as string)?.trim()
  const dni = (formData.get("dni") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const cantidad = (formData.get("cantidad") as string)?.trim()
  const metodo = (formData.get("metodo") as string)?.trim()
  const fecha = (formData.get("fecha") as string)?.trim()
  const privacidad = formData.get("privacidad")

  if (!nombre || !dni || !email || !cantidad || !metodo || !fecha) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }
  if (!privacidad) {
    return { status: "error", message: "Debes aceptar la política de privacidad." }
  }

  return submitToFormApi<DonacionFormState>("donacion", formData, {
    fallbackEmail: "financiacion@refoodesp.org",
    fallbackSubject: `Solicitud de certificado de donación: ${nombre}`,
  })
}
