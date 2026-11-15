"use client"

import { useActionState } from "react"
import { submitDonacionForm, type DonacionFormState } from "./actions"
import { FormSuccess } from "@/components/form-success"

const initialState: DonacionFormState = { status: "idle" }

export function DonacionForm() {
  const [state, formAction, isPending] = useActionState(submitDonacionForm, initialState)

  if (state.status === "success") {
    return (
      <FormSuccess
        title="¡Gracias por tu donación!"
        message="Hemos recibido tu solicitud de certificado. El equipo lo preparará y te lo enviará por email en un plazo de 48-72 horas. Tu aportación ayuda a que el proyecto siga en marcha."
        whatsappme={state.whatsappme}
        whatsappLabel="Escribir al equipo"
        mailtoUrl={state.mailtoUrl}
        delivery={state.delivery}
      />
    )
  }

  return (
    <div className="bg-muted p-8">
      <h2 className="text-foreground mb-6 text-2xl">Donación con certificado</h2>
      <p className="text-foreground/70 mb-6 normal-case text-sm">
        Si quieres recibir un certificado de donación para tu declaración de la renta, rellena este
        formulario y te lo enviaremos por email.
      </p>

      {state.status === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 border-2 border-destructive text-destructive normal-case">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div>
          <label htmlFor="nombre" className="block text-foreground font-semibold mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="dni" className="block text-foreground font-semibold mb-2">
            DNI/NIF *
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="12345678A"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-foreground font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="direccion" className="block text-foreground font-semibold mb-2">
            Dirección fiscal
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="Calle, número, código postal, ciudad"
          />
        </div>

        <div>
          <label htmlFor="cantidad" className="block text-foreground font-semibold mb-2">
            Cantidad donada *
          </label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            required
            min="1"
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
            placeholder="50"
          />
        </div>

        <div>
          <label htmlFor="metodo" className="block text-foreground font-semibold mb-2">
            Método de pago utilizado *
          </label>
          <select
            id="metodo"
            name="metodo"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          >
            <option value="">Selecciona el método</option>
            <option value="transferencia">Transferencia bancaria</option>
            <option value="bizum">Bizum</option>
          </select>
        </div>

        <div>
          <label htmlFor="fecha" className="block text-foreground font-semibold mb-2">
            Fecha de la donación *
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            required
            className="w-full px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
          />
        </div>

        <div className="flex items-start gap-3">
          <input type="checkbox" id="privacidad" name="privacidad" required className="mt-1" />
          <label htmlFor="privacidad" className="text-sm text-foreground/70 normal-case">
            Acepto la política de privacidad y autorizo el tratamiento de mis datos para la emisión del
            certificado de donación.
          </label>
        </div>

        <button type="submit" disabled={isPending} className="btn-refood w-full justify-center disabled:opacity-60">
          {isPending ? "Enviando..." : "Solicitar certificado"}
        </button>

        <p className="text-sm text-foreground/50 normal-case text-center">
          Te enviaremos el certificado por email en un plazo de 48-72 horas.
        </p>
      </form>
    </div>
  )
}
