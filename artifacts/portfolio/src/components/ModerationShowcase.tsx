import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Shield, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseItem {
  image: string;
  community: string;
  role: 'Community Manager' | 'Moderator';
  category: string;
  description: string;
  bullets: string[];
}

const items: ShowcaseItem[] = [
  {
    image: '/images/moderation/mod-01.jpg',
    community: 'Discord Community',
    role: 'Community Manager',
    category: 'Rules Enforcement',
    description: 'Authored and posted clear community guidelines covering language, harassment, and NSFW policies — proactively setting the tone for a safe environment.',
    bullets: ['Drafted community ruleset', 'Enforced language & conduct standards', 'Communicated consequences transparently', 'Encouraged member reporting'],
  },
  {
    image: '/images/moderation/mod-02.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Raid Campaigns',
    description: 'Coordinated community raid campaigns on social media to amplify project visibility, offering XP rewards for member participation.',
    bullets: ['Organized social amplification drives', 'Structured reward tiers (1000 XP each)', 'Drove cross-platform engagement', 'Tracked participation via X-post links'],
  },
  {
    image: '/images/moderation/mod-03.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Event Hosting',
    description: 'Planned and hosted Quiz Night events with competitive XP leaderboards, boosting daily active users and fostering healthy competition.',
    bullets: ['Designed trivia event structure', 'Set tiered prize pools (1200/900/600 XP)', 'Speed-based scoring mechanics', 'Drove high engagement (20+ reactions)'],
  },
  {
    image: '/images/moderation/mod-04.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Engagement Events',
    description: 'Hosted interactive Riddle Me This challenge sessions in the games arena, rewarding quick-thinking members with XP prizes.',
    bullets: ['Designed 30-riddle challenge format', 'Managed real-time event flow in chat', 'Rewarded first-correct answers (100 XP)', 'Maintained fun and fair participation'],
  },
  {
    image: '/images/moderation/mod-05.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Gamification',
    description: 'Introduced gamified luck-board mechanics to incentivize reactions, X engagement, and active server participation.',
    bullets: ['Built engagement-based reward system', 'Incentivized cross-platform activity', 'Rewarded active helpful members', 'Designed transparent entry criteria'],
  },
  {
    image: '/images/moderation/mod-06.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Member Support',
    description: 'Provided hands-on technical support in the #feedback channel, guiding members through app issues with step-by-step visual instructions.',
    bullets: ['Delivered visual step-by-step guides', 'Resolved app update confusion', 'Responded to member feedback promptly', 'Maintained helpful tone under pressure'],
  },
  {
    image: '/images/moderation/mod-07.jpg',
    community: 'CaptureGo',
    role: 'Moderator',
    category: 'Role Management',
    description: 'Held multiple trust-level roles including capturGO Mods, OG, Architect, and Server Booster — reflecting long-term commitment and contribution.',
    bullets: ['Multi-role Discord membership', 'capturGO Mods & OG status', 'Active Server Booster', 'Member since April 2023'],
  },
  {
    image: '/images/moderation/mod-08.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Server Management',
    description: 'Curated and managed a library of custom server emojis to enhance community expression and brand identity within Discord.',
    bullets: ['Added 16+ custom branded emojis', 'Maintained emoji library standards', 'Enhanced community expression tools', 'Supported server brand identity'],
  },
  {
    image: '/images/moderation/mod-09.jpg',
    community: 'CaptureGo',
    role: 'Community Manager',
    category: 'Content Creation',
    description: 'Created compelling Web3 narrative content on X/Twitter, articulating the DePIN vision to grow awareness and drive new community members.',
    bullets: ['Wrote long-form Web3 community posts', 'Articulated DePIN value proposition', 'Drove referral link traffic', 'Used strategic hashtag campaigns'],
  },
];

