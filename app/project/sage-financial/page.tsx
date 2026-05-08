import { SageNavbar } from "./sections/SageNavbar";
import { Hero } from "./sections/Hero";
import { Overview } from "./sections/Overview";
import { Context } from "./sections/Context";
import { Research } from "./sections/Research";
import { Insights } from "./sections/Insights";
import { Principles } from "./sections/Principles";
import { Features } from "./sections/Features";
import { DesignEvolution } from "./sections/DesignEvolution";
import { FinalDesign } from "./sections/FinalDesign";
import { Reflection } from "./sections/Reflection";
import { SageFooter } from "./sections/SageFooter";

export const metadata = {
  title: "SAGE — Financial Access | Joshua Tindugan",
  description:
    "A financial empowerment platform designed for Washington D.C.'s Ward 7 and 8 communities. UX case study by Joshua Tindugan.",
};

export default function SageFinancialPage() {
  return (
    <main style={{ backgroundColor: "#09090b" }}>
      <SageNavbar />
      <Hero />
      <Overview />
      <Context />
      <Research />
      <Insights />
      <Principles />
      <Features />
      <DesignEvolution />
      <FinalDesign />
      <Reflection />
      <SageFooter />
    </main>
  );
}
