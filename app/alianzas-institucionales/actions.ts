import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type AlianzaFormState = BaseFormState

export async function submitAlianzaForm(
  _prevState: AlianzaFormState,
  formData: FormData,
): Promise<AlianzaFormState> {
  const entidad = (formData.get("entidad") as string)?.trim()
  const tipo = (formData.get("tipo") as string)?.trim()
  const contacto = (formData.get("contacto") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()

  if (!entidad || !tipo || !contacto || !email) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }

  return submitToFormApi<AlianzaFormState>("alianza", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Nueva propuesta de colaboración: ${entidad}`,
  })
}
