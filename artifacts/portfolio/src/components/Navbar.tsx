import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 w-full z-40 h-[60px] transition-colors duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-xl tracking-wider text-white flex items-center">
          <div className="w-8 h-8 rounded border border-primary/50 flex items-center justify-center mr-3 bg-background shadow-[0_0_8px_rgba(37,99,235,0.3)]">
            B
          </div>
          BEN<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-mono font-medium text-muted-foreground hover:text-white transition-colors uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}