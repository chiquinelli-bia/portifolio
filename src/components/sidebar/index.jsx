import { ButtonLink } from "@/components/button/buttonLInk";
import Navigation from "./navigationList";
import styles from "./sidebar.module.css";
import { itensNav } from "./navItens";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const refAccordian = useRef(null);
  const refLink = useRef(null);
  const location = useLocation();
  const [position, setPosition] = useState({ top: 135, height: 55 });
  useEffect(() => {
    if (!refLink.current || !refAccordian.current) return;
    const itemRect = refLink.current.getBoundingClientRect();
    const accordianRect = refAccordian.current.getBoundingClientRect();
    const top = itemRect.top - accordianRect.top;
    const height = refLink.current.offsetHeight;
    setPosition({ top, height });
  }, [location.pathname]);
  return (
    <header>
      <nav id={styles.accordian} data-theme="azul" ref={refAccordian}>
        <ButtonLink className="secondary">Fale Comigo</ButtonLink>
        <div
          className={styles.selectorActive}
          style={{
            top: `${position.top}px`,
            height: `${position.height}px`,
          }}
        >
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
        <Navigation itens={itensNav} refLink={refLink} />
      </nav>
    </header>
  );
};
