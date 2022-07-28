import styles from "./styles/Portfolio.module.css";
import { useEffect } from "react";
import SectionThree from "../homepage/SectionThree";
import Project from "./Project";

import manageMobil from "../../images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import manageTablet from "../../images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import manageDesktop from "../../images/portfolio/desktop/image-portfolio-manage@2x.jpg";

import bookmarkMobil from "../../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import bookmarkTablet from "../../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import bookmarkDesktop from "../../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

import insureMobil from "../../images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import insureTablet from "../../images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import insureDesktop from "../../images/portfolio/desktop/image-portfolio-insure@2x.jpg";

import fyloMobil from "../../images/portfolio/mobile/image-portfolio-fylo@2x.jpg";
import fyloTablet from "../../images/portfolio/tablet/image-portfolio-fylo@2x.jpg";
import fyloDesktop from "../../images/portfolio/desktop/image-portfolio-fylo@2x.jpg";

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | My Projects";
    window.scrollTo(0, 0);
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
        param="manage"
      />
      <Project.Left
        title="Bookmark"
        description="
        This project required me to build a fully responsive landing page to the designs provided.
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
        such as the features section."
        screenshots={[bookmarkMobil, bookmarkTablet, bookmarkDesktop]}
        param="bookmark"
      />
      <Project.Right
        title="Insure"
        description="
        This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page.
        The only JavaScript this project required was to enable the toggling of the mobile navigation.
      "
        screenshots={[insureMobil, insureTablet, insureDesktop]}
        param="insure"
      />
      <Project.Left
        title="Fylo"
        description="
        This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive.
         I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        screenshots={[fyloMobil, fyloTablet, fyloDesktop]}
        param="fylo"
      />
      <SectionThree />
    </main>
  );
}
