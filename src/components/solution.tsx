"use client";

import { MessageCircle, Mail, Calendar, Globe, Brain, Search, Home, Zap } from "lucide-react";
import {
  SiWhatsapp,
  SiTelegram,
  SiDiscord,
  SiSlack,
  SiSignal,
  SiApple,
  SiOpenai,
  SiSpotify,
  SiGithub,
  SiGmail,
  SiNotion,
  SiX,
  SiGooglechrome,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./ui/section-label";
import { SectionTitle, Accent } from "./ui/section-title";
import { AnimatedSection } from "./ui/animated-section";

const CHAT_MESSAGES = [
  {
    type: "incoming" as const,
    text: "Búscame vuelos a Madrid para el jueves",
    time: "9:14 AM",
  },
  {
    type: "outgoing" as const,
    text: "Encontré 3 opciones. El mejor precio es Iberia: $420, sale 8:15 AM directo. ¿Lo reservo?",
    time: "9:14 AM",
  },
  {
    type: "incoming" as const,
    text: "Sí, y recuérdame hacer check-in",
    time: "9:15 AM",
  },
  {
    type: "outgoing" as const,
    text: "Vuelo reservado ✓ Recordatorio de check-in programado para miércoles 8:00 PM. También agendé transporte al aeropuerto y moví tu reunión de las 9 AM al viernes.",
    time: "9:15 AM",
  },
];

const CAPABILITIES = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    label: "Mensajería",
    desc: "WhatsApp, Telegram, Slack y más",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    desc: "Lee, responde y organiza tu bandeja",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    label: "Navegación Web",
    desc: "Busca info y llena formularios",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    label: "Calendario",
    desc: "Agenda y confirma reuniones",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    label: "Memoria",
    desc: "Recuerda todo sobre ti y tu negocio",
  },
  {
    icon: <Search className="h-6 w-6" />,
    label: "Búsqueda",
    desc: "Encuentra cualquier dato al instante",
  },
  {
    icon: <Home className="h-6 w-6" />,
    label: "Casa Inteligente",
    desc: "Controla luces y dispositivos",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    label: "Habilidades",
    desc: "Aprende funciones nuevas",
  },
];

const BRAND_INTEGRATIONS = [
  { icon: SiWhatsapp, label: "WhatsApp", color: "#25D366" },
  { icon: SiTelegram, label: "Telegram", color: "#26A5E4" },
  { icon: SiDiscord, label: "Discord", color: "#5865F2" },
  { icon: SiSlack, label: "Slack", color: "#ECB22E" },
  { icon: SiSignal, label: "Signal", color: "#3A76F0" },
  { icon: SiApple, label: "iMessage", color: "#A2AAAD" },
  { icon: SiOpenai, label: "GPT", color: "#10A37F" },
  { icon: SiSpotify, label: "Spotify", color: "#1DB954" },
  { icon: SiGithub, label: "GitHub", color: "#ffffff" },
  { icon: SiGmail, label: "Gmail", color: "#EA4335" },
  { icon: SiNotion, label: "Notion", color: "#ffffff" },
  { icon: SiX, label: "X", color: "#ffffff" },
  { icon: SiGooglechrome, label: "Chrome", color: "#4285F4" },
];

function WhatsAppMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex w-full max-w-[380px] flex-col overflow-hidden rounded-[32px] border border-[var(--border-subtle)] bg-[#0B141A] shadow-2xl">
      {/* Phone notch */}
      <div className="mx-auto mt-2 h-[6px] w-[120px] rounded-full bg-white/10" />

      {/* WhatsApp header */}
      <div className="mt-2 flex items-center gap-3 bg-[#1F2C33] px-4 py-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-green)]/20">
          <span className="text-[14px] font-bold text-[var(--accent-green)]">IA</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-semibold text-white">Mi OpenClaw</span>
          <span className="text-[12px] text-[var(--accent-green)]">en línea</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col gap-2 px-3 py-4" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
        {CHAT_MESSAGES.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.4, duration: 0.4, ease: "easeOut" }}
            className={`flex ${msg.type === "outgoing" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 ${
                msg.type === "outgoing"
                  ? "rounded-tr-sm bg-[#005C4B]"
                  : "rounded-tl-sm bg-[#1F2C33]"
              }`}
            >
              <p className="text-[13px] leading-[1.5] text-white/90">{msg.text}</p>
              <div className="mt-1 flex items-center justify-end gap-1">
                <span className="text-[10px] text-white/40">{msg.time}</span>
                {msg.type === "outgoing" && (
                  <span className="text-[10px] text-[#53BDEB]">✓✓</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 bg-[#1F2C33] px-3 py-2">
        <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2">
          <span className="text-[13px] text-white/30">Mensaje</span>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-green)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 2L11 13" stroke="#0B141A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#0B141A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CapabilityGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06]">
      <div className="grid grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
        {CAPABILITIES.map((cap, i) => (
          <motion.div
            key={cap.label}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" as const }}
            className="group flex flex-col items-center gap-3 bg-[var(--bg-card)] px-4 py-8 text-center transition-colors hover:bg-white/[0.02]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-green)]/10 text-[var(--accent-green)] transition-transform group-hover:scale-110">
              {cap.icon}
            </div>
            <span className="font-heading text-[16px] font-semibold text-[var(--text-primary)]">
              {cap.label}
            </span>
            <p className="text-[13px] leading-[1.5] text-[var(--text-secondary)]">
              {cap.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-14 flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-2"
      >
        <p className="font-mono text-[13px] font-semibold tracking-[2px] text-[var(--accent-green)]">
          {"// integraciones"}
        </p>
        <h4 className="font-heading text-[22px] font-bold text-[var(--text-primary)] md:text-[26px]">
          Funciona Con Todo
        </h4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {BRAND_INTEGRATIONS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-[var(--bg-card)] px-3 py-[6px] transition-colors hover:border-white/[0.12]"
            >
              <Icon className="h-4 w-4" style={{ color: item.color }} />
              <span className="font-mono text-[12px] text-[var(--text-muted)]">
                {item.label}
              </span>
            </div>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-[13px] text-[var(--text-muted)]"
      >
        Y más de 50 integraciones disponibles.
      </motion.p>
    </div>
  );
}

export function Solution() {
  return (
    <section className="bg-[var(--bg-page)] px-6 py-[100px] md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <AnimatedSection className="flex flex-col gap-[60px]">
          <SectionLabel>{"// la_solucion"}</SectionLabel>
          <div className="flex flex-col gap-4">
            <SectionTitle>
              No Es un Chatbot. Es un <Accent>Empleado Digital.</Accent>
            </SectionTitle>
            <p className="max-w-[900px] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
              Imagina un empleado que nunca duerme, nunca olvida, y puede hacer
              cualquier tarea digital — desde responder clientes hasta reservar
              vuelos. Eso es OpenClaw. Y nosotros lo configuramos todo por ti.
            </p>
          </div>
        </AnimatedSection>

        <CapabilityGrid />

        <IntegrationsStrip />

        {/* WhatsApp mockup below as demo */}
        <AnimatedSection className="mt-16 flex flex-col items-center gap-6" delay={0.3}>
          <p className="font-mono text-[13px] tracking-[1px] text-[var(--text-muted)]">
            Mira cómo se ve en acción
          </p>
          <WhatsAppMockup />
        </AnimatedSection>
      </div>
    </section>
  );
}
