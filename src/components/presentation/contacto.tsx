import React from "react";
import ThemeProvider from "../theme-provider";
import { WhatsAppIcon, PhoneIcon, EnvelopeIcon } from "../icons";

export function ContactoSection() {
  return (
    <ThemeProvider>
      <section id="contacto" className="bg-gray-900 px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Contacto
              </p>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Hablemos de tu proyecto
              </h2>
              <p className="mb-8 text-lg text-gray-400 leading-relaxed">
                Cotizaciones sin compromiso. Cuéntanos qué necesitas y te
                asesoramos con la mejor solución para tu proceso industrial.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/573113608491"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                    <WhatsAppIcon className="h-5 w-5 text-green-600" />
                    Abrir WhatsApp
                  </button>
                </a>
                <a href="mailto:info@crsolin.com">
                  <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                    <EnvelopeIcon className="h-5 w-5" />
                    Enviar correo
                  </button>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/573113608491"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600/20">
                  <WhatsAppIcon className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-white">WhatsApp</p>
                  <p className="text-sm text-gray-400">+57 311 360 84 91</p>
                </div>
                <svg className="ml-auto h-5 w-5 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>

              <a
                href="tel:+573113608491"
                className="flex items-center gap-5 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <PhoneIcon className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Teléfono</p>
                  <p className="text-sm text-gray-400">311 360 84 91</p>
                </div>
                <svg className="ml-auto h-5 w-5 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>

              <a
                href="mailto:info@crsolin.com"
                className="flex items-center gap-5 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <EnvelopeIcon className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Correo electrónico</p>
                  <p className="text-sm text-gray-400">info@crsolin.com</p>
                </div>
                <svg className="ml-auto h-5 w-5 text-gray-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContactoSection;
