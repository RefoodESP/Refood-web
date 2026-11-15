# ReFood España — Web Oficial (`refoodesp.org`)

Sitio web estático de **ReFood España** (Asociación declarada de Utilidad Pública, CIF `G88486006`), construido con **Next.js** (`output: "export"`) y preparado para desplegarse de forma gratuita en **Cloudflare Workers (Static Assets)** mediante `wrangler.jsonc` + `worker.ts`, o en **Cloudflare Pages**, con lógica de formularios en `/api/submit-form`.

## Stack y arquitectura

- **Frontend:** Next.js App Router exportado como HTML estático (`out/`), Tailwind CSS, `lucide-react` y `framer-motion`.
- **Activos propios:** Imágenes optimizadas en `public/images/` y PDFs oficiales comprimidos (`< 10 MiB` cada uno) en `public/docs/`.
- **Formularios sin servidor Node persistente:** Todos los formularios (`contact`, `rutas`, `equipo`, `socio`, `donante`, `donacion`, `alianza`, `ayuda`, `nucleo`) envían un `POST` JSON a `/api/submit-form` (`functions/api/submit-form.ts`, reutilizado directamente por `worker.ts` en Cloudflare Workers).
  - La función consulta la hoja de cálculo pública de contactos configurada en `CONTACT_SHEET_ID` para enrutar cada formulario al responsable correspondiente (con fallback por defecto a `Refood / Informacion`).
  - Si existe `BREVO_API_KEY` o `RESEND_API_KEY`, envía el correo transaccional; en caso contrario (o si no hay claves configuradas), devuelve un enlace `mailto:` y el enlace de WhatsApp al navegador para que la persona complete el envío manualmente sin perder su mensaje.
- **Redirecciones SEO:** `public/_redirects` conserva redirecciones `301` desde las antiguas URLs y PDFs de WordPress.

## Desarrollo local

```bash
npm install
npm run dev
```

Para generar y revisar el export estático:

```bash
npx tsc --noEmit
npm run build
```

El resultado se genera en `out/`.

### Probar `/api/submit-form` en local (opcional)

Copia `.env.example` a `.dev.vars` para pruebas locales con Wrangler (`npx wrangler dev` o `npx wrangler pages dev out`) sin subir credenciales al repositorio.

## Variables de entorno / secretos en Cloudflare

Configura estas variables opcionales en **Cloudflare → Settings → Variables and Secrets**:

| Variable | Descripción | Obligatoria |
| --- | --- | --- |
| `BREVO_API_KEY` | Clave API de Brevo para envío transaccional de formularios | Opcional |
| `RESEND_API_KEY` | Clave API alternativa de Resend para envío de formularios | Opcional |
| `EMAIL_FROM` | Remitente verificado (por defecto `ReFood España <informacion@refoodesp.org>`) | Opcional |
| `FALLBACK_TO_EMAIL` | Buzón de respaldo cuando no hay coincidencia en la hoja | Opcional |
| `CONTACT_SHEET_ID` | ID del Google Sheet público de enrutamiento de contactos | Opcional |

## Despliegue en Cloudflare

- **Repositorio GitHub:** `RefoodESP/Refood-web` (rama `main`)
- **Cloudflare Workers (Static Assets, configuración activa en `wrangler.jsonc` + `worker.ts`):**
  - **Build command:** `npm run build`
  - **Deploy command:** `npx wrangler deploy`
  - **Assets directory:** `./out`
- **Alternativa Cloudflare Pages:**
  - **Build command:** `npm run build`
  - **Build output directory:** `out`
- **Restricción:** Todos los archivos dentro de `public/` y `out/` deben pesar menos de `25 MiB` (límite por archivo de Cloudflare).

## Contribuciones

Consulta [`CONTRIBUTING.md`](./CONTRIBUTING.md) y [`AGENTS.md`](./AGENTS.md) antes de abrir cambios.
