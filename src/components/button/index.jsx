import styles from "./buttons.module.css";

export const Button = ({
  className = "primary",
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[className]}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
