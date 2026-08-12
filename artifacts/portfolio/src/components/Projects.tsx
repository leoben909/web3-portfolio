import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "Unblocked",
    role: "Community Manager",
    desc: "Led community growth and moderation across Discord and Telegram, managed daily engagement and user support.",
    twitter: "onunblocked",
  },
  {
    name: "CaptureGo",
    role: "Moderator",
    desc: "Moderated Discord and Telegram channels, handled user questions and maintained a safe, positive environment.",
    twitter: "captur_go",
  },
  {
    name: "MarginlyFi",
    role: "Moderator",
    desc: "Supported the DeFi community, managed discussions, filtered spam, and helped users with protocol questions.",
    twitter: "marginlycom",
  },
  {
    name: "Peaq",
    role: "Contributor",
    desc: "Contributed to the DePIN ecosystem community, participated in discussions and supported onboarding flows.",
    twitter: "peaq",
  },
  {
    name: "Grass",
    role: "Contributor",
    desc: "Contributed during high-traffic growth phases, helping maintain community quality and user engagement.",
    twitter: "grass",
  },
  {
    name: "IONet",
    role: "Contributor",
    desc: "Contributed to the GPU compute marketplace community, engaged with technical discussions and FUD management.",
    twitter: "ionet",
  },
  {
    name: "Dexodus",
    role: "Community Manager",
    desc: "Built and managed the Dexodus Finance community across platforms, led moderation and community strategy.",
    twitter: "DexodusFinance",
  },
  {
    name: "Earn Alliance",
    role: "Community Manager",
    desc: "Managed the Web3 gaming community, organized events, handled moderation and user support at scale.",
    twitter: "EarnAlliance",
  },
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
              
              <a
  href={`https://x.com/${project.twitter}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Visit ${project.name} on X`}
  className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors mt-auto"
>
  <ExternalLink className="w-4 h-4" />
</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}