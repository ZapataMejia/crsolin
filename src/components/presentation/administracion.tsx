import React from "react";
import ThemeProvider from "../theme-provider";
import { WhatsAppIcon } from "../icons";
import { ADMINISTRACION, SITE } from "../../data/site";

export function AdministracionSection() {
  return (
    <ThemeProvider>
      <section
        id="administracion"
        className="scroll-mt-28 border-t border-[#1a56a0]/10 bg-[#eef2f6] px-6 py-16 lg:py-20"
      >
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
                {ADMINISTRACION.kicker}
              </p>
              <h2 className="text-balance text-3xl font-bold leading-tight text-[#0a325c] md:text-4xl">
                {ADMINISTRACION.title}
              </h2>
              <p className="mt-3 text-lg font-medium text-[#1a56a0]">
                {ADMINISTRACION.subtitle}
              </p>
              <p className="mt-5 text-base leading-relaxed text-gray-600">
                {ADMINISTRACION.lead}
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {ADMINISTRACION.follow}
              </p>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-500"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </div>

            <div className="lg:col-span-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
                {ADMINISTRACION.alcanceLabel}
              </p>
              <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ADMINISTRACION.alcance.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-4"
                  >
                    <span className="shrink-0 text-lg font-black tabular-nums text-[#8B98A8]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-[#0a325c]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-[#0a325c] px-6 py-6 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              {ADMINISTRACION.objetivoLabel}
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-white sm:text-base">
              {ADMINISTRACION.objetivos.join("  ·  ")}
            </p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default AdministracionSection;
