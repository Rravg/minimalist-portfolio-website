import styles from "./styles/SecondaryButton.module.css";

interface SecondaryButtonProps {
  text: string;
}

export default function SecondaryButton({
  text,
}: SecondaryButtonProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{text}</button>
    </div>
  );
}
