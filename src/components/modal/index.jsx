import { useEffect, useId, useRef } from "react";
import styles from "./modal.module.css";
import { Heading } from "../heading";
import { selo } from "../../assets";
import { IoClose } from "react-icons/io5";

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  data = "blue",
}) {
  const dialogRef = useRef(null);

  // Gera IDs únicos e estáveis para acessibilidade (a11y)
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      data-brand={data}
    >
      <div className={styles.modalBorder} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <img src={selo} className={styles.selo} alt="" />

          <header className={styles.modalHeader}>
            {title && (
              <Heading id={titleId} as="h5" variant="lg">
                {title}
              </Heading>
            )}
            {description && <p id={descriptionId}>{description}</p>}
          </header>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className={styles.closeModal}
          >
            <IoClose size={30} />
          </button>

          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </dialog>
  );
}
