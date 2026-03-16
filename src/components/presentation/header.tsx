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
        className="relative min-h-[85vh] w-full flex items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-gray-900/50" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Soluciones Industriales
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Diseño, fabricación y{" "}
              <span className="text-white/80">reparación de piezas</span>
            </h1>
            <p className="mb-10 text-lg text-gray-300 md:text-xl lg:pr-16">
              Asesoría e interventoría, diseño, construcción, mantenimiento por
              outsourcing y montajes industriales para el sector del caucho y
              plástico.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/573113608491"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors shadow-lg">
                  <WhatsAppIcon className="h-5 w-5 text-green-600" />
                  Contactar por WhatsApp
                </button>
              </a>
              <a href="#servicios">
                <button className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                  Ver servicios
                </button>
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-gray-400">
              <div>
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-sm">Tipos de equipos</p>
              </div>
              <div className="h-10 w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm">A la medida</p>
              </div>
              <div className="h-10 w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-white">+57 311</p>
                <p className="text-sm">360 84 91</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSection;
