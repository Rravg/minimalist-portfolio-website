import { Link } from "react-router-dom";
import styles from "./styles/SecondaryButton.module.css";

interface SecondaryButtonProps {
  text: string;
  href: string;
}

export default function SecondaryButton({ text, href }: SecondaryButtonProps): JSX.Element {
  return (
    <Link className={styles.container} to={href}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
}
