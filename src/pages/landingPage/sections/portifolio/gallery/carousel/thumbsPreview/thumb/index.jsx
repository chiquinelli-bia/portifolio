import styles from "../thumbs.module.css";
export const Thumb = ({ onClick, projeto }) => {
  return (
    <button
      onClick={onClick}
      aria-label={`Ir para o projeto ${projeto.title}`}
      className={styles.thumb}
    >
      <img src={projeto.images.cover} alt="" loading="lazy" />
    </button>
  );
};
