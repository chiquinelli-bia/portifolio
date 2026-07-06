import styles from "./slide.module.css";

export const ProjectSlide = ({ project }) => {
  return (
    <div className={styles.embla__slide}>
      <div className={styles.imageBorder}>
        <img src={project.images.cover} alt={project.title} />
      </div>
    </div>
  );
};
