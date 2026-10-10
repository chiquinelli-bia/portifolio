import { Link, useLocation } from "react-router-dom";
import styles from "../buttons.module.css";

export const ButtonLink = ({
  className = "primary",
  path = "",
  children,
  onClick,
  ...props
}) => {
  const location = useLocation();
  const isHashLink = path.includes("#");
  const handleClick = (e) => {
    if (onClick) onClick(e);

    if (isHashLink) {
      const [targetPage, hash] = path.split("#");

      const isHomePage = location.pathname === "/" || location.pathname === "";

      if (isHomePage) {
        e.preventDefault();
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };
  return (
    <Link
      className={`${styles.button} ${styles[className]}`}
      to={path}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};
