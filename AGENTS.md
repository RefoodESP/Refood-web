# AGENTS.md — Guía para asistentes y colaboradores técnicos

Este repositorio contiene la web pública estática de **ReFood España** (`refoodesp.org`).

## Reglas técnicas obligatorias

1. **Export estático estricto (`output: "export"`):**
   - No utilices `"use server"`, Server Actions, `next/headers`, `next/cookies`, rutas dinámicas sin `generateStaticParams`, ni `server-only`.
   - Mantén `trailingSlash: true` e `images: { unoptimized: true }` en `next.config.mjs`.
   - Cualquier lógica backend debe vivir en `functions/` (Pages Functions) y enlazarse desde `worker.ts` + `wrangler.jsonc` para despliegue con Cloudflare Workers Static Assets (`./out`).
2. **Sin dependencias ni enlaces de Vercel / WordPress:**
   - No reintroduzcas `@vercel/analytics` ni URLs de `vercel-storage.com`.
   - Todas las imágenes y PDFs deben servirse desde `public/images/` y `public/docs/`.
3. **Límite de Cloudflare Pages (`25 MiB` por archivo):**
   - Ningún PDF, imagen o vídeo en `public/` o `out/` puede acercarse a `25 MiB`. Comprime cualquier memoria o documento nuevo antes de añadirlo.
4. **Enrutamiento y enlaces internos:**
   - Las secciones de portada (`/#que-es`, `/#sumate`, `/#nucleos`, `/#necesitas-ayuda`, `/#noticias`, `/#contacto`) deben enlazarse con `/#...` cuando se navega desde subpáginas.
   - Si añades o mueves rutas, actualiza `public/sitemap.xml` y `public/_redirects`.

## Datos legales y de financiación verificados

No modifiques ni inventes datos bancarios, fiscales o registrales sin verificación oficial de la Junta Directiva:

- **Entidad:** Refood España · **CIF:** `G88486006`
- **Declaración de Utilidad Pública:** 2024
- **Registro Nacional de Asociaciones:** `623287` · **Registro CAM:** `39.246`
- **Domicilio social:** C/ Capitán Blanco Argibay 114, Lc Ext, 28029 Madrid
- **IBAN donaciones:** `ES86 0049 6976 2524 1003 8471`
- **Bizum ONG:** `11800`
- **Cuota mínima de socios:** `6 euros/mes`

## Verificación antes de finalizar cambios

```bash
npx tsc --noEmit
npm run build
npx --yes wrangler deploy --dry-run
```

Comprueba además que `out/_redirects`, `out/sitemap.xml`, `out/robots.txt`, `wrangler.jsonc`, `worker.ts` y las rutas esperadas existan tras el build.
