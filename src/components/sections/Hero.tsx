import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";
import bgVideo from "../../lib/bg.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden select-none pt-28 pb-20 bg-white"
    >
      {/* Background Video player - scaled up to crop out solid black letterbox/pillarbox borders */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0 scale-[1.3] lg:scale-[1.4]"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* Centered Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        
        {/* Elegant Modern Syne Title */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-black select-none"
        >
          Thevipgroup<br />portfolio
        </motion.h1>

        {/* Clean, descriptive paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-xs sm:text-sm md:text-base text-slate-800 font-sans font-medium max-w-2xl mx-auto leading-relaxed px-4"
        >
          A European innovation house engineering enterprise systems, AI solutions, and a global ecosystem of scholars, builders, and operators.
        </motion.p>

        {/* Horizontally aligned elegant metrics with dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 max-w-3xl mx-auto"
        >
          {/* Stat 1 */}
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-base sm:text-lg font-syne font-extrabold text-black">19+</span>
            <span className="text-[10px] sm:text-xs font-sans font-medium text-slate-800 mt-0.5 tracking-tight whitespace-nowrap">
              Elite Scholars
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-black/15 self-center" />

          {/* Stat 2 */}
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-base sm:text-lg font-syne font-extrabold text-black">17</span>
            <span className="text-[10px] sm:text-xs font-sans font-medium text-slate-800 mt-0.5 tracking-tight whitespace-nowrap">
              University Partners
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-black/15 self-center" />

          {/* Stat 3 */}
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <span className="text-base sm:text-lg font-syne font-extrabold text-black">100%</span>
            <span className="text-[10px] sm:text-xs font-sans font-medium text-slate-800 mt-0.5 tracking-tight whitespace-nowrap">
              Hands-On Execution
            </span>
          </div>
        </motion.div>
      </div>

      {/* Down arrow circle button at bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={handleScrollDown}
          className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </motion.div>

      {/* Floating Mute/Unmute audio controller */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 cursor-pointer group"
          aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white/80 group-hover:text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white animate-pulse" />
          )}
        </button>
      </motion.div>
    </section>
  );
}
