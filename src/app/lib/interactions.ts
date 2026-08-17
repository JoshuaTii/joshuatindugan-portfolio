import type { Transition, TargetAndTransition } from "motion/react";

// Shared tactile press feedback for every button/link site-wide — a quick
// squish on press-down, then a springy overshoot back to rest on release
// (not a linear ease) so letting go actually reads as a small bounce,
// iOS-style. Embedded as each gesture's own `transition` (not a top-level
// prop on the component) so it never overrides an element's entrance
// animation or any other motion already defined on it.
const pressSpring: Transition = { type: "spring", stiffness: 500, damping: 15, mass: 0.6 };

export const press: TargetAndTransition = {
  scale: 0.94,
  transition: pressSpring,
};

// For a container that should react as one rubbery unit to a press anywhere
// inside it (the nav pill) rather than each child animating on its own —
// a slight non-uniform squish (widens a touch, flattens a touch) reads as
// "stretch" rather than a plain scale-down, and the spring's overshoot on
// release is the "ripple" back to shape.
export const islandPress: TargetAndTransition = {
  scaleX: 1.03,
  scaleY: 0.95,
  transition: pressSpring,
};

// Convenience for elements that don't already define their own whileHover
// (e.g. ones currently using a Tailwind `hover:scale-*` class) — matches
// the scale those already use, just moved onto the same spring-driven
// mechanism as the press so the two compose instead of fighting over
// `transform`.
export function hoverScale(scale: number): TargetAndTransition {
  return { scale, transition: { type: "spring", stiffness: 400, damping: 20 } };
}
