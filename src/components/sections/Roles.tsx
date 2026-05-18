import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code, Smartphone, Server, Briefcase, BarChart3, Users,
  Megaphone, Globe, Camera, MessageSquare, Plus
} from "lucide-react";

const roles = [
  { icon: Code, title: "Web Developer", stack: "React • TypeScript • TanStack", desc: "Ship full-stack features into production SaaS products with senior code review." },
  { icon: Smartphone, title: "Mobile Developer", stack: "React Native • Swift • Kotlin", desc: "Build cross-platform apps for our travel and ops product lines." },
  { icon: Server, title: "IT Intern", stack: "Cloud • Networks • Security", desc: "Operate the systems that keep our European footprint running." },
  { icon: Briefcase, title: "Business Development", stack: "Sales • Partnerships • CRM", desc: "Open new university and enterprise partnerships across Europe." },
  { icon: BarChart3, title: "Business Management", stack: "Strategy • Operations • OKRs", desc: "Sit inside the leadership rhythm and drive cross-functional projects." },
  { icon: Users, title: "Human Resources", stack: "Talent • Culture • HRIS", desc: "Help us hire, onboard, and develop a multi-national workforce." },
  { icon: Megaphone, title: "Marketing & Sales", stack: "GTM • Pipeline • Demand", desc: "Build and run campaigns that move enterprise pipeline." },
  { icon: Globe, title: "Digital Marketing", stack: "SEO • Performance • Analytics", desc: "Grow our digital surface area across channels and geographies." },
  { icon: Camera, title: "Content Creator", stack: "Video • Story • Production", desc: "Tell our story in motion — from product films to founder POV." },
  { icon: MessageSquare, title: "Community Manager", stack: "Social • Events • Voice", desc: "Be the voice that connects our scholars, alumni, and partners." },
];

export function Roles() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="roles" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >

          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter">
            Ten desks. <span className="text-gradient">One sandbox.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Every role is an owned scope with measurable outputs. Pick your lane.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {roles.map((r, i) => {
            const open = openIdx === i;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                onClick={() => setOpenIdx(open ? null : i)}
                className="group relative glass-strong border-glow rounded-2xl p-6 cursor-pointer overflow-hidden hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-aurora opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" />
                <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-electric/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <r.icon className="w-5 h-5 text-electric" />
                  </div>
                  <button className="w-7 h-7 rounded-full glass flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-all" aria-label="Expand">
                    <Plus size={14} className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
                  </button>
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold">{r.title}</h3>
                <div className="relative mt-1 text-[11px] font-mono uppercase tracking-widest text-electric/80">{r.stack}</div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      className="relative overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                      <a href="#ambassador" className="inline-block mt-4 text-xs font-mono uppercase tracking-widest text-electric hover:underline">
                        Apply →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
