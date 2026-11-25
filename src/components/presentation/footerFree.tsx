import ThemeProvider from "../theme-provider";
import { WhatsAppIcon, EnvelopeIcon } from "../icons";
import { SITE } from "../../data/site";
import MakerSignature from "../site/MakerSignature";

const FOOTER_NAV = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Administración", href: "/#administracion" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Blog", href: "/#blog" },
  { label: "Capacidades", href: "/#equipos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <ThemeProvider>
      <footer className="bg-gray-900 px-6 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:max-w-sm md:text-left">
              <p className="mb-1 text-base font-bold text-white">{SITE.name}</p>
              <p className="text-sm font-medium text-gray-300">{SITE.person}</p>
              <p className="mt-1 text-sm text-gray-500">{SITE.role}</p>
              <p className="text-sm text-gray-500">{SITE.city}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-[#1A56A0] hover:text-white"
                aria-label="Email"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <hr className="my-8 border-white/10" />

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-center text-xs text-gray-600 sm:text-left">
              &copy; {YEAR} {SITE.name}. Todos los derechos reservados. |{" "}
              {SITE.email} | +57 {SITE.phoneDisplay}
            </p>
            <MakerSignature />
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default Footer;
