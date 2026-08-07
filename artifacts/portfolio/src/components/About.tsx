import { motion } from 'framer-motion';

const stats = [
  { value: '13', label: 'Projects' },
  { value: '4', label: 'Years' },
];

export function About() {
  return (
    <section id="about" className="py-28 sm:py-32 w-full relative z-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Decorative orbit graphic */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center order-2 md:order-1 shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              <div className="absolute inset-0 border border-primary/25 rounded-full animate-[spin_22s_linear_infinite]" />
              <div className="absolute inset-5 border border-white/8 rounded-full border-dashed animate-[spin_16s_linear_infinite_reverse]" />
              <div className="absolute inset-10 border border-primary/10 rounded-full animate-[spin_35s_linear_infinite]" />
              <div className="absolute inset-[30%] bg-gradient-to-br from-primary/12 to-transparent rounded-full backdrop-blur-2xl flex items-center justify-center">
                <motion.div
                  className="w-2.5 h-2.5 bg-primary rounded-full"
                  animate={{ boxShadow: ['0 0 10px #2563eb', '0 0 25px #2563eb', '0 0 10px #2563eb'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-2 h-2 bg-primary/60 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '50%', originY: '50%', transformOrigin: 'calc(50%) calc(50% + 50%)' }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-3/5 order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Who I am</p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8 text-white">
              <span className="text-primary font-mono font-light mr-2">/</span> About Me
            </h2>
            <div className="space-y-5 text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              <p>
                I'm a Web3 community manager focused on creating healthy, active, and supportive communities. I help users, manage discussions, handle moderation tasks, and support projects in growing their ecosystems.
              </p>
              <p>
                Whether it's diffusing FUD, catching scammers before they strike, or making a new member feel welcome — I'm the person who keeps the community running smoothly behind the scenes.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="mt-10 flex gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                  className="px-6 sm:px-8 py-5 rounded-2xl bg-card border border-card-border backdrop-blur-sm flex-1 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white mb-1.5">
                    {value}<span className="text-primary">+</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
