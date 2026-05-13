import { InTuitionNavbar } from "./sections/InTuitionNavbar";
import { Hero } from "./sections/Hero";
import { Overview } from "./sections/Overview";
import { Context } from "./sections/Context";
import { Research } from "./sections/Research";
import { Features } from "./sections/Features";
import { Design } from "./sections/Design";
import { Final } from "./sections/Final";
import { InTuitionFooter } from "./sections/InTuitionFooter";

export const metadata = {
  title: "InTuition: Scholarship Discovery UX | Joshua Tindugan",
  description:
    "A scholarship discovery platform using smart filtering and unified applications to simplify how students find and apply for funding. UX case study by Joshua Tindugan.",
};

export default function InTuitionPage() {
  return (
    <main style={{ backgroundColor: "#09090b" }}>
      <InTuitionNavbar />
      <Hero />
      <Overview />
      <Context />
      <Research />
      <Features />
      <Design />
      <Final />
      <InTuitionFooter />
    </main>
  );
}
