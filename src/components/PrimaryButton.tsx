import styles from "./styles/PrimaryButton.module.css";
import icon from "../images/icons/down-arrows.svg";

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
      <a className={styles.container} onClick={handleClick} href={href}>
        <div className={styles.icon}>
          <img src={icon} alt="" className={styles.image} />
        </div>
        <button className={styles.button}>{text}</button>
      </a>
    </div>
  );
}
