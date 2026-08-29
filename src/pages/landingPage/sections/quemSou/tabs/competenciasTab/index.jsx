import styles from "./competencias.module.css";
import { Heading } from "@/components/heading";

export const Competencias = () => {
  return (
    <div
      role="tabpanel"
      aria-labelledby="competencias-tab"
      className={styles.container}
    >
      <div className={styles.containerHabilidades}>
        <Heading as="h4" variant="sm">
          Habilidades que utilizo no dia a dia
        </Heading>
      </div>
      <div className={styles.containerDisponibilidades}>
        <Heading as="h4" variant="sm">
          Disponibilidade e contratos
        </Heading>
        <p>
          Disponível de segunda a sexta, nos períodos da manhã, tarde e
          parcialmente à noite, pronta para novos projetos com dedicação e
          compromisso.
        </p>
      </div>
    </div>
  );
};
