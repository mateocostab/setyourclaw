"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./ui/section-label";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

const FAQS = [
  {
    q: "¿Qué es OpenClaw exactamente?",
    a: "OpenClaw es un asistente de IA que vive en tu propio espacio digital — no en una nube compartida como ChatGPT. Puede leer tus mensajes, organizar tu agenda, navegar la web, controlar dispositivos, y mucho más. Y lo mejor: aprende tu estilo y se hace más útil cada día.",
  },
  {
    q: "¿Necesito saber de tecnología para usarlo?",
    a: "Para usarlo, no. Le hablas por WhatsApp o Telegram como a cualquier contacto. Para instalarlo y configurarlo, sí se necesita experiencia técnica — por eso existimos. Nosotros hacemos toda la parte técnica. Tú solo nos dices qué necesitas.",
  },
  {
    q: "¿En qué se diferencia de ChatGPT o Siri?",
    a: "ChatGPT y Siri solo conversan. OpenClaw actúa: responde tus mensajes con tu tono, organiza tu calendario, busca información en la web, reserva vuelos, y ejecuta tareas reales. Es la diferencia entre un chatbot y un empleado digital.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Completamente. A diferencia de servicios cloud, todo corre en TU espacio privado. Tus conversaciones, emails y datos nunca pasan por servidores de terceros. Configuramos seguridad avanzada, backups automáticos y las mejores prácticas de protección.",
  },
  {
    q: "¿Qué modelos de IA soporta?",
    a: "Funciona con los mejores modelos de IA del mercado — Claude, GPT-4, Gemini, y más. Tú eliges cuál usar, y siempre puedes cambiar.",
  },
  {
    q: "¿Puedo cancelar el soporte mensual?",
    a: "Sí, sin complicaciones. El soporte se cancela cuando quieras y tu asistente sigue funcionando en tu servidor. Lo único que pierdes es el monitoreo 24/7, las actualizaciones automáticas y el soporte prioritario.",
  },
  {
    q: "¿Puedo agregar más integraciones después?",
    a: "Sí. OpenClaw tiene un sistema de habilidades que se puede ampliar fácilmente. Además, puede crear nuevas funciones por sí solo cuando las necesita. Con el plan de soporte, nosotros las configuramos por ti.",
  },
  {
    q: "¿Qué pasa si algo falla?",
    a: "La instalación incluye 14 días de soporte. Si contratas el plan mensual, tenemos monitoreo 24/7 — muchas veces detectamos y resolvemos problemas antes de que te des cuenta. Si algo falla, lo arreglamos.",
  },
];

function FaqItem({ faq, index }: { faq: typeof FAQS[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border-b border-[var(--border-subtle)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
      >
        <span className="font-heading text-[18px] font-semibold text-[var(--text-primary)] pr-4">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[var(--accent-green)]"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="bg-[var(--bg-section-alt)] px-6 py-[100px] md:px-12"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[60px]">
        <AnimatedSection className="flex flex-col items-center gap-4">
          <SectionLabel>{"// preguntas_frecuentes"}</SectionLabel>
          <h2 className="font-heading text-[36px] font-bold text-[var(--text-primary)] md:text-[44px]">
            Preguntas Frecuentes
          </h2>
        </AnimatedSection>

        <StaggerContainer className="w-full max-w-[800px]" staggerDelay={0.08}>
          {FAQS.map((faq, i) => (
            <StaggerItem key={i}>
              <FaqItem faq={faq} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
