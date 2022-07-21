import styles from "./styles/PrimaryButton.module.css";
import icon from "../images/icons/down-arrows.svg";

interface PrimaryButtonProps {
  text: string;
}

export default function PrimaryButton({
  text,
}: PrimaryButtonProps): JSX.Element {
  const handleClick = () => {
    console.log("i clicked the container!");
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.icon}>
        <img src={icon} alt="" className={styles.image}/>
      </div>
      <button className={styles.button}>{text}</button>
    </div>
  );
}
