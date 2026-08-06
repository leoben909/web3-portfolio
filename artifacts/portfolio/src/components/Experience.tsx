import { motion } from 'framer-motion';

const projects = [
  "CaptureGo", "Unblocked", "MarginlyFi", "Dexodus", 
  "EarnAlliance", "Peaq", "Grass", "NodePay", 
  "Dawn", "IONet", "Plume", "Pharos", "RWA.io"
];

export function Experience() {
  return (
    <section id="experience" className="py-32 w-full relative z-10 bg-background/80 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 text-white">
            <span className="text-primary font-mono font-light mr-2">/</span> Experience
          </h2>
          <p className="font-mono text-primary text-sm uppercase tracking-widest">
            Community Manager & Moderator
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none md:flex md:flex-col md:items-center">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12 md:w-full">
            {projects.map((project, i) => (
              <motion.div 
                key={project}
                className={`relative pl-8 md:pl-0 md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-16 md:self-start md:text-right' : 'md:pl-16 md:self-end'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-[1.375rem] w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_#2563eb] -left-[6.5px] md:top-[1.375rem] ${
                  i % 2 === 0 ? 'md:-right-[6px] md:left-auto' : 'md:-left-[6px] md:left-auto'
                }`} />
                
                <div className={`p-8 rounded-xl bg-card border border-card-border backdrop-blur-md hover:border-primary/50 transition-colors shadow-lg ${
                  i % 2 === 0 ? 'border-l-primary/50 md:border-l-card-border md:border-r-primary/50' : 'border-l-primary/50'
                }`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{project}</h3>
                  <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6">
                    Community Manager / Moderator
                  </p>
                  <ul className={`space-y-3 text-sm text-muted-foreground font-light ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <li>• Managed Discord and Telegram communities</li>
                    <li>• Answered user questions and provided support</li>
                    <li>• Detected and removed spam, scams, and bad actors</li>
                    <li>• Maintained a positive, constructive atmosphere</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}