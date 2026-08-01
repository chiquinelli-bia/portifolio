import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";
const NavigationList = ({
  itens,
  activeItemRef,
  openSubmenu,
  setOpenSubmenu,
}) => {
  const location = useLocation();

  return (
    <ul className={`${styles.showDropdown} ${styles.menu}`}>
      {itens.map((item) => {
        const Icon = item.icon;
        const isCurrentPage = location.hash === item.rota;
        const isActive = isCurrentPage || location.hash === item.subItem?.rota;
        const isOpen = openSubmenu === item.id || isActive;
        return (
          <li key={item.id} className={styles.menuItem}>
            <div
              className={styles.menuHeader}
              ref={isCurrentPage ? activeItemRef : null}
            >
              <HashLink
                to={item.rota}
                smooth={item.rota.startsWith("#")}
                className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
              >
                <Icon size={30} aria-hidden="true" />
                {item.texto}
              </HashLink>
              {item.subItem && (
                <button
                  aria-expanded={isOpen}
                  aria-controls={`submenu-${item.id}`}
                  onClick={() =>
                    setOpenSubmenu(openSubmenu === item.id ? null : item.id)
                  }
                >
                  <IoIosArrowDown size={17} aria-hidden="true" />
                </button>
              )}
            </div>
            {item.subItem && (
              <ul
                id={`submenu-${item.subItem.id}`}
                className={`${styles.subList} ${isOpen ? styles.open : ""}`}
              >
                {" "}
                <li className={styles.subItem}>
                  <HashLink
                    to={item.subItem.rota}
                    className={styles.menuLink}
                    smooth={item.subItem.rota.startsWith("#")}
                  >
                    {item.subItem.texto}
                  </HashLink>
                </li>
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationList;
