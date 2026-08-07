import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phases = [
  { id: 1, text: 'Initializing...' },
  { id: 2, text: 'Loading Community Experience...' },
  { id: 3, text: 'Access Granted' },
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setVisible(false);
      onCompleteRef.current();
      return;
    }

    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1400),
      setTimeout(() => setPhase(3), 2100),
      setTimeout(() => {
        sessionStorage.setItem('hasLoaded', 'true');
        setVisible(false);
      }, 2700),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => onCompleteRef.current()}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Subtle scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)',
            }}
          />

          <div className="flex flex-col items-center gap-8 w-full max-w-sm px-8 relative z-10">
            {/* Logo mark */}
            <motion.div
              className="w-14 h-14 rounded-xl border border-primary/40 flex items-center justify-center bg-primary/5 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
              animate={{ boxShadow: ['0 0 20px rgba(37,99,235,0.2)', '0 0 40px rgba(37,99,235,0.4)', '0 0 20px rgba(37,99,235,0.2)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-mono font-bold text-2xl text-primary">B</span>
            </motion.div>

            {/* Phase text */}
            <div className="h-7 w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phases.map(
                  (p) =>
                    phase === p.id && (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="flex items-center gap-1.5 font-mono text-sm tracking-[0.2em] uppercase text-primary"
                      >
                        <span>{p.text}</span>
                        {/* Blinking cursor */}
                        <motion.span
                          className="inline-block w-[2px] h-[1em] bg-primary align-middle"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-full h-[1px] bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-primary rounded-full"
                style={{ boxShadow: '0 0 8px rgba(37,99,235,0.8)' }}
                initial={{ width: '0%' }}
                animate={{
                  width:
                    phase >= 3 ? '100%' : phase === 2 ? '65%' : phase === 1 ? '30%' : '5%',
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Step count */}
            <p className="text-[10px] font-mono text-muted-foreground/40 tracking-widest uppercase">
              {phase}/3
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
