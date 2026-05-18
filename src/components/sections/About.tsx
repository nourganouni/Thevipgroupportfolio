import { motion } from "framer-motion";
import { Brain, Cloud, Building2, Globe2, GraduationCap, Beaker } from "lucide-react";

const BRAND = {
  blue: "#1e88e5",
  purple: "#9b3fb5",
  green: "#5cb85c",
  navy: "#0d2b6b",
};

const pillars = [
  { icon: Brain,         title: "AI Solutions",         desc: "Production-grade ML and decision systems.",     color: BRAND.blue,   angle: -155, radius: 480 },
  { icon: Cloud,         title: "SaaS Platforms",       desc: "Multi-tenant products built to scale.",          color: BRAND.purple, angle: -90,  radius: 440 },
  { icon: Building2,     title: "Enterprise Systems",   desc: "HRIS, finance and ops for modern orgs.",         color: BRAND.navy,   angle: -25,  radius: 480 },
  { icon: Globe2,        title: "Digital Transformation", desc: "End-to-end modernization of legacy estates.", color: BRAND.green,  angle: 25,   radius: 480 },
  { icon: GraduationCap, title: "Global Talent",        desc: "Cross-border programs for operators.",           color: BRAND.blue,   angle: 90,   radius: 440 },
  { icon: Beaker,        title: "Innovation Labs",      desc: "Sandboxes stress-tested in production.",         color: BRAND.purple, angle: 155,  radius: 480 },
];

const INFINITY_PATH =
  "M 250,150 C 250,60 380,60 400,150 C 420,240 550,240 550,150 C 550,60 420,60 400,150 C 380,240 250,240 250,150 Z";

interface InfinitySVGProps {
  isMobile?: boolean;
}

