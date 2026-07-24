export {
  type Block,
  type CaseSection,
  type MediaImage,
  type Project,
  type ProjectImage,
} from "./case-types";

import { type Project } from "./case-types";
import { sage } from "./case-studies/sage";
import { sageEditorial } from "./case-studies/sage-editorial";
import { gwRide } from "./case-studies/gw-ride";
import { intuition } from "./case-studies/intuition";
import { photography } from "./case-studies/photography";

export const projects: Project[] = [
  sage,
  sageEditorial,
  gwRide,
  intuition,
  photography,
];
