import { motion } from "framer-motion";
import { Layers, Users, GitBranch, Code2, Award } from "lucide-react";

const timeline = [
  { phase: "Phase 01", title: "Onboarding & Mentor Pairing", desc: "Founders pair you with a senior operator, scope your first ship-list, and grant production access." },
  { phase: "Phase 02", title: "Sandbox Sprints", desc: "Two-week agile sprints across live products. Real users, real metrics, real ownership." },
  { phase: "Phase 03", title: "Cross-Cultural Pods", desc: "Mixed-nationality teams ship together — async, in English, with Polish HQ rhythm." },
  { phase: "Phase 04", title: "Capstone & Recognition", desc: "Ship a measurable artefact: a deployed feature, a closed deal, a scaled campaign. Walk out with proof." },
];

const features = [
  { icon: Award, label: "Erasmus+ Traineeship" },
  { icon: Layers, label: "OID: E10404270" },
  { icon: Users, label: "1:1 Mentorship" },
  { icon: GitBranch, label: "Agile Collaboration" },
  { icon: Code2, label: "Modern Tech Stack" },
];

export function Sandbox() {
  return (
    <section id="sandbox" className="relative min-h-screen flex items-center py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter">
            Not an internship. <span className="text-gradient italic font-light">A residency.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            The Sandbox is our elite traineeship program — built for scholars who treat their
            education as a launchpad, not a checkbox.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm"
            >
              <f.icon className="w-4 h-4 text-electric" />
              <span className="text-muted-foreground">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative">
          {/* timeline rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px md:left-1/2 bg-gradient-to-b from-transparent via-electric/40 to-transparent" />

          <div className="space-y-12">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}>

                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-electric shadow-glow z-10">
                    <span className="absolute inset-0 rounded-full bg-electric animate-ping opacity-60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
