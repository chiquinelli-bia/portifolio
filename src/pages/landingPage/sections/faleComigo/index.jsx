import { SectionHeader } from "@/components/sectionHeader";
import styles from "./contato.module.css";
import { sections } from "@/data/navThemes";
import { FormularioContato } from "@/components/form";
import { SocialLinksCard } from "../../../../components/socialLinksCard";

export const FaleComigo = () => {
  return (
    <section id="contato" className={styles.container}>
      <div className={styles.containerForm}>
        <SectionHeader title={sections[3].title} />
        <FormularioContato />
      </div>
      <div className={styles.containerSocialCard}>
        <SocialLinksCard />
      </div>
    </section>
  );
};
