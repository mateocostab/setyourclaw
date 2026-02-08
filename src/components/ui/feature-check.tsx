import { Check } from "lucide-react";

export function FeatureCheck({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <Check className="h-4 w-4 shrink-0 text-[var(--accent-green)]" />
      <span className="text-[14px] text-[var(--text-secondary)]">
        {children}
      </span>
    </div>
  );
}
