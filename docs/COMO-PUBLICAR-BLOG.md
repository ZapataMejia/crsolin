# Cómo publicar un blog (Carlos / el equipo)

Un archivo markdown = un artículo. No hay que tocar la página.

1. Crea `src/content/blog/nombre-corto.md`
2. Encabezado:

```
---
titulo: "Título que se ve en la home"
bajada: "Una o dos líneas."
fecha: 2026-11-10
tema: Asesoría
lectura: 5 min
---
```

3. El texto del artículo va debajo.
4. En local: se ve al recargar. En live: al hacer deploy.

La home muestra el más reciente apenas se entra. El resto vive en `/blog`.
