import SecondaryButton from "../../components/SecondaryButton";
import styles from "./styles/SectionThree.module.css";

export default function SectionThree(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={`h2 ${styles.text}`}>
          Interested in doing a project together?
        </h2>
        <div className={styles.line}></div>
        <div className={styles.button}>
          <SecondaryButton text="contact me" href="/contact"/>
        </div>
      </div>
    </section>
  );
}
