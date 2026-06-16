import { InTuitionNavbar } from "./sections/InTuitionNavbar";
import { Hero } from "./sections/Hero";
import { Overview } from "./sections/Overview";
import { Context } from "./sections/Context";
import { Principles } from "./sections/Principles";
import { Research } from "./sections/Research";
import { Insights } from "./sections/Insights";
import { Features } from "./sections/Features";
import { UserJourney } from "./sections/UserJourney";
import { Design } from "./sections/Design";
import { Final } from "./sections/Final";
import { Reflection } from "./sections/Reflection";
import { InTuitionFooter } from "./sections/InTuitionFooter";

export const metadata = {
  title: "InTuition: Scholarship Discovery UX | Joshua Uba Tindugan",
  description:
    "A scholarship discovery platform using smart filtering and unified applications to simplify how students find and apply for funding. UX case study by Joshua Uba Tindugan.",
};

export default function InTuitionPage() {
  return (
    <main style={{ backgroundColor: "var(--cs-bg)" }}>
      <InTuitionNavbar />
      <Hero />
      <Overview />
      <Context />
      <Principles />
      <Research />
      <Insights />
      <Features />
      <UserJourney />
      <Design />
      <Final />
      <Reflection />
      <InTuitionFooter />
    </main>
  );
}
