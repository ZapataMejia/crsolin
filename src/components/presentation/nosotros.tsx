import React from "react";
import ThemeProvider from "../theme-provider";
import { WhatsAppIcon } from "../icons";
import {
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const valores = [
  {
    icon: ShieldCheckIcon,
    title: "Calidad garantizada",
    description: "Cada pieza y equipo cumple con los más altos estándares de calidad industrial.",
  },
  {
    icon: ClockIcon,
    title: "Cumplimiento",
    description: "Entregamos en los tiempos pactados. Sabemos que los tiempos muertos cuestan.",
  },
  {
    icon: UserGroupIcon,
    title: "Acompañamiento",
    description: "Asesoría integral desde el diseño hasta el montaje y puesta en marcha.",
  },
  {
    icon: LightBulbIcon,
    title: "Soluciones a medida",
    description: "Diseñamos y fabricamos según las necesidades específicas del proceso.",
  },
];

export function NosotrosSection() {
  return (
    <ThemeProvider>
      <section id="nosotros" className="bg-white px-6 py-20 lg:py-28">
        <div className="container mx-auto">
          {/* Quiénes somos */}
          <div className="grid items-center gap-12 lg:grid-cols-2 mb-24">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Manufactura industrial"
                className="rounded-2xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 hidden lg:block rounded-2xl bg-gray-900 p-6 text-white shadow-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-gray-300">A la medida</p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Sobre nosotros
              </p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 leading-tight md:text-4xl">
                Soluciones industriales a la medida de tu proceso
              </h2>
              <p className="mb-5 text-lg text-gray-500 leading-relaxed">
                Prestamos un servicio de asesoría con el acompañamiento en la
                solución y mejoramiento en procesos industriales mediante la
                interventoría o ejecución en el diseño, construcción y montaje,
                así como también en la prestación de servicio de mantenimiento
                por outsourcing.
              </p>
              <p className="mb-8 text-lg text-gray-500 leading-relaxed">
                Comercializamos repuestos, grasas y lubricantes para la
                industria del caucho y plástico. Nuestro compromiso es ofrecer
                soluciones integrales y de calidad.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-2xl font-bold text-gray-900">12+</p>
                  <p className="text-sm text-gray-500">Equipos de extrusión</p>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-2xl font-bold text-gray-900">9+</p>
                  <p className="text-sm text-gray-500">Servicios principales</p>
                </div>
              </div>

              <a
                href="https://wa.me/573113608491"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
                  <WhatsAppIcon className="h-5 w-5 text-green-400" />
                  Hablar con nosotros
                </button>
              </a>
            </div>
          </div>

          {/* Por qué elegirnos */}
          <div>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-400">
                Nuestra propuesta de valor
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                ¿Por qué elegirnos?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-500">
                Más que un proveedor, somos un aliado estratégico para tu
                operación industrial.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {valores.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-gray-50 border border-gray-100 p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default NosotrosSection;
