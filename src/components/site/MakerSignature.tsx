import { GitHubIcon } from "../icons";
import { SITE } from "../../data/site";

export default function MakerSignature() {
  return (
    <a
      href={SITE.maker.github}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-2 transition-colors hover:border-white/40 hover:bg-white/10"
      aria-label={`Diseño de ${SITE.maker.person}, ${SITE.maker.brand}. Abrir GitHub`}
    >
      <GitHubIcon className="h-4 w-4 text-gray-300 transition-colors group-hover:text-white" />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="text-[11px] italic text-gray-500 transition-colors group-hover:text-gray-300">by</span>
        <span className="text-sm font-semibold tracking-wide text-white">
          {SITE.maker.brand}
        </span>
      </span>
    </a>
  );
}
