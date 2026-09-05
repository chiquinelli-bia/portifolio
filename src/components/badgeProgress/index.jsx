import styles from "./badgeProgress.module.css";
import BadgeSvg from "@/assets/badge.svg?react";
import { ProgressBar } from "./progressBar";

export const BadgeProgress = ({ technology }) => {
  // Tratamento defensivo caso technology ou icon venham indefinidos
  const Icon = technology?.icon;
  const name = technology?.name || "Tecnologia";
  const percentage = technology?.percentage ?? 0;

  return (
    <div
      className={styles.container}
      // Garante que leitores de tela identifiquem qual tecnologia este progresso representa
      aria-label={`${name}: ${percentage}% de progresso`}
    >
      <div className={styles.badge}>
        <BadgeSvg className={styles.badgeBackground} aria-hidden="true" />

        {Icon && <Icon className={styles.technology} aria-hidden="true" />}
      </div>

      <ProgressBar percentage={percentage} />
    </div>
  );
};
