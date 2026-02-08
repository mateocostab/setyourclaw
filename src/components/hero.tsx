"use client";

import { MessageCircle, ChevronDown, Calendar, Globe, Home } from "lucide-react";
import { SiWhatsapp, SiGmail, SiTelegram, SiSpotify, SiGithub, SiSignal } from "react-icons/si";
import { motion } from "framer-motion";
import { GreenButton } from "./ui/green-button";

const TERMINAL_LINES = [
  { text: "> openclaw start", color: "var(--accent-green)", delay: 0.3 },
  { text: "[✓] WhatsApp conectado", color: "var(--accent-teal)", delay: 0.8 },
  { text: "[✓] Gmail sincronizado", color: "var(--accent-teal)", delay: 1.3 },
  { text: "[✓] Calendar vinculado", color: "var(--accent-teal)", delay: 1.8 },
  { text: "[→] Respondiendo 3 mensajes de WhatsApp\u2026", color: "var(--text-secondary)", delay: 2.3 },
  { text: "[→] Buscando el mejor vuelo a Madrid\u2026", color: "var(--text-secondary)", delay: 2.8 },
  { text: "[→] Actualizando CRM con datos del cliente\u2026", color: "var(--text-secondary)", delay: 3.3 },
  { text: "[→] Luces de la oficina apagadas. Smart home listo.", color: "var(--text-secondary)", delay: 3.8 },
  { text: "> tu_asistente está listo. 24/7.", color: "var(--accent-green)", delay: 4.3 },
];

const INTEGRATIONS = [
  { icon: <SiWhatsapp className="h-4 w-4" style={{ color: "#25D366" }} />, label: "WhatsApp" },
  { icon: <SiGmail className="h-4 w-4" style={{ color: "#EA4335" }} />, label: "Gmail" },
  { icon: <Calendar className="h-4 w-4" />, label: "Calendar" },
  { icon: <Globe className="h-4 w-4" />, label: "Web" },
  { icon: <SiTelegram className="h-4 w-4" style={{ color: "#26A5E4" }} />, label: "Telegram" },
  { icon: <Home className="h-4 w-4" />, label: "Smart Home" },
  { icon: <SiSpotify className="h-4 w-4" style={{ color: "#1DB954" }} />, label: "Spotify" },
  { icon: <SiGithub className="h-4 w-4" style={{ color: "#ffffff" }} />, label: "GitHub" },
  { icon: <SiSignal className="h-4 w-4" style={{ color: "#3A76F0" }} />, label: "Signal" },
];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function Hero({ waLink }: { waLink: string }) {
  const headlineWords = ["Tu", "Asistente", "de", "IA.", "Listo", "Mañana."];

  return (
    <section id="hero" className="relative flex flex-col items-center gap-8 overflow-hidden px-6 pb-10 pt-8 md:px-12">
      {/* Mesh gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_#0E1A14_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(0,212,170,0.06)_0%,_transparent_50%)]" />
      {/* Third gradient layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(0,255,132,0.04)_0%,_transparent_50%)]" />

      {/* Glow orb — larger */}
      <motion.div
        className="glow-orb absolute -right-20 top-40 h-[400px] w-[400px] bg-[var(--accent-green)]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Second glow orb — teal, left side */}
      <motion.div
        className="glow-orb absolute -left-32 top-60 h-[250px] w-[250px] bg-[var(--accent-teal)] opacity-20"
        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-[var(--accent-green-border)] bg-[var(--accent-green-muted)] px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent-green)]" />
          <span className="text-[13px] font-medium text-[var(--accent-green)]">
            Solo 5 cupos disponibles este mes
          </span>
        </motion.div>

        {/* Headlines */}
        <div className="flex max-w-[900px] flex-col items-center gap-4">
          <h1 className="font-heading text-center text-[36px] font-bold leading-[1.1] text-[var(--text-primary)] [text-wrap:balance] sm:text-[52px] md:text-[64px]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-[720px] text-center text-[17px] leading-[1.7] text-[var(--text-secondary)] md:text-[19px]"
          >
            Responde mensajes, organiza tu agenda y ejecuta tareas reales.
            Nosotros la configuramos por ti.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <GreenButton href={waLink} icon={<MessageCircle className="h-[18px] w-[18px]" />}>
            Quiero Mi Asistente
          </GreenButton>
          <a
            href="#como-funciona"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-mono text-[14px] font-semibold text-[var(--text-primary)] transition-[border-color,transform] hover:border-white/40 hover:scale-[1.02] sm:inline-flex"
          >
            <ChevronDown className="h-[18px] w-[18px]" />
            Ver Cómo Funciona
          </a>
        </motion.div>

        {/* Micro social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {["#2563EB", "#059669", "#D97706", "#7C3AED"].map((bg, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--bg-page)] text-[11px] font-bold text-white"
                style={{ backgroundColor: bg }}
              >
                {["MC", "JM", "FS", "AV"][i]}
              </div>
            ))}
          </div>
          <span className="font-mono text-[13px] text-[var(--text-muted)]">
            50+ asistentes instalados
          </span>
        </motion.div>

        {/* Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="w-full max-w-[600px] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-2xl"
        >
          {/* Top bar with tab */}
          <div className="flex h-10 items-center gap-2 bg-[var(--bg-elevated)] px-4">
            <span aria-hidden="true" className="h-[10px] w-[10px] rounded-full bg-[#FF5F56]" />
            <span aria-hidden="true" className="h-[10px] w-[10px] rounded-full bg-[#FFBD2E]" />
            <span aria-hidden="true" className="h-[10px] w-[10px] rounded-full bg-[#27C93F]" />
            <div className="ml-3 flex items-center gap-2 rounded-t-md border-b-2 border-[var(--accent-green)] px-3 py-1">
              <span className="font-mono text-[12px] text-[var(--text-primary)]">
                openclaw
              </span>
            </div>
            <span className="ml-auto font-mono text-[11px] text-[var(--text-muted)]">
              bash
            </span>
          </div>
          {/* Terminal body */}
          <div className="flex flex-col gap-2 px-6 py-5">
            {TERMINAL_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay, duration: 0.3 }}
                className="flex items-center"
              >
                <span
                  className="font-mono text-[14px]"
                  style={{ color: line.color }}
                >
                  {line.text}
                </span>
                {i === TERMINAL_LINES.length - 1 && (
                  <span className="animate-blink ml-1 inline-block h-[16px] w-[8px] bg-[var(--accent-green)]" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration badges strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex w-full flex-col items-center gap-4"
        >
          <span className="font-mono text-[12px] tracking-[1px] text-[var(--text-muted)]">
            Funciona con las herramientas que ya usas
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {INTEGRATIONS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-[var(--bg-card)] px-3 py-[6px]"
              >
                <span className="text-[var(--text-muted)]">{item.icon}</span>
                <span className="font-mono text-[12px] text-[var(--text-muted)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
