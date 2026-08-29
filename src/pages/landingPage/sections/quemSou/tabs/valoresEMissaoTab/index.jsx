import styles from "./valoresEMissao.module.css";
import { Heading } from "@/components/heading";

export const ValoresEMissao = () => {
  return (
    <div
      role="tabpanel"
      aria-labelledby="competencias-tab"
      className={styles.container}
    >
      <div className={styles.containerValores}>
        <Heading as="h4" variant="sm">
          Valores Profissional
        </Heading>
      </div>
      <div className={styles.containerMissao}>
        <Heading as="h4" variant="sm">
          Missão profissional
        </Heading>
      </div>
    </div>
  );
};
