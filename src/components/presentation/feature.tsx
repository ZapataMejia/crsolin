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
  },
  {
    icon: CubeIcon,
    title: "Construcción y Montajes",
    description:
      "Construcción, montaje e interventoría de líneas de producción y equipos industriales. Acompañamiento integral en cada etapa del proyecto.",
  },
  {
    icon: CogIcon,
    title: "Mantenimiento y Repuestos",
    description:
      "Mantenimiento por outsourcing, fabricación de repuestos y comercialización de grasas y lubricantes industriales.",
  },
];

export function ServicesSection() {
  return (
    <ThemeProvider>
      <section id="servicios" className="bg-white px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Nuestros servicios
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Qué hacemos?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-500">
              Ofrecemos soluciones integrales para la industria del caucho y
              plástico, desde el diseño hasta el mantenimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
                  <Icon className="h-7 w-7 text-gray-700" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
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
