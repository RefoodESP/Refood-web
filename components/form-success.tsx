import { MessageCircle, Mail, CheckCircle2 } from "lucide-react"

export function FormSuccess({
  title,
  message,
  whatsappme,
  whatsappLabel = "Contactar por WhatsApp",
  mailtoUrl,
  delivery,
}: {
  title: string
  message: string
  whatsappme?: string
  whatsappLabel?: string
  mailtoUrl?: string
  delivery?: "email" | "fallback"
}) {
  const showMailFallback = delivery === "fallback" && Boolean(mailtoUrl)

  return (
    <div className="bg-muted p-8">
      <div className="flex flex-col items-center text-center">
        <div className="refood-icon mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>

        <h2 className="text-foreground mb-4 text-2xl">{title}</h2>

        <p className="text-foreground/80 normal-case mb-6 leading-relaxed">{message}</p>

        {(whatsappme || showMailFallback) && (
          <div className="w-full space-y-3">
            {whatsappme && (
              <>
                <p className="text-foreground/70 normal-case text-sm">
                  Si quieres agilizar el contacto, escríbenos directamente por WhatsApp:
                </p>
                <a
                  href={whatsappme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-refood w-full justify-center"
                >
                  <MessageCircle className="h-5 w-5" />
                  {whatsappLabel}
                </a>
              </>
            )}

            {showMailFallback && mailtoUrl && (
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                <Mail className="h-5 w-5" />
                Enviar también por email
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
