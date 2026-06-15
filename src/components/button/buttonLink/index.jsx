import { Link } from "react-router-dom";
import styles from "../buttons.module.css";

export const ButtonLink = ({
  className = "primary",
  path,
  children,
  ...props
}) => {
  return (
    <Link
      className={`${styles.button} ${styles[className]}`}
      to={path}
      {...props}
    >
      {children}
    </Link>
  );
};
