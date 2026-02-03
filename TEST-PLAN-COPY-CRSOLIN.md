# Test plan: cambio de copy AstroLaunch UI → crsolin

Plan para ir cambiando el copy de la página de **AstroLaunch UI** (Creative Tim) a la nueva marca **crsolin** / **CR Soluciones Industriales**.  
Usa este documento como checklist y para definir criterios antes de aplicar cambios.

---

## Convención de nombres (a definir)

| Uso | Valor actual | Valor nuevo propuesto | ¿Confirmado? |
|-----|----------------|------------------------|--------------|
| **Marca / nombre corto** (logo, navbar, títulos) | AstroLaunch UI | **crsolin** | [ ] |
| **Nombre legal / empresa** (footer, about, contratos) | Creative Tim | **CR Soluciones Industriales** | [ ] |
| **Título de página** (pestaña del navegador) | "Presentation Page by Creative Tim" | p. ej. "CR Soluciones Industriales \| crsolin" | [ ] |
| **Descripción corta** (meta, hero) | texto genérico template | Ver `CONTENIDO-CR-SOLUCIONES.md` §2 | [ ] |

*Si quieres otro criterio (ej: siempre "CR Soluciones Industriales" en todo), anótalo en § Preguntas más abajo.*

---

## 1. Layout y metadatos globales

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 1.1 | `src/layouts/Layout.astro` | `<title>{title} by Creative Tim</title>` → título con crsolin / CR Soluciones Industriales | Pestaña del navegador |
| 1.2 | `src/layouts/Layout.astro` | `canonical` de creative-tim.com → URL real del sitio (o quitar si no hay dominio) | Inspeccionar `<link rel="canonical">` |
| 1.3 | `src/layouts/Layout.astro` | GTM: decidir si se mantiene "GTM-NKDMSK6" (Creative Tim) o se quita / reemplaza por ID del cliente | Ver script GTM en `<head>` |

---

## 2. Páginas (título pasado al Layout)

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 2.1 | `src/pages/index.astro` | `title="Presentation Page"` → p. ej. "Inicio" o "CR Soluciones Industriales" | Título en pestaña en `/` |
| 2.2 | `src/pagesFree/index.astro` | Igual que 2.1 si usas esta versión | Título en pestaña |

---

## 3. Navbars

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 3.1 | `src/components/navbar.tsx` | Texto "AstroLaunch UI" (logo/marca) → **crsolin** | Navbar en todas las páginas |
| 3.2 | `src/components/navbar.tsx` | Links `/astro-launch-ui/...` → `/...` (raíz; ya no usar base path) | Clic en Login, Signup, About, etc. |
| 3.3 | `src/components/navbar.tsx` | Link "Documentation" (creative-tim) → quitar o apuntar a doc propia | Menú / dropdown |
| 3.4 | `src/components/defaultNavbar.tsx` | "AstroLaunch UI" → **crsolin** | Navbar en páginas que usen defaultNavbar |
| 3.5 | `src/components/defaultNavbar.tsx` | Links `/astro-launch-ui/...` → `/...` | Igual que 3.2 |

---

## 4. Footers

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 4.1 | `src/components/footer.tsx` | "AstroLaunch UI by Creative Tim" → p. ej. "crsolin · CR Soluciones Industriales" y enlace si aplica | Footer global |
| 4.2 | `src/components/landing/footer.tsx` | "AstroLaunch UI" y "Move faster with AstroLaunch UI" → crsolin / frase de CR Soluciones | Landing footer |
| 4.3 | `src/components/landing/footer.tsx` | "© Creative Tim" → "© [año] CR Soluciones Industriales" (o crsolin) | Copyright |
| 4.4 | `src/components/about/footer.tsx` | "AstroLaunch UI" → **crsolin** | Footer página About |
| 4.5 | `src/components/presentation/footer.tsx` | "AstroLaunch UI" (2 sitios) y "Creative Tim. Made with ❤️..." → crsolin / CR Soluciones y frase nueva o quitar | Footer presentation |
| 4.6 | `src/components/presentation/footerFree.tsx` | Igual que 4.5 | Footer free |
| 4.7 | Todos los footers | Enlaces a creative-tim.com, twitter/facebook/dribbble/github/discord → reemplazar por redes/contacto del cliente o quitar | Clic en cada enlace |

---

## 5. Componentes de presentación (home / landing)

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 5.1 | `src/components/presentation/header.tsx` | Descripción "AstroLaunch UI is a free template..." → texto de `CONTENIDO-CR-SOLUCIONES.md` §2 (hero) | Hero de la home |
| 5.2 | `src/components/presentation/example.tsx` | "AstroLaunch UI is the starting point..." → frase acorde a crsolin / CR Soluciones | Sección example |
| 5.3 | `src/components/presentation/developer.tsx` | "Using AstroLaunch UI you get..." → descripción de servicios crsolin | Sección developer |
| 5.4 | `src/components/presentation/developerFree.tsx` | Igual que 5.3 | Sección developer free |
| 5.5 | `src/components/presentation/github.tsx` | "AstroLaunch UI is an open source..." → texto para crsolin (o quitar si no es open source) | Sección GitHub |
| 5.6 | `src/components/presentation/astro.tsx` | Enlace github creativetimofficial/astro-launch-ui → quitar o apuntar a repo propio | Botón/link GitHub |
| 5.7 | `src/components/presentation/pricing.tsx` | Enlace github astro-launch-ui → igual que 5.6 | Sección pricing |
| 5.8 | `src/components/presentation/freeToPro.tsx` | Enlace creative-tim product pro → quitar o reemplazar | CTA pro |
| 5.9 | `src/components/presentation/code.tsx` | Enlace learning-lab creative-tim → quitar o doc propia | Sección code |

