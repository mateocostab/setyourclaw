"use client";

import { useState } from "react";
import { Terminal, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Qué Es", href: "#que-es" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Precio", href: "#precio" },
  { label: "FAQ", href: "#faq" },
];

export function Header({ waLink }: { waLink: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-page)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a href="#" aria-label="SetYourClaw - Inicio" className="flex items-center gap-[10px]">
          <Terminal className="h-6 w-6 text-[var(--accent-green)]" />
          <span className="font-heading text-[20px] font-semibold tracking-[2px] text-[var(--text-primary)]">
            SETYOURCLAW
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-mono text-[14px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent-green)] after:transition-[width] hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[var(--accent-green)] px-6 py-[10px] font-mono text-[14px] font-semibold text-[var(--bg-page)] transition-[opacity,transform,box-shadow] hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_20px_var(--accent-green-glow)] md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Quiero Mi Asistente
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-[var(--text-primary)]" />
          ) : (
            <Menu className="h-6 w-6 text-[var(--text-primary)]" />
          )}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1 border-t border-[var(--border-subtle)] bg-[var(--bg-page)] px-6 pb-6 pt-4 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-mono text-[16px] font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--accent-green)] px-6 py-3 font-mono text-[14px] font-semibold text-[var(--bg-page)]"
            >
              <MessageCircle className="h-4 w-4" />
              Quiero Mi Asistente
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
