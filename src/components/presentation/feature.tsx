import React from "react";
import ThemeProvider from "../theme-provider";
import {
  BriefcaseIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { SERVICIOS, SERVICIOS_INTRO } from "../../data/site";

const ICONS = [
  BriefcaseIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  Square3Stack3DIcon,
];

export function ServicesSection() {
  return (
    <ThemeProvider>
      <section id="servicios" className="scroll-mt-28 bg-[#eef2f6] px-6 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-12 max-w-3xl lg:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
              Nuestros servicios
            </p>
            <h2 className="mb-4 text-3xl font-bold text-[#0a325c] md:text-4xl">
              ¿Qué hacemos?
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
              {SERVICIOS_INTRO}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {SERVICIOS.map(({ title, blurb, n }, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1a56a0] hover:shadow-lg"
                >
                  <span className="absolute left-0 top-0 h-1 w-0 bg-[#1a56a0] transition-all duration-300 group-hover:w-full" />
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2f6] transition-colors group-hover:bg-[#1a56a0]/10">
                      <Icon className="h-6 w-6 text-[#0a325c]" strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl font-black text-[#8B98A8]">{n}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-snug text-[#0a325c]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ServicesSection;
