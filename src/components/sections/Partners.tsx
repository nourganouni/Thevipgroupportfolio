import { motion } from "framer-motion";

const partners = [
  { name: "Spain",    x: 47, y: 60 },
  { name: "France",   x: 49, y: 50 },
  { name: "Italy",    x: 53, y: 56 },
  { name: "Turkey",   x: 63, y: 60 },
  { name: "Finland",  x: 57, y: 25 },
  { name: "Belgium",  x: 50, y: 44 },
  { name: "Portugal", x: 43, y: 60 },
  { name: "Croatia",  x: 55, y: 54 },
  { name: "Tunisia",  x: 50, y: 70 },
  { name: "Poland (HQ)", x: 55, y: 42 },
];

const HQ = partners[partners.length - 1];

export function Partners() {
  return (
    <section id="partners" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-4">
            03 / University Partners
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
            A network across <span className="text-gradient">17 institutions.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Live partnerships with universities and faculties spanning Europe and the Mediterranean.
          </p>
        </motion.div>

        <div className="relative aspect-[16/9] w-full glass-strong rounded-3xl overflow-hidden border-glow">
          {/* network bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 bg-radial opacity-40" />

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="dot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.85 0.15 200)" stopOpacity="1" />
                <stop offset="100%" stopColor="oklch(0.85 0.15 200)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.72 0.2 250)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.72 0.2 250)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="oklch(0.6 0.22 295)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* connection arcs */}
            {partners.slice(0, -1).map((p, i) => {
              const mx = (HQ.x + p.x) / 2;
              const my = (HQ.y + p.y) / 2 - 8;
              return (
                <motion.path
                  key={p.name}
                  d={`M ${HQ.x} ${HQ.y} Q ${mx} ${my} ${p.x} ${p.y}`}
                  fill="none" stroke="url(#line)" strokeWidth="0.25" strokeDasharray="2 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: i * 0.12 }}
                />
              );
            })}

            {/* nodes */}
            {partners.map((p, i) => (
              <g key={p.name}>
                <circle cx={p.x} cy={p.y} r="2.5" fill="url(#dot)" />
                <motion.circle
                  cx={p.x} cy={p.y} r="0.8"
                  fill={p.name.includes("HQ") ? "oklch(0.6 0.22 295)" : "oklch(0.85 0.15 200)"}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                />
              </g>
            ))}
          </svg>

          {/* labels */}
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.07 }}
              className="absolute -translate-x-1/2 mt-3 px-2 py-0.5 rounded-md glass text-[10px] md:text-xs font-mono whitespace-nowrap pointer-events-none"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              {p.name}
            </motion.div>
          ))}

          {/* HQ pulse */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full pointer-events-none"
            style={{
              left: `${HQ.x}%`, top: `${HQ.y}%`,
              background: "radial-gradient(circle, oklch(0.6 0.22 295 / 0.6), transparent 70%)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {partners.map(p => (
            <span key={p.name} className="glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground">
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
