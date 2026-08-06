import { motion } from 'framer-motion';
import { Scene3D } from './Scene3D';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden bg-background" id="home">
      <Scene3D />
      
      <div className="z-10 flex flex-col items-center text-center px-6 mt-12">
        <motion.div 
          className="w-24 h-24 rounded-full border border-primary/50 bg-background/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] mb-8 relative overflow-hidden"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/profile.jpg"
            alt="Ben"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] text-white uppercase ml-[0.2em]"
          style={{ textShadow: '0 0 40px rgba(37,99,235,0.3)' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          BEN
        </motion.h1>

        <motion.div
          className="mt-6 flex flex-col items-center gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-sm md:text-base font-mono text-primary tracking-[0.3em] uppercase">
            Web3 Community Manager
          </h2>
          <h3 className="text-xs md:text-sm font-mono text-muted-foreground tracking-[0.2em] uppercase">
            Discord Moderator
          </h3>
          <h3 className="text-xs md:text-sm font-mono text-muted-foreground tracking-[0.2em] uppercase">
            Telegram Moderator
          </h3>
        </motion.div>

        <motion.div
          className="mt-12 p-5 rounded-xl border border-white/5 bg-background/40 backdrop-blur-md max-w-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-muted-foreground font-light text-sm italic">
            "Building healthy Web3 communities since 2021"
          </p>
        </motion.div>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-md bg-primary/10 border border-primary text-primary font-mono text-sm uppercase tracking-widest hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all">
            View Resume
          </a>
          <a href="#contact" className="px-8 py-3 rounded-md bg-white/5 border border-white/10 text-white font-mono text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
            Contact Me
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}