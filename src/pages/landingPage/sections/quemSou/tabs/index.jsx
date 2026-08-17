import { useState } from "react";
import styles from "./tabs.module.css";
import { ButtonTab } from "./buttonTab";
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("competencias");

  return (
    <div
      role="tablist"
      aria-label="Informações profissionais"
      className={styles.tabs}
    >
      <ButtonTab
        activeTab={activeTab}
        aba="competencias"
        setActiveTab={setActiveTab}
        label="Competências"
      />
      <ButtonTab
        activeTab={activeTab}
        aba="valores"
        setActiveTab={setActiveTab}
        label="Valores e Missão"
      />
    </div>
  );
};
