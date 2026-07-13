import styles from "./thumbsPreview.module.css";
import { Thumb } from "./thumb";
import { useCallback } from "react";
import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";

export const ThumbsPreview = ({ projects, emblaApi }) => {
  const { currentIndex } = useGalleryContext();

  const totalProjects = projects.length;
  const previousIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (currentIndex + 1) % totalProjects;
  const previousProject = projects[previousIndex];
  const nextProject = projects[nextIndex];

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

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
