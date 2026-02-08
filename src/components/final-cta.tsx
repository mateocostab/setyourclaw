"use client";

import { MessageCircle } from "lucide-react";
import { GreenButton } from "./ui/green-button";
import { Accent } from "./ui/section-title";
import { AnimatedSection } from "./ui/animated-section";

export function FinalCta({ waLink }: { waLink: string }) {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-page)] px-6 py-[100px] md:px-12">
      {/* Gradient backdrop — strengthened */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(0,255,132,0.10)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(0,212,170,0.06)_0%,_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,_rgba(0,255,132,0.04)_0%,_transparent_50%)]" />

      {/* Subtle grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

      <AnimatedSection className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-8">
        <h2 className="max-w-[800px] text-center font-heading text-[40px] font-bold leading-tight text-[var(--text-primary)] md:text-[48px]">
          Cada Día Sin Tu Asistente Es <Accent>Tiempo Que No Recuperas</Accent>
        </h2>
        <p className="max-w-[700px] text-center text-[18px] leading-[1.7] text-[var(--text-secondary)]">
          En 24 horas puedes tener un asistente de IA que trabaja por ti —
          respondiendo mensajes, organizando tu día, ejecutando tareas, y aprendiendo
          tu estilo. ¿Cuántos días más vas a hacerlo todo manual?
        </p>
        <GreenButton
          big
          href={waLink}
          icon={<MessageCircle className="h-5 w-5" />}
        >
          Quiero Mi Asistente en 24h
        </GreenButton>
        <p className="text-[14px] text-[var(--text-muted)]">
          Instalaciones limitadas por mes. Sin compromisos. Sin letra pequeña.
        </p>
      </AnimatedSection>
    </section>
  );
}
