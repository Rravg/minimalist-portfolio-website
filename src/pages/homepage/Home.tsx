import { useEffect } from "react";

// import styles from "./styles/Home.module.css";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function Home(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Home";
  }, []);

  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
