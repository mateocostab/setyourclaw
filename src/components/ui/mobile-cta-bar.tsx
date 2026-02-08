"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function MobileCtaBar({ waLink }: { waLink: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border-subtle)] bg-[var(--bg-page)]/95 px-4 py-3 backdrop-blur-md md:hidden"
          style={{ overscrollBehavior: "contain" }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent-green)] py-3 font-mono text-[14px] font-semibold text-[var(--bg-page)]"
          >
            <MessageCircle className="h-4 w-4" />
            Quiero Mi Asistente
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
