import { Carousel } from "./gallery/carousel";
import { Info } from "./gallery/projectInfo";
import styles from "./portifolio.module.css";
import { GalleryContextProvider } from "@/contexts/galleryContext/galleryContext";

export const Portifolio = () => {
  return (
    <section id="portifolio" className={styles.container}>
      <GalleryContextProvider>
        <Carousel />
        <Info />
      </GalleryContextProvider>
    </section>
  );
};
