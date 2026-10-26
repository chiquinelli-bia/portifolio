import styles from "./tags.module.css";

export const Tag = ({
  className = "primary",
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.tag} ${styles[className]}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
