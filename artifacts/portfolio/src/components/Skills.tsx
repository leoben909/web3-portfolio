import { motion } from 'framer-motion';
import { MessageSquare, Shield, Users, HelpCircle, HeartHandshake, Eye, AlertTriangle, TrendingUp, BookOpen } from 'lucide-react';

const skills = [
  { icon: Users, name: "Community Management", desc: "Building and nurturing engaged Web3 communities" },
  { icon: Shield, name: "Discord Moderation", desc: "Keeping servers safe, organized, and welcoming" },
  { icon: MessageSquare, name: "Telegram Moderation", desc: "Managing groups and channels at scale" },
  { icon: HelpCircle, name: "Customer Support", desc: "Resolving user issues quickly and clearly" },
  { icon: HeartHandshake, name: "Conflict Resolution", desc: "Turning tensions into productive conversations" },
  { icon: Eye, name: "Scam Detection", desc: "Identifying and removing bad actors before they cause harm" },
  { icon: AlertTriangle, name: "FUD Management", desc: "Addressing misinformation with clarity and confidence" },
  { icon: TrendingUp, name: "Community Growth", desc: "Strategies that turn lurkers into contributors" },
  { icon: BookOpen, name: "Web3 Research", desc: "Staying current on protocols, trends, and ecosystem news" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32 w-full relative z-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20 text-center md:text-left"
        >
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
            <span className="text-primary font-mono font-light mr-2">/</span> Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group p-6 sm:p-7 rounded-2xl bg-card border border-card-border backdrop-blur-md cursor-default transition-colors duration-300 hover:border-primary/40 hover:bg-card/80"
              whileHover={{ y: -4, boxShadow: '0 12px 40px -12px rgba(37,99,235,0.35)' }}
              transition={{ duration: 0.25 }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/35 transition-colors duration-300">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{skill.name}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
