import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type DonanteFormState = BaseFormState

export async function submitDonanteForm(
  _prevState: DonanteFormState,
  formData: FormData,
): Promise<DonanteFormState> {
  const negocio = (formData.get("negocio") as string)?.trim()
  const tipo = (formData.get("tipo") as string)?.trim()
  const nucleo = (formData.get("nucleo") as string)?.trim()
  const contacto = (formData.get("contacto") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const telefono = (formData.get("telefono") as string)?.trim()
  const direccion = (formData.get("direccion") as string)?.trim()

  if (!negocio || !tipo || !nucleo || !contacto || !email || !telefono || !direccion) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }

  return submitToFormApi<DonanteFormState>("donante", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Nuevo comercio donante: ${negocio}`,
  })
}
