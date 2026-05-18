import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Sparkles } from "lucide-react";

const GlobeFluid = lazy(() => import("../Globe").then((m) => ({ default: m.GlobeFluid })));

type Partner = {
  country: string;
  university: string;
  location: [number, number];
  flag: string;
  code: string;
};

const PARTNERS: Partner[] = [
  {
    country: "Spain",
    university: "Univ. de Sevilla · IES Mare Nostrum · IES Abastos · IES Francisco Quevedo · IES Clara del Rey",
    location: [40.4168, -3.7038],
    flag: "🇪🇸",
    code: "es",
  },
  {
    country: "France",
    university: "Clermont School of Business · Univ. de Bordeaux",
    location: [45.764, 4.8357],
    flag: "🇫🇷",
    code: "fr",
  },
  {
    country: "Italy",
    university: "Politecnico di Torino · LUM Giuseppe Degennaro",
    location: [45.0703, 7.6869],
    flag: "🇮🇹",
    code: "it",
  },
  {
    country: "Tunisia",
    university: "Université de Monastir",
    location: [35.7643, 10.8113],
    flag: "🇹🇳",
    code: "tn",
  },
  {
    country: "Turkey",
    university: "Sakarya University · Bahcesehir University",
    location: [40.7769, 30.4034],
    flag: "🇹🇷",
    code: "tr",
  },
  {
    country: "Finland",
    university: "Tampere University",
    location: [61.4978, 23.761],
    flag: "🇫🇮",
    code: "fi",
  },
  {
    country: "Belgium",
    university: "Haute Ecole Bruxelles-Brabant",
    location: [50.8503, 4.3517],
    flag: "🇧🇪",
    code: "be",
  },
  {
    country: "Portugal",
    university: "Inst. Polytechnic of Bragança",
    location: [41.8061, -6.7567],
    flag: "🇵🇹",
    code: "pt",
  },
  {
    country: "Croatia",
    university: "University of Split",
    location: [43.5081, 16.4402],
    flag: "🇭🇷",
    code: "hr",
  },
];

export function GlobePartners() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % PARTNERS.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const partner = PARTNERS[active];

  return (
    <section id="network" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter text-slate-900">
              A network across <br />
              <span className="text-gradient">17 institutions.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Where academic excellence meets industrial velocity. Our elite traineeship program is 
              engineered to forge the next generation of global tech leaders through hands-on 
              enterprise execution.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="https://www.thevipgroup.eu/#innovation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 font-medium text-white transition hover:scale-105"
              >
                Join the Program
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Globe2 className="h-4 w-4 text-primary" />
                {PARTNERS.length} partner countries
              </div>
            </div>
          </motion.div>

          {/* Right Globe */}
          <div className="relative flex aspect-square w-full items-center justify-center">
            {/* Soft halo */}
            <div className="absolute inset-[10%] -z-10 rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/5 blur-3xl opacity-60" />

            <div className="relative aspect-square w-full max-w-[640px]">
              <Suspense fallback={<div className="h-full w-full" />}>
                <GlobeFluid markers={PARTNERS} activeIndex={active} />
              </Suspense>



              {/* Country flag orbs at bottom */}
              <div className="absolute -bottom-16 md:-bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 md:gap-3 flex-wrap rounded-2xl md:rounded-full border border-slate-200 bg-white/90 px-3 py-2 md:px-4 md:py-3 shadow-lg backdrop-blur-md max-w-[90vw] md:max-w-none w-max z-20">
                {PARTNERS.map((p, i) => (
                  <button
                    key={p.country}
                    onClick={() => setActive(i)}
                    aria-label={p.country}
                    className={`grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full text-base md:text-lg transition-all duration-300 ${
                      i === active
                        ? "scale-110 bg-slate-100 shadow-md ring-2 ring-blue-600"
                        : "opacity-40 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img 
                      src={`https://flagcdn.com/w40/${p.code}.png`} 
                      srcSet={`https://flagcdn.com/w80/${p.code}.png 2x`}
                      className="w-4 md:w-5 h-auto rounded-sm"
                      alt={p.country}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
