import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type HelpFormState = BaseFormState

export async function submitHelpForm(
  _prevState: HelpFormState,
  formData: FormData,
): Promise<HelpFormState> {
  const nombre = (formData.get("nombre") as string)?.trim()
  const telefono = (formData.get("telefono") as string)?.trim()
  const barrio = (formData.get("barrio") as string)?.trim()
  const personas = (formData.get("personas") as string)?.trim()
  const mensaje = (formData.get("mensaje") as string)?.trim()

  if (!nombre || !telefono || !barrio || !personas || !mensaje) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }

  return submitToFormApi<HelpFormState>("ayuda", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Solicitud de ayuda: ${nombre}`,
  })
}
