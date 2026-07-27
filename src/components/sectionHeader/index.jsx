import styles from "./sectionHeader.module.css";
import { Heading } from "@/components/heading";
import Ornament from "@/components/ornament";

export const SectionHeader = ({ title, brand = "blue" }) => {
  return (
    <>
      <Heading as="h2" variant="xl" className={styles.sectionHeading}>
        {title}
      </Heading>
      <Ornament brand={brand} />
    </>
  );
};
