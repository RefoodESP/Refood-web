import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type EquipoFormState = BaseFormState

export async function submitEquipoForm(
  _prevState: EquipoFormState,
  formData: FormData,
): Promise<EquipoFormState> {
  const nombre = (formData.get("nombre") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const area = (formData.get("area") as string)?.trim()

  if (!nombre || !email || !area) {
    return { status: "error", message: "Por favor, completa todos los campos obligatorios." }
  }

  return submitToFormApi<EquipoFormState>("equipo", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Nueva candidatura al equipo (${area}): ${nombre}`,
  })
}
