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
        className="relative min-h-screen w-full flex items-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gray-950/80" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 mr-2" />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-300">
                Soluciones Industriales
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-7xl">
              Diseño, fabricación
              <br />
              <span className="text-gray-400">y reparación</span>
              <br />
              de piezas
            </h1>

            <p className="mb-10 max-w-xl text-base text-gray-400 sm:text-lg leading-relaxed">
              Asesoría e interventoría, diseño, construcción, mantenimiento por
              outsourcing y montajes industriales para el sector del caucho y
              plástico.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <a
                href="https://wa.me/573113608491"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  <WhatsAppIcon className="h-5 w-5 text-green-600" />
                  Contactar por WhatsApp
                </button>
              </a>
              <a href="#servicios">
                <button className="flex w-full sm:w-auto items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                  Ver servicios
                </button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="border-l-2 border-white/20 pl-4">
                <p className="text-2xl font-bold text-white sm:text-3xl">12+</p>
                <p className="text-xs text-gray-500 sm:text-sm">Equipos</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <p className="text-2xl font-bold text-white sm:text-3xl">100%</p>
                <p className="text-xs text-gray-500 sm:text-sm">A la medida</p>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <p className="text-2xl font-bold text-white sm:text-3xl">311</p>
                <p className="text-xs text-gray-500 sm:text-sm">360 84 91</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <a href="#servicios" className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors">
            <span className="text-xs uppercase tracking-widest">Explorar</span>
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
