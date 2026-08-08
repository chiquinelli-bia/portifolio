import { SectionHeader } from "@/components/sectionHeader";
import styles from "./quemSou.module.css";
import { sections } from "@/data/navThemes";
import { Heading } from "@/components/heading";

export const QuemSou = () => {
  return (
    <section id="quem-sou" className={styles.container}>
      <div className={styles.sectionVisual}>
        <SectionHeader title={sections[2].title} brand="yellow" />
        <div className={styles.sectionDecoration} />
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.introduction}>
          <Heading as="h3" variant="lg">
            Prólogo Pessoal
          </Heading>
          <p>
            Desde 2022, construo minha trajetória movida pela{" "}
            <span className={styles.textoDestaque}>
              curiosidade e pelo fascínio pela área.
            </span>{" "}
            Aprofundo conhecimentos para entregar com qualidade e precisão, vejo
            cada desafio como uma oportunidade de explorar novos caminhos e
            criar resultados{" "}
            <span className={styles.textoDestaque}>
              eficientes, inovadores e com propósito.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
