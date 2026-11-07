import React from "react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import { WhatsAppIcon } from "../icons";

export function HeroSection() {
  return (
    <ThemeProvider>
      <Navbar />
      <header
        id="inicio"
        className="relative flex min-h-[calc(100vh-4.5rem)] w-full items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50" />

        <div className="container relative z-10 mx-auto px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-500/40 bg-black/40 px-4 py-1.5 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Soluciones Industriales
              </span>
            </div>

            <h1 className="mb-5 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Fabricación de Repuestos y Suministro de Insumos para la
              industria del Caucho y el Plástico.
            </h1>

            <p className="mb-10 max-w-xl text-base font-medium leading-relaxed text-gray-200 sm:text-lg">
              Diseño, fabricación y reparación de piezas. Asesoría e
              interventoría, diseño, construcción, mantenimiento por outsourcing
              y montajes industriales.
            </p>

            <div className="mb-16 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/573113608491"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-500 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contactar por WhatsApp
              </a>
              <a
                href="#servicios"
                className="flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                Ver servicios
              </a>
            </div>

            <div className="grid max-w-md grid-cols-3 gap-6">
              <div className="border-l-2 border-yellow-500 pl-4">
                <p className="text-2xl font-bold text-white sm:text-3xl">12+</p>
                <p className="text-xs text-gray-200 sm:text-sm">Equipos</p>
              </div>
              <div className="border-l-2 border-yellow-500 pl-4">
                <p className="text-2xl font-bold text-white sm:text-3xl">100%</p>
                <p className="text-xs text-gray-200 sm:text-sm">A la medida</p>
              </div>
              <div className="border-l-2 border-yellow-500 pl-4">
                <p className="text-2xl font-bold text-white sm:text-3xl">311</p>
                <p className="text-xs text-gray-200 sm:text-sm">360 84 91</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
          <a
            href="#servicios"
            className="flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-80"
          >
            <span className="text-xs font-semibold uppercase tracking-widest">
              Explorar
            </span>
            <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSection;
