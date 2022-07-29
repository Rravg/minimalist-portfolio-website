import styles from "./styles/SectionTwo.module.css";
import SecondaryButton from "../../components/SecondaryButton";

import mobileProfile from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import tabletProfile from "../../images/homepage/tablet/image-homepage-profile@2x.jpg";
import desktopProfile from "../../images/homepage/desktop/image-homepage-profile@2x.jpg";

export default function SectionTwo(): JSX.Element {
  return (
    <section className={styles.section} id="about-me">
      <div className={`container ${styles.container}`}>
        <picture className={styles.imageContainer}>
          <source srcSet={desktopProfile} media="(min-width: 1440px)" />
          <source srcSet={tabletProfile} media="(min-width: 768px)" />
          <img src={mobileProfile} alt="profile" className={styles.image} width="100%" />
        </picture>
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
            I’m a junior front-end developer looking for a new role in an exciting company. I focus
            on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
            When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely and have experience in
            remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
            whether that’s going for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <SecondaryButton text="go to portfolio" href="/portfolio" />
        </div>
      </div>
    </section>
  );
}
