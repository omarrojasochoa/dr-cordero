# Registro de Cambios

Fecha: 2026-01-10

- Integración de Color Tokens y Typography Tokens en `tailwind.config.js` según Figma:
  - Paletas: brand, green, blue, red, gray, neutral, alpha, `black`, `black-contrast`.
  - Semánticos: `primary`, `secondary`, `background`, `foreground`, `border`, `input`, `ring`, `card`, `popover`, `muted`, `accent`, `destructive`.
  - Tipografías: `fontFamily` (Maven Pro, Inter), `fontWeight`, `letterSpacing`, `lineHeight`, `fontSize` para titles, headings, labels, body y captions.
- Navbar:
  - Cambiado a overlay (`fixed top-0 w-full z-50`) para superponer sobre el Hero sin ocupar espacio inicial.
  - Estado `isScrolled` para aplicar fondo y sombra al hacer scroll (sticky visual).
  - Agregado botón “Ingresar” que navega a `/login` junto a “Fellow 593”.

Fecha: 2026-01-31

- Testimoniales:
  - Reemplazado ícono `Play` por imagen SVG `public/images/btn-play.svg` como overlay central en los thumbnails de video (desktop y móvil).

Fecha: 2026-02-10

- Home/Hidratación:
  - Añadido `suppressHydrationWarning` en `<html>` de `app/layout.tsx` para mitigar warnings de hidratación debidos a inyecciones de extensiones del navegador (p.ej. atributos como `data-tag-assistant-prod-present`). Referencia: https://react.dev/link/hydration-mismatch

Fecha: 2026-02-10

- Scroll (Lenis):
  - Implementado hook `useSmoothScroll` en `lib/lenis.ts` con configuración de Lenis y respeto a `prefers-reduced-motion`.
  - Integrado en el layout vía `Navbar` para aplicar smooth scrolling global.
  - Ajustado navegación por anchors con offset según altura del navbar.

Fecha: 2026-02-10

- Seguridad/Deploy:
  - Actualizado Next.js a una versión segura para mitigar CVE-2025-66478.
  - Migrado `@studio-freight/lenis` a `lenis` según el paquete oficial.
