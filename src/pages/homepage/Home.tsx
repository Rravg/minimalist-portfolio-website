import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import heroMobile from "../../images/homepage/mobile/image-homepage-hero.jpg";
import heroTablet from "../../images/homepage/tablet/image-homepage-hero.jpg";
import heroDesktop from "../../images/homepage/desktop/image-homepage-hero.jpg";

import styles from "./styles/Home.module.css";

import PrimaryButton from "../../components/PrimaryButton";

export default function Home(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Home";
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });
  return (
    <main>
      <section>
        <div className="container">
          <div>
            {isMobile && <img src={heroMobile} alt="" />}
            {isTablet && <img src={heroTablet} alt="" />}
            {isDesktop && <img src={heroDesktop} alt="" />}
          </div>
          <div>
            <h1 className={isDesktop ? "h1" : "h2"}>
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h1>
            <PrimaryButton text="about me" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <img src="" alt="Profile" />
          </div>
          <div>
            <h2>About Me</h2>
            <p>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
            <button>GO TO PORTFOLIO</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Interested in doing a project together?</h2>
        </div>
      </section>
    </main>
  );
}
