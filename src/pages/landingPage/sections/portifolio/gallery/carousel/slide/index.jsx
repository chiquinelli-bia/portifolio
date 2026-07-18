import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";
import styles from "./slide.module.css";

export const ProjectSlide = ({ project }) => {
  const { currentImage } = useGalleryContext();

  return (
    <div className={styles.embla__slide}>
      <div className={styles.imageBorder}>
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className={styles.image}
        />
      </div>
    </div>
  );
};
