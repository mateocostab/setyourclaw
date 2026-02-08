"use client";

import { Phone, Server, Zap, MessageCircle } from "lucide-react";
import { SectionLabel } from "./ui/section-label";
import { SectionTitle, Accent } from "./ui/section-title";
import { GreenButton } from "./ui/green-button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

const STEPS = [
  {
    num: "01",
    icon: <Phone className="h-8 w-8" />,
    title: "Llamada de 30 Minutos",
    desc: "Nos cuentas qué necesitas: qué plataformas usas, tu tono de comunicación, y las reglas de tu negocio. Sin jerga técnica.",
  },
  {
    num: "02",
    icon: <Server className="h-8 w-8" />,
    title: "Nosotros Instalamos Todo",
    desc: "Nos encargamos de toda la parte técnica — instalación, seguridad, conexiones con tus herramientas, todo. Tú no tocas nada.",
  },
  {
    num: "03",
    icon: <Zap className="h-8 w-8" />,
    title: "Tu Asistente Empieza a Trabajar",
    desc: "Al día siguiente, tu asistente ya está trabajando — respondiendo mensajes, organizando tu día, ejecutando tareas. Y cada día aprende más sobre ti.",
  },
];

export function HowItWorks({ waLink }: { waLink: string }) {
  return (
    <section
      id="como-funciona"
      className="bg-[var(--bg-page)] px-6 py-[100px] md:px-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <AnimatedSection className="flex flex-col gap-4">
          <SectionLabel>{"// como_funciona"}</SectionLabel>
          <SectionTitle>De Cero a Asistente en <Accent>24 Horas</Accent></SectionTitle>
          <p className="max-w-[800px] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
            No necesitas saber nada técnico. Solo necesitas 30 minutos para contarnos
            cómo trabajas y qué quieres automatizar.
          </p>
        </AnimatedSection>

        <StaggerContainer className="relative mt-12 grid gap-8 md:grid-cols-3" staggerDelay={0.2}>
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] top-[72px] z-0 hidden h-px bg-gradient-to-r from-[var(--accent-green)]/30 via-[var(--accent-green)]/50 to-[var(--accent-green)]/30 md:block" />

          {STEPS.map((step) => (
            <StaggerItem key={step.num}>
              <div className="relative z-10 flex flex-col items-center gap-5 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-8 text-center transition-[transform,box-shadow] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <span className="font-heading text-[48px] font-bold text-[var(--accent-green)]/20">
                  {step.num}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)]">
                  {step.icon}
                </div>
                <span className="font-heading text-[20px] font-semibold text-[var(--text-primary)]">
                  {step.title}
                </span>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.4}>
          <GreenButton href={waLink} icon={<MessageCircle className="h-[18px] w-[18px]" />}>
            Agendar Mi Llamada de 30 Min
          </GreenButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
