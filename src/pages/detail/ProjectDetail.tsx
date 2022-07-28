import { useEffect } from "react";
import SecondaryButton from "../../components/SecondaryButton";
import Navigation from "./Navigation";
import styles from "./styles/ProjectDetail.module.css";

interface ProjectDetailProps {
  heroImages: string[];
  title: string;
  description: string;
  keywords: string[];
  technologies: string[];
  background: string;
  preview1: string[];
  preview2: string[];
  next: string;
  previous: string;
}

export default function ProjectDetail({
  heroImages,
  title,
  description,
  keywords,
  technologies,
  background,
  preview1,
  preview2,
  next,
  previous,
}: ProjectDetailProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styles.sectionOne}>
        <div className="container">
          <picture>
            <source srcSet={heroImages[2]} media="(min-width: 1440px)" />
            <source srcSet={heroImages[1]} media="(min-width: 768px)" />
            <img src={heroImages[0]} alt="hero screenshot" width="100%" />
          </picture>
        </div>
      </section>

      <section className={styles.sectionTwo}>
        <div className={`container ${styles.container}`}>
          {/* left container */}
          <div className={styles.blockContainer}>
            <h2 className={`h2 ${styles.title}`} style={{ textAlign: "start" }}>
              {title}
            </h2>
            <p
              className={`body-2 ${styles.description}`}
              style={{ textAlign: "start", opacity: "0.8" }}
            >
              {description}
            </p>
            <p className={styles.keywords}>
              {keywords.map((element, index) => {
                if (index === keywords.length - 1) {
                  return element;
                } else {
                  return `${element} / `;
                }
              })}
            </p>
            <p className={styles.words}>
              {technologies.map((element, index) => {
                if (index === technologies.length - 1) {
                  return element;
                } else {
                  return `${element} / `;
                }
              })}
            </p>
            <SecondaryButton text="visit website" href="#" />
          </div>

          {/* right container */}
          <div className={styles.backgroundContainer}>
            <h3 className={`h3 ${styles.bTitle}`}>Project Background</h3>
            <p className={`body-2 ${styles.background}`}>{background}</p>
            <h3 className={`h3 ${styles.staticTitle}`}>Static Previews</h3>
            {/* <div>{previews}</div> */}
            <picture>
              <source srcSet={preview1[2]} media="(min-width: 1440px)" />
              <source srcSet={preview1[1]} media="(min-width: 768px)" />
              <img
                src={preview1[0]}
                alt="hero screenshot"
                width="100%"
                style={{ marginBottom: "40px" }}
              />
            </picture>
            <picture>
              <source srcSet={preview2[2]} media="(min-width: 1440px)" />
              <source srcSet={preview2[1]} media="(min-width: 768px)" />
              <img src={preview2[0]} alt="hero screenshot" width="100%" />
            </picture>
          </div>
        </div>
      </section>
      <Navigation next={next} previous={previous} />
    </>
  );
}
