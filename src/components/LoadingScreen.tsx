import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border border-electric/30" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-electric border-r-violet"
              />
              <div className="absolute inset-3 rounded-full bg-aurora animate-gradient-shift opacity-90 shadow-glow" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Initializing Sandbox
            </div>
            <div className="w-48 h-px bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }} animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full w-full bg-aurora"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
