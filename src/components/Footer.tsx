import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "../lib/SVG-3.png";

const cols = [
  {
    title: "Ecosystem",
    links: [
      { label: "Home", href: "#hero" },
      { label: "Programs", href: "#sandbox" },
      { label: "Education", href: "#education" },
      { label: "Products", href: "#products" },
      { label: "Career", href: "https://www.thevipgroup.eu/#careers", isExternal: true },
      { label: "Ambassador", href: "#ambassador" },
      { label: "Partner", href: "#partners" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "https://www.thevipgroup.eu/#careers", isExternal: true },
      { label: "FAQ", href: "https://www.thevipgroup.eu/#faq", isExternal: true },
      { label: "Terms and Conditions", href: "https://www.thevipgroup.eu/#terms-and-conditions", isExternal: true },
      { label: "Contact", href: "https://www.thevipgroup.eu/#contact", isExternal: true },
    ]
  }
];

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { href: "https://www.linkedin.com/company/thevipgroup/posts/?feedView=all", Icon: Linkedin },
  { href: "https://x.com/TheViPgroup___", Icon: XIcon },
  { href: "https://www.instagram.com/thevipgroup___/", Icon: Instagram },
  { href: "https://www.facebook.com/profile.php?id=61578153645112", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="THEVIPGROUP" className="h-10 w-auto object-contain" />
              <div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">Group</div>
                <div className="font-display font-bold tracking-tight -mt-0.5 text-slate-900">THEVIPGROUP</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              THEVIPGROUP Sp. z o.o. — A European innovation house engineering AI, SaaS, and global talent.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, Icon }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-electric hover:scale-110 hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map(c => (
            <div key={c.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-electric mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map(l => (
                  <li key={l.label}>
                    <a 
                      href={l.href} 
                      target={l.isExternal ? "_blank" : undefined}
                      rel={l.isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative inline-block group"
                    >
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2 }} style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-electric via-violet to-transparent opacity-50"
        />

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>© {new Date().getFullYear()} THEVIPGROUP Sp. z o.o. — Wrocław, Poland</div>
          <div className="flex gap-6">
            <span>OID: E10404270</span>
            <span>VAT-EU registered</span>
            <span className="text-electric">● All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
