import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
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

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const renderHero = () => {
    if (isMobile) {
      return <img src={heroImages[0]} alt="hero" />;
    } else if (isTablet) {
      return <img src={heroImages[1]} alt="hero" />;
    } else if (isDesktop) {
      return <img src={heroImages[2]} alt="hero" />;
    }
  };
  const hero = renderHero();

  const renderPreviews = () => {
    if (isMobile) {
      return (
        <>
          <img src={preview1[0]} alt="hero" style={{ marginBottom: "40px" }} />
          <img src={preview2[0]} alt="hero" />
        </>
      );
    } else if (isTablet) {
      return (
        <>
          <img src={preview1[1]} alt="hero" style={{ marginBottom: "40px" }} />
          <img src={preview2[1]} alt="hero" />
        </>
      );
    } else if (isDesktop) {
      return (
        <>
          <img src={preview1[2]} alt="hero" style={{ marginBottom: "40px" }} />
          <img src={preview2[2]} alt="hero" />
        </>
      );
    }
  };
  const previews = renderPreviews();

  return (
    <>
      <section className={styles.sectionOne}>
        <div className="container">
          <div>{hero}</div>
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
            <div>{previews}</div>
          </div>
        </div>
      </section>
      <Navigation next={next} previous={previous} />
    </>
  );
}
