import { GoAlert } from "react-icons/go";
import styles from "./footer.module.css";
import { Button } from "../button";
import { Tag } from "../tag";
import { CopyrightIcon } from "../copyright";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerCopyright}>
        <CopyrightIcon color="#4c7bae" />
        <p>
          Entre paixão e propósito{" "}
          <small>
            <strong>Bianca Chiquinelli - 2025</strong>
          </small>
        </p>
      </div>

      <p className={styles.greeting}>
        Obrigado por visitar, é um prazer compartilhar meu trabalho.
      </p>

      <nav aria-label="Ações do rodapé" className={styles.containerActions}>
        <Button>Avaliar</Button>
        <Tag className="secondary" aria-label="Reportar um erro no site">
          Reportar Erro
          <GoAlert aria-hidden="true" role="img" size={24} />
        </Tag>
      </nav>
    </footer>
  );
};
