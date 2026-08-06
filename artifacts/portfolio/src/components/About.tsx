import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-32 w-full relative z-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-white/10 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-12 bg-gradient-to-br from-primary/10 to-transparent rounded-full backdrop-blur-3xl flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#2563eb]" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8 text-white">
              <span className="text-primary font-mono font-light mr-2">/</span> About Me
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                I'm a Web3 community manager focused on creating healthy, active, and supportive communities. I help users, manage discussions, handle moderation tasks, and support projects in growing their ecosystems.
              </p>
              <p>
                Whether it's diffusing FUD, catching scammers before they strike, or making a new member feel welcome — I'm the person who keeps the community running smoothly behind the scenes.
              </p>
            </div>
            
            <div className="mt-12 flex gap-6">
              <div className="px-8 py-6 rounded-xl bg-card border border-card-border backdrop-blur-sm flex-1">
                <div className="text-4xl font-mono font-bold text-white mb-2">13<span className="text-primary">+</span></div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Projects</div>
              </div>
              <div className="px-8 py-6 rounded-xl bg-card border border-card-border backdrop-blur-sm flex-1">
                <div className="text-4xl font-mono font-bold text-white mb-2">2<span className="text-primary">+</span></div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}