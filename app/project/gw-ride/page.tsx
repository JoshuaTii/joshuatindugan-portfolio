import { GWRideNavbar } from "./sections/GWRideNavbar";
import { Hero } from "./sections/Hero";
import { Overview } from "./sections/Overview";
import { Context } from "./sections/Context";
import { Principles } from "./sections/Principles";
import { Research } from "./sections/Research";
import { Insights } from "./sections/Insights";
import { UserJourney } from "./sections/UserJourney";
import { Features } from "./sections/Features";
import { Design } from "./sections/Design";
import { Final } from "./sections/Final";
import { Reflection } from "./sections/Reflection";
import { GWRideFooter } from "./sections/GWRideFooter";

export const metadata = {
  title: "GW Ride: Campus Transit UX | Joshua Uba Tindugan",
  description:
    "A mobile app concept designed to improve how George Washington University students navigate campus shuttle transportation. UX case study by Joshua Uba Tindugan.",
};

export default function GWRidePage() {
  return (
    <main style={{ backgroundColor: "var(--cs-bg)" }}>
      <GWRideNavbar />
      <Hero />
      <Overview />
      <Context />
      <Principles />
      <Research />
      <Insights />
      <UserJourney />
      <Features />
      <Design />
      <Final />
      <Reflection />
      <GWRideFooter />
    </main>
  );
}
