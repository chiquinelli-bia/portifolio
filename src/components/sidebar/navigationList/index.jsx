import { NavLink, useLocation } from "react-router-dom";
import styles from "./navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";
const NavigationList = ({ itens, activeItemRef, openSubmenu }) => {
  const location = useLocation();

  return (
    <ul className={`${styles.showDropdown} ${styles.menu}`}>
      {itens.map((item) => {
        const Icon = item.icon;
        const isCurrentPage = location.pathname === item.rota;
        const isActive =
          isCurrentPage || location.pathname === item.subItem?.rota;
        const isOpen = openSubmenu === item.id || isActive;
        return (
          <li key={item.id} className={styles.menuItem}>
            <div
              className={styles.menuHeader}
              ref={isCurrentPage ? activeItemRef : null}
            >
              <NavLink
                to={item.rota}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ""}`
                }
              >
                <Icon size={30} aria-hidden="true" />
                {item.texto}
              </NavLink>
              {item.subItem && (
                <button
                  aria-expanded={isOpen}
                  aria-controls={`submenu-${item.id}`}
                  onClick=""
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
                  <NavLink to={item.subItem.rota} className={styles.menuLink}>
                    {item.subItem.texto}
                  </NavLink>
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
