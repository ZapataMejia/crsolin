import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      className="theme-toggle inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--navy)] transition-colors duration-200 hover:border-[var(--blue)] hover:bg-[var(--mist)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]"
    >
      <span className="theme-icon-to-dark inline-flex">
        <MoonIcon className="h-5 w-5" strokeWidth={1.75} />
        <span className="sr-only">Activar modo oscuro</span>
      </span>
      <span className="theme-icon-to-light inline-flex">
        <SunIcon className="h-5 w-5" strokeWidth={1.75} />
        <span className="sr-only">Activar modo claro</span>
      </span>
    </button>
  );
}
