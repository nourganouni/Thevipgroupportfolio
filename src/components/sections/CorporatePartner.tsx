import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import globeImg from "../../lib/6763-ai 2.png";
import subtractImg from "../../lib/Subtract.png";

// Vibrant, scattered points with wider displacement arcs for high visibility
const floatingDots = [
  { left: "8%", top: "15%", bg: "bg-yellow-400", size: "w-3 h-3", yRange: [-25, 25], xRange: [-15, 15], duration: 4.2, delay: 0 },
  { right: "10%", top: "20%", bg: "bg-blue-500", size: "w-2.5 h-2.5", yRange: [28, -28], xRange: [15, -15], duration: 5.0, delay: 0.5 },
  { right: "22%", top: "12%", bg: "bg-pink-500", size: "w-3.5 h-3.5", yRange: [-20, 20], xRange: [-12, 12], duration: 3.8, delay: 0.2 },
  { right: "6%", top: "45%", bg: "bg-green-500", size: "w-3 h-3", yRange: [32, -32], xRange: [-22, 22], duration: 4.6, delay: 0.8 },
  { left: "18%", bottom: "22%", bg: "bg-purple-500", size: "w-4 h-4", yRange: [-30, 30], xRange: [18, -18], duration: 5.5, delay: 0.4 },
  { right: "18%", bottom: "15%", bg: "bg-orange-500", size: "w-3 h-3", yRange: [24, -24], xRange: [-15, 15], duration: 4.8, delay: 0.1 },
  { left: "6%", bottom: "35%", bg: "bg-cyan-400", size: "w-2.5 h-2.5", yRange: [-35, 35], xRange: [20, -20], duration: 6.0, delay: 0.3 },
  { left: "42%", top: "8%", bg: "bg-red-400", size: "w-3 h-3", yRange: [18, -18], xRange: [-10, 10], duration: 3.5, delay: 0.6 },
  { right: "42%", bottom: "10%", bg: "bg-emerald-400", size: "w-2.5 h-2.5", yRange: [-22, 22], xRange: [12, -12], duration: 4.0, delay: 0.7 },
  { left: "28%", top: "35%", bg: "bg-indigo-400", size: "w-2.5 h-2.5", yRange: [-18, 18], xRange: [-15, 15], duration: 4.4, delay: 0.9 },
  { right: "30%", bottom: "30%", bg: "bg-rose-400", size: "w-3 h-3", yRange: [26, -26], xRange: [18, -18], duration: 5.2, delay: 0.15 },
];

// Sleek rotating hollow borders to add high-tech structural complexity
const hollowRings = [
  { left: "16%", top: "32%", size: "w-7 h-7", border: "border-2 border-yellow-400/40", duration: 9 },
  { right: "16%", bottom: "32%", size: "w-9 h-9", border: "border-2 border-dashed border-blue-400/50", duration: 13 },
  { left: "32%", bottom: "25%", size: "w-6 h-6", border: "border border-pink-400/50", duration: 7 },
  { right: "28%", top: "25%", size: "w-5 h-5", border: "border border-dashed border-purple-400/60", duration: 11 },
];

export function CorporatePartner() {
  return (
    <section id="partners" className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6 select-none border-t border-blue-100/30">
      
      {/* Soft blurred color blobs spanning full section */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-56 w-56 rounded-full bg-yellow-200 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-[10%] h-60 w-60 rounded-full bg-blue-200 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] left-[18%] h-56 w-56 rounded-full bg-pink-200 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[15%] right-[8%] h-60 w-60 rounded-full bg-red-200 opacity-30 blur-3xl" />

      {/* Dynamic Animated Scattered Universe of Dots (Wider, faster, highly noticeable displacements) */}
      {floatingDots.map((dot, index) => (
        <motion.span
          key={`dot-${index}`}
          animate={{ 
            y: dot.yRange, 
            x: dot.xRange,
            scale: [0.85, 1.45, 0.85],
            opacity: [0.5, 0.95, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: dot.duration, 
            delay: dot.delay,
            ease: "easeInOut" 
          }}
          className={`absolute rounded-full ${dot.bg} ${dot.size} z-0 shadow-lg`}
          style={{
            left: dot.left,
            right: dot.right,
            top: dot.top,
            bottom: dot.bottom,
          }}
        />
      ))}

      {/* Smoothly rotating and floating hollow circles */}
      {hollowRings.map((ring, index) => (
        <motion.div
          key={`ring-${index}`}
          animate={{ 
            rotate: 360,
            y: [0, -18, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: ring.duration, ease: "linear" },
            y: { repeat: Infinity, duration: ring.duration * 0.6, ease: "easeInOut" },
            x: { repeat: Infinity, duration: ring.duration * 0.6, ease: "easeInOut" }
          }}
          className={`absolute rounded-full ${ring.border} ${ring.size} z-0`}
          style={{
            left: ring.left,
            right: ring.right,
            top: ring.top,
            bottom: ring.bottom,
          }}
        />
      ))}

      {/* Centered content block */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        
        {/* Rotating Globe & bobbing Subtract ring (Sized down slightly to be elegant) */}
        <div className="relative mb-[-1.5rem] flex h-44 w-44 items-center justify-center select-none pointer-events-none">
          {/* Globe (Rotating slowly) */}
          <motion.img 
            src={globeImg} 
            alt="Globe"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="h-[80%] w-[80%] object-contain opacity-75"
          />

          {/* Orbiting ring Subtract (Bobbing slowly) */}
          <motion.img 
            src={subtractImg} 
            alt="Orbit Ring"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute w-[125%] max-w-[125%] h-auto object-contain z-10"
          />
        </div>

        {/* Headline */}
        <h2 className="relative z-20 font-display font-extrabold tracking-tight text-3xl md:text-5xl leading-tight">
          <span className="text-slate-900">Become </span>
          <span className="text-blue-500 italic font-serif">Our</span>
          <br />
          <span className="text-[#2b0a4a]">Corporate Partner</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-xl text-xs sm:text-sm text-slate-500 md:text-base leading-relaxed px-4">
          Accelerate Your Enterprise Velocity, Align With A Partner Engineered For Rapid
          Scale And Flawless Execution.
        </p>

        {/* Animated Aurora Sweep Button (Styled exact like Sandbox) */}
        <motion.a 
          href="https://www.thevipgroup.eu/#corporate"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full bg-aurora animate-gradient-shift px-8 py-3.5 mt-8 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow overflow-hidden cursor-pointer"
        >
          <span className="relative z-10 text-white">Become a Partner</span>
          <ArrowRight size={16} className="relative z-10 text-white group-hover:translate-x-1 transition-transform" />
          <span className="absolute inset-0 bg-white/30 animate-beam-sweep" />
        </motion.a>
      </div>
    </section>
  );
}
