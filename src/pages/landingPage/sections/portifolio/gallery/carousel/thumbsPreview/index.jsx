import styles from "./thumbsPreview.module.css";
import { Thumb } from "./thumb";
import { useCallback, useEffect } from "react";
import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";

export const ThumbsPreview = ({ projects, emblaApi }) => {
  const { currentIndex, setCurrentImage, currentImage } = useGalleryContext();

  const totalImages = projects[currentIndex].images.length;
  const previousIndex = (currentIndex - 1 + totalImages) % totalImages;
  const nextIndex = (currentIndex + 1) % totalImages;
  const previousProject = projects[previousIndex];
  const nextProject = projects[nextIndex];

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, 3500);

    return () => clearInterval(interval);
  }, [setCurrentImage, totalImages, currentImage]);

  return (
    <div className={styles.thumbsContainer}>
      <Thumb
        onClick={() => onThumbClick(previousIndex)}
        projeto={previousProject}
      />
      <Thumb onClick={() => onThumbClick(nextIndex)} projeto={nextProject} />
    </div>
  );
};
