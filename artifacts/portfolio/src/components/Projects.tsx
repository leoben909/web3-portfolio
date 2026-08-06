import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "CaptureGo",
    role: "Community Manager",
    desc: "Built and moderated the Discord/Telegram, grew engagement by organizing community events and daily AMAs."
  },
  {
    name: "Peaq Network",
    role: "Community Manager",
    desc: "Supported the DePIN ecosystem community, managed technical discussions and onboarding flows."
  },
  {
    name: "Grass",
    role: "Moderator",
    desc: "Managed high-traffic Telegram and Discord during major growth phases for Wynd Network."
  },
  {
    name: "IONet",
    role: "Moderator",
    desc: "Moderated GPU compute marketplace community, handled technical questions and FUD."
  },
  {
    name: "RWA.io",
    role: "Community Manager",
    desc: "Led Real World Asset community discussions, educated members on RWA tokenization."
  },
  {
    name: "EarnAlliance",
    role: "Moderator",
    desc: "Supported the Web3 gaming community across multiple platforms and channels."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 w-full relative z-10 bg-background/80 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
            <span className="text-primary font-mono font-light mr-2">/</span> Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col h-full p-8 rounded-xl bg-card border border-card-border backdrop-blur-md group hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(37,99,235,0.4)] hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest shadow-[inset_0_0_10px_rgba(37,99,235,0.1)]">
                  {project.role}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed flex-grow mb-8">
                {project.desc}
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-primary transition-colors mt-auto tracking-wider uppercase">
                View Project <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}