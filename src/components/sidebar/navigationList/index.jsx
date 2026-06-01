import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { IoIosArrowDown } from "react-icons/io";

const NavigationList = ({ itens }) => {
  return (
    <ul className={`${styles.showDropdown} ${styles.menu}`}>
      {itens.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.id} className={styles.menuItem}>
            <div className={styles.menuHeader}>
              <NavLink
                to={item.rota}
                className={`${styles.menuLink} ${({ isActive }) =>
                  isActive ? styles.active : ""}
              `}
              >
                <Icon size={30} />
                {/*  onClick={aoDeletar} */}
                {item.texto}
              </NavLink>
              {item.subItem && <IoIosArrowDown size={18} />}
            </div>
            {item.subItem && (
              <ul>
                <li key={item.subItem.id}>
                  <NavLink to={item.subItem.rota}>{item.subItem.texto}</NavLink>
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
