import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import careerVideo from "../../lib/mp_.mp4";

export function Careers() {
  return (
    <motion.section
      id="careers"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative overflow-hidden bg-slate-950 min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[85vh] aspect-[16/9] md:aspect-[21/9] flex items-center justify-center"
    >
      {/* Video player playing edge-to-edge */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none select-none"
      >
        <source src={careerVideo} type="video/mp4" />
      </video>

      {/* Elegant dark gradient overlay to ensure perfect contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-20 pointer-events-none" />

      {/* Floating Black Animated "Join our team" Button (Bottom Right Corner of the video) */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30">
        <motion.a
          href="https://www.thevipgroup.eu/#careers"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-7 py-3 md:px-9 md:py-4 text-xs sm:text-sm font-bold text-white shadow-2xl hover:shadow-black/55 hover:bg-slate-900 border border-white/80 transition-all duration-300 overflow-hidden cursor-pointer"
        >
          <span className="relative z-10 font-sans tracking-wide">join our team</span>
          <ArrowUpRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          
          {/* Shimmer / light-sweep animation continuously moving across the black button */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] animate-beam-sweep z-0" />
          
          {/* Subtle hover white outline overlay */}
          <span className="absolute inset-0 rounded-full border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      </div>
    </motion.section>
  );
}
