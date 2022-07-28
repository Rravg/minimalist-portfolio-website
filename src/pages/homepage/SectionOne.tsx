import styles from "./styles/SectionOne.module.css";

import { useMediaQuery } from "react-responsive";

import PrimaryButton from "../../components/PrimaryButton";

// import mobileImage from "../../images/homepage/mobile/image-homepage-hero.jpg";
// import tabletImage from "../../images/homepage/tablet/image-homepage-hero.jpg";
// import desktopImage from "../../images/homepage/desktop/image-homepage-hero.jpg";

import mobileImage2x from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import tabletImage2x from "../../images/homepage/tablet/image-homepage-hero@2x.jpg";
import desktopImage2x from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";

export default function SectionOne(): JSX.Element {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <section className={styles.section1}>
      <div className="container">
        {/* <div className={styles.imageContainer}>{image}</div> */}
        <picture className={styles.picture}>
          <source srcSet={desktopImage2x} media="(min-width: 1440px)" />
          <source srcSet={tabletImage2x} media="(min-width: 768px)" />
          <img src={mobileImage2x} alt="Project Screenshot" width="100%"/>
        </picture>
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
