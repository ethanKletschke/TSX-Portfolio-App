import styles from "./Header.module.css";

type headerProps = {
  children: React.ReactNode
}

export default function Header({ children }: headerProps) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  );
}
