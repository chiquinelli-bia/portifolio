import { ButtonLink } from "@/components/button/buttonLInk";
import Navigation from "./navigationList";
import styles from "./sidebar.module.css";
import { itensNav } from "./navItens";

export const Menu = () => {
  return (
    <header>
      <nav id={styles.accordian} data-theme="azul">
        <ButtonLink className="secondary">Fale Comigo</ButtonLink>
        {/* <div className={styles.selectorActive}>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div> */}
        <Navigation itens={itensNav} />
      </nav>
    </header>
  );
};
