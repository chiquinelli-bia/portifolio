import styles from "./thumbs.module.css";
export const Thumb = ({ onClick, projeto }) => {
  return (
    <button onClick={onClick} aria-label={`Ir para o projeto ${projeto.title}`}>
      <img
        src={projeto.images[0]}
        alt=""
        loading="lazy"
        className={styles.thumb}
      />
    </button>
  );
};
