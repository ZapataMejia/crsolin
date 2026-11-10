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
    title: "Diagnóstico y optimización",
    description:
      "Cuellos de botella, tiempos de producción, desperdicios y métodos de trabajo.",
    number: "01",
  },
  {
    icon: CubeIcon,
    title: "Maquinaria e ingeniería",
    description:
      "Rediseño de equipos, planos, fabricación y montaje. Todo a la medida, sin inventario en bodega.",
    number: "02",
  },
  {
    icon: CogIcon,
    title: "Caucho y polímeros",
    description:
      "Extrusión, vulcanización, formulaciones y defectos de fabricación. Consultoría en planta.",
    number: "03",
  },
];

export function ServicesSection() {
  return (
    <ThemeProvider>
      <section id="servicios" className="bg-[#eef2f6] px-6 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
              Nuestros servicios
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#0a325c] md:text-4xl">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Consultoría independiente en ingeniería mecánica. Cada trabajo
              sale del proceso, no de un catálogo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, number }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1a56a0] hover:shadow-lg"
              >
                <span className="absolute left-0 top-0 h-1 w-0 bg-[#1a56a0] transition-all duration-300 group-hover:w-full" />
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef2f6] transition-colors group-hover:bg-[#1a56a0]/10">
                    <Icon className="h-7 w-7 text-[#0a325c]" strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-[#8B98A8]">
                    {number}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0a325c]">
                  {title}
                </h3>
                <p className="leading-relaxed text-gray-600">
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
