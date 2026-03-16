import React from "react";
import ThemeProvider from "../theme-provider";
import { WhatsAppIcon } from "../icons";

const categorias = [
  {
    titulo: "Extrusión de caucho",
    descripcion:
      "Líneas completas de extrusión: extrusoras, cabezales, tinas de enfriamiento, bandas haladoras, mesas de corte automático, atemperadores, prensas de vulcanizado y sistemas de dosificación.",
    cantidad: "12",
    label: "equipos",
    imagen:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    titulo: "Procesamiento",
    descripcion:
      "Molinos trituradores, aglutinadoras de polietileno y polipropileno, extrusoras para PVC, guillotinas y prensado para balas de caucho.",
    cantidad: "9",
    label: "servicios",
    imagen:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Repuestos e insumos",
    descripcion:
      "Fabricación de repuestos industriales a medida, comercialización de grasas y lubricantes especializados, torres de enfriamiento.",
    cantidad: "100%",
    label: "a medida",
    imagen:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function EquiposSection() {
  return (
    <ThemeProvider>
      <section id="equipos" className="bg-gray-50 px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Equipos y productos
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Todo lo que necesitas para tu línea de producción
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Card principal - Extrusión */}
            <div className="relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-2 md:row-span-2 min-h-[400px] lg:min-h-[520px] flex flex-col justify-between">
              <img
                src={categorias[0].imagen}
                alt={categorias[0].titulo}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/30" />
              <div className="relative z-10 p-8">
                <p className="text-6xl font-black text-white/20 leading-none lg:text-8xl">
                  {categorias[0].cantidad}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
                  {categorias[0].label}
                </p>
              </div>
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 lg:text-3xl">
                  {categorias[0].titulo}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed lg:text-base lg:max-w-lg mb-6">
                  {categorias[0].descripcion}
                </p>
                <a
                  href="https://wa.me/573113608491"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-green-600" />
                  Solicitar cotización
                </a>
              </div>
            </div>

            {/* Card Procesamiento */}
            <div className="relative rounded-2xl overflow-hidden min-h-[250px] flex flex-col justify-between">
              <img
                src={categorias[1].imagen}
                alt={categorias[1].titulo}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/30" />
              <div className="relative z-10 p-6">
                <p className="text-5xl font-black text-white/20 leading-none">
                  {categorias[1].cantidad}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mt-1">
                  {categorias[1].label}
                </p>
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {categorias[1].titulo}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {categorias[1].descripcion}
                </p>
              </div>
            </div>

            {/* Card Repuestos */}
            <div className="relative rounded-2xl overflow-hidden min-h-[250px] flex flex-col justify-between">
              <img
                src={categorias[2].imagen}
                alt={categorias[2].titulo}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/30" />
              <div className="relative z-10 p-6">
                <p className="text-5xl font-black text-white/20 leading-none">
                  {categorias[2].cantidad}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mt-1">
                  {categorias[2].label}
                </p>
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {categorias[2].titulo}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {categorias[2].descripcion}
                </p>
              </div>
            </div>

            {/* Producto destacado */}
            <div className="rounded-2xl bg-gray-900 p-8 flex flex-col justify-between min-h-[200px] lg:col-span-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      className="h-7 w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      Producto destacado
                    </p>
                    <p className="text-xl font-bold text-white lg:text-2xl">
                      Marginadores desplazables para molino de caucho
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/573113608491?text=Hola%2C%20me%20interesa%20información%20sobre%20los%20marginadores%20desplazables"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors shrink-0"
                >
                  Consultar
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default EquiposSection;
