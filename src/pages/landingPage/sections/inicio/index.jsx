import { Paragraph } from "@/components/body";
import { ButtonLink } from "@/components/button/buttonLink";
import styles from "./inicio.module.css";
import { Heading } from "@/components/heading";
import { minhaFoto } from "@/assets/index";

export const Inicio = () => {
  return (
    <section id="inicio" className={styles.container}>
      <div className={styles.conteudoWrapper}>
        <Heading>
          Olá! eu sou
          <span className={styles.textoDestaque}> Bianca Chiquinelli.</span>
        </Heading>
        <Paragraph>
          Desenvolvedora front-end focada em criar interfaces{" "}
          <span className={styles.textoDestaque}>
            acessíveis, intuitivas e personalizadas,{" "}
          </span>
          que transformam ideias em experiências digitais eficientes.
        </Paragraph>
        <div className={styles.acoesWrapper}>
          <ButtonLink>Vamos Conversar</ButtonLink>
          <ButtonLink className="outline">Explorar Projetos</ButtonLink>
        </div>
      </div>
      <figure className={styles.fotoWrapper}>
        <img
          src={minhaFoto}
          alt="Retrato de Bianca Chiquinelli"
          className={styles.fotoPerfil}
          loading="eager"
          decoding="async"
        />
      </figure>
    </section>
  );
};
