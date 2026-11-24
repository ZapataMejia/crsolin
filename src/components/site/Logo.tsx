export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex shrink-0 items-center ${className}`}>
      <img
        src="/brand/logo-nav.png"
        alt="CR Soluciones Industriales"
        className="h-14 w-auto max-w-[260px] object-contain object-left sm:h-16 sm:max-w-[320px]"
      />
    </a>
  );
}
