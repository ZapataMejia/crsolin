import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeProvider from "./theme-provider";
import { WhatsAppIcon } from "./icons";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipos", href: "#equipos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

function NavList({ onClose }: { onClose?: () => void }) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onClose}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
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
        className={`sticky top-0 z-50 w-full bg-white px-4 py-3 lg:px-8 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="#inicio" className="shrink-0 text-lg font-bold text-gray-900">
            CR Soluciones Industriales
          </a>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <NavList />
            <a
              href="https://wa.me/573113608491"
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
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
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </button>
            </a>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
