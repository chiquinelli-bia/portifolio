import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import styles from "./button.module.css";

export const CarouselButton = ({ direction, onClick, disabled = false }) => {
  const isLeft = direction === "left";
  return (
    <button
      className={styles.carouselButton}
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={isLeft ? "Projeto anterior" : "Próximo projeto"}
    >
      {isLeft ? (
        <VscChevronLeft className={styles.icon} aria-hidden="true" />
      ) : (
        <VscChevronRight className={styles.icon} aria-hidden="true" />
      )}
    </button>
  );
};
