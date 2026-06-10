import { NavLink, useLocation } from "react-router-dom";
import styles from "./navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";
const NavigationList = ({ itens, refLink }) => {
  const location = useLocation();
  return (
    <ul className={`${styles.showDropdown} ${styles.menu}`}>
      {itens.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.id}
            className={styles.menuItem}
            data-theme="azul"
            ref={location.pathname === item.rota ? refLink : null}
          >
            <div className={styles.menuHeader}>
              <NavLink
                to={item.rota}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ""}`
                }
              >
                <Icon size={30} />
                {/*  onClick={} */}
                {item.texto}
              </NavLink>
              {item.subItem && <IoIosArrowDown size={18} />}
            </div>
            {item.subItem && (
              <ul className={styles.subList}>
                <li
                  key={item.subItem.id}
                  className={styles.subItem}
                  data-theme="azul"
                >
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
