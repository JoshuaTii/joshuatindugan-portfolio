import { GWRideNavbar } from "./sections/GWRideNavbar";
import { Hero } from "./sections/Hero";
import { Overview } from "./sections/Overview";
import { Context } from "./sections/Context";
import { Research } from "./sections/Research";
import { Features } from "./sections/Features";
import { Design } from "./sections/Design";
import { Final } from "./sections/Final";
import { GWRideFooter } from "./sections/GWRideFooter";

export const metadata = {
  title: "GW Ride — Campus Transit UX | Joshua Tindugan",
  description:
    "A mobile app concept designed to improve how George Washington University students navigate campus shuttle transportation. UX case study by Joshua Tindugan.",
};

export default function GWRidePage() {
  return (
    <main style={{ backgroundColor: "#09090b" }}>
      <GWRideNavbar />
      <Hero />
      <Overview />
      <Context />
      <Research />
      <Features />
      <Design />
      <Final />
      <GWRideFooter />
    </main>
  );
}
