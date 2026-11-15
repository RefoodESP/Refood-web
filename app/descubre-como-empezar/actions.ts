import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type NucleoFormState = BaseFormState

export async function submitNucleoForm(
  _prevState: NucleoFormState,
  formData: FormData,
): Promise<NucleoFormState> {
  const nombre = (formData.get("nombre") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const barrio = (formData.get("barrio") as string)?.trim()

  if (!nombre || !email || !barrio) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }

  return submitToFormApi<NucleoFormState>("nucleo", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Nuevo núcleo en ${barrio}: ${nombre}`,
  })
}
