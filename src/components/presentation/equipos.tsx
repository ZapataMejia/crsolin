import React from "react";
import ThemeProvider from "../theme-provider";

const equiposExtrusion = [
  "Extrusora de caucho",
  "Cabezales y boquillas para extrusión",
  "Tinas de enfriamiento",
  "Bandas haladoras",
  "Mesas de corte automático",
  "Atemperadores con agua y aceite térmico",
  "Prensa de vulcanizado",
  "Sistemas de dosificación y mezclado",
  "Guillotina para corte de balas de caucho",
  "Prensado para balas de caucho",
  "Torre de enfriamiento",
  "Fabricación de repuestos industriales",
];

const otrosEquipos = [
  "Molino triturador",
  "Aglutinadora de polietileno y polipropileno",
  "Extrusora para PVC y polipropileno",
  "Tinas de enfriamiento",
  "Bandas haladoras",
  "Mesas de corte automático",
  "Sistemas de dosificación",
  "Torre de enfriamiento",
  "Fabricación de repuestos",
];

export function EquiposSection() {
  return (
    <ThemeProvider>
      <section id="equipos" className="bg-gray-50 px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Equipos y productos
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Diseño, fabricación y montaje
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              Fabricamos equipos completos y repuestos para líneas de extrusión
              de caucho, plástico y más.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-bold">
                  12
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Línea de extrusión de caucho
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {equiposExtrusion.map((equipo, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-semibold text-gray-600">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600">{equipo}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-100 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-gray-700 text-sm font-bold">
                  9
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Otros equipos y servicios
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {otrosEquipos.map((equipo, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-semibold text-gray-600">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600">{equipo}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-gray-900 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1">
                  Producto destacado
                </p>
                <p className="text-base font-bold text-white">
                  Marginadores desplazables para molino de caucho
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Maquinaria industrial"
              className="h-64 w-full object-cover lg:h-80"
            />
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default EquiposSection;
