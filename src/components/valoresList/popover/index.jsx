import { BannerPonta } from "./bannerPonta";
import styles from "./popover.module.css";

export const Popover = ({ anchorName, id, item }) => {
  if (!item?.titulo && !item?.descricao) return null;

  return (
    <div
      id={id}
      popover="auto"
      className={styles.popoverBanner}
      style={{
        positionAnchor: anchorName,
      }}
    >
      <div className={styles.wrapperContent}>
        <BannerPonta style={{ transform: "scaleX(-1)" }} />

        <div className={styles.conteudoBanner}>
          <p className={styles.textoBanner}>
            {item?.titulo && <strong>{item.titulo}: </strong>}
            {item?.descricao}
          </p>
        </div>

        <BannerPonta />
      </div>
    </div>
  );
};
