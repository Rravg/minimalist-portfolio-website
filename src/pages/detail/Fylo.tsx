import ProjectDetail from "./ProjectDetail";

import heroMobile from "../../images/detail/mobile/image-fylo-hero@2x.jpg";
import heroTablet from "../../images/detail/tablet/image-fylo-hero@2x.jpg";
import heroDesktop from "../../images/detail/desktop/image-fylo-hero@2x.jpg";

import previewMobile1 from "../../images/detail/mobile/image-fylo-preview-1@2x.jpg";
import previewTablet1 from "../../images/detail/tablet/image-fylo-preview-1@2x.jpg";
import previewDesktop1 from "../../images/detail/desktop/image-fylo-preview-1@2x.jpg";

import previewMobile2 from "../../images/detail/mobile/image-fylo-preview-2@2x.jpg";
import previewTablet2 from "../../images/detail/tablet/image-fylo-preview-2@2x.jpg";
import previewDesktop2 from "../../images/detail/desktop/image-fylo-preview-2@2x.jpg";

export default function Fylo(): JSX.Element {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="Fylo"
      description="
        This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page.
        The only JavaScript this project required was to enable the toggling of the mobile navigation."
      keywords={["Interaction Design", "Front End Development"]}
      technologies={["HTML", "CSS"]}
      background="
        This project was a front-end  challenge from Frontend Mentor. 
        It’s a platform that enables you to practice building websites to a design and project brief. 
        Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. 
        Creating these projects has helped me refine my workflow and solve real-world coding problems.
        I’ve learned something new with each project, helping me to improve and adapt my style."
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next="manage"
      previous="insure"
    />
  );
}
