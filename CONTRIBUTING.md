# Cómo contribuir a la web de ReFood España

¡Gracias por ayudar a mejorar la presencia digital de ReFood España!

## Flujo de trabajo

1. Haz fork o crea una rama descriptiva desde `main` (por ejemplo, `docs/memoria-2026` o `fix/horario-tetuan`).
2. Instala dependencias y arranca el servidor local:
   ```bash
   npm install
   npm run dev
   ```
3. Realiza tus cambios respetando la guía técnica de [`AGENTS.md`](./AGENTS.md):
   - No introduzcas `"use server"` ni SDKs que requieran servidor Node en producción.
   - Si añades imágenes o PDFs en `public/`, optimízalos para mantener tiempos de carga bajos y estar muy por debajo del límite de `25 MiB` por archivo de Cloudflare Pages.
   - No subas archivos `.env` ni `.dev.vars` con claves privadas.
4. Verifica que TypeScript y el export estático compilan sin errores:
   ```bash
   npx tsc --noEmit
   npm run build
   ```
5. Abre un Pull Request contra `main` explicando el motivo del cambio y adjuntando capturas si afecta al diseño visual.

## Contacto

Para dudas técnicas o de contenidos: `informacion@refoodesp.org` o `comunicacion@refoodesp.org`.
