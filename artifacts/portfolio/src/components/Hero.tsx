import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';

const letterVariants = {
  initial: { y: '110%', opacity: 0, rotateX: -80 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.75,
      delay: 0.3 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = (delay: number) => ({
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section
      className="relative h-screen min-h-[640px] w-full flex flex-col items-center justify-center overflow-hidden bg-background"
      id="home"
    >
      <Scene3D />

      {/* Radial vignette to push 3D scene to edges */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_40%,hsl(240,20%,5%)_100%)]" />

      <div className="z-10 flex flex-col items-center text-center px-6">
        {/* Avatar */}
        <motion.div
          className="relative mb-8"
          {...fadeUp(0.2)}
        >
          {/* Outer pulse ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-primary/30"
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Inner glow ring */}
          <div className="absolute -inset-1.5 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(37,99,235,0.25)]" />
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-primary/60 overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.4)] bg-background">
            <img
              src="/profile.jpg"
              alt="Ben"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Name — per-letter 3D flip-up */}
        <div
          className="overflow-hidden pb-1"
          style={{ perspective: '600px' }}
        >
          <h1 className="text-[clamp(4.5rem,14vw,9rem)] font-bold leading-none text-white uppercase"
            style={{ textShadow: '0 0 60px rgba(37,99,235,0.35), 0 0 120px rgba(37,99,235,0.1)', letterSpacing: '0.22em' }}
          >
            {'BEN'.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={letterVariants}
                custom={i}
                initial="initial"
                animate="animate"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Titles */}
        <motion.div
          className="mt-5 flex flex-col items-center gap-2"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
        >
          {[
            { text: 'Web3 Community Manager', primary: true },
            { text: 'Discord Moderator', primary: false },
            { text: 'Telegram Moderator', primary: false },
          ].map(({ text, primary }) => (
            <motion.p
              key={text}
              variants={{ initial: { y: 12, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
              className={`font-mono uppercase tracking-[0.28em] ${
                primary ? 'text-sm sm:text-base text-primary' : 'text-xs sm:text-sm text-muted-foreground'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Tagline card */}
        <motion.div
          className="mt-10 px-6 py-4 rounded-2xl border border-primary/15 bg-background/50 backdrop-blur-lg max-w-xs sm:max-w-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          {...fadeUp(1.15)}
        >
          <p className="text-muted-foreground font-light text-sm italic leading-relaxed">
            "Building healthy Web3 communities since 2021"
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto"
          {...fadeUp(1.3)}
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-primary/10 border border-primary text-primary font-mono text-xs uppercase tracking-widest text-center"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(37,99,235,0.2)', boxShadow: '0 0 20px rgba(37,99,235,0.35)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            View Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-widest text-center"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-muted-foreground/60">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
