import { SectionHeader } from "@/components/sectionHeader";
import styles from "./quemSou.module.css";
import { sections } from "@/data/navThemes";

export const QuemSou = () => {
  return (
    <section id="quem-sou" className={styles.container}>
      <div className={styles.sectionVisual}>
        <SectionHeader title={sections[2].title} brand="yellow" />
        <div className={styles.sectionDecoration} />
      </div>

      <div className={styles.sectionContent}></div>
    </section>
  );
};
