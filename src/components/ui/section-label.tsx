export function SectionLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-[13px] font-semibold tracking-[2px] text-[var(--accent-green)]">
      {children}
    </span>
  );
}
