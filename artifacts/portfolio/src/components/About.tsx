import { motion } from 'framer-motion';

const stats = [
  { value: '13', label: 'Projects' },
  { value: '4', label: 'Years' },
];

export function About() {
  return (
    <section
      id="about"
      className="py-28 sm:py-32 w-full relative z-10 bg-background border-t border-white/5"
    >
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* 3D Neon Orb */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center order-2 md:order-1 shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">

              {/* Atmospheric glow */}
              <div
                className="absolute w-[75%] h-[75%] rounded-full bg-primary/20 blur-[55px] animate-pulse"
                style={{
                  animationDuration: '4s',
                }}
              />

              {/* Outer rotating orbit */}
              <div
                className="absolute inset-0 rounded-full border border-primary/30"
                style={{
                  animation: 'aboutOrbit 18s linear infinite',
                  transform: 'rotateX(68deg) rotateZ(15deg)',
                  boxShadow:
                    '0 0 18px rgba(37,99,235,0.25), inset 0 0 18px rgba(37,99,235,0.08)',
                }}
              />

              {/* Second tilted orbit */}
              <div
                className="absolute inset-[8%] rounded-full border border-primary/25"
                style={{
                  animation: 'aboutOrbitReverse 13s linear infinite',
                  transform: 'rotateY(68deg) rotateZ(-20deg)',
                  boxShadow: '0 0 16px rgba(37,99,235,0.2)',
                }}
              />

              {/* Third orbit */}
              <div
                className="absolute inset-[16%] rounded-full border border-white/10 border-dashed"
                style={{
                  animation: 'aboutOrbit 24s linear infinite',
                  transform: 'rotateX(55deg) rotateY(35deg)',
                }}
              />

              {/* 3D sphere */}
              <div
                className="relative w-[42%] h-[42%] rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 32% 27%, rgba(147,197,253,0.95) 0%, rgba(37,99,235,0.8) 12%, rgba(29,78,216,0.55) 30%, rgba(15,23,42,0.9) 68%, rgba(2,6,23,1) 100%)',
                  boxShadow:
                    '0 0 20px rgba(37,99,235,0.8), 0 0 45px rgba(37,99,235,0.45), inset -15px -12px 30px rgba(0,0,0,0.75), inset 8px 8px 18px rgba(147,197,253,0.35)',
                  animation: 'aboutSphere 8s ease-in-out infinite',
                }}
              >
                {/* Sphere highlight */}
                <div
                  className="absolute w-[28%] h-[20%] rounded-full bg-white/50 blur-[5px]"
                  style={{
                    top: '14%',
                    left: '20%',
                    transform: 'rotate(-25deg)',
                  }}
                />

                {/* Sphere inner glow */}
                <div className="absolute inset-[15%] rounded-full border border-primary/20" />

                {/* Center light */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    boxShadow: [
                      '0 0 8px rgba(59,130,246,0.8)',
                      '0 0 25px rgba(59,130,246,1)',
                      '0 0 8px rgba(59,130,246,0.8)',
                    ],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Orbiting neon particle 1 */}
              <div
                className="absolute w-2.5 h-2.5 rounded-full bg-primary"
                style={{
                  top: '50%',
                  left: '50%',
                  marginLeft: '-5px',
                  marginTop: '-5px',
                  animation: 'aboutParticle1 7s linear infinite',
                  boxShadow:
                    '0 0 8px #60a5fa, 0 0 20px #2563eb, 0 0 35px rgba(37,99,235,0.7)',
                }}
              />

              {/* Orbiting neon particle 2 */}
              <div
                className="absolute w-1.5 h-1.5 rounded-full bg-blue-300"
                style={{
                  top: '50%',
                  left: '50%',
                  marginLeft: '-3px',
                  marginTop: '-3px',
                  animation: 'aboutParticle2 11s linear infinite',
                  boxShadow:
                    '0 0 8px #93c5fd, 0 0 18px #2563eb',
                }}
              />

              {/* Tiny floating particles */}
              <span
                className="absolute w-1 h-1 rounded-full bg-primary"
                style={{
                  top: '18%',
                  right: '18%',
                  boxShadow: '0 0 10px #2563eb',
                  animation: 'aboutFloat 3s ease-in-out infinite',
                }}
              />

              <span
                className="absolute w-1 h-1 rounded-full bg-blue-300"
                style={{
                  bottom: '20%',
                  left: '15%',
                  boxShadow: '0 0 10px #60a5fa',
                  animation: 'aboutFloat 4s ease-in-out infinite reverse',
                }}
              />

              <span
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/80"
                style={{
                  top: '30%',
                  left: '12%',
                  boxShadow: '0 0 12px #2563eb',
                  animation: 'aboutFloat 5s ease-in-out infinite',
                }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-3/5 order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-3">
              Who I am
            </p>

            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8 text-white">
              <span className="text-primary font-mono font-light mr-2">
                /
              </span>
              About Me
            </h2>

            <div className="space-y-5 text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              <p>
                I'm a Web3 community manager focused on creating healthy,
                active, and supportive communities. I help users, manage
                discussions, handle moderation tasks, and support projects in
                growing their ecosystems.
              </p>

              <p>
                Whether it's diffusing FUD, catching scammers before they
                strike, or making a new member feel welcome — I'm the person
                who keeps the community running smoothly behind the scenes.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="mt-10 flex gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="px-6 sm:px-8 py-5 rounded-2xl bg-card border border-card-border backdrop-blur-sm flex-1 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="text-3xl sm:text-4xl font-mono font-bold text-white mb-1.5">
                    {value}
                    <span className="text-primary">+</span>
                  </div>

                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes aboutOrbit {
          0% {
            transform: rotateX(68deg) rotateZ(15deg) rotate(0deg);
          }
          100% {
            transform: rotateX(68deg) rotateZ(15deg) rotate(360deg);
          }
        }

        @keyframes aboutOrbitReverse {
          0% {
            transform: rotateY(68deg) rotateZ(-20deg) rotate(360deg);
          }
          100% {
            transform: rotateY(68deg) rotateZ(-20deg) rotate(0deg);
          }
        }

        @keyframes aboutSphere {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.045) rotate(180deg);
          }
        }

        @keyframes aboutParticle1 {
          0% {
            transform: rotate(0deg) translateX(112px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(112px) rotate(-360deg);
          }
        }

        @keyframes aboutParticle2 {
          0% {
            transform: rotate(360deg) translateX(88px) rotate(-360deg);
          }
          100% {
            transform: rotate(0deg) translateX(88px) rotate(0deg);
          }
        }

        @keyframes aboutFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.45;
          }
          50% {
            transform: translateY(-12px);
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          @keyframes aboutParticle1 {
            0% {
              transform: rotate(0deg) translateX(86px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(86px) rotate(-360deg);
            }
          }

          @keyframes aboutParticle2 {
            0% {
              transform: rotate(360deg) translateX(68px) rotate(-360deg);
            }
            100% {
              transform: rotate(0deg) translateX(68px) rotate(0deg);
            }
          }
        }
      `}</style>
    </section>
  );
}