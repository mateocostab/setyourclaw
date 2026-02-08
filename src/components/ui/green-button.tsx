import React from "react";

export function GreenButton({
  children,
  icon,
  big = false,
  fullWidth = false,
  href,
}: {
  children: string;
  icon?: React.ReactNode;
  big?: boolean;
  fullWidth?: boolean;
  href?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-green)] font-mono text-[14px] font-semibold text-[var(--bg-page)] transition-[opacity,transform] hover:opacity-90 hover:scale-[1.02] hover:shadow-[0_0_20px_var(--accent-green-glow)] active:scale-[0.98] ${
    big ? "px-10 py-[18px]" : "px-8 py-4"
  } ${fullWidth ? "w-full" : ""}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <button className={cls}>
      {icon}
      {children}
    </button>
  );
}
