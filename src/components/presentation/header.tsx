import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { WhatsAppIcon } from "../icons";
import { COLLAGE, PILARES, SITE } from "../../data/site";

export function HeroSection() {
  return (
    <ThemeProvider>
      <Navbar />
      <header id="inicio" className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
                Ingeniería mecánica · Medellín
              </p>
              <h1 className="max-w-xl text-4xl font-bold leading-[1.15] tracking-tight text-[#0a325c] sm:text-5xl">
                Consultoría y optimización de procesos productivos
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
                {SITE.lead}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/573113608491"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Hablar por WhatsApp
                </a>
                <a
                  href="#blog"
                  className="inline-flex items-center justify-center rounded-lg border border-[#1A56A0]/30 px-5 py-3 text-sm font-semibold text-[#0A325C] hover:border-[#1A56A0] hover:bg-[#1A56A0]/5"
                >
                  Leer el blog
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-7">
              {COLLAGE.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[2/3] w-full rounded-2xl object-cover object-center"
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-[#1a56a0]/10 pt-8 lg:mt-12">
            <dl className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="text-[#6b7785]">Experiencia</dt>
                <dd className="text-lg font-semibold text-[#0a325c]">20+ años</dd>
              </div>
              <div>
                <dt className="text-[#6b7785]">Modelo</dt>
                <dd className="whitespace-nowrap text-lg font-semibold text-[#0a325c]">
                  A la medida
                </dd>
              </div>
              <div>
                <dt className="text-[#6b7785]">WhatsApp</dt>
                <dd className="whitespace-nowrap text-lg font-semibold text-[#0a325c]">
                  311 360 84 91
                </dd>
              </div>
            </dl>
            <ul className="flex flex-wrap gap-2 xl:flex-nowrap xl:justify-between">
              {PILARES.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-[#1a56a0]/20 bg-[#eef2f6] px-3 py-1.5 text-xs font-medium text-[#0a325c] lg:whitespace-nowrap"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSection;