const categoryColors: Record<string, string> = {
  'Rules Enforcement': 'text-red-400 border-red-400/30 bg-red-400/10',
  'Raid Campaigns': 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  'Event Hosting': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  'Engagement Events': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  'Gamification': 'text-green-400 border-green-400/30 bg-green-400/10',
  'Member Support': 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  'Role Management': 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10',
  'Server Management': 'text-pink-400 border-pink-400/30 bg-pink-400/10',
  'Content Creation': 'text-teal-400 border-teal-400/30 bg-teal-400/10',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function ModerationShowcase() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox(i => (i === null ? null : (i - 1 + items.length) % items.length));
  }, []);

  const next = useCallback(() => {
    setLightbox(i => (i === null ? null : (i + 1) % items.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, close, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const active = lightbox !== null ? items[lightbox] : null;

  return (
    <section
      id="showcase"
      className="py-28 sm:py-32 w-full relative z-10 bg-background border-t border-white/5"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 w-[400px] h-[300px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 max-w-7xl relative">

        {/* Header */}
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-primary" />
            <span className="text-primary text-xs font-mono uppercase tracking-widest">Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Community Moderation{' '}
            <span className="bg-gradient-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            Examples of Discord community management, moderation, and member support.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-white/8 bg-card/60 backdrop-blur-xl overflow-hidden cursor-pointer shadow-lg hover:border-primary/40 hover:shadow-primary/10 hover:shadow-2xl transition-[border-color,box-shadow] duration-300"
              onClick={() => setLightbox(i)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Screenshot preview */}
              <div className="relative overflow-hidden aspect-[4/3] bg-black/30 shrink-0">
                <img
                  src={item.image}
                  alt={`${item.community} – ${item.category}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover zoom hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3"
                  >
                    <ZoomIn className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryColors[item.category] ?? 'text-primary border-primary/30 bg-primary/10'}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Community + role row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mb-0.5">
                      {item.community}
                    </p>
                    <div className="flex items-center gap-1.5">
                      {item.role === 'Community Manager' ? (
                        <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                      ) : (
                        <Shield className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      )}
                      <span className={`text-xs font-semibold ${item.role === 'Community Manager' ? 'text-primary' : 'text-violet-400'}`}>
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="mt-auto space-y-1.5 pt-2 border-t border-white/5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground/80">
                      <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 flex flex-col lg:flex-row w-full max-w-5xl max-h-[90dvh] rounded-2xl border border-white/10 bg-[#0d1117]/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative lg:w-[55%] shrink-0 bg-black/40 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightbox}
                    src={active.image}
                    alt={active.category}
                    className="w-full h-full object-contain max-h-[50dvh] lg:max-h-full"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </AnimatePresence>

                {/* Prev / Next */}
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full p-2 text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full p-2 text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs text-white/70 font-mono">
                  {lightbox + 1} / {items.length}
                </div>
              </div>

              {/* Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox + '-info'}
                  className="flex flex-col gap-5 p-6 sm:p-8 overflow-y-auto"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
                >
                  {/* Category */}
                  <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[active.category] ?? 'text-primary border-primary/30 bg-primary/10'}`}>
                    {active.category}
                  </span>

                  {/* Community + role */}
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-1">
                      {active.community}
                    </p>
                    <div className="flex items-center gap-2">
                      {active.role === 'Community Manager' ? (
                        <Users className="w-4 h-4 text-primary shrink-0" />
                      ) : (
                        <Shield className="w-4 h-4 text-violet-400 shrink-0" />
                      )}
                      <span className={`text-base font-bold ${active.role === 'Community Manager' ? 'text-primary' : 'text-violet-400'}`}>
                        {active.role}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {active.description}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                      Responsibilities
                    </p>
                    <ul className="space-y-2">
                      {active.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-foreground/75">
                          <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dot nav */}
                  <div className="flex gap-1.5 mt-auto pt-2">
                    {items.map((_, j) => (
                      <button
                        key={j}
                        onClick={() => setLightbox(j)}
                        className={`rounded-full transition-all duration-200 ${j === lightbox ? 'w-5 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'}`}
                        aria-label={`Go to ${j + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 border border-white/10 rounded-full p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
