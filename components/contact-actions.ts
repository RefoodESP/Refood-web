import { submitToFormApi, type BaseFormState } from "@/lib/form-client"

export type ContactFormState = BaseFormState

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const subject = (formData.get("subject") as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Por favor, completa todos los campos." }
  }

  return submitToFormApi<ContactFormState>("contact", formData, {
    fallbackEmail: "informacion@refoodesp.org",
    fallbackSubject: `Contacto web — ${subject}`,
  })
}
