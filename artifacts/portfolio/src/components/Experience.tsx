import { motion } from 'framer-motion';

const projects = [
  {
    name: "Unblocked",
    role: "Community Manager",
    bullets: [
      "Built and led the community strategy across Discord and Telegram",
      "Onboarded new members and created structured welcome flows",
      "Coordinated announcements, AMAs, and community-driven initiatives",
      "Maintained brand voice and kept discussions aligned with project goals",
    ],
  },
  {
    name: "Dexodus",
    role: "Community Manager",
    bullets: [
      "Established community guidelines and moderation frameworks from the ground up",
      "Managed cross-platform presence across Discord and Telegram simultaneously",
      "Handled escalations, conflict resolution, and user feedback loops",
      "Drove engagement through regular updates and community challenges",
    ],
  },
  {
    name: "Earn Alliance",
    role: "Community Manager",
    bullets: [
      "Led Web3 gaming community across multiple platforms and time zones",
      "Organized in-game events, tournaments, and community spotlights",
      "Managed a team of moderators and aligned on daily moderation standards",
      "Acted as the bridge between the development team and the player community",
    ],
  },
  {
    name: "CaptureGo",
    role: "Moderator",
    bullets: [
      "Moderated Discord and Telegram to ensure a safe, spam-free environment",
      "Answered user questions about the platform and helped with onboarding",
      "Identified and removed scam attempts before they reached the wider community",
      "Reported recurring issues to the core team with clear summaries",
    ],
  },
  {
    name: "MarginlyFi",
    role: "Moderator",
    bullets: [
      "Managed DeFi community discussions and kept technical threads productive",
      "Filtered misinformation and FUD during market-sensitive periods",
      "Supported users with protocol questions and directed them to documentation",
      "Enforced community rules consistently across different channels",
    ],
  },
  {
    name: "NodePay",
    role: "Moderator",
    bullets: [
      "Moderated active Telegram and Discord communities during growth phases",
      "Handled user support tickets and escalated unresolved issues to the team",
      "Kept announcement channels clean and ensured accurate information flow",
      "Helped maintain community morale during high-pressure network events",
    ],
  },
  {
    name: "Dawn",
    role: "Moderator",
    bullets: [
      "Supported community operations across Discord during early project stages",
      "Answered new user questions and guided members through setup processes",
      "Removed spam and enforced channel rules to preserve discussion quality",
      "Provided daily activity reports and flagged recurring community concerns",
    ],
  },
  {
    name: "Peaq",
    role: "Contributor",
    bullets: [
      "Contributed to DePIN ecosystem discussions and community knowledge sharing",
      "Participated in governance conversations and provided community feedback",
      "Helped onboard new contributors by sharing resources and answering questions",
      "Represented the community perspective in team feedback sessions",
    ],
  },
  {
    name: "Grass",
    role: "Contributor",
    bullets: [
      "Actively contributed to community growth during key network milestones",
      "Engaged in technical discussions and helped clarify protocol mechanics",
      "Supported community events and encouraged broader participation",
      "Provided constructive feedback on product updates and feature releases",
    ],
  },
  {
    name: "IONet",
    role: "Contributor",
    bullets: [
      "Engaged with the decentralized GPU compute community as an active contributor",
      "Participated in technical discussions around compute markets and AI workloads",
      "Helped surface community concerns and relay them to the project team",
      "Supported new users navigating the platform during onboarding",
    ],
  },
  {
    name: "Plume",
    role: "Moderator",
    bullets: [
      "Moderated RWA-focused community channels and maintained civil discourse",
      "Educated members on real-world asset tokenization through pinned resources",
      "Handled user questions about compliance, assets, and platform mechanics",
      "Kept community engagement high between major project announcements",
    ],
  },
  {
    name: "Pharos",
    role: "Moderator",
    bullets: [
      "Provided moderation support across Telegram and Discord community servers",
      "Monitored conversations for scam links, impersonators, and rule violations",
      "Helped craft community FAQs to reduce repetitive support requests",
      "Worked alongside the core team to coordinate community-facing communications",
    ],
  },
  {
    name: "RWA.io",
    role: "Community Manager",
    bullets: [
      "Led community strategy for a Real World Asset platform targeting institutional users",
      "Educated members on RWA tokenization, compliance frameworks, and platform use",
      "Managed cross-platform presence and maintained consistent messaging",
      "Built community resources including FAQs, guides, and onboarding materials",
    ],
  },
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
                key={project.name}
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
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6">
                    {project.role}
                  </p>
                  <ul className={`space-y-3 text-sm text-muted-foreground font-light ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
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