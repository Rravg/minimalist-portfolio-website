import styles from "./styles/Header.module.css";
import logo from "../images/logo.svg";
import hamburger from "../images/icons/hamburger.svg";
import close from "../images/icons/close.svg";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Header(): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleClick = () => {
    setClicked((current) => {
      return !current;
    });
  };

  const linkClick = () => {
    setClicked(false);
  };
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div style={{ cursor: "pointer" }}>
          <img src={logo} alt="" />
        </div>
        {(!isMobile || clicked) && (
          <nav id="topnav" className={styles.nav}>
            <Link to="/" className={styles.item} onClick={linkClick}>
              HOME
            </Link>
            <Link to="/portfolio" className={styles.item} onClick={linkClick}>
              PORTFOLIO
            </Link>
            <Link to="/contact" className={styles.item} onClick={linkClick}>
              CONTACT ME
            </Link>
          </nav>
        )}
        {isMobile && (
          <button
            onClick={handleClick}
            aria-label="Menu"
            aria-expanded={clicked ? "true" : "false"}
            className={styles.menu}
          >
            <img src={clicked ? close : hamburger} alt="hamburger" />
          </button>
        )}
      </div>
    </header>
  );
}
