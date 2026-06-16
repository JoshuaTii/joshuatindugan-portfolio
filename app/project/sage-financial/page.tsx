import { SageNavbar } from "./sections/SageNavbar";
import { Hero } from "./sections/Hero";
import { Overview } from "./sections/Overview";
import { Context } from "./sections/Context";
import { Principles } from "./sections/Principles";
import { Research } from "./sections/Research";
import { Insights } from "./sections/Insights";
import { UserJourney } from "./sections/UserJourney";
import { Features } from "./sections/Features";
import { DesignEvolution } from "./sections/DesignEvolution";
import { FinalDesign } from "./sections/FinalDesign";
import { Reflection } from "./sections/Reflection";
import { SageFooter } from "./sections/SageFooter";

export const metadata = {
  title: "SAGE: Financial Access | Joshua Uba Tindugan",
  description:
    "A financial empowerment platform designed for Washington D.C.'s Ward 7 and 8 communities. UX case study by Joshua Uba Tindugan.",
};

export default function SageFinancialPage() {
  return (
    <main style={{ backgroundColor: "var(--cs-bg)" }}>
      <SageNavbar />
      {/* Overview nav group */}
      <Hero />
      <Overview />
      {/* Context nav group */}
      <Context />
      <Principles />
      {/* Research nav group */}
      <Research />
      <Insights />
      {/* Experience nav group */}
      <UserJourney />
      <Features />
      {/* Design nav group */}
      <DesignEvolution />
      <FinalDesign />
      {/* Reflection nav group */}
      <Reflection />
      <SageFooter />
    </main>
  );
}
