import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { WhatsAppIcon } from "../icons";
import { COLLAGE, PILARES } from "../../data/site";

export function HeroSection() {
  return (
    <ThemeProvider>
      <Navbar />
      <header id="inicio" className="bg-white">
        <div className="container mx-auto grid items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1a56a0]">
              Ingeniería mecánica · Medellín
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.15] tracking-tight text-[#0a325c] sm:text-5xl">
              Consultoría y optimización de procesos productivos
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600">
              Entramos a tu planta, vemos el cuello de botella y resolvemos a la
              medida. No hay catálogo ni equipos en bodega.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            <dl className="mt-10 flex gap-8 text-sm">
              <div>
                <dt className="text-[#6b7785]">Experiencia</dt>
                <dd className="text-lg font-semibold text-[#0a325c]">20+ años</dd>
              </div>
              <div>
                <dt className="text-[#6b7785]">Modelo</dt>
                <dd className="text-lg font-semibold text-[#0a325c]">A la medida</dd>
              </div>
              <div>
                <dt className="text-[#6b7785]">WhatsApp</dt>
                <dd className="text-lg font-semibold text-[#0a325c]">311 360 84 91</dd>
              </div>
            </dl>
            <ul className="mt-8 flex flex-wrap gap-2">
              {PILARES.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-[#1a56a0]/20 bg-[#eef2f6] px-3 py-1 text-xs font-medium text-[#0a325c]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <img
              src={COLLAGE[0].src}
              alt={COLLAGE[0].alt}
              className="col-span-2 h-56 w-full rounded-2xl object-cover sm:h-72"
            />
            <img
              src={COLLAGE[1].src}
              alt={COLLAGE[1].alt}
              className="h-36 w-full rounded-2xl object-cover sm:h-44"
            />
            <img
              src={COLLAGE[2].src}
              alt={COLLAGE[2].alt}
              className="h-36 w-full rounded-2xl object-cover sm:h-44"
            />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSection;
