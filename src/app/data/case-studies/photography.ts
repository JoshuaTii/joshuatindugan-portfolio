import { type Project } from "../case-types";

export const photography: Project = {
  id: "photography",
  index: "05",
  title: "Photography Archive",
  tagline:
    "A visual study of architecture, patterns, color, composition, and the quiet moments that often go unnoticed.",
  discipline: "Photography · Art Direction",
  year: "2023–Present",
  role: "Photographer",
  duration: "Ongoing",
  summary:
    "A visual archive of lifestyle, editorial, and brand photography, studying color, composition, and perspective beyond the technical.",
  tags: ["Photography", "Art Direction", "Lightroom"],
  cover: "/logos/photography.png",
  heroLogo: "/logos/hero/photography.png",
  sections: [
    {
      key: "overview",
      label: "Overview",
      blocks: [
        {
          type: "text",
          title: "Freezing Time Through Light, Form, and Perspective",
          body: [
            "Photography allows me to slow down and hold onto moments before they disappear. My work focuses on the beauty of architecture, the rhythm of patterns, the drama of angles, and the emotion created through color and composition. Through framing and perspective, I aim to capture ordinary scenes with more stillness, intention, and care.",
            "Shot on Canon EOS R50 · RF-S 18-45mm F4.5-6.3 IS STM Lens.",
          ],
        },
      ],
    },
    {
      key: "frames",
      label: "Selected Frames",
      blocks: [
        {
          type: "text",
          title: "Moments, Structures, and Details in Focus",
          body: [
            "A curated collection of photographs exploring architecture, patterns, color, perspective, and composition. Each image captures a moment of observation: through the geometry of a building, the quiet rhythm of repeated forms, the mood of color, or the way light changes a scene.",
          ],
        },
        {
          type: "masonry",
          images: [
            { src: "/photography/1.jpg", alt: "Geometric architectural detail, intersecting lines and shadow" },
            { src: "/photography/4.jpg", alt: "Architectural facade with repeating windows and structure" },
            { src: "/photography/5.jpg", alt: "Urban pattern, rhythmic forms against open sky" },
            { src: "/photography/6.jpg", alt: "Building exterior with geometric texture and tone" },
            { src: "/photography/7.jpg", alt: "Structural detail framed through perspective" },
            { src: "/photography/8.jpg", alt: "Minimal composition, form and negative space" },
            { src: "/photography/9.jpg", alt: "Repeating architectural module in warm light" },
            { src: "/photography/10.jpg", alt: "Diagonal lines leading through a built environment" },
            { src: "/photography/11.jpg", alt: "Color and shadow on a textured surface" },
            { src: "/photography/12.jpg", alt: "Overhead perspective capturing pattern and depth" },
            { src: "/photography/13.jpg", alt: "Urban detail, material, edge, and contrast" },
            { src: "/photography/14.jpg", alt: "Layered architectural planes receding into distance" },
            { src: "/photography/15.jpg", alt: "Light falling across a structured surface" },
            { src: "/photography/16.jpg", alt: "Quiet street moment framed with intention" },
            { src: "/photography/17.jpg", alt: "Monumental form against an open sky" },
            { src: "/photography/18.jpg", alt: "Graphic silhouette, bold shape and minimal color" },
            { src: "/photography/19.jpg", alt: "Close-up texture study, surface detail and grain" },
            { src: "/photography/20.jpg", alt: "Symmetry and order in a built structure" },
            { src: "/photography/21.jpg", alt: "Color mood, hue and atmosphere in context" },
            { src: "/photography/22.jpg", alt: "Rhythm of repeated elements across a frame" },
            { src: "/photography/23.jpg", alt: "Converging lines and depth in architectural space" },
            { src: "/photography/24.jpg", alt: "Natural and built, material meeting material" },
            { src: "/photography/25.jpg", alt: "Urban composition, scale, form, and stillness" },
            { src: "/photography/26.jpg", alt: "Architectural moment, angle, edge, and light" },
            { src: "/photography/29.jpg", alt: "Pattern study, grid, repetition, and surface" },
            { src: "/photography/30.jpg", alt: "Detail shot, object and environment in frame" },
          ],
        },
      ],
    },
  ],
};