function InfinitySVG({ isMobile = false }: InfinitySVGProps) {
  const baseWidth1 = isMobile ? 110 : 42;
  const baseWidth2 = isMobile ? 150 : 62;
  const opacity1 = isMobile ? 0.55 : 0.18;
  const opacity2 = isMobile ? 0.4 : 0.12;

  return (
    <svg viewBox="0 0 800 300" className="w-full h-full relative" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor={BRAND.blue} />
          <stop offset="50%" stopColor={BRAND.purple} />
          <stop offset="100%" stopColor={BRAND.green} />
        </linearGradient>
        <linearGradient id="infGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%"  stopColor={BRAND.green} />
          <stop offset="50%" stopColor={BRAND.navy} />
          <stop offset="100%" stopColor={BRAND.blue} />
        </linearGradient>
        <filter id="infGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={isMobile ? "8" : "4"} result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Faint base ribbon (the symbol's "body") */}
      <path d={INFINITY_PATH} fill="none" stroke="url(#infGrad)" strokeOpacity={opacity1} strokeWidth={baseWidth1} strokeLinecap="round" />
      <path d={INFINITY_PATH} fill="none" stroke="url(#infGrad)" strokeOpacity={opacity2} strokeWidth={baseWidth2} strokeLinecap="round" />

      {/* Inner ribbon strands (3D feel) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`strand-${i}`}
          d={INFINITY_PATH}
          fill="none"
          stroke={i % 2 === 0 ? "url(#infGrad)" : "url(#infGrad2)"}
          strokeOpacity={isMobile ? 0.7 - i * 0.05 : 0.35 - i * 0.04}
          strokeWidth={isMobile ? 4 : 1.2}
          strokeLinecap="round"
          transform={`translate(0 ${(i - 2) * (isMobile ? 8 : 3)})`}
        />
      ))}

      {/* Animated traveling lines INSIDE the symbol */}
      {[
        { color: BRAND.blue,   dash: "15 1200", dur: 5,  delay: 0,   width: isMobile ? 6 : 2.2 },
        { color: BRAND.purple, dash: "12 1200", dur: 6,  delay: 1.2, width: isMobile ? 5.5 : 2 },
        { color: BRAND.green,  dash: "18 1200", dur: 4.5, delay: 2.1, width: isMobile ? 6 : 2.2 },
        { color: BRAND.navy,   dash: "10 1200", dur: 7,  delay: 0.6, width: isMobile ? 5 : 1.8 },
        { color: BRAND.blue,   dash: "25 1200", dur: 5.5, delay: 3,   width: isMobile ? 4.5 : 1.6 },
        { color: BRAND.purple, dash: "11 1200", dur: 6.5, delay: 1.8, width: isMobile ? 5.2 : 1.8 },
      ].map((l, i) => (
        <path
          key={`flow-${i}`}
          d={INFINITY_PATH}
          fill="none"
          stroke={l.color}
          strokeWidth={l.width}
          strokeLinecap="round"
          strokeDasharray={l.dash}
          filter="url(#infGlow)"
          style={{
            animation: `dashFlow ${l.dur}s linear ${l.delay}s infinite`,
          }}
        />
      ))}

      {/* Center node */}
      <circle cx="400" cy="150" r={isMobile ? 18 : 6} fill={BRAND.navy} />
      <circle cx="400" cy="150" r={isMobile ? 38 : 14} fill="none" stroke={BRAND.purple} strokeOpacity="0.4" strokeWidth={isMobile ? 3 : 1}>
        <animate attributeName="r" values={isMobile ? "30;60;30" : "10;22;10"} dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function PillarCard({ p, i, animateCard = true }: { p: typeof pillars[0]; i: number; animateCard?: boolean }) {
  const cardMotionProps = animateCard ? {
    animate: {
      y: [0, -20, 0, 20, 0],
      x: [0, 15, -10, 10, 0],
      rotate: [0, 2, -2, 1, 0],
    },
    transition: {
      duration: 6 + i * 0.8,
      delay: i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  } : {};

  return (
    <motion.div
      {...cardMotionProps}
      whileHover={{ scale: 1.05, y: -6 }}
      className="group relative w-full sm:max-w-[280px] lg:w-[168px] rounded-2xl p-5 cursor-default overflow-hidden flex flex-col justify-between min-h-[160px]"
      style={{
        background:
          "linear-gradient(150deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.78) 100%)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        border: `1px solid ${p.color}26`,
        boxShadow: `0 18px 40px -18px ${p.color}55, 0 0 0 1px ${p.color}10, inset 0 1px 0 rgba(255,255,255,0.9)`,
      }}
    >
      {/* corner gradient sheen */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-50 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${p.color}55, transparent 70%)` }}
      />
      {/* top accent line */}
      <div
        className="absolute top-0 left-3 right-3 h-px opacity-70"
        style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
      />

      <div>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${p.color}26, ${p.color}08)`,
            color: p.color,
            border: `1px solid ${p.color}22`,
          }}
        >
          <p.icon className="w-5 h-5" />
        </div>
        <h3 className="text-sm font-semibold text-slate-900 leading-tight">
          {p.title}
        </h3>
        <p className="mt-2 text-xs text-slate-500 leading-relaxed">{p.desc}</p>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 bg-transparent">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900">
            An infinite loop of innovation.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Six disciplines, one continuum. THEVIPGROUP orbits a shared core —
            a self-reinforcing loop of AI, SaaS, enterprise systems, and global talent.
          </p>
        </motion.div>

        {/* Cinematic stage - DESKTOP ONLY */}
        <div className="hidden lg:block relative mt-12 mx-auto" style={{ height: 800, maxWidth: 1200 }}>
          {/* === 3D Infinity Symbol (center) === */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 780, height: 420, perspective: 1600 }}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <motion.div
              className="w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: [0, 14, 0, -14, 0], rotateX: [6, 10, 6, 2, 6] }}
              transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow halo */}
              <div
                className="absolute inset-0 blur-3xl opacity-60"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${BRAND.blue}55, transparent 70%),
                               radial-gradient(ellipse 40% 40% at 30% 50%, ${BRAND.purple}44, transparent 70%),
                               radial-gradient(ellipse 40% 40% at 70% 50%, ${BRAND.green}44, transparent 70%)`,
                }}
              />
              <InfinitySVG />
            </motion.div>
          </motion.div>

          {/* === Floating pillar boxes orbiting the infinity === */}
          {pillars.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            // Elliptical orbit so it follows the infinity's wide aspect
            const x = Math.cos(rad) * (p.radius);
            const y = Math.sin(rad) * (p.radius * 0.55);
            return (
              <motion.div
                key={p.title}
                className="absolute left-1/2 top-1/2"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              >
                <PillarCard p={p} i={i} animateCard={true} />
              </motion.div>
            );
          })}
        </div>

        {/* Responsive layout - MOBILE & TABLET ONLY */}
        <div className="lg:hidden mt-12 flex flex-col items-center gap-10 w-full">
          {/* Centered scaled Infinity Symbol */}
          <div className="relative w-full max-w-[340px] sm:max-w-[480px] aspect-[8/3] flex items-center justify-center px-4 overflow-visible my-12">
            {/* Glow halo */}
            <div
              className="absolute inset-0 blur-3xl opacity-50"
              style={{
                background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${BRAND.blue}66, transparent 70%),
                             radial-gradient(ellipse 40% 40% at 30% 50%, ${BRAND.purple}55, transparent 70%)`,
              }}
            />
            <div className="w-full h-full scale-[1.65] flex items-center justify-center">
              <InfinitySVG isMobile={true} />
            </div>
          </div>

          {/* Grid of responsive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4 justify-items-center">
            {pillars.map((p, i) => (
              <PillarCard key={p.title} p={p} i={i} animateCard={false} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes dashFlow {
          to { stroke-dashoffset: -1208; }
        }
      `}</style>
    </section>
  );
}
