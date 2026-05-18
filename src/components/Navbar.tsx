import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../lib/SVG-3.png";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#sandbox", label: "Programs" },
  { href: "#education", label: "Education" },
  { href: "#products", label: "Products" },
  { href: "https://www.thevipgroup.eu/#careers", label: "Career" },
  { href: "#ambassador", label: "Ambassador" },
  { href: "#partners", label: "Partner" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let obs: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      const sections = links
        .filter(l => l.href.startsWith("#"))
        .map(l => document.querySelector(l.href))
        .filter(Boolean) as Element[];
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) setActive("#" + e.target.id);
          });
        },
        { rootMargin: "-30% 0px -45% 0px" }
      );
      sections.forEach(s => obs?.observe(s));
    }, 300);

    return () => {
      clearTimeout(timer);
      if (obs) obs.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group" onClick={() => setActive("#hero")}>
          <img src={logo} alt="VIPGROUP" className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href} href={l.href}
              onClick={() => setActive(l.href)}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === l.href ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                   layoutId="nav-pill"
                   className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600"
                   transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <button className="md:hidden p-2 text-slate-700 hover:text-slate-900" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map(l => (
              <a key={l.href} href={l.href}
                 target={l.href.startsWith("http") ? "_blank" : undefined}
                 rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                 onClick={() => {
                   setActive(l.href);
                   setOpen(false);
                 }}
                 className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
