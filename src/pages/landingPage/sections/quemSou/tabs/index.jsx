import { useState } from "react";
import styles from "./tabs.module.css";
import { ButtonTab } from "./buttonTab";
import { Competencias } from "./competenciasTab";
import { ValoresEMissao } from "./valoresEMissaoTab";
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("competencias");

  return (
    <div
      role="tablist"
      aria-label="Informações profissionais"
      className={styles.tabs}
    >
      <div className={styles.containerTabs}>
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
      <div className={styles.containerTabPanels}>
        {activeTab === "competencias" && <Competencias />}

        {activeTab === "valores" && <ValoresEMissao />}
      </div>
    </div>
  );
};
