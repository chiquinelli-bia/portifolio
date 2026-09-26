import styles from "./buttonTabs.module.css";
import { Heading } from "@/components/heading";

export const ButtonTab = ({ activeTab, aba, setActiveTab, label }) => {
  const isActive = activeTab === aba;

  return (
    <div className={styles.containerButton}>
      <button
        role="tab"
        className={`
          ${styles.buttonTabs}
          ${styles[`${aba}Button`]}
          ${isActive ? styles.buttonTabActive : ""}
        `}
        aria-selected={isActive}
        onClick={() => setActiveTab(aba)}
      >
        <Heading
          as="h3"
          variant="md"
          className={isActive ? styles.txtTabActive : ""}
        >
          {label}
        </Heading>
      </button>

      {isActive && (
        <div
          className={`${styles.tabsDivider} 
         
          ${styles[`${aba}TabsDivider`]}`}
        />
      )}
    </div>
  );
};
