import styles from "./styles/GetInTouch.module.css";

import github from "../../images/icons/github.svg";
import twitter from "../../images/icons/twitter.svg";
import linkedin from "../../images/icons/linkedin.svg";
import { useMediaQuery } from "react-responsive";

export default function GetInTouch(): JSX.Element {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrapper}>
          <h2 className={`h2 ${styles.title}`}>Get in Touch</h2>
          <div className={styles.bodyContainer}>
            <p
              className={
                isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`
              }
            >
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a{" "}
              <br className={styles.break}></br> hard-working and positive
              person who will always approach each task with a sense of purpose
              and attention to detail. Please do feel free to check out my
              online profiles below and get in touch using the form.
            </p>
            <div className={styles.iconContainer}>
              <img src={github} alt="github" className={styles.icon} />
              <img src={twitter} alt="twitter" className={styles.icon} />
              <img src={linkedin} alt="linkedin" className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
