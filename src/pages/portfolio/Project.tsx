import { useMediaQuery } from "react-responsive";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./styles/Project.module.css";

interface ProjectProps {
  title: string;
  description: string;
  screenshots: string[];
  param: string;
}

const Project = {
  Right: function RightProject({
    title,
    description,
    screenshots,
    param,
  }: ProjectProps): JSX.Element {
    return (
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <picture className={styles.imageContainer}>
            <source srcSet={screenshots[2]} media="(min-width: 1440px)" height="500" />
            <source srcSet={screenshots[1]} media="(min-width: 768px)" />
            <source />
            <img src={screenshots[0]} alt={`${title} project screenshot`} />
          </picture>
          <div className={styles.boxContainer}>
            <h2 className="h2" style={{ marginBottom: "24px" }}>
              {title}
            </h2>
            <p
              className={`body-1 ${styles.text}`}
              style={{
                mixBlendMode: "normal",
                opacity: "0.8",
                textAlign: "left",
              }}
            >
              {description}
            </p>
            <SecondaryButton text="view project" href={`/detail/${param}`} />
          </div>
        </div>
      </section>
    );
  },

  Left: function LeftProject({
    title,
    description,
    screenshots,
    param,
  }: ProjectProps): JSX.Element {
    return (
      <section className={styles.section}>
        <div className={`container ${styles.containerInverted}`}>
          <picture className={styles.imageContainerInverted}>
            <source srcSet={screenshots[2]} media="(min-width: 1440px)" height="500" />
            <source srcSet={screenshots[1]} media="(min-width: 768px)" />
            <source />
            <img src={screenshots[0]} alt={`${title} project screenshot`} />
          </picture>
          <div className={styles.boxContainerInverted}>
            <h2 className="h2" style={{ marginBottom: "24px" }}>
              {title}
            </h2>
            <p
              className={`body-1 ${styles.text}`}
              style={{
                mixBlendMode: "normal",
                opacity: "0.8",
                textAlign: "left",
              }}
            >
              {description}
            </p>
            <SecondaryButton text="view project" href={`/detail/${param}`} />
          </div>
        </div>
      </section>
    );
  },
};

export default Project;
