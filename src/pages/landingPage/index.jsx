import styles from "./landingPage.module.css";
import { FaleComigo } from "./sections/faleComigo";
import { Portifolio } from "./sections/portifolio";
import { Inicio } from "./sections/inicio";
import { QuemSou } from "./sections/quemSou";

export const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Inicio />
      <Portifolio />
      <QuemSou />
      <FaleComigo />
    </div>
  );
};
