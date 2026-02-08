import type { ReactNode } from "react";

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-[var(--accent-green)]">{children}</span>;
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-[40px] font-bold leading-tight text-[var(--text-primary)] [text-wrap:balance] md:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
}
