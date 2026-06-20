import { ButtonLink } from "@/components/button/buttonLInk";
import Navigation from "./navigationList";
import styles from "./sidebar.module.css";
import { itensNav } from "./navItens";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { temas } from "./navThemes";

const temaAtual = temas.hero;

export const Menu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [position, setPosition] = useState({ top: 140, height: 60 });
  const refAccordian = useRef(null);
  const activeItemRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const calculatePosition = () => {
      if (!activeItemRef.current || !refAccordian.current) return;

      const itemRect = activeItemRef.current.getBoundingClientRect();
      const accordianRect = refAccordian.current.getBoundingClientRect();
      setPosition({
        top: itemRect.top - accordianRect.top,
        height: activeItemRef.current.offsetHeight,
      });
    };
    calculatePosition();
    const el = refAccordian.current;
    if (!el) return;

    el.addEventListener("transitionend", calculatePosition);
    return () => {
      el.removeEventListener("transitionend", calculatePosition);
    };
  }, [location.pathname, openSubmenu]);
  return (
    <header>
      <nav
        id={styles.accordian}
        data-theme={temaAtual.tema}
        style={{
          "--selector-active-bg": temaAtual.sectionBg,
        }}
        ref={refAccordian}
      >
        <ButtonLink
          data-menu-laco
          className={temaAtual.tema === "amarelo" ? "primary" : "secondary"}
        >
          Fale Comigo
        </ButtonLink>
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
        <Navigation
          itens={itensNav}
          activeItemRef={activeItemRef}
          openSubmenu={openSubmenu}
          setOpenSubmenu={setOpenSubmenu}
        />
      </nav>
    </header>
  );
};
