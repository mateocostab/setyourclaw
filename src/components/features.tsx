"use client";

import { Plane, Shield, Brain, Globe, Wrench, Smartphone } from "lucide-react";
import { SectionLabel } from "./ui/section-label";
import { SectionTitle, Accent } from "./ui/section-title";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

const USE_CASES = [
  {
    icon: <Brain className="h-7 w-7" />,
    title: "Aprende y Recuerda Todo",
    desc: "Conoce tus clientes, tu negocio, tu estilo. Se hace más inteligente cada día — como un empleado que lleva años contigo.",
  },
  {
    icon: <Smartphone className="h-7 w-7" />,
    title: "Funciona Donde Ya Chateas",
    desc: "WhatsApp, Telegram, Discord, Slack, iMessage. Le hablas como a un compañero de trabajo — desde cualquier app.",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Navega la Web Por Ti",
    desc: "Busca información, compara opciones, llena formularios, extrae datos de cualquier sitio. Tiene ojos y manos.",
  },
  {
    icon: <Plane className="h-7 w-7" />,
    title: "Ejecuta Tareas Reales",
    desc: "Reserva vuelos, hace check-in, envía emails, controla tu smart home, actualiza tu CRM. No solo conversa — actúa.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Tus Datos Son Tuyos",
    desc: "A diferencia de ChatGPT o Siri, tus conversaciones y datos nunca se comparten con terceros. Privacidad real, no promesas.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Se Adapta a Lo Que Necesitas",
    desc: "¿Necesita una nueva habilidad? La construye. Los usuarios piden funciones y OpenClaw las crea en minutos.",
  },
];

export function Features() {
  return (
    <section
      className="relative px-6 py-[100px] md:px-12"
      style={{ background: "linear-gradient(180deg, rgba(0,255,132,0.02) 0%, var(--bg-page) 100%)" }}
    >
      <div className="mx-auto max-w-[1280px]">
        <AnimatedSection className="flex flex-col gap-4">
          <SectionLabel>{"// capacidades"}</SectionLabel>
          <SectionTitle>No Es Lo Que Hace. Es Lo Que <Accent>Te Ahorra.</Accent></SectionTitle>
          <p className="max-w-[800px] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
            Casos reales de usuarios de OpenClaw. Todo esto, tu asistente lo hace
            sin que levantes un dedo.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
          {USE_CASES.map((feat) => (
            <StaggerItem key={feat.title}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 text-center transition-[transform,border-color,box-shadow] hover:-translate-y-[2px] hover:border-[var(--accent-green-border)] hover:shadow-[0_0_30px_var(--accent-green-glow)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-green)]/10 text-[var(--accent-green)] transition-transform group-hover:scale-110">
                  {feat.icon}
                </div>
                <span className="font-heading text-[20px] font-semibold text-[var(--text-primary)]">
                  {feat.title}
                </span>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  {feat.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
