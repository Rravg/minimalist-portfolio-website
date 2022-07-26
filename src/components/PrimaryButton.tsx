import styles from "./styles/PrimaryButton.module.css";
import icon from "../images/icons/down-arrows.svg";
import { HashLink } from "react-router-hash-link";

interface PrimaryButtonProps {
  text: string;
  href: string;
}

export default function PrimaryButton({ text, href }: PrimaryButtonProps): JSX.Element {
  const handleClick = () => {
    console.log("i clicked the container!");
  };
  return (
    <div style={{ width: "fit-content" }}>
      <HashLink className={styles.container} onClick={handleClick} to={href}>
        <div className={styles.icon}>
          <img src={icon} alt="" className={styles.image} />
        </div>
        <button className={styles.button}>{text}</button>
      </HashLink>
    </div>
  );
}
