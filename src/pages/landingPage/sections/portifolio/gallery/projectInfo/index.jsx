import { Heading } from "@/components/heading";
import { useGalleryContext } from "@/contexts/galleryContext/galleryContext";
import styles from "./projectInfo.module.css";

export const Info = () => {
  const { projects, currentIndex } = useGalleryContext();
  const currentProject = projects[currentIndex];

  return (
    <div className={styles.container}>
      <Heading as="h3" variant="lg" className={styles.projectTitle}>
        {currentProject.title}
      </Heading>
      <div className={styles.projectContent}>
        <span className={styles.divider} />
        <div className={styles.content}>
          <p>{currentProject.description}</p>
          <Heading as="h4" variant="md">
            Funcionalidades
          </Heading>
          <ul className={styles.featureList}>
            {currentProject.features.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
          <Heading as="h4" variant="md">
            Desafio & Conquista
          </Heading>
          <ul className={styles.highlightList}>
            {currentProject.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
          <Heading as="h4" variant="md">
            Tecnologias Utilizadas
          </Heading>
          <ul className={styles.technologiesList}>
            {currentProject.technologies.map((Tech, index) => (
              <li key={index}>
                {" "}
                <Tech />{" "}
              </li>
            ))}
          </ul>
          <div className={styles.containerButton}></div>
        </div>
      </div>
    </div>
  );
};
