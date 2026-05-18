import { motion } from "framer-motion";
import nascorpsLogo from "../../lib/Nascorps_full_logo.png";
import projektLogo from "../../lib/Projekt bez nazwy-22.png";
import stripeLogo from "../../lib/Stripe wordmark - Blurple - Small.png";

const logos = [
  nascorpsLogo,
  projektLogo,
  stripeLogo,
  nascorpsLogo,
  projektLogo,
  stripeLogo,
];

export function PartnerLogos() {
  return (
    <div className="w-full bg-transparent py-12 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-slate-900">
          Trusted by Industry Leaders & Institutions
        </span>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 items-center whitespace-nowrap px-10"
        >
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <img
              key={`logo-1-${i}`}
              src={logo}
              alt="Partner Logo"
              className="h-10 md:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, i) => (
            <img
              key={`logo-2-${i}`}
              src={logo}
              alt="Partner Logo"
              className="h-10 md:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
