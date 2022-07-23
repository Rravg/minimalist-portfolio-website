import SecondaryButton from "../../components/SecondaryButton";
import styles from "./styles/SectionTwo.module.css";

export default function SectionTwo(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageContainer}>
          <img src="" alt="Profile" className={styles.image} />
        </div>
        <div className={styles.boxContainer}>
          <h2 className="h2" style={{ marginBottom: "28px" }}>
            About Me
          </h2>
          <p
            className="body-1"
            style={{
              mixBlendMode: "normal",
              opacity: "0.8",
              textAlign: "left",
              marginBottom: "24px",
            }}
          >
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <SecondaryButton text="go to portfolio" />
        </div>
      </div>
    </section>
  );
}
