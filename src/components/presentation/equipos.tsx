import React from "react";
import ThemeProvider from "../theme-provider";
import { WhatsAppIcon } from "../icons";

const categorias = [
  {
    titulo: "Extrusión de caucho",
    descripcion:
      "Extrusoras, cabezales, tinas, bandas, corte, atemperadores y vulcanizado. Se diseñan y fabrican bajo pedido, no hay línea en bodega.",
    cantidad: "100%",
    label: "a la medida",
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
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Repuestos e insumos",
    descripcion:
      "Fabricación de repuestos industriales a medida, suministro de insumos para caucho y plástico, torres de enfriamiento.",
    cantidad: "100%",
    label: "a medida",
    imagen:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function EquiposSection() {
  return (
    <ThemeProvider>
      <section id="equipos" className="bg-white px-6 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
              Capacidades
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#0a325c] md:text-4xl">
              Lo que se fabrica cuando la planta lo pide
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Todo se hace a la medida. No hay una línea en bodega esperando
              comprador. Se parte de lo que esa planta necesita: el cuello de
              botella, el espacio, la receta, el presupuesto y el tiempo que
              pueden parar. Con eso se diseña, se fabrica o se acompaña el montaje.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Card principal - Extrusión */}
            <div className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 lg:col-span-2 lg:min-h-[520px]">
              <img
                src={categorias[0].imagen}
                alt={categorias[0].titulo}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25" />
              <div className="relative z-10 p-8">
                <p className="text-6xl font-black text-white/40 leading-none lg:text-8xl">
                  {categorias[0].cantidad}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-300 mt-1">
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
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-[#1a56a0] hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-green-600" />
                  Solicitar cotización
                </a>
              </div>
            </div>

            {/* Card Procesamiento */}
            <div className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl">
              <img
                src={categorias[1].imagen}
                alt={categorias[1].titulo}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25" />
              <div className="relative z-10 p-6">
                <p className="text-5xl font-black text-white/40 leading-none">
                  {categorias[1].cantidad}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-300 mt-1">
                  {categorias[1].label}
                </p>
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {categorias[1].titulo}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {categorias[1].descripcion}
                </p>
              </div>
            </div>

            {/* Card Repuestos */}
            <div className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl">
              <img
                src={categorias[2].imagen}
                alt={categorias[2].titulo}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25" />
              <div className="relative z-10 p-6">
                <p className="text-5xl font-black text-white/40 leading-none">
                  {categorias[2].cantidad}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-300 mt-1">
                  {categorias[2].label}
                </p>
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {categorias[2].titulo}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {categorias[2].descripcion}
                </p>
              </div>
            </div>

            {/* Producto destacado */}
            <div className="flex min-h-[200px] flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-8 lg:col-span-3">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0A325C]">
                    <svg
                      className="h-7 w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1a56a0] mb-1">
                      Un ejemplo, a la medida
                    </p>
                    <p className="text-xl font-bold text-gray-900 lg:text-2xl">
                      Marginadores desplazables para molino de caucho
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/573113608491?text=Hola%2C%20me%20interesa%20información%20sobre%20los%20marginadores%20desplazables"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1a56a0] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#164785]"
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
