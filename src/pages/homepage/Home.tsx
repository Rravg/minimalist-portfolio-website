import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// import heroMobile from "../../images/homepage/mobile/image-homepage-hero.jpg";
// import heroTablet from "../../images/homepage/tablet/image-homepage-hero.jpg";
// import heroDesktop from "../../images/homepage/desktop/image-homepage-hero.jpg";

// import styles from "./styles/Home.module.css";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

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
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
