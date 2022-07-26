import styles from "./styles/SectionOne.module.css";

import { useMediaQuery } from "react-responsive";

import PrimaryButton from "../../components/PrimaryButton";

export default function SectionOne(): JSX.Element {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.imageContainer}>
          <img alt="" className={styles.image} />
        </div>
        <div className={styles.boxContainer}>
          <h1 className={isDesktop ? `h1 ${styles.text}` : `h2 ${styles.text}`}>
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <PrimaryButton text="about me" href="/#about-me" />
        </div>
      </div>
    </section>
  );
}
