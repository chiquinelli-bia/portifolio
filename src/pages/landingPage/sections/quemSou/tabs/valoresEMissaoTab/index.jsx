import { ValoresProfissionais } from "@/components/valoresList";
import styles from "./valoresEMissao.module.css";
import { Heading } from "@/components/heading";

export const ValoresEMissao = () => {
  return (
    <div
      role="tabpanel"
      aria-labelledby="competencias-tab"
      className={styles.container}
    >
      <div>
        <Heading as="h4" variant="sm">
          Valores Profissional
        </Heading>
        <ValoresProfissionais />
      </div>
      <div className={styles.containerMissao}>
        <Heading as="h4" variant="sm">
          Missão profissional
        </Heading>
        <p>
          Desenvolver soluções web acessíveis, inclusivas e personalizadas, que
          transformam a experiência do usuário e impulsionam empresas que
          desejam deixar seu legado digital.
        </p>
      </div>
    </div>
  );
};
