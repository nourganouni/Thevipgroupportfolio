import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { About } from "@/components/sections/About";
import { Sandbox } from "@/components/sections/Sandbox";
import { GlobePartners } from "@/components/sections/GlobePartners";
import { NewHero } from "@/components/sections/NewHero";
import { Products } from "@/components/sections/Products";
import { Ambassador } from "@/components/sections/Ambassador";
import { CorporatePartner } from "@/components/sections/CorporatePartner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THEVIPGROUP — Portfolio & Innovation Ecosystem" },
      {
        name: "description",
        content:
          "European innovation house engineering enterprise systems, AI solutions, and a global ecosystem of scholars, builders, and operators. Welcome to THEVIPGROUP Portfolio.",
      },
      { property: "og:title", content: "THEVIPGROUP — Portfolio & Innovation Ecosystem" },
      {
        property: "og:description",
        content:
          "A European innovation house engineering enterprise systems, AI solutions, and a global ecosystem of scholars, builders, and operators.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <PartnerLogos />
        <About />
        <Sandbox />
        <GlobePartners />
        <NewHero />
        <Products />
        <Ambassador />
        <CorporatePartner />
      </main>
      <Footer />
    </>
  );
}
