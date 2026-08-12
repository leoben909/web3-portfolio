import { motion } from 'framer-motion';
import { SiTelegram, SiDiscord, SiX } from 'react-icons/si';
import { Mail, FileText } from 'lucide-react';

export function Contact() {
  const contacts = [
    { name: "Telegram", handle: "", icon: SiTelegram, href: "https://t.me/leoben909" },
    { name: "Discord", handle: "", icon: SiDiscord, href: "https://discord.com/users/1102080554280701985" },
    { name: "X / Twitter", handle: "", icon: SiX, href: "https://x.com/leoben909" },
    { name: "Email", handle: "", icon: Mail, href: "mailto:leoben909@gmail.com" },
  ];

  return (
    <section id="contact" className="pt-32 pb-12 w-full relative z-10 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Looking for a Web3 Community Manager? I'm available for new projects.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 px-6 py-4 rounded-xl bg-card border border-card-border hover:border-primary/50 hover:bg-card/80 transition-all group min-w-[200px]"
            >
              <contact.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">{contact.name}</div>
                <div className="text-sm font-medium text-white">{contact.handle}</div>
              </div>
            </motion.a>
          ))}
          
          <motion.a
            href="/resume.pdf"
            download="Ben-Leo_CM-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: contacts.length * 0.1 }}
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all w-full sm:w-auto mt-4 sm:mt-0 justify-center"
          >
            <FileText className="w-5 h-5" />
            <div className="text-sm font-bold uppercase tracking-widest">Download Resume</div>
          </motion.a>
        </div>

        <motion.div 
          className="pt-12 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
  © 2026 Ben ·{" "}
  <span className="text-cyan-500 [text-shadow:0_0_8px_rgba(4,211,238,0.7)]">
    Web3 Community Manager
  </span>
</p> 
        </motion.div>
      </div>
    </section>
  );
}