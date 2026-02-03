import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // Para Netlify (raíz del dominio). Si usas GitHub Pages en /astro-launch-ui/, pon base: "/astro-launch-ui/"
  site: undefined,
  base: "/",
});
