"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { SectionTitle, Accent } from "./ui/section-title";
import { GreenButton } from "./ui/green-button";
import { FeatureCheck } from "./ui/feature-check";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

function AnimatedPrice({ target }: { target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>${count}</span>;
}

export function Pricing({ waLink }: { waLink: string }) {
  return (
    <section
      id="precio"
      className="bg-[var(--bg-page)] px-6 py-[100px] md:px-12"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[60px]">
        <AnimatedSection className="flex flex-col items-center gap-4">
          <SectionLabel>{"// precio"}</SectionLabel>
          <SectionTitle className="text-center">
            Inversión Clara. <Accent>Retorno Inmediato.</Accent>
          </SectionTitle>
          <p className="max-w-[700px] text-center text-[17px] leading-[1.7] text-[var(--text-secondary)]">
            Un asistente virtual humano cuesta $1,500–3,000/mes y solo trabaja 8 horas.
            Tu OpenClaw trabaja 24/7 por una fracción del precio.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid w-full max-w-[880px] gap-6 md:grid-cols-2" staggerDelay={0.2}>
          {/* Setup Card */}
          <StaggerItem>
            <div className="group flex h-full flex-col gap-6 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-8 transition-[transform,box-shadow] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <span className="font-mono text-[13px] font-semibold tracking-[2px] text-[var(--accent-green)]">
                SETUP
              </span>
              <div className="flex items-end gap-2">
                <span className="font-heading text-[48px] font-bold text-[var(--text-primary)]">
                  <AnimatedPrice target={997} />
                </span>
                <span className="mb-2 font-mono text-[14px] text-[var(--text-muted)]">
                  USD / único
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <FeatureCheck>Instalación completa y segura</FeatureCheck>
                <FeatureCheck>Todas tus herramientas conectadas (WhatsApp, email, calendario, y más)</FeatureCheck>
                <FeatureCheck>Personalización de tono y reglas</FeatureCheck>
                <FeatureCheck>Entrenamiento y onboarding</FeatureCheck>
                <FeatureCheck>14 días de soporte incluidos</FeatureCheck>
              </div>
              <GreenButton fullWidth href={waLink}>
                Agendar Instalación
              </GreenButton>
            </div>
          </StaggerItem>

          {/* Soporte Card */}
          <StaggerItem>
            <div className="group relative flex h-full flex-col gap-6 rounded-2xl border border-[var(--accent-green)] bg-[var(--bg-card)] p-8 shadow-[0_0_40px_var(--accent-green-glow)] transition-[transform,box-shadow] hover:-translate-y-[2px] hover:shadow-[0_0_60px_var(--accent-green-glow)]">
              {/* Badge */}
              <div className="absolute -top-3 right-6 rounded-full bg-[var(--accent-green)] px-4 py-1">
                <span className="font-mono text-[11px] font-bold text-[var(--bg-page)]">
                  Recomendado
                </span>
              </div>
              <span className="font-mono text-[13px] font-semibold tracking-[2px] text-[var(--accent-green)]">
                SOPORTE MENSUAL
              </span>
              <div className="flex items-end gap-2">
                <span className="font-heading text-[48px] font-bold text-[var(--text-primary)]">
                  <AnimatedPrice target={297} />
                </span>
                <span className="mb-2 font-mono text-[14px] text-[var(--text-muted)]">
                  USD / mes
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <FeatureCheck>Monitoreo y mantenimiento 24/7</FeatureCheck>
                <FeatureCheck>Siempre actualizado con las últimas mejoras</FeatureCheck>
                <FeatureCheck>Nuevas integraciones bajo demanda</FeatureCheck>
                <FeatureCheck>Soporte prioritario por WhatsApp</FeatureCheck>
                <FeatureCheck>Optimización continua del asistente</FeatureCheck>
              </div>
              <GreenButton fullWidth href={waLink}>
                Activar Soporte Mensual
              </GreenButton>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimatedSection className="flex w-full max-w-[540px] flex-col items-center gap-4" delay={0.3}>
          <p className="font-mono text-[13px] text-[var(--accent-green)]">
            Instalaciones limitadas por mes
          </p>
          <p className="text-center text-[14px] leading-[1.7] text-[var(--text-muted)]">
            Si en 7 días tu asistente no funciona como prometimos, te devolvemos tu dinero.
          </p>
          <p className="text-[14px] text-[var(--text-muted)]">
            Cancela el soporte cuando quieras. Tu asistente sigue funcionando.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
