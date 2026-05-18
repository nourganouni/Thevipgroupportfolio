import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import nnImg from "../../lib/nn.png";

export function Ambassador() {
  return (
    <section 
      id="ambassador" 
      className="relative min-h-[580px] md:min-h-[440px] lg:min-h-[500px] flex items-end pt-16 md:pt-12 pb-0 overflow-hidden" 
      style={{ backgroundColor: "#FAF7F0" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          
          {/* Left Side: Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left pb-6 md:pb-12 lg:pb-16"
          >
            <h2 className="font-sans text-[40px] sm:text-[60px] md:text-[76px] leading-[1.05] tracking-tight text-slate-900">
              <span className="font-light block">become</span>
              <span className="font-light block -mt-1 sm:-mt-2">our</span>
              <span className="font-extrabold block -mt-1 text-slate-950 text-[54px] sm:text-[80px] md:text-[96px]">Ambassador</span>
            </h2>
            <p className="mt-6 text-slate-800 leading-relaxed font-sans max-w-lg text-sm sm:text-base">
              Represent our product in your university, create content, share your experience with others, and earn money while growing your network and personal brand. Join us as a campus ambassador or content creator and start making an impact
            </p>
            <motion.a 
              href="https://findmystay.eu/become-ambassador"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-aurora animate-gradient-shift px-8 py-3.5 mt-8 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 text-white">Start now</span>
              <ArrowRight size={16} className="relative z-10 text-white group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-white/30 animate-beam-sweep" />
            </motion.a>
          </motion.div>

          {/* Right Side: The Girl (No white backdrop, positioned flush at edges) */}
          <div className="relative min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[460px] w-full flex items-end justify-center overflow-visible">
            {/* Girl Image */}
            <motion.img
              src={nnImg}
              alt="VIP Ambassador"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 lg:right-[-40px] h-[340px] sm:h-[440px] md:h-[480px] lg:h-[540px] w-auto object-contain object-bottom select-none pointer-events-none z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
