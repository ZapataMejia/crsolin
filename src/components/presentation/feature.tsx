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
                className="group rounded-2xl border border-gray-100 bg-white p-8 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-white/10 transition-colors">
                    <Icon className="h-7 w-7 text-gray-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors">
                    {number}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors">
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
