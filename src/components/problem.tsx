"use client";

import { Clock, Users, TrendingDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SectionLabel } from "./ui/section-label";
import { SectionTitle, Accent } from "./ui/section-title";
import { GreenButton } from "./ui/green-button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const CARDS = [
  {
    icon: <Clock className="h-8 w-8" />,
    label: "Pierdes cada día en tareas repetitivas",
    target: 5,
    suffix: "+ horas/día",
    desc: "Respondiendo mensajes, organizando agenda, buscando información, actualizando datos. Tu IA puede hacer todo eso en segundos.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    label: "Cuesta un asistente humano de 8 horas",
    prefix: "$",
    target: 1500,
    suffix: "+/mes",
    desc: "Tu asistente de IA trabaja 24/7 — sin vacaciones, sin errores, sin límite de tareas. Por una fracción del costo.",
  },
  {
    icon: <TrendingDown className="h-8 w-8" />,
    label: "De tus tareas son automatizables",
    target: 68,
    suffix: "%",
    desc: "Las tareas diarias de un emprendedor son repetitivas. Imagina recuperar ese tiempo para lo que realmente importa.",
  },
];

export function Problem({ waLink }: { waLink: string }) {
  return (
    <section
      id="que-es"
      className="relative overflow-hidden bg-[var(--bg-section-alt)] px-6 py-[100px] md:px-12"
    >
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1280px]">
        <AnimatedSection className="flex flex-col gap-[60px]">
          <SectionLabel>{"// el_problema"}</SectionLabel>
          <div className="flex flex-col gap-4">
            <SectionTitle>Cada Día Sin IA, Te Quedas <Accent>Más Atrás</Accent></SectionTitle>
            <p className="max-w-[800px] text-[17px] leading-[1.7] text-[var(--text-secondary)]">
              Mientras tú pierdes horas en tareas que una IA podría hacer por ti, otros
              ya tienen un asistente digital que trabaja 24/7. La pregunta no es si vas
              a adoptar IA — es cuánto vas a esperar.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {CARDS.map((card) => (
            <StaggerItem key={card.suffix}>
              <div className="flex flex-col gap-5 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-8 transition-[transform,box-shadow] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <span className="text-[var(--accent-green)]">{card.icon}</span>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[28px] font-bold text-[var(--text-primary)]" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {"prefix" in card && card.prefix}
                    <AnimatedNumber target={card.target} suffix={card.suffix} />
                  </span>
                  <span className="text-[13px] font-medium text-[var(--text-muted)]">
                    {card.label}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  {card.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-12 flex justify-center" delay={0.4}>
          <GreenButton href={waLink} icon={<MessageCircle className="h-[18px] w-[18px]" />}>
            Recupera Tu Tiempo
          </GreenButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