---

## 6. Página About

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 6.1 | `src/components/about/accordion.tsx` | "What is AstroLaunch UI React?" etc. → preguntas/respuestas sobre CR Soluciones Industriales / crsolin | Acordeón About |
| 6.2 | Resto de about | Títulos, párrafos y listas según `CONTENIDO-CR-SOLUCIONES.md` §5 y §6 | Contenido About |

---

## 7. Login / Signup

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 7.1 | `src/components/signin.tsx` | Rutas `/astro-launch-ui/logos/...` → `/logos/...` | Imágenes Google, etc. |
| 7.2 | `src/components/signup.tsx` | Igual + link `/astro-launch-ui/login` → `/login` | Formulario y navegación |

---

## 8. Data y configuración

| # | Archivo | Qué cambiar | Verificación |
|---|---------|-------------|----------------|
| 8.1 | `public/data.json` | `"siteTitle": "AstroLaunch UI"` → `"crsolin"` o "CR Soluciones Industriales" | Quien use siteTitle en la app |
| 8.2 | `package.json` | `"name": "astro-launch-ui"` → `"crsolin"` (opcional; identidad del repo) | Solo si quieres renombrar el proyecto |
| 8.3 | `package.json` | `description`, `homepage`, `repository` si quieres que reflejen crsolin | Metadatos del proyecto |

---

## 9. Enlaces externos (Creative Tim / astro-launch-ui)

Resumen de sitios a reemplazar o quitar:

- creative-tim.com (presentation, blog, templates, knowledge-center, contact, support-terms, learning-lab, updivision)
- demos.creative-tim.com/astro-launch-ui/...
- github.com/creativetimofficial/astro-launch-ui
- twitter/facebook/dribbble/github/discord de Creative Tim
- tailwindcomponents.com, nepcha.com (ref=astrolaunch-ui)

**Decisión:** para cada uno: [ ] Reemplazar por enlace del cliente  [ ] Quitar  [ ] Dejar (excepcional).

---

## 10. Orden sugerido de ejecución

1. **Convención de nombres** (§ convención): cerrar crsolin vs CR Soluciones Industriales y título de pestaña.
2. **Layout + páginas** (§1, §2): título global y títulos de página.
3. **Data** (§8.1): `siteTitle` en `data.json`.
4. **Navbars** (§3): marca y rutas.
5. **Footers** (§4): marca, copyright y enlaces externos.
6. **Presentation** (§5): textos e enlaces de la home.
7. **About** (§6): acordeón y copy según contenido cliente.
8. **Login/Signup** (§7): rutas de assets y links.
9. **Revisión final**: búsqueda global por "AstroLaunch", "Creative Tim", "astro-launch-ui", "creative-tim".

---

## 11. Cómo verificar después de cada bloque

- Ejecutar `npm run build` y comprobar que no hay errores.
- Abrir `/`, `/about`, `/login`, `/signup` y revisar:
  - Título de pestaña.
  - Texto de marca en navbar y footer.
  - Que no queden "AstroLaunch UI" ni "Creative Tim" visibles (salvo que se decida dejar algo).
- Búsqueda en código: `AstroLaunch`, `Creative Tim`, `creative-tim`, `astro-launch-ui`.

---

## Preguntas para definir y mejorar el plan

1. **Marca en UI:** ¿Siempre "crsolin" en navbar/logo o a veces "CR Soluciones Industriales"? ¿Algún eslogan debajo (ej: "Soluciones Industriales")?
2. **Footer:** ¿Qué copyright exacto? ¿"© 2025 CR Soluciones Industriales" o "© 2025 crsolin"?
3. **Redes y contacto:** ¿Tienen redes (Facebook, LinkedIn, etc.) y email/contacto para reemplazar los enlaces de Creative Tim?
4. **Páginas a mantener:** ¿Solo Home, About, Login, Signup y Landing, o también otras (Store, Dashboard, etc.)? ¿La versión "Free" (`pagesFree/`) se usa o solo `pages/`?
5. **Analytics / GTM:** ¿Mantienen el GTM de Creative Tim o tendrán su propio ID (o ninguno)?
6. **Enlaces "Documentation", "Pro", "GitHub":** ¿Los quitamos todos o alguno debe llevar a sitio/doc del cliente?
7. **Idioma:** ¿Todo el sitio en español a partir de ahora (incluidos meta title/description) o solo el copy visible y los meta en inglés?

Cuando respondas estas preguntas, se puede actualizar este test plan (convención de nombres y decisiones de §9) y empezar a aplicar los cambios en el orden de §10.
