import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { itensNav } from "../data/navItens";

export function useActiveSection() {
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const parentItem = itensNav.find(
    (item) => item.subItem && pathname.startsWith(item.subItem.rota),
  );

  useEffect(() => {
    // Se estamos numa subpágina, não precisa observar scroll
    if (parentItem) return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname, parentItem]);

  return parentItem ? parentItem.id : activeSection;
}
