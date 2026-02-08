"use client";

import { Wrench, Headphones, Timer, ShieldCheck, MessageCircle } from "lucide-react";
import { SectionLabel } from "./ui/section-label";
import { SectionTitle, Accent } from "./ui/section-title";
import { GreenButton } from "./ui/green-button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

const REASONS = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Instalación profesional, no tutoriales",
    desc: "OpenClaw es gratis. Pero instalarlo correctamente — con seguridad, backups, y todas tus conexiones — requiere horas y experiencia técnica. Nosotros lo hacemos todo por ti.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Tu servidor, tu privacidad",
    desc: "A diferencia de servicios cloud donde tus datos están en servidores de terceros, con SetYourClaw tus datos viven en TU espacio privado. Nadie más tiene acceso — ni nosotros, ni terceros. Control total.",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Soporte real cuando lo necesitas",
    desc: "Si algo falla, lo arreglamos. Actualizaciones de OpenClaw, nuevas integraciones, optimizaciones — todo incluido. No te dejamos solo después de instalar.",
  },
  {
    icon: <Timer className="h-8 w-8" />,
    title: "De cero a funcionando en 24 horas",
    desc: "No semanas de configuración. No tutoriales. Una llamada de 30 minutos y al día siguiente tu asistente está trabajando.",
  },
];

export function WhyUs({ waLink }: { waLink: string }) {
  return (
    <section className="bg-[var(--bg-section-alt)] px-6 py-[100px] md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <AnimatedSection className="flex flex-col gap-4">
          <SectionLabel>{"// por_que_nosotros"}</SectionLabel>
          <SectionTitle>
            OpenClaw Es Gratis. La Instalación <Accent>No Es Fácil.</Accent>
          </SectionTitle>
          <p className="max-w-[900px] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
            El 80% de las personas que intentan instalar OpenClaw solas se atascan
            en la configuración técnica. Nosotros eliminamos esa barrera.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-12 flex flex-col gap-6" staggerDelay={0.15}>
          {REASONS.map((card) => (
            <StaggerItem key={card.title}>
              <div className="flex items-start gap-6 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-8 transition-[transform,box-shadow] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-green)]/10 text-[var(--accent-green)]">
                  {card.icon}
                </div>
                <div className="flex flex-1 flex-col gap-2 border-l border-[var(--border-subtle)] pl-6">
                  <span className="font-heading text-[20px] font-semibold text-[var(--text-primary)]">
                    {card.title}
                  </span>
                  <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                    {card.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.4}>
          <GreenButton href={waLink} icon={<MessageCircle className="h-[18px] w-[18px]" />}>
            Quiero Mi Asistente
          </GreenButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
