import { SectionHeader } from "@/components/sectionHeader";
import styles from "./contato.module.css";
import { sections } from "@/data/navThemes";

export const FaleComigo = () => {
  return (
    <section id="contato" className={styles.container}>
      <div className={styles.containerCarousel}>
        <SectionHeader title={sections[3].title} />
      </div>
    </section>
  );
};
