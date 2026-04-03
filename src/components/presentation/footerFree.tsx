import ThemeProvider from "../theme-provider";
import { WhatsAppIcon, EnvelopeIcon } from "../icons";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <ThemeProvider>
      <footer className="bg-gray-950 px-6 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left md:max-w-sm">
              <p className="mb-2 text-base font-bold text-white">
                CR Soluciones Industriales
              </p>
              <p className="text-sm text-gray-500">
                Fabricación de repuestos y suministro de insumos para caucho y
                plástico. Diseño, fabricación y montajes industriales.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["Inicio", "Servicios", "Equipos", "Nosotros", "Contacto"].map(
                (label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                )
              )}
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/573113608491"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@crsolin.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-gray-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <hr className="my-8 border-gray-800" />

          <p className="text-center text-xs text-gray-600">
            &copy; {YEAR} CR Soluciones Industriales. Todos los derechos
            reservados. | info@crsolin.com | +57 311 360 84 91
          </p>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default Footer;
