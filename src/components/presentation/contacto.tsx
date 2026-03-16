import React from "react";
import ThemeProvider from "../theme-provider";
import { WhatsAppIcon, PhoneIcon, EnvelopeIcon } from "../icons";

const contactMethods = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    detail: "+57 311 360 84 91",
    description: "Respuesta rápida. Escríbenos para cotizaciones y consultas.",
    href: "https://wa.me/573113608491",
    cta: "Abrir WhatsApp",
    highlight: true,
    external: true,
  },
  {
    icon: PhoneIcon,
    title: "Teléfono",
    detail: "311 360 84 91",
    description: "Llámanos directamente para hablar sobre tu proyecto.",
    href: "tel:+573113608491",
    cta: "Llamar ahora",
    highlight: false,
    external: false,
  },
  {
    icon: EnvelopeIcon,
    title: "Correo electrónico",
    detail: "info@crsolin.com",
    description: "Envíanos los detalles de tu proyecto o solicitud.",
    href: "mailto:info@crsolin.com",
    cta: "Enviar correo",
    highlight: false,
    external: false,
  },
];

export function ContactoSection() {
  return (
    <ThemeProvider>
      <section id="contacto" className="bg-gray-900 px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Contacto
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Cotizaciones sin compromiso. Cuéntanos qué necesitas y te
              asesoramos con la mejor solución.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactMethods.map(
              ({ icon: Icon, title, detail, description, href, cta, highlight, external }) => (
                <div
                  key={title}
                  className={`rounded-2xl p-8 text-center ${
                    highlight
                      ? "bg-white text-gray-900"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  <div
                    className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                      highlight ? "bg-gray-100" : "bg-gray-700"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${highlight ? "text-gray-700" : "text-gray-300"}`}
                    />
                  </div>
                  <h3 className={`mb-1 text-xl font-bold ${highlight ? "text-gray-900" : "text-white"}`}>
                    {title}
                  </h3>
                  <p className={`mb-3 font-mono text-sm ${highlight ? "text-gray-500" : "text-gray-400"}`}>
                    {detail}
                  </p>
                  <p className={`mb-6 text-sm leading-relaxed ${highlight ? "text-gray-500" : "text-gray-400"}`}>
                    {description}
                  </p>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <button
                      className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                        highlight
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : "border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {cta}
                    </button>
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContactoSection;
