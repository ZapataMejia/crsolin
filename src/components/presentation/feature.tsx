import React from "react";
import ThemeProvider from "../theme-provider";
import {
  WrenchScrewdriverIcon,
  CubeIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Diseño y Fabricación",
    description:
      "Diseño, fabricación y reparación de piezas y equipos industriales para procesos de caucho y plástico. Soluciones a la medida de cada necesidad.",
    number: "01",
  },
  {
    icon: CubeIcon,
    title: "Construcción y Montajes",
    description:
      "Construcción, montaje e interventoría de líneas de producción y equipos industriales. Acompañamiento integral en cada etapa del proyecto.",
    number: "02",
  },
  {
    icon: CogIcon,
    title: "Mantenimiento y Repuestos",
    description:
      "Mantenimiento por outsourcing. Fabricación de Repuestos y Suministro de Insumos para la industria del Caucho y el Plástico.",
    number: "03",
  },
];

export function ServicesSection() {
  return (
    <ThemeProvider>
      <section id="servicios" className="bg-white px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Nuestros servicios
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Ofrecemos soluciones integrales para la industria del caucho y
              plástico, desde el diseño hasta el mantenimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, number }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:shadow-2xl"
              >
                <span className="absolute left-0 top-0 h-1 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-white/10">
                    <Icon className="h-7 w-7 text-gray-700 transition-colors group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-gray-400 transition-colors group-hover:text-white/50">
                    {number}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-white">
                  {title}
                </h3>
                <p className="leading-relaxed text-gray-500 transition-colors group-hover:text-gray-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ServicesSection;
