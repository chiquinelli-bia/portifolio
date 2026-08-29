import style from "./badgeProgress.module.css";
import BadgeSvg from "@/assets/badge.svg?react";
import { ProgressBar } from "./progressBar";

export const BadgeProgress = ({ technology }) => {
  const Icon = technology.icon;

  return (
    <div className={style.container}>
      <div className={style.badge}>
        <BadgeSvg className={style.badgeBackground} />

        <Icon
          className={style.technology}
          width={166}
          height={164}
          aria-hidden="true"
        />
      </div>

      <ProgressBar percentage={technology.percentage} />
    </div>
  );
};
