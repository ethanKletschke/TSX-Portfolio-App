import styles from "./Header.module.css";

type headerProps = {
  children: string
}

export default function Header({ children }: headerProps) {
  return (
    <header className={styles.heading}>
      <h1>{children}</h1>
    </header>
  );
}
