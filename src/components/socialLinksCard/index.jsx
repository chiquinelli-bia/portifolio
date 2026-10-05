import {
  TbMailForward,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { ImLinkedin2 } from "react-icons/im";
import styles from "./socialLinksCard.module.css";

const SOCIAL_LINKS = [
  {
    id: "whatsapp",
    label: "Whatsapp",
    url: "https://wa.me/5511984524918",
    icon: TbBrandWhatsapp,
  },
  {
    id: "email",
    label: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=bchiquinelli24@gmail.com&su=Oportunidade%20Front-end%20%7C%20Contato%20via%20Portf%C3%B3lio&body=Ol%C3%A1%2C%20Bianca%2C%20como%20vai%3F%0A%0AAcompanhei%20o%20seu%20trabalho.%0A%0AGostaria%20de%20conectar%20sobre%20uma%20oportunidade%20na%20nossa%20equipe%3A%0A%0A-%20Empresa%20%2F%20Startup%3A%0A-%20Modelo%20da%20oportunidade%20(Est%C3%A1gio%20%2F%20PJ%20%2F%20CLT)%3A%0A-%20Principais%20tecnologias%20da%20vaga%3A%0A%0APodemos%20agendar%20um%20bate-papo%20r%C3%A1pido%20esta%20semana%20para%20nos%20conhecermos%20melhor%3F%0A%0AUm%20abra%C3%A7o%2C%0A%5BSeu%20Nome%20%2F%20Cargo%5D",
    icon: TbMailForward,
  },
  {
    id: "github",
    label: "Github",
    url: "https://github.com/chiquinelli-bia",
    icon: TbBrandGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/bianca-chiquinelli-186004253/",
    icon: ImLinkedin2,
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/chiquinelli.dev",
    icon: TbBrandInstagram,
  },
];

export const SocialLinksCard = () => {
  return (
    <div className={styles.contactCard}>
      <aside className={styles.contentCard} aria-labelledby="contact-title">
        <h3 id="contact-title" className={`${styles.contactTitle} heading-md`}>
          Entre em Contato
        </h3>

        <ul className={styles.contactList}>
          {SOCIAL_LINKS.map(({ id, label, url, icon: Icon }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Icon aria-hidden="true" />
                <span className={styles.contactText}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
