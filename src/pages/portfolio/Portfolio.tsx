import styles from "./styles/Portfolio.module.css";
import { useEffect } from "react";
import SectionThree from "../homepage/SectionThree";
import Project from "./Project";

import manageMobil from "../../images/portfolio/mobile/image-portfolio-manage.jpg";
import manageTablet from "../../images/portfolio/tablet/image-portfolio-manage.jpg";
import manageDesktop from "../../images/portfolio/desktop/image-portfolio-manage.jpg";

import bookmarkMobil from "../../images/portfolio/mobile/image-portfolio-bookmark.jpg";
import bookmarkTablet from "../../images/portfolio/tablet/image-portfolio-bookmark.jpg";
import bookmarkDesktop from "../../images/portfolio/desktop/image-portfolio-bookmark.jpg";

import insureMobil from "../../images/portfolio/mobile/image-portfolio-insure.jpg";
import insureTablet from "../../images/portfolio/tablet/image-portfolio-insure.jpg";
import insureDesktop from "../../images/portfolio/desktop/image-portfolio-insure.jpg";

import fyloMobil from "../../images/portfolio/mobile/image-portfolio-fylo.jpg";
import fyloTablet from "../../images/portfolio/tablet/image-portfolio-fylo.jpg";
import fyloDesktop from "../../images/portfolio/desktop/image-portfolio-fylo.jpg";

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | My Projects";
  }, []);
  return (
    <main className={styles.main}>
      <Project.Right
        title="Manage"
        description="
      This project required me to build a fully responsive landing page to the designs provided. 
      I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
      such as the testimonial slider.
      "
        screenshots={[manageMobil, manageTablet, manageDesktop]}
      />
      <Project.Left
        title="Bookmark"
        description="
        This project required me to build a fully responsive landing page to the designs provided.
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
        such as the features section."
        screenshots={[bookmarkMobil, bookmarkTablet, bookmarkDesktop]}
      />
      <Project.Right
        title="Insure"
        description="
        This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page.
        The only JavaScript this project required was to enable the toggling of the mobile navigation.
      "
        screenshots={[insureMobil, insureTablet, insureDesktop]}
      />
      <Project.Left
        title="Fylo"
        description="
        This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive.
         I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        screenshots={[fyloMobil, fyloTablet, fyloDesktop]}
      />
      <SectionThree />
    </main>
  );
}
