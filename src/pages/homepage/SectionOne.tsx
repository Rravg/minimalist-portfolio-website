import styles from "./styles/SectionOne.module.css";

import { useMediaQuery } from "react-responsive";

import PrimaryButton from "../../components/PrimaryButton";

import mobileImage from "../../images/homepage/mobile/image-homepage-hero.jpg";
import tabletImage from "../../images/homepage/tablet/image-homepage-hero.jpg";
import desktopImage from "../../images/homepage/desktop/image-homepage-hero.jpg";

export default function SectionOne(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const renderImage = () => {
    if (isMobile) {
      return <img src={mobileImage} alt="Project Screenshot" className={styles.image} />;
    } else if (isTablet) {
      return <img src={tabletImage} alt="Project Screenshot" className={styles.image} />;
    } else if (isDesktop) {
      return <img src={desktopImage} alt="Project Screenshot" className={styles.image} />;
    }
  };
  const image = renderImage();

  return (
    <section className={styles.section1}>
      <div className="container">
        <div className={styles.imageContainer}>{image}</div>
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
