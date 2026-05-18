import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Workflow, Compass, Hotel, Wallet, Play, Users, BarChart3, ClipboardCheck, Key, Home, Cpu, Activity, Plane, MapPin, Globe } from "lucide-react";
import girlEssential from "../../lib/girl esential.png";
import manImg from "../../lib/image 125.png";
import containerMockup from "../../lib/container_mockup 2@2x 1.png";
import explorlyImg from "../../lib/Frame 45 (1).png";
import planeVector from "../../lib/Frame 427320627.png";
import grlImg from "../../lib/grl.png";
import slide1 from "../../lib/1.png";
import slide2 from "../../lib/2.png";
import slide3 from "../../lib/3.png";
import slide4 from "../../lib/4.png";
import slide5 from "../../lib/5.png";

const slides = [slide1, slide2, slide3, slide4, slide5];

const products = [
  {
    icon: Shield, name: "Sentinel", tag: "HRIS",
    desc: "An AI-native HR operating system: lifecycle, payroll signals, and policy intelligence in one cockpit.",
    metrics: [["Modules", "12"], ["Tenants", "B2B"], ["AI", "Native"]],
    color: "oklch(0.72 0.2 250)",
  },
  {
    icon: Workflow, name: "FluxOps", tag: "Operations",
    desc: "Workflow orchestration for cross-border operations — automate the messy seams between teams.",
    metrics: [["Connectors", "40+"], ["Latency", "<200ms"], ["Mode", "Async"]],
    color: "oklch(0.6 0.22 295)",
  },
  {
    icon: Compass, name: "Explorly", tag: "Travel AI",
    desc: "AI travel concierge that plans, books, and adapts in real time — from itinerary to in-destination intel.",
    metrics: [["Cities", "1.2k"], ["LLM", "Multi"], ["UX", "Mobile"]],
    color: "oklch(0.85 0.15 200)",
  },
  {
    icon: Hotel, name: "FindMyStay", tag: "Hospitality",
    desc: "A discovery layer for independent stays — direct supply, transparent pricing, no OTA tax.",
    metrics: [["Supply", "Direct"], ["Take", "0%"], ["Markets", "EU+"]],
    color: "oklch(0.72 0.2 250)",
  },
  {
    icon: Wallet, name: "ClaritySpend AI", tag: "Finance",
    desc: "Spend intelligence for SMBs — categorize, forecast, and act on cashflow with conversational finance.",
    metrics: [["Insights", "Live"], ["Banks", "Open"], ["Region", "EEA"]],
    color: "oklch(0.6 0.22 295)",
  },
];

const floatAnim = (i: number) => ({
  y: [0, -12, 0],
  transition: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.3 },
});

