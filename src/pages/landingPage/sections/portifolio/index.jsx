import { SectionHeader } from "@/components/sectionHeader";
import { Carousel } from "./gallery/carousel";
import { Info } from "./gallery/projectInfo";
import styles from "./portifolio.module.css";
import { GalleryContextProvider } from "@/contexts/galleryContext/galleryContext";
import { sections } from "@/data/navThemes";

export const Portifolio = () => {
  return (
    <section id="portifolio" className={styles.container}>
      <GalleryContextProvider>
        <div className={styles.containerCarousel}>
          <SectionHeader title={sections[1].title} />
          <Carousel />
        </div>
        <Info />
      </GalleryContextProvider>
    </section>
  );
};
