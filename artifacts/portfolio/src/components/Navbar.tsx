import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-40 h-[60px] transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-5 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-mono font-bold text-lg tracking-wider text-white flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg border border-primary/50 flex items-center justify-center bg-primary/5 shadow-[0_0_10px_rgba(37,99,235,0.25)] text-primary font-bold text-sm">
              B
            </div>
            <span>
              BEN<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] font-mono font-medium text-muted-foreground hover:text-white transition-colors duration-200 uppercase tracking-widest relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
            onClick={() => setMenuOpen((o) => !o)}
            whileTap={{ scale: 0.93 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[60px] left-0 right-0 z-30 bg-background/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:hidden"
          >
            <nav className="flex flex-col py-2">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="px-6 py-3.5 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-white hover:bg-white/5 transition-colors border-b border-white/[0.04] last:border-0"
                >
                  <span className="text-primary/60 mr-3">0{i + 1}</span>
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
