"use client";

import { useState } from "react";
import { Heart, ExternalLink } from "lucide-react";
import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

function AvatarImage({ handle, name }: { handle: string; name: string }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (error) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-green)]/10 text-[12px] font-bold text-[var(--accent-green)]">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={`https://unavatar.io/x/${handle}`}
      alt=""
      width={36}
      height={36}
      className="h-9 w-9 rounded-full"
      loading="lazy"
      unoptimized
      onError={() => setError(true)}
    />
  );
}

function TweetImage({ src }: { src: string }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <Image
      src={src}
      alt=""
      width={600}
      height={340}
      className="w-full rounded-lg object-cover"
      loading="lazy"
      unoptimized
      onError={() => setError(true)}
    />
  );
}

const SHOWCASES = [
  {
    handle: "dreetje",
    name: "Dreetje",
    likes: 271,
    quote:
      "Lo que mi OpenClaw hace actualmente: maneja correos, responde mensajes, ordena productos, envía recordatorios, genera resúmenes en PDF, hace llamadas, y administra contraseñas. Es como tener un empleado digital que nunca descansa.",
    xUrl: "https://x.com/dreetje",
  },
  {
    handle: "astuyve",
    name: "AJ Stuyvenberg",
    likes: 255,
    quote:
      "OpenClaw me ahorró $4,200 en un auto. Negoció automáticamente con múltiples concesionarios por email, navegador e iMessage. Todo mientras yo seguía con mi día.",
    xUrl: "https://x.com/astuyve",
    images: ["https://pbs.twimg.com/media/G_J-F2FXcAAVFM_.jpg"],
  },
  {
    handle: "stevecaldwell",
    name: "Steve Caldwell",
    likes: 133,
    quote:
      "Construí un sistema de planificación de comidas semanal: plantilla maestra, listas de compras por tienda, recomendaciones basadas en el clima, catálogo de recetas, y recordatorios automáticos.",
    xUrl: "https://x.com/stevecaldwell",
    images: ["https://pbs.twimg.com/media/G9x8cPQXUAAXjIW.jpg"],
  },
  {
    handle: "nateliason",
    name: "Nat Eliason",
    likes: 89,
    quote:
      "La cantidad de cosas que puedes automatizar con un asistente de IA es absurda. Desde organizar tu inbox hasta manejar tu smart home. Una vez que lo pruebas, no hay vuelta atrás.",
    xUrl: "https://x.com/nateliason",
    images: ["https://pbs.twimg.com/media/G_X_aoQWsAA7mMv.jpg"],
  },
  {
    handle: "IamAdiG",
    name: "Adi G",
    likes: 16,
    quote:
      "Mi bot personal ha reemplazado la mitad de mis apps. Vive en mi WhatsApp personal y en grupos con amigos y familia. Tiene tanto contexto sobre mi vida que es como hablar con alguien que me conoce de años.",
    xUrl: "https://x.com/IamAdiG",
  },
  {
    handle: "thekitze",
    name: "Kitze",
    likes: 74,
    quote:
      "Esto es lo que pasa cuando le das a una IA acceso a tus herramientas del día a día. Se vuelve indispensable en horas, no en semanas.",
    xUrl: "https://x.com/thekitze",
    images: ["https://pbs.twimg.com/media/G_XiPstXsAIWtqK.jpg"],
  },
];

export function SocialProof() {
  return (
    <section className="bg-[var(--bg-section-alt)] px-6 py-[100px] md:px-12">
      <div className="mx-auto max-w-[1280px]">
        {/* Section header */}
        <AnimatedSection className="flex flex-col items-center gap-3">
          <p className="font-mono text-[13px] font-semibold tracking-[2px] text-[var(--accent-green)]">
            {"// lo_que_hacen"}
          </p>
          <h2 className="text-center font-heading text-[40px] font-bold leading-tight text-[var(--text-primary)] [text-wrap:balance] md:text-[48px]">
            Lo Que Hacen Los Usuarios Con OpenClaw
          </h2>
          <p className="text-center text-[15px] text-[var(--text-secondary)]">
            Casos reales. Resultados reales. Y nosotros hacemos que tú también lo tengas.
          </p>
        </AnimatedSection>

        {/* Showcase cards */}
        <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {SHOWCASES.map((s) => (
            <StaggerItem key={s.handle}>
              <a
                href={s.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 transition-[transform,border-color] hover:-translate-y-[2px] hover:border-white/[0.12]"
              >
                {/* Header: avatar + name + likes */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AvatarImage handle={s.handle} name={s.name} />
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                        {s.name}
                      </span>
                      <span className="font-mono text-[12px] text-[var(--text-muted)]">
                        @{s.handle}
                      </span>
                    </div>
                  </div>
                  {s.likes >= 50 && (
                    <div className="flex items-center gap-1 text-[var(--text-muted)]">
                      <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="font-mono text-[12px]">{s.likes}</span>
                    </div>
                  )}
                </div>

                {/* Translation label */}
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  Traducido del inglés
                </span>

                {/* Quote */}
                <p className="flex-1 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  &ldquo;{s.quote}&rdquo;
                </p>

                {/* Tweet image */}
                {"images" in s && s.images && s.images.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {s.images.map((img, i) => (
                      <TweetImage key={i} src={img} />
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center gap-2 border-t border-[var(--border-subtle)] pt-4 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent-green)]">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-mono text-[12px]">Ver en X</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
