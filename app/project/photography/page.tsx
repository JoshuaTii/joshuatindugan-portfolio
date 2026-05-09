import { PhotoHero } from "./sections/PhotoHero";
import { GalleryIntro } from "./sections/GalleryIntro";
import { PhotoGallery } from "./sections/PhotoGallery";

export const metadata = {
  title: "Photography — Visual Archive | Joshua Tindugan",
  description:
    "A visual archive of architecture, patterns, color, composition, and the quiet moments that often go unnoticed. Shot on Canon EOS R50.",
};

export default function PhotographyPage() {
  return (
    <main style={{ backgroundColor: "#09090b" }}>
      <PhotoHero />
      <GalleryIntro />
      <PhotoGallery />
    </main>
  );
}
