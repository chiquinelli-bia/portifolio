import styles from "./buttonTabs.module.css";

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
        <span className={isActive ? styles.txtTabActive : ""}>{label}</span>
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
