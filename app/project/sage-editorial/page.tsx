import { SENavbar } from "./sections/SENavbar";
import { SEHero } from "./sections/SEHero";
import { SEContext } from "./sections/SEContext";
import { SEDirection } from "./sections/SEDirection";
import { SEVisual } from "./sections/SEVisual";
import { SEProgress } from "./sections/SEProgress";
import { SEFinalDesign } from "./sections/SEFinalDesign";
import { SEReflection } from "./sections/SEReflection";
import { SENextSteps } from "./sections/SENextSteps";
import { SEFooter } from "./sections/SEFooter";

export const metadata = {
  title: "SAGE Editorial — Joshua Tindugan",
  description:
    "An editorial website extension of the SAGE financial empowerment platform, designed for Ward 7 and Ward 8 communities in Washington D.C.",
};

export default function SAGEEditorialPage() {
  return (
    <>
      <SENavbar />
      <main>
        <SEHero />
        <SEContext />
        <SEDirection />
        <SEVisual />
        <SEProgress />
        <SEFinalDesign />
        <SEReflection />
        <SENextSteps />
      </main>
      <SEFooter />
    </>
  );
}
