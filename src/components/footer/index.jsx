import { GoAlert } from "react-icons/go";
import styles from "./footer.module.css";
import { Button } from "../button";
import { Tag } from "../tag";
import { CopyrightIcon } from "../copyright";
import { Modal } from "../modal";
import { useState } from "react";
import { FormularioReport } from "../formsModais/formReport";
import { FormularioFeedback } from "../formsModais/formFeedback";

export const Footer = () => {
  const [modalReportOpen, setModalReportOpen] = useState(false);
  const [modalFeedbackOpen, setModalFeedbackOpen] = useState(false);
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
        <Button onClick={() => setModalFeedbackOpen(true)}>Avaliar</Button>
        <Tag
          className="secondary"
          aria-label="Reportar um erro no site"
          onClick={() => setModalReportOpen(true)}
        >
          Reportar Erro
          <GoAlert aria-hidden="true" role="img" size={24} />
        </Tag>
      </nav>

      <Modal
        open={modalReportOpen}
        onClose={() => setModalReportOpen(false)}
        title="Algo não funcionou como esperado?"
        description="Seu relato contribui para uma experiência melhor."
      >
        <FormularioReport />
      </Modal>
      <Modal
        open={modalFeedbackOpen}
        onClose={() => setModalFeedbackOpen(false)}
        title="Compartilhe sua experiência"
        description="Seu feedback contribui para aprimorar a qualidade, a clareza e a acessibilidade das soluções que desenvolvo."
        data="yellow"
      >
        <FormularioFeedback />
      </Modal>
    </footer>
  );
};
