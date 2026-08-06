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
  { icon: BookOpen, name: "Web3 Research", desc: "Staying current on protocols, trends, and ecosystem news" }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 w-full relative z-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
            <span className="text-primary font-mono font-light mr-2">/</span> Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="p-8 rounded-xl bg-card border border-card-border backdrop-blur-md group hover:scale-[1.02] hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                <skill.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(37,99,235,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.6)] transition-all" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}