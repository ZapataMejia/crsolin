import ThemeProvider from "../theme-provider";
import { CLIENTES } from "../../data/site";

export function ClientesSection() {
  return (
    <ThemeProvider>
      <section
        id="clientes"
        className="scroll-mt-28 border-t border-[var(--border)] bg-[var(--mist)] px-6 py-16 lg:py-20"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--blue)]">
              {CLIENTES.kicker}
            </p>
            <h2 className="scroll-mt-28 text-balance text-3xl font-bold leading-tight text-[var(--navy)] md:text-4xl">
              {CLIENTES.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {CLIENTES.subtitle}
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
            {CLIENTES.items.map((item) => (
              <li key={item.name} className="min-w-0">
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                  <div
                    className={`grid aspect-[5/3] w-full place-items-center ${
                      item.tone === "dark" ? "p-0" : "p-4"
                    }`}
                    style={{
                      backgroundColor: item.tone === "dark" ? "#1c1c1c" : "#ffffff",
                    }}
                  >
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={`Logo de ${item.name}`}
                        width={item.width}
                        height={item.height}
                        loading="lazy"
                        decoding="async"
                        className="block max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div className="px-3 text-center">
                        <p
                          className="text-lg font-bold leading-tight tracking-tight sm:text-xl"
                          style={{ color: "#0a325c" }}
                        >
                          Grupo Etherea
                        </p>
                        <p
                          className="mt-1 text-xs font-semibold uppercase tracking-widest"
                          style={{ color: "#1a56a0" }}
                        >
                          S.A.S.
                        </p>
                      </div>
                    )}
                  </div>
                  <figcaption className="border-t border-[var(--border)] px-3 py-2.5 text-center text-sm font-medium leading-snug text-[var(--ink)]">
                    {item.name}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ClientesSection;
