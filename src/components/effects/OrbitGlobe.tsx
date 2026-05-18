import { motion } from "framer-motion";

export function OrbitGlobe() {
  return (
    <div className="relative w-[520px] h-[520px] max-w-full">
      {/* outer glow */}
      <div className="absolute inset-0 rounded-full bg-aurora opacity-20 blur-3xl animate-pulse-glow" />

      {/* core sphere */}
      <motion.div
        className="absolute inset-12 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.85 0.15 200 / 0.9), oklch(0.6 0.22 295 / 0.5) 45%, oklch(0.12 0.02 265) 75%)",
          boxShadow: "inset -40px -40px 80px oklch(0 0 0 / 0.6), 0 0 100px oklch(0.72 0.2 250 / 0.5)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* meridian lines */}
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={i}
              cx="100" cy="100" rx={100 - i * 6} ry="100"
              fill="none" stroke="oklch(0.85 0.15 200 / 0.4)" strokeWidth="0.4"
              transform={`rotate(${i * 22.5} 100 100)`}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={`p${i}`} cx="100" cy="100" rx="100" ry={100 - i * 14}
              fill="none" stroke="oklch(0.72 0.2 250 / 0.35)" strokeWidth="0.4"
            />
          ))}
        </svg>
      </motion.div>

      {/* orbiting rings */}
      {[0, 60, 120].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border"
          style={{ borderColor: "oklch(0.72 0.2 250 / 0.25)", transform: `rotateX(75deg) rotateZ(${deg}deg)` }}
          animate={{ rotateZ: [deg, deg + 360] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* orbiting nodes */}
      {[
        { size: 14, color: "oklch(0.85 0.15 200)", duration: 14, radius: 240 },
        { size: 10, color: "oklch(0.72 0.2 250)", duration: 22, radius: 210 },
        { size: 12, color: "oklch(0.6 0.22 295)", duration: 18, radius: 260 },
      ].map((n, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: n.size, height: n.size, marginLeft: -n.size / 2, marginTop: -n.size / 2,
            background: n.color, boxShadow: `0 0 20px ${n.color}, 0 0 40px ${n.color}`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: n.duration, repeat: Infinity, ease: "linear" }}
          // hack: nest translation via child
        >
          <div style={{ transform: `translateX(${n.radius}px)` }} className="w-full h-full rounded-full bg-inherit" />
        </motion.div>
      ))}
    </div>
  );
}
