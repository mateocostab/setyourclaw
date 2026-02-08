import { Terminal, MessageCircle, Mail, Instagram } from "lucide-react";

export function Footer({ waLink }: { waLink: string }) {
  return (
    <footer className="bg-[var(--bg-page)] px-6 pb-10 pt-[60px] md:px-12">
      {/* Top gradient border — stronger */}
      <div className="mx-auto h-px max-w-[1280px] bg-gradient-to-r from-transparent via-[var(--accent-green)]/30 to-transparent" />

      <div className="mx-auto max-w-[1280px] pt-10">
        {/* Top */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" aria-label="SetYourClaw - Inicio" className="flex items-center gap-[10px]">
              <Terminal className="h-5 w-5 text-[var(--accent-green)]" />
              <span className="font-heading text-[18px] font-semibold tracking-[2px] text-[var(--text-primary)]">
                SETYOURCLAW
              </span>
            </a>
            <p className="text-[14px] text-[var(--text-muted)]">
              Tu asistente de IA, en tu servidor.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[12px] font-semibold tracking-[1px] text-[var(--text-primary)]">
                servicio
              </span>
              {[
                { label: "Instalación", href: "#que-es" },
                { label: "Soporte", href: "#precio" },
                { label: "Precio", href: "#precio" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[12px] font-semibold tracking-[1px] text-[var(--text-primary)]">
                recursos
              </span>
              {[
                { label: "¿Qué es OpenClaw?", href: "#que-es" },
                { label: "¿Cómo funciona?", href: "#como-funciona" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[12px] font-semibold tracking-[1px] text-[var(--text-primary)]">
                contacto
              </span>
              {[
                { label: "WhatsApp", href: waLink },
                { label: "Instagram", href: "#", disabled: true },
                { label: "Email", href: "#", disabled: true },
              ].map((l) =>
                "disabled" in l && l.disabled ? (
                  <span
                    key={l.label}
                    aria-disabled="true"
                    className="cursor-default text-[13px] text-[var(--text-muted)] opacity-50"
                  >
                    {l.label}
                  </span>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-[var(--border-subtle)]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-[12px] text-[var(--text-muted)]">
            © 2026 SetYourClaw. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-muted)]" aria-label="Instagram">
              <Instagram className="h-[18px] w-[18px]" />
            </span>
            <a href={waLink} className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:text-[var(--accent-green)]" aria-label="WhatsApp">
              <MessageCircle className="h-[18px] w-[18px]" />
            </a>
            <span className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-muted)]" aria-label="Email">
              <Mail className="h-[18px] w-[18px]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