export function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="products" className="relative min-h-screen flex items-center py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter">
            Five products. <span className="text-gradient">One operating layer.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Built in-house. Used in production. Shipped by interns alongside seniors.
          </p>
        </motion.div>

        <div className="space-y-8">
          
          {/* ============================================================== */}
          {/* 1. BESPOKE SENTINEL CARD - CUSTOM LIGHT HRIS MOCKUP DESIGN     */}
          {/* ============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch">
              {/* Left Side: Details */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-3 font-sans">
                  Next-Generation Workforce Intelligence
                </span>
                <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
                  Sentinel<br />Modern HR Management
                </h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-sans max-w-md text-sm md:text-base">
                  A highly scalable platform engineered to unify recruitment, automate payroll, and deliver global workforce analytics.
                </p>
                
                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://www.thevipgroup.eu/#product-sentinel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium text-sm hover:bg-violet-700 hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                  >
                    Get started
                  </a>
                  <a
                    href="https://www.thevipgroup.eu/#product-sentinel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-violet-200 text-violet-600 font-medium text-sm flex items-center gap-2 hover:bg-violet-50 transition-all duration-300 cursor-pointer inline-flex items-center"
                  >
                    <Play className="w-4 h-4 fill-violet-600 stroke-none" />
                    How it works
                  </a>
                </div>
              </div>

              {/* Right Side: The Girl & Floating Elements */}
              <div className="relative min-h-[360px] lg:min-h-[460px] flex items-end justify-center overflow-hidden">
                {/* Subtle Grid Dot Background */}
                <div className="absolute inset-0 opacity-[0.06] grid-bg" />
                
                {/* Decorative blob dots */}
                <div className="absolute top-[35%] left-[20%] w-3 h-3 rounded-full bg-violet-300" />
                <div className="absolute bottom-[30%] left-[10%] w-4 h-4 rounded-full bg-orange-300" />
                
                {/* Centered Image of the Girl */}
                <div className="relative w-[75%] h-[90%] flex items-end justify-center z-10">
                  <img 
                    src={girlEssential} 
                    alt="Sentinel HR Representative" 
                    className="h-full object-contain object-bottom select-none pointer-events-none" 
                  />
                </div>

                {/* FLOATING ELEMENTS */}
                
                {/* 1. Top-Left White Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] left-[8%] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex flex-col items-start z-20"
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900">+ 200</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-sans font-medium whitespace-nowrap mt-0.5">
                    Company Trusted
                  </span>
                </motion.div>

                {/* 2. Bottom-Right White Card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-[20%] right-[6%] bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm sm:text-base font-extrabold text-slate-900">+300</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-500 font-sans font-semibold leading-tight mt-0.5">
                      People have manage<br />with organize
                    </span>
                  </div>
                </motion.div>

                {/* 3. Upper-Right Purple Floating Icon Block */}
                <motion.div
                  animate={{ rotate: [12, 8, 12], y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[18%] right-[15%] bg-purple-400 text-white rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center"
                  style={{ transform: "rotate(12deg)" }}
                >
                  <BarChart3 className="w-5 h-5" />
                </motion.div>

                {/* 4. Left Orange Floating Icon Block */}
                <motion.div
                  animate={{ rotate: [-10, -14, -10], y: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute top-[48%] left-[6%] bg-orange-200 text-orange-600 rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center"
                  style={{ transform: "rotate(-10deg)" }}
                >
                  <ClipboardCheck className="w-5 h-5" />
                </motion.div>

                {/* Background Grid Dots Decor */}
                <div className="absolute right-4 bottom-20 opacity-[0.08] select-none pointer-events-none z-0">
                  <svg width="100" height="150" viewBox="0 0 100 150" fill="none">
                    <pattern id="dot-pattern-sentinel" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="currentColor" className="text-slate-800" />
                    </pattern>
                    <rect width="100" height="150" fill="url(#dot-pattern-sentinel)" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.article>

          {/* ============================================================== */}
          {/* 2. BESPOKE FINDMYSTAY CARD - TEAL 20% SOLID OPAQUE BACKGROUND  */}
          {/* ============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-[#309689]/25 shadow-xl bg-[#e6f4f2]"
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0 items-stretch">
              
              {/* Left Side: Host Man Representative (Standardized to min-h-[360px] lg:min-h-[460px]) */}
              <div className="relative min-h-[360px] lg:min-h-[460px] flex items-end justify-center overflow-hidden">
                {/* Grid decor lines */}
                <div className="absolute inset-0 opacity-[0.05] grid-bg" />
                <div className="absolute top-[30%] right-[25%] w-3 h-3 rounded-full bg-[#309689]/40" />
                <div className="absolute bottom-[25%] left-[15%] w-4 h-4 rounded-full bg-[#309689]/30" />
                
                {/* Centered Image of the Thumbs-Up Representative (Flush at bottom edge) */}
                <div className="relative w-[68%] h-[75%] flex items-end justify-center z-10">
                  <img 
                    src={manImg} 
                    alt="FindMyStay Representative" 
                    className="h-full object-contain object-bottom select-none pointer-events-none" 
                  />
                </div>

                {/* Floating Decorative Brand Cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] left-[8%] bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#309689]/10 flex flex-col items-start z-20"
                >
                  <span className="text-base sm:text-lg font-extrabold text-[#309689]">+ 15k</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-sans font-medium whitespace-nowrap mt-0.5">
                    Happy Guests Host
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-[20%] right-[8%] bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#309689]/10 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#309689]/15 text-[#309689] flex items-center justify-center flex-shrink-0">
                    <Hotel className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">Direct Booking</span>
                    <span className="text-[8px] sm:text-[9px] text-[#309689] font-sans font-semibold leading-tight mt-0.5">
                      0% OTA Commission Tax
                    </span>
                  </div>
                </motion.div>

                {/* Upper-Right Floating Teal Key Icon Block */}
                <motion.div
                  animate={{ rotate: [8, 12, 8], y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[18%] right-[15%] bg-[#309689] text-white rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center"
                  style={{ transform: "rotate(8deg)" }}
                >
                  <Key className="w-5 h-5 text-white" />
                </motion.div>

                {/* Bottom-Left Floating Orange Home Icon Block */}
                <motion.div
                  animate={{ rotate: [-12, -8, -12], y: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-[22%] left-[10%] bg-orange-100 text-orange-600 rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center"
                  style={{ transform: "rotate(-12deg)" }}
                >
                  <Home className="w-5 h-5" />
                </motion.div>

              </div>

              {/* Right Side: Details & Interactive Slideshow (Opposite position: Right side) */}
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-transparent">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#309689] mb-3 font-sans">
                  Your Home Away From Home
                </span>
                <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
                  FindMyStay
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed font-sans max-w-md text-sm">
                  A trusted, borderless housing marketplace. Designed specifically to bridge verified local property owners with the international mobility ecosystem, eliminating friction for global renters and Erasmus+ scholars.
                </p>
                
                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://findmystay.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#309689] text-white font-medium text-sm hover:bg-[#25756a] hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                  >
                    Get started
                  </a>
                  <a
                    href="https://findmystay.eu/how-it-works"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-[#309689]/30 text-[#309689] font-medium text-sm flex items-center gap-2 hover:bg-[#309689]/10 transition-all duration-300 cursor-pointer inline-flex items-center"
                  >
                    <Play className="w-4 h-4 fill-[#309689] stroke-none" />
                    How it works
                  </a>
                </div>


              </div>

            </div>
          </motion.article>

          {/* ============================================================== */}
          {/* 3. BESPOKE FLUXOPS CARD - CUSTOM CONTAINER MOCKUP DESIGN        */}
          {/* ============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch">
              
              {/* Left Column: Details */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-sm font-semibold tracking-wide text-rose-500 mb-3 font-sans">
                  reduce industrial downtime.
                </span>
                <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
                  FluxOps<br />Digital Factory Operations
                </h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-sans max-w-md text-sm md:text-base">
                  An upcoming Industrial IoT platform designed to maximize Overall Equipment Effectiveness (OEE). By replacing legacy reporting with real-time tracking and AI-driven predictive maintenance.
                </p>
                
                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://www.thevipgroup.eu/#product-fluxops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-rose-500 text-white font-medium text-sm hover:bg-rose-600 hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                  >
                    Get started
                  </a>
                  <a
                    href="https://www.thevipgroup.eu/#product-fluxops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-rose-200 text-rose-500 font-medium text-sm flex items-center gap-2 hover:bg-rose-50 transition-all duration-300 cursor-pointer inline-flex items-center"
                  >
                    <Play className="w-4 h-4 fill-rose-500 stroke-none" />
                    How it works
                  </a>
                </div>
              </div>

              {/* Right Column: Suspended Shipping Container Visual */}
              <div className="relative min-h-[360px] lg:min-h-[460px] flex items-center justify-center overflow-hidden bg-slate-50/50">
                {/* Subtle Grid Dot Background */}
                <div className="absolute inset-0 opacity-[0.06] grid-bg" />
                
                {/* Glowing light behind the container */}
                <div className="absolute w-72 h-72 rounded-full bg-blue-100/60 blur-3xl" />
                
                {/* Main Suspended Container Image */}
                <div className="relative w-[90%] h-[90%] flex items-center justify-center z-10">
                  <img 
                    src={containerMockup} 
                    alt="FluxOps Suspended Container" 
                    className="w-full h-full object-contain select-none pointer-events-none" 
                  />
                </div>

                {/* HIGH-TECH FLOATING DECORATIVE BADGES */}
                
                {/* 1. OEE Metric Floating Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[15%] left-[8%] bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5 z-20"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-sans font-semibold uppercase leading-none">OEE Efficiency</span>
                    <span className="text-sm font-extrabold text-slate-800 mt-0.5">94.8% <span className="text-emerald-500 font-medium text-[10px] ml-0.5">▲ Optimal</span></span>
                  </div>
                </motion.div>

                {/* 2. AI Predictive Floater */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute bottom-[16%] right-[8%] bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5 z-20"
                >
                  <div className="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                    <Cpu className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 font-sans font-semibold uppercase leading-none">Maintenance status</span>
                    <span className="text-xs font-bold text-slate-800 mt-0.5">Predictive AI Active</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.article>

          {/* ============================================================== */}
          {/* 4. BESPOKE EXPLORLY CARD - BEIGE OPAQUE BACKGROUND & FRAME 45  */}
          {/* ============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-amber-200/50 shadow-xl bg-[#fdf8e2]"
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0 items-stretch">
              
              {/* Left Side: Travel Companion / Backpacker Composite (Flush at bottom edge) */}
              <div className="relative min-h-[360px] lg:min-h-[460px] flex items-end justify-center overflow-hidden">
                {/* Subtle Grid Dot Background */}
                <div className="absolute inset-0 opacity-[0.04] grid-bg" />
                
                {/* High-fidelity travel backpacker composite graphic */}
                <div className="relative w-[92%] h-[92%] flex items-end justify-center z-10">
                  <img 
                    src={explorlyImg} 
                    alt="Explorly Conversational Travel Guide" 
                    className="h-full object-contain object-bottom select-none pointer-events-none" 
                  />
                </div>

                {/* HIGH-TECH FLOATING TRAVEL DECORATIVE ELEMENTS */}

                {/* 1. Custom Floating Airplane Vector overlayed around the circle */}
                <motion.div
                  animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 z-0 pointer-events-none select-none flex items-end justify-center -translate-x-8 lg:-translate-x-12 -translate-y-8 lg:-translate-y-14"
                >
                  <img 
                    src={planeVector} 
                    alt="Airplane Trajectory Vector" 
                    className="w-[92%] h-[92%] object-contain object-bottom filter drop-shadow-sm" 
                  />
                </motion.div>

                {/* 2. Amber Floating Compass */}
                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [-12, -6, -12] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-[20%] right-[10%] bg-amber-100 text-amber-600 rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center animate-pulse"
                  style={{ transform: "rotate(-12deg)" }}
                >
                  <Compass className="w-5 h-5" />
                </motion.div>

                {/* 3. Rose Red Floating Map Pin */}
                <motion.div
                  animate={{ y: [0, -6, 0], scale: [1, 1.06, 1] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute top-[42%] right-[8%] bg-rose-500 text-white rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>

                {/* 4. Emerald Green Floating Globe */}
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-[16%] left-[6%] bg-emerald-100 text-emerald-600 rounded-xl p-2.5 shadow-lg z-20 w-10 h-10 flex items-center justify-center"
                >
                  <Globe className="w-5 h-5" />
                </motion.div>

              </div>

              {/* Right Side: Details */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-sm font-semibold tracking-wide text-amber-500 mb-3 font-sans">
                  The Future of Travel
                </span>
                <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
                  Explorly<br />Conversational Travel
                </h3>
                <p className="mt-5 text-slate-600 leading-relaxed font-sans max-w-md text-sm md:text-base">
                  Redefining the booking experience through an advanced AI voice assistant. Currently being engineered to generate personalized itineraries via deep neural networks, enabling natural, multi-language trip planning across global travel markets.
                </p>
                
                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://www.thevipgroup.eu/#product-explorly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                  >
                    Get started
                  </a>
                  <a
                    href="https://www.thevipgroup.eu/#product-explorly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-amber-300 text-amber-600 font-medium text-sm flex items-center gap-2 hover:bg-amber-100/50 transition-all duration-300 cursor-pointer inline-flex items-center"
                  >
                    <Play className="w-4 h-4 fill-amber-500 stroke-none" />
                    How it works
                  </a>
                </div>
              </div>

            </div>
          </motion.article>

          {/* ============================================================== */}
          {/* 5. BESPOKE CLARITYSPEND AI CARD - WHITE BACKGROUND & GRL IMAGE  */}
          {/* ============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl"
          >
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch">
              
              {/* Left Side: Details */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-500 mb-3 font-sans">
                  Automate Insight, Control Spend
                </span>
                <h3 className="font-sans font-extrabold text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight">
                  ClaritySpend AI<br />Intelligent B2B Finance
                </h3>
                <p className="mt-5 text-slate-500 leading-relaxed font-sans max-w-md text-sm md:text-base">
                  ClaritySpend AI leverages neural networks to capture and in-sync transaction expense management for the modern high-velocity enterprise.
                </p>
                
                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <motion.a
                    href="https://www.thevipgroup.eu/#product-clarityspend"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full px-7 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20 cursor-pointer inline-flex items-center justify-center"
                  >
                    Get started
                  </motion.a>
                  <motion.a
                    href="https://www.thevipgroup.eu/#product-clarityspend"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-full border border-orange-200 hover:bg-orange-50 px-6 py-2.5 text-sm font-semibold text-orange-500 cursor-pointer inline-flex items-center"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500">
                      <Play className="h-2.5 w-2.5 fill-white text-white stroke-none" />
                    </span>
                    How it works
                  </motion.a>
                </div>
              </div>

              {/* Right Side: Interactive Animated visual block with Globe, Activity, and Chart overlays */}
              <div className="relative min-h-[520px] flex items-end justify-center overflow-hidden bg-slate-50/50">
                {/* Subtle Grid Dot Background */}
                <div className="absolute inset-0 opacity-[0.06] grid-bg" />
                
                {/* Girl holding phone - Centered exactly in circle position */}
                <motion.img
                  src={grlImg}
                  alt="ClaritySpend AI spend management representative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[480px] w-auto object-contain z-10 select-none pointer-events-none"
                />

                {/* FLOATING ANIMATED ELEMENTS */}

                {/* 1. Bar Chart (Top Left) */}
                <motion.div
                  animate={floatAnim(0)}
                  className="absolute left-6 top-6 flex items-end gap-1.5 z-20 bg-white/95 backdrop-blur-sm p-3.5 shadow-lg border border-slate-100 rounded-2xl"
                >
                  {[
                    { seq: [40, 70, 55, 85, 60, 75], c: "#0f3b9c" }, // Deep blue
                    { seq: [30, 45, 35, 60, 40, 50], c: "#f8a5c2" }, // Soft pink
                    { seq: [60, 80, 70, 95, 75, 90], c: "#e67e22" }, // Brand orange
                  ].map((b, i) => (
                    <motion.span
                      key={i}
                      animate={{ height: b.seq }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                      style={{ background: b.c, width: 14, borderRadius: 4 }}
                    />
                  ))}
                </motion.div>

                {/* 2. Dashboard Card (Top Right) */}
                <motion.div
                  animate={floatAnim(1)}
                  className="absolute right-6 top-10 w-44 rounded-xl border border-slate-100 bg-white/95 backdrop-blur-sm p-3.5 shadow-xl z-20"
                >
                  <div className="mb-2.5 h-1.5 w-12 rounded-full bg-slate-100" />
                  <div className="flex gap-2">
                    {["#0f3b9c", "#e67e22", "#78c142"].map((c, i) => (
                      <div key={i} className="flex-1 text-center">
                        <div className="mx-auto h-7 w-7 rounded-full border-[3px] flex items-center justify-center" style={{ borderColor: c }} />
                        <div className="mt-1.5 h-1 rounded bg-slate-100" />
                        <div className="mt-1 h-1 w-3/4 mx-auto rounded bg-slate-100" />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* 3. Pulse Line (Middle Left) */}
                <motion.div
                  animate={floatAnim(2)}
                  className="absolute left-4 top-[50%] rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-lg border border-slate-100 z-20 flex items-center justify-center"
                >
                  <Activity className="h-8 w-10 text-blue-500" strokeWidth={3} />
                </motion.div>

                {/* 4. Global Budgeting card (Bottom Center overlapping edge) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="absolute bottom-4 left-1/2 w-[90%] max-w-sm -translate-x-1/2 rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-sm p-4 shadow-2xl z-20"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0"
                    >
                      <Globe className="h-6 w-6 text-white" strokeWidth={2.2} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-blue-600">
                        Global Budgeting
                      </div>
                      <div className="mt-2 flex items-center gap-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "68%" }}
                          transition={{ duration: 1, delay: 0.9 }}
                          className="h-2 rounded-full bg-orange-500"
                        />
                        <div className="h-2 w-10 rounded-full bg-slate-100 flex-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
