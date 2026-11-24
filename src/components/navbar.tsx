import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeProvider from "./theme-provider";
import { WhatsAppIcon } from "./icons";
import ThemeToggle from "./site/ThemeToggle";

const NAV_ITEMS = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Administración", href: "/#administracion" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Blog", href: "/#blog" },
  { label: "Capacidades", href: "/#equipos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

function NavList({ onClose }: { onClose?: () => void }) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onClose}
            className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-[var(--navy)] transition-colors hover:bg-[var(--mist)] hover:text-[var(--blue)]"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SiteNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setIsNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider>
      <div
        className={`site-nav sticky top-0 z-50 w-full border-b border-gray-100 px-4 py-3 lg:px-8 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="shrink-0">
            <img
              src="/brand/logo-nav.png"
              alt="CR Soluciones Industriales"
              className="logo-nav-on-light h-14 w-auto max-w-[260px] object-contain object-left sm:h-16 sm:max-w-[320px]"
            />
            <img
              src="/brand/logo-nav-dark.png"
              alt=""
              aria-hidden="true"
              className="logo-nav-on-dark h-14 w-auto max-w-[260px] object-contain object-left sm:h-16 sm:max-w-[320px]"
            />
          </a>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <NavList />
            <ThemeToggle />
            <a
              href="https://wa.me/573113608491"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-500">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </span>
            </a>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />
          <button
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isNavOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          </div>
        </div>

        {isNavOpen && (
          <div className="lg:hidden mt-2 border-t border-gray-100 pt-2">
            <NavList onClose={() => setIsNavOpen(false)} />
            <a
              href="https://wa.me/573113608491"
              target="_blank"
              rel="noreferrer"
              className="block mb-2"
            >
              <span className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </span>
            </a>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
