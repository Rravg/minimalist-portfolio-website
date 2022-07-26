import { Link } from "react-router-dom";
import styles from "./styles/Navigation.module.css";

import leftArrow from "../../images/icons/arrow-left.svg";
import rightArrow from "../../images/icons/arrow-right.svg";

interface NavigationProps {
  next: string;
  previous: string;
}

export default function Navigation({ next, previous }: NavigationProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Link to={`/detail/${previous}`} className={styles.linkLeft}>
          <div className={styles.leftImage}>
            <img src={leftArrow} alt="" style={{ width: "fit-content" }} />
          </div>

          <div>
            <h3 className="h3" style={{ textAlign: "start", textTransform: "capitalize" }}>
              {previous}
            </h3>
            <p style={{ textAlign: "start", opacity: "0.5" }} className="body-1">
              Previous Project
            </p>
          </div>
        </Link>

        <Link to={`/detail/${next}`} className={styles.linkRight}>
          <div className={styles.rightImage}>
            <img src={rightArrow} alt="" style={{ width: "fit-content" }} />
          </div>

          <div>
            <h3 className="h3" style={{ textAlign: "end", textTransform: "capitalize" }}>
              {next}
            </h3>
            <p style={{ textAlign: "end", opacity: "0.5" }} className="body-1">
              Next Project
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
