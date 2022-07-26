import styles from "./styles/Detail.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
import Manage from "./Manage";
import Bookmark from "./Bookmark";
import Insure from "./Insure";
import Fylo from "./Fylo";

export default function Detail(): JSX.Element {
  let { id } = useParams();

  useEffect(() => {
    document.title = "Minimalist Portfolio | Project Details";
  }, []);

  return (
    <main className={styles.main}>
      {id === "manage" && <Manage />}
      {id === "bookmark" && <Bookmark />}
      {id === "insure" && <Insure />}
      {id === "fylo" && <Fylo />}
      <SectionThree />
    </main>
  );
}
