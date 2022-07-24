import { useMediaQuery } from "react-responsive";
import SecondaryButton from "../../components/SecondaryButton";
import styles from "./styles/Project.module.css";

interface ProjectProps {
  title: string;
  description: string;
  screenshots: string[];
}

const Project = {
  Right: function RightProject({
    title,
    description,
    screenshots,
  }: ProjectProps): JSX.Element {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({
      query: "(min-width: 768px) and (max-width: 1439px)",
    });
    const isDesktop = useMediaQuery({
      query: "(min-width: 1440px)",
    });

    const renderImage = () => {
      if (isMobile) {
        return (
          <img
            src={screenshots[0]}
            alt="Project Screenshot"
            className={styles.image}
          />
        );
      } else if (isTablet) {
        return (
          <img
            src={screenshots[1]}
            alt="Project Screenshot"
            className={styles.image}
          />
        );
      } else if (isDesktop) {
        return (
          <img
            src={screenshots[2]}
            alt="Project Screenshot"
            className={styles.image}
          />
        );
      }
    };

    return (
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <div className={styles.imageContainer}>{renderImage()}</div>
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
            <SecondaryButton text="view project" href="/portfolio" />
          </div>
        </div>
      </section>
    );
  },

  Left: function LeftProject({
    title,
    description,
    screenshots,
  }: ProjectProps): JSX.Element {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({
      query: "(min-width: 768px) and (max-width: 1439px)",
    });
    const isDesktop = useMediaQuery({
      query: "(min-width: 1440px)",
    });

    const renderImage = () => {
      if (isMobile) {
        return (
          <img
            src={screenshots[0]}
            alt="Project Screenshot"
            className={styles.image}
          />
        );
      } else if (isTablet) {
        return (
          <img
            src={screenshots[1]}
            alt="Project Screenshot"
            className={styles.image}
          />
        );
      } else if (isDesktop) {
        return (
          <img
            src={screenshots[2]}
            alt="Project Screenshot"
            className={styles.image}
          />
        );
      }
    };

    return (
      <section className={styles.section}>
        <div className={`container ${styles.containerInverted}`}>
          <div className={styles.imageContainerInverted}>{renderImage()}</div>
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
            <SecondaryButton text="view project" href="/portfolio" />
          </div>
        </div>
      </section>
    );
  },
};

export default Project;
