import styles from "./sectionHeader.module.css";
import { Heading } from "@/components/heading";
import Ornament from "@/components/ornament";

export const SectionHeader = ({ title, brand = "blue" }) => {
  return (
    <div className={styles.container}>
      <Heading as="h2" variant="xl" data-brand={brand}>
        {title}
      </Heading>
      <Ornament brand={brand} />
    </div>
  );
};
