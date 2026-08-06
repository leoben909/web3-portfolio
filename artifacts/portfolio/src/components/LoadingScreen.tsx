import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setVisible(false);
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 2400);
    const t4 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('hasLoaded', 'true');
      setTimeout(onComplete, 500); // Wait for fade out
    }, 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        <div className="flex flex-col items-center justify-center gap-6 font-mono text-primary w-full max-w-md px-6">
          <div className="h-6 w-full text-center text-sm md:text-base tracking-widest uppercase">
            <AnimatePresence mode="wait">
              {phase === 1 && (
                <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  Initializing...
                </motion.div>
              )}
              {phase === 2 && (
                <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  Loading Community Experience...
                </motion.div>
              )}
              {phase === 3 && (
                <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  Access Granted
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="w-full h-[2px] bg-muted overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-primary shadow-[0_0_10px_#2563eb]"
              initial={{ width: "0%" }}
              animate={{ width: phase >= 3 ? "100%" : phase === 2 ? "66%" : phase === 1 ? "33%" : "0%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}