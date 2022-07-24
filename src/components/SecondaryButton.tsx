import styles from "./styles/SecondaryButton.module.css";

interface SecondaryButtonProps {
  text: string;
  href: string;
}

export default function SecondaryButton({
  text,
  href,
}: SecondaryButtonProps): JSX.Element {
  return (
    <a className={styles.container} href={href}>
      <button className={styles.button}>{text}</button>
    </a>
  );
}
