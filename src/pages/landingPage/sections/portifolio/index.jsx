import { Gallery } from "./gallery";
import styles from "./portifolio.module.css";
import { GalleryContextProvider } from "@/contexts/galleryContext/galleryContext";

export const Portifolio = () => {
  return (
    <section className={styles.container}>
      <GalleryContextProvider>
        <Gallery />
      </GalleryContextProvider>
    </section>
  );
};
