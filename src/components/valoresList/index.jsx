import { IoIosArrowDown } from "react-icons/io";
import { Popover } from "./popover";
import styles from "./valoresList.module.css";
import { valores } from "@/data/valores.js";

export function ValoresProfissionais() {
  return (
    <div className={styles.containerValores}>
      <ul
        className={styles.gridValores}
        aria-label="Lista de valores profissionais"
      >
        {valores.map((item) => {
          const popoverId = `popover-${item.id}`;
          const anchorName = `--anchor-${item.id}`;

          return (
            <li
              key={item.id}
              className={styles.itemValor}
              style={{ "anchor-name": anchorName }}
            >
              <button
                type="button"
                className={styles.btnValor}
                popoverTarget={popoverId}
                aria-haspopup="dialog"
              >
                <span>{item.titulo}</span>
                <IoIosArrowDown
                  className={styles.seta}
                  aria-hidden="true"
                  strokeWidth={8}
                  size={24}
                />
              </button>

              <Popover id={popoverId} anchorName={anchorName} item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
